import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'lisa@simpson.com',
      username: 'Lisa',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      role: 'USER',
      posts: {
        create: {
          title: 'Join us for Prisma Day 2019 in Berlin',
          content: 'https://www.prisma.io/day/',
          imgUrl:
            'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
          location: '서울시',
          published: true,
        },
      },
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'bart@simpson.com',
      username: 'Bart',
      role: 'ADMIN',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      posts: {
        create: [
          {
            title: '의자 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '의자 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청남도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '광주시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '부산시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '중고 상품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상남도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경기도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '서울시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '강원도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '책상 무료 나눔',
            content: '빠른 거래 원함',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '세종시',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '충청북도',
            published: true,
          },
          {
            title: '헤드폰 판매',
            content: '거래 희망',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '의자 구매',
            content: '새 제품',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '인천시',
            published: true,
          },
          {
            title: '자전거 판매',
            content: '상태 좋음',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대구시',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
          {
            title: '커피 머신 구매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '경상북도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '무료 배송',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라남도',
            published: true,
          },
          {
            title: '스마트폰 구매',
            content: '품질 보증',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '키보드 판매',
            content: '급처분',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '제주도',
            published: true,
          },
          {
            title: '중고 노트북 판매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '전라북도',
            published: true,
          },
          {
            title: '모니터 판매',
            content: '가격 협상 가능',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '대전시',
            published: true,
          },
          {
            title: '마우스 구매',
            content: '저렴한 가격',
            imgUrl:
              'https://pinemarket-api.cielui.com/uploads/fbf136b26146fc3c6f2dc27d3aecdecb.png',
            location: '울산시',
            published: true,
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
