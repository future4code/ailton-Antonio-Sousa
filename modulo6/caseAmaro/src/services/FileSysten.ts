import * as path from "path";
import fs from "fs";

export class fileSysten {
    readFileJson(file: any) {
        try {
          let content = fs.readFileSync(file, "utf-8");
          return JSON.parse(content);
        } catch (error: any) {
          console.log("Erro ao carregar o arquivo.");
        }
      }
}