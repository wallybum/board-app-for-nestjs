## Project Basic Structure
```
📦board-app-for-nestjs
 ┣ 📂src
 ┃ ┣ 📜app.controller.spec.ts
 ┃ ┣ 📜app.controller.ts
 ┃ ┣ 📜app.module.ts
 ┃ ┣ 📜app.service.ts
 ┃ ┗ 📜main.ts
 ┣ 📜.eslintrc.js // 특정한 규칙을 가지고 코드를 작성하게 도와주는 Libaray
 ┣ 📜.prettierrc // 코드 형식(작은따옴표(') 큰따옴표("), Indent 설정) 등 Code Formatter 역할 Libary
 ┣ 📜nest-cli.json // NestJS Project 설정을 위한 json 파일.
 ┣ 📜package.json // 디펜던시 라이브러리 종류 및 버전, 운영을 위한 Command 정보가 담긴 json 파일.
 ┣ 📜tsconfig.build.json // tsconfig.json의 확장개념. 빌드할 때 필요한 설정 / 불필요 파일명시하는 json 파일.
 ┗ 📜tsconfig.json // TypeScript 컴파일 방법에 대한 설정 json 파일.
```
