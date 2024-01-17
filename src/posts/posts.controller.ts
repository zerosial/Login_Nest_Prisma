import { FileInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { PaginationQueryDto } from './dto/pagenation-query.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CustomRequest } from './dto/postRequest.dto';
import { ConfigService } from '@nestjs/config';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads', // 저장 위치
    filename: (req, file, cb) => {
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      cb(null, `${randomName}${extname(file.originalname)}`); // 파일명
    },
  }),
};

@Controller('posts')
export class PostsController {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Create a post with an image',
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        content: { type: 'string' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['title', 'file'],
    },
  })
  async createPost(
    @Req() req: CustomRequest,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // title과 content는 req.body에서 추출
    const { title, content } = req.body;
    const hostUrl = this.configService.get('MINIPC_DOMAIN');

    const imgUrl = file ? `${hostUrl}/uploads/${file.filename}` : null;
    return this.prisma.post.create({
      data: {
        published: true,
        title: title,
        content: content,
        imgUrl: imgUrl,
        authorId: req.user.id,
      },
    });
  }

  @Get('published')
  async getPublishedPosts(@Query() paginationQuery: PaginationQueryDto) {
    const page = paginationQuery.page;
    const limit = paginationQuery.limit;
    const query = paginationQuery.query;
    const orderBy = paginationQuery.orderBy;
    const direction = paginationQuery.direction;

    const offset = (page - 1) * limit;
    const posts = await this.prisma.post.findMany({
      skip: offset,
      take: limit,
      where: { published: true, title: { contains: query || '' } },
      orderBy: orderBy ? { [orderBy]: direction } : undefined,
    });

    const total = await this.prisma.post.count({
      where: { published: true, title: { contains: query || '' } },
    });

    return {
      data: posts,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  @Get(':userId/posts')
  async getUserPosts(@Param('userId') userId: string) {
    return this.prisma.user
      .findUnique({ where: { id: userId } })
      .posts({ where: { published: true } });
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    // 게시글과 함께 저자 정보를 가져옵니다
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }
}
