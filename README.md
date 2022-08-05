

hcs Front-End 
연동 금융사 리스트 만들기
이 수현
(yisuhyeon@naver.com / 010-6364-8931)

## 개발환경 
react ^18.2.0
## 실행방법
1. npm install
2. npm run start

## Todo 
### 기본 사항
- [ O ]: 모바일 Device 환경에 맞게 스타일이 적용되어야 합니다. 
- [o]: 리스트 정보는 list.json 파일을 불러오도록 합니다. 
- [o]: 금융사 이미지는 /images 폴더에 정리되어 있습니다. 
- [o]: 레이아웃의너비,높이,폰트사이즈등은별도로기입되어있지않습니다.이미지와 유사하게 구현해주시면 됩니다.
- [ ]: 브라우저에서 동작하여야 하며, HTML/SCSS/Vue.js/TypeScript를 사용해 개발합니다
    - [x]: SCSS, TypeScript
- [ ]: 동작은 HTML5를 지원하는 브라우저에서 크로스브라우징이 보장되어야 합니다.
    - [o]: late 1 Chrome ver, last 1 Safari ver
- [o]: 외부 라이브러리는 어느 것도 사용할 수 없습니다.(UI 라이브러리 사용 불가)
    - [ ]: Create-React-App 사용

### 요구사항
- [O]:  업권탭 : Slider 형태로 제공
- [X]:  전체 선택 : 전체 선택/해제 기능은 추천탭에서만 제공
- [x]:  금융사 리스트
    - [x]:  추천탭 - 업권별 그룹핑된 금융사 리스트, 업권탭 - 업권별 금융사 리스트
    - [x]:  금융사 선택시 색상 변경 및 state를 이용하여 선택된 금융사 정보 저장/삭제하도록 구현
- [x]:  금융사연동하기버튼:선택된금융사개수제공(선택된금융사가없을경우에는해당버튼비활성화)및 버선택시 선택된 금융사 리스트 출력 (출력 방식 무관)
- [x]:  인덱스
    - [x]:  한글부터 영문까지의 순서로 노출
    - [x]:  실제기관명에없는자음및알파벳은노출하지않음
    - [x]:  Press & Hold 상태에서 멈춘 위치의 자음 또는 알파벳 위치로 앵커 이동 되는 인터랙션 구현


### Specifications
- ContextAPI
    - State
        1. Slider Type: 업권별/이름순 
        2. Tap Type: 추천/은행/캐피탈/카드
        3. Selected List: 선택된 금융사 목록 -> FooterButton에 전달
    - App에 선언 후 컴포넌트를 Provider로 wrap 

