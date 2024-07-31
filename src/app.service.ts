import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>파인 마켓</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
          }
          a {
            color: #3498db;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>파인 마켓의 메인 도메인 입니다.</h1>
          <p><a href="https://pinemarket.cielui.com/docs" target="_blank">Swagger</a></p>
          <p><a href="https://pinemarket.cielui.com/web" target="_blank">Client</a></p>
        </div>
      </body>
      </html>
    `;
  }

  getErrorAuth(): any {
    return {
      code: '40100003',
      desc: '인증 실패 - CONFIRM KEY만료 ## ConfirmCode is not exist',
      msg: '인증 실패 - CONFIRM KEY만료',
      result: {},
    };
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}
