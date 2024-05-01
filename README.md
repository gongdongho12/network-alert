# Node TS WebPack

```
  _   _           _        _____ ____   __        __   _     ____            _    
 | \ | | ___   __| | ___  |_   _/ ___|  \ \      / /__| |__ |  _ \ __ _  ___| | __
 |  \| |/ _ \ / _` |/ _ \   | | \___ \   \ \ /\ / / _ \ '_ \| |_) / _` |/ __| |/ /
 | |\  | (_) | (_| |  __/   | |  ___) |   \ V  V /  __/ |_) |  __/ (_| | (__|   < 
 |_| \_|\___/ \__,_|\___|   |_| |____/     \_/\_/ \___|_.__/|_|   \__,_|\___|_|\_\
```

### Ready

의존성 모듈 설치

```bash
npm install
```

### How to run?

- `npm run dev`는 build + run (코드 수정하면서 실행해야 하는 경우 추천)
- `npm run build`는 build only
- `npm start`는 run only (다만 build 된 부분이 없으면 실행 불가)

```bash
npm run dev [runner 내 실행할 파일명]

# runner내 test.ts 실행
npm run dev test
```

### How to multiple run?

```bash
npm run dev [runner 내 실행할 파일명들...]

# ex) runner내 test1.ts test2.ts 순차 실행
npm run dev test1 test2
```

## Dev Dependency

- webpack
- typescript