### 설치
```
npm i -g @nestjs/cli
```

### 프로젝트 생성
```
nest new project-name
```

### 모듈 생성
아래 명령어를 이용하여 모듈 명과 같은 디렉토리와 모듈명.module.ts 파일이 생성된다.
```
    nest g module <모듈 명>
```
### 실행
개발자모드 실행, 디버그 모드실행은 package.json 파일 참조.
```
npm run start // 실행
npm run start:dev // 개발 모드 실행
npm run start:debug // 디버그 모드 실행
```

### Module
모듈은 @Modeule {} 데코레이터로 주석이 달린 클래스. @Module {} 데코레이터는 Nest가 애플리케이션 구조를 구성하는데 메타 데이터를 제공.

각 응용프로그램에는 하나 이상의 모듈(루트 모듈)이 있다.
루트 모듈은 Nest가 사용하는 시작점이다.

모듈은 밀점하게 관련된 기능 집합으로 구성 요소를 구성하는 효과적인 방법으로, 기능별로 만든다.(User Module, Order Module, Auth Module... )

같은 기능에 해당하는 것들은 하나의 모듈 폴더 안에 넣어서 사용한다.

모듈은 기본적으로 싱글톤이므로 여러 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있다.


