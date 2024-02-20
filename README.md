### **프로젝트 명**: 파인 마켓 (당근마켓 클론)

![chrome_61HkvTxx4T](https://github.com/zerosial/Pinemarket_React_Frontend/assets/97251710/140f5219-d450-4026-800a-59db3acde328)


[WEB](https://pinemarket.cielui.com/web) : https://pinemarket.cielui.com/web

[API_END_POINT](https://pinemarket.cielui.com) : https://pinemarket.cielui.com

[SWAGGER](https://pinemarket.cielui.com/docs) : https://pinemarket.cielui.com/docs


### 1. 서론

**팀 소개 및 프로젝트 개요**

- 팀원: 유진(프론트엔드), 낙준(프론트엔드), 승훈(풀스택)
- 프로젝트 목적:  기술 습득 및 향상을 위한 미니 프로젝트
- 동기: 당근마켓의 유저 인터페이스와 기능을 모델로 삼아, 현대적인 기술 스택을 활용하여 유사한 서비스를 제작

**프로젝트 선정 배경**

- UI의 단순함과 더불어 구현 목표였던 기능이 다수 존재
- 최신 프론트엔드 기술을 활용한 실제 프로젝트 경험 축적

### 2. 프로젝트 관리 및 협업 방법

**코드 리뷰 및 회의 스케줄**

- 코드 리뷰: 매주 월, 수, 금 오후 3시 PR 리뷰 및 머지
- 주간 회의: 매주 한 번, 시간 미정 (주로 수요일에 진행)

**Branch 및 Commit 규칙**

- Branch 명명 규칙: **`feature/[기능명]`**
- Commit 메시지 규칙: **`feat: [기능 설명]`** (한글 사용 가능)

### 3. 기술 스택 및 도구

**기술 스택 소개**
- 백엔드
    
    # 코어
    
    ### Nest.js
    
    - **장점**: Angular와 유사한 구조를 가진 Node.js 프레임워크로, 타입스크립트 지원, 효율적인 코드 조직, 모듈화 촉진.
    - **적용법**: 모듈, 컨트롤러, 서비스를 사용하여 RESTful API를 구성하고, 의존성 주입을 활용하여 유연성 및 테스트 용이성 제공.
    
    ### Prisma
    
    - **장점**: 타입스크립트 지원 ORM, 간편한 데이터베이스 스키마 마이그레이션 및 쿼리 구성.
    - **적용법**: **`schema.prisma`** 파일에서 데이터 모델을 정의하고, Prisma 클라이언트를 사용하여 데이터베이스와의 상호 작용을 쉽게 함.
    
    # DB
    
    ### PostgreSQL
    
    - **장점**: 강력한 오픈 소스 객체 관계형 데이터베이스 시스템, 복잡한 쿼리, 대용량 데이터 처리에 적합.
    - **적용법**: 데이터 저장, 검색, 관리를 위해 Prisma와 함께 사용하여 데이터 무결성 및 보안 유지.
    
    # 문서
    
    ### Swagger
    
    - **장점**: API 설계, 빌드, 문서화, 테스트를 위한 오픈 소스 프레임워크. 사용자 친화적인 문서 자동 생성.
    - **적용법**: Nest.js 프로젝트에 Swagger 모듈을 통합하여 API 엔드포인트에 대한 문서를 자동으로 생성하고 관리.
    
    # 배포
    
    ### Docker
    
    - **장점**: 애플리케이션을 컨테이너화하여 환경에 구애받지 않는 일관된 개발, 배포, 실행을 가능하게 함.
    - **적용법**: 개발 환경을 Docker 컨테이너로 구성하고, Docker Compose를 사용하여 멀티 컨테이너 애플리케이션을 관리.

### 4. 프로젝트 주요 기능 및 개발 과정 (각 개발자)

**유진**

- 담당 기능: 메인 페이지와 검색 기능
- 개발 과정: 사용자 경험 중심의 디자인 및 캐싱 전략 구현, 재사용있는 컴포넌트 구현

**승훈**

- 담당 기능: 로그인/로그아웃, 헤더 및 푸터, 프로필 페이지, 백엔드 전반
- 개발 과정: 보안 강화 및 사용자 인터페이스 일관성 유지

**낙준**

- 담당 기능: 모달, 라우트 설정, 상세 페이지
- 개발 과정: 높은 퍼포먼스 유지를 위한 최적화 전략 구현


## Features

- GraphQL로 기본 설계된 코드
- Rest API 추가 (Controller.ts)
- 데이터베이스 모델링, 마이그레이션 및 타입 안전한 접근을 위한 [Prisma](https://www.prisma.io/)  (Postgres, MySQL & MongoDB 지원)
- 🔐 JWT Auth w/ [passport-jwt](https://github.com/mikenicholson/passport-jwt)
- REST API Swagger (전체 새로 추가) w/ [Swagger](https://swagger.io/)
- 필요에 따른 코드 변경 및 수정

## Prisma 설정

### 1. 의존성 설치

Nest 애플리케이션을 위한 의존성을 설치하세요.

```bash
# npm
npm install
# yarn
yarn install
```

### 2. Docker를 이용한 PostgreSQL
선택적 

Docker를 이용하여 개발 환경용 PostgreSQL을 설정합니다. [.env.example](./.env.example)을 복사하여 `.env`로 이름을 바꿉니다 - `cp .env.example .env` - 이는 `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`와 같은 PostgreSQL에 필요한 환경 변수를 설정합니다. 변수를 원하는 대로 업데이트하고 강력한 비밀번호를 선택하세요.

PostgreSQL 데이터베이스를 시작합니다.

```bash
docker-compose -f docker-compose.db.yml up -d
# 또는
npm run docker:db
```

### 3. Prisma Migrate

[Prisma Migrate](https://github.com/prisma/prisma2/tree/master/docs/prisma-migrate)는 데이터베이스의 스키마와 마이그레이션을 관리하는 데 사용됩니다. Prisma 데이터 소스는 PostgreSQL 데이터베이스에 연결하기 위한 환경 변수 `DATABASE_URL`을 필요로 합니다. Prisma는 루트의 [.env](./.env) 파일에서 `DATABASE_URL`을 읽습니다.

개발 환경에서 Prisma Migrate를 사용하여

1. `migration.sql` 파일 생성
2. 데이터베이스 스키마 업데이트
3. Prisma 클라이언트 생성

```bash
npx prisma migrate dev
# 또는
npm run migrate:dev
```

`migration.sql` 파일을 사용자 정의하려면 다음 명령어를 실행하세요. 사용자 정의 후 `npx prisma migrate dev`를 실행하여 적용합니다.

```bash
npx prisma migrate dev --create-only
# 또는
npm run migrate:dev:create
```

데이터베이스 변경 사항에 만족하면 [프로덕션 데이터베이스](https://www.prisma.io/blog/prisma-migrate-preview-b5eno5g08d0b#applying-migrations-in-production-and-other-environments)에 변경 사항을 배포하려면 `prisma migrate deploy`를 사용하여 대기 중인 모든 마이그레이션을 적용합니다. CI/CD 파이프라인에서도 사용할 수 있으며 프롬프트 없이 작동합니다.

```bash
npx prisma migrate deploy
# 또는
npm run migrate:deploy
```

### 4. Prisma: Prisma Client JS

[Prisma Client JS](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/api)는 데이터 모델을 기반으로 자동 생성되는 타입-안전한 데이터베이스 클라이언트입니다.

Prisma Client JS를 생성하려면 다음을 실행하세요.

> **참고**: [schema.prisma](prisma/schema.prisma)를 업데이트할 때마다 Prisma Client JS를 재생성하세요.

```bash
npx prisma generate
# 또는
npm run prisma:generate
```

### 5. 이 스크립트로 데이터베이스 데이터 씨딩

이 명령어로 스크립트를 실행하세요:

```bash
npm run seed
```

### 6. NestJS 서버 시작

개발 모드에서 Nest 서버를 실행하세요:

```bash
npm run start

# 감시 모드
npm run start:dev
```

프로덕션 모드에서 Nest 서버를 실행하세요:

```bash
npm run start:prod
```

**[⬆ 맨 위로](#overview)**


## GraphQL Playground

NestJS 서버를 위한 GraphQL Playground는 여기에서 사용할 수 있습니다: [GraphQL Playground](http://localhost:3000/graphql)


## Rest Api Swagger

[RESTful API](http://localhost:3000/api) 문서는 Swagger로 제공됩니다.

