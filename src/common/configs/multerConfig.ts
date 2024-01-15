import { diskStorage } from 'multer';
import { extname } from 'path';

// multer 설정
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
