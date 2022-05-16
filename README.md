# :alarm_clock: Clone_Momentum [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

![image](https://user-images.githubusercontent.com/85853145/154610937-e69b7e0e-ca97-40c6-a804-876b64b69421.png)

## Summary / 요약

- **목적** : JavaScript 복습 및 기초 확인을 위해 참가.
- **프로젝트 기간** : 2022.02.06 - 2022.02.17
- **메인 개발 환경** : Html / CSS / JavaScript
- **배포** : [Clone_Momentum](https://kaydan95.github.io/Clone_Momentum/)

## Features / 특징..?

### 입맛대로 커스텀! :zany_face:

본 강의(챌린지)에서는 명언과 배경이미지를 분리하여 js 파일을 나누어 진행한다. 하지만 명언보다는 좋아하는 영화 대사를 하고 싶었기 때문에 명언부분을 영화 대사로 배경이미지를 해당 영화의 이미지로 나타내기 위해 quote.js 파일에서 동시에 진행했다. 즉 `--Math.random()` 을 사용하기 위한 배열에 이미지까지 함께 넣어 다음과 같이 간단하게 진행!

```javascript
const quotes = [
  {
    quote: "I'd like to tell you the story of the eyes that changed my world.",
    movie: "- I Origins (2014)",
    img: "iorigins.png",
  },
  {
    quote: "Are you trying to save my soul?",
    movie: "- The Fall (2006)",
    img: "thefall2.png",
  },
];
```

### JS 파일 분리..? :thinking:

니꼬쌤은 그냥 JS를 분리해서 하는게 편하다고 그렇게 진행했는데 뭔가 익숙하지 않다. 규모가 커지면 유지보수하기 편하긴 할듯....?! JS 파일 위치도 `<body>` 하단부에 위치 시켜야할지 아니면 `defer` 처리를 해서 `<head>` 부분에 위치 시켜야할지 계속 고민해보게 된다. 사실 script 파일 위치로 렌더링 문제를 고민하기엔 정말 별거아닌 작디 작은 소소한 프로젝트이지만 그냥 볼때마다 포트폴리오나 다른 프로젝트들 생각이 나서 계속 고민해보게 되는 것 같다.

### Github Page 로 배포 :relieved:

일단 챌린지 마지막이 배포하고 url 을 제출하는 거라 배포까지 완료! 내 API KEY 가 노출되는 부분은...gitignore 로 처리해볼까 했는데 제출할때만 공개해놓고 나중에 돌려야겠다.
