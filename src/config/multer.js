import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

import { extname, resolve } from "node:path";




export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      return cb(null, uuidv4() + extname(file.originalname));
    },
  }),
}