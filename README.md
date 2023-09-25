# 네스트 트레이닝

[목적]

<br>

-Interface파일과 Dto파일을 나누고, GET/POST 5개씩 만들어보기

-service로직을 조회하기 위해 먼저 interface 파일에서 각 키값들에 ?를 붙여 선택적 속성으로 변경함

-get(조회)을 할때 미리 변수에 값을 담은 뒤 return문에서 호출함.

-연습하는 단계이기에 폴더들을 만들지 않고 sports 폴더에서 다 처리

-GET 5개 // POST 5개씩 만들어보기

<br>

### 라이브러리 설치 목록

```bash
npm install @nestjs/config
npm install @nestjs/typeorm typeorm mysql2
npm install class-validator class-transformer
npm install typeorm-naming-strategies
```

<br>

### .prettierrc 설정

```bash
/* add options */
  "printWidth": 170,
  "tabWidth": 2,
```

<br>

### .eslintrc.js 설정

```bash
/* add rules */
'prettier/prettier': ['error', { printWidth: 170 }]
```
