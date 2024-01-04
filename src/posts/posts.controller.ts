import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Controller, Get, Post, Body, Param, Query, Req } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostInput } from './dto/createPost.input';
import { PostOrder } from './dto/post-order.input';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private prisma: PrismaService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Req() req, @Body() createPostInput: CreatePostInput) {
    console.log('userId', req);
    return this.prisma.post.create({
      data: {
        published: true,
        title: createPostInput.title,
        content: createPostInput.content,
        authorId: req.user.id, // `authorId`는 `string` 타입으로 제공됩니다.
      },
    });
  }

  @Get('published')
  async getPublishedPosts(
    @Query('after') after: string,
    @Query('before') before: string,
    @Query('first') first: number,
    @Query('last') last: number,
    @Query('query') query: string,
    @Query('orderBy') orderBy: PostOrder,
  ) {
    const paginationArgs = { after, before, first, last };

    const postsConnection = await findManyCursorConnection(
      (args) =>
        this.prisma.post.findMany({
          include: { author: true },
          where: {
            published: true,
            ...(query && { title: { contains: query, mode: 'insensitive' } }),
          },
          orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : undefined,
          ...args,
        }),
      () =>
        this.prisma.post.count({
          where: {
            published: true,
            ...(query && { title: { contains: query, mode: 'insensitive' } }),
          },
        }),
      paginationArgs,
    );

    return postsConnection;
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
