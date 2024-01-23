import { FilesInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Req,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { PaginationQueryDto } from './dto/pagenation-query.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CustomRequest } from './dto/postRequest.dto';
import { ConfigService } from '@nestjs/config';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads', // 저장 위치
    filename: (req, file, cb) => {
      const date = new Date();
      const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      cb(null, `${formattedDate}-${randomName}${extname(file.originalname)}`); // 파일명
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
  @UseInterceptors(FilesInterceptor('files', 5, multerConfig))
  @ApiTags('POST API')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Create a post with multiple images',
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        content: { type: 'string' },
        location: { type: 'string' },
        price: { type: 'string' },
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
      required: ['title', 'files'],
    },
  })
  async createPost(
    @Req() req: CustomRequest,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    // title과 content는 req.body에서 추출
    const { title, content, location, price } = req.body;
    const hostUrl = this.configService.get('MINIPC_DOMAIN');

    const imgUrls = files.map((file) => `${hostUrl}/uploads/${file.filename}`);
    return this.prisma.post.create({
      data: {
        published: true,
        title: title,
        content: content,
        location: location,
        price: price,
        imgUrls: imgUrls,
        authorId: req.user.id,
      },
    });
  }

  @Get('list')
  @ApiTags('POST API')
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
  @ApiTags('POST API')
  @ApiParam({
    name: 'userId',
    description: '회원 id 입니다 (list에서는 authorId로 표시됩니다.)',
  })
  async getUserPosts(@Param('userId') userId: string) {
    return this.prisma.user
      .findUnique({ where: { id: userId } })
      .posts({ where: { published: true } });
  }

  @Get(':id')
  @ApiTags('POST API')
  @ApiParam({
    name: 'id',
    description: '게시글의 고유 id로 해당 게시글을 조회할 수 있습니다.',
  })
  async getPost(@Param('id') id: string) {
    // 게시글과 함께 저자 정보를 가져옵니다
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }
}
