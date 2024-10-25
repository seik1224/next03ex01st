# 넥스트 14.2.4버전으로 진행

---

# 1. Section1

1. 블렌더에서 모델링을 .glb파일로 출력하여 화면에 뜨게 해보세요.

2. 모델 애니메이션을 스크롤에 따라 달라지게 해보세요.

   - idle2 :현재 섹션의 스크롤 0.05까지 (default 애니메이션)
   - WalkStanding : 현재 섹션의 스크롤 0.1까지
   - Run : 현재 섹션의 스크롤 0.5까지
   - AttackTackle : 현재 섹션의 스크롤 0.75까지
   - Faint : 나머지

3. 모델이 스크롤에 따라 움직이게 해보세요.

   - 처음 매우 가까이 위치
   - 뒤로 감
   - 앞으로 달려옴
   - 오른쪽으로 이동
   - 왼쪽으로 이동

4. 스크롤에 따라 텍스트가 나타났다가 사라지게 해보세요.

---

# 2. Section2

1. 배경색을 섹션에 따라 바뀌게 해보세요.

   - "#1c6c00","#003b8b","#8b0000"

2. 스크롤에 따라 텍스트가 나타났다가 사라지게 해보세요.

3. 블렌더에서 모델링을 .glb파일로 출력하여 화면에 뜨게 해보세요.

4. 모델을 3D공간 내에 배치하고 CameraController 컴포넌트를 이용하여 매 프레임마다 카메라의 현재 위치값을 가져와 목표위치로 부드럽게 이동하게 해주세요.
   - 모델 1위치 : 0, 0, 20
   - 모델 2위치 : 7, 0, 10
   - 모델 3위치 : -10, 0, 0

---

# 3. 나머지

- 다 하신 분들은 카메라 구도를 스크롤에따라 자유롭게 변경해보세요.
- 스크롤도 부드럽게 만들어보세요.

---

# 4. glb로딩

- 아래 코드는 GLTF로드에 따라 프로그레스바를 만드는 과정입니다. 아래 코드 참고하여 로딩 프로그레스를 완성해보세요.

```bash
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

useEffect(() => {
   const loader = new GLTFLoader();


   const loadModel = (path: string) => {
   return new Promise<GLTF>((resolve, reject) => {
      loader.load();
   });
   };

   Promise.all()
   .then(() => {
   })
   .catch(() => {
   });
}, []);
```

- const loader = new GLTFLoader();
  new GLTFLoader : Three.js 라이브러리, 파일을 로드하고 파싱하는 데 사용

- load메서드 : 이 메서드를 사용하여 실제로 GLTF 파일을 로드
  load(모델파일경로, 성공콜백함수, 진행상황콜백, 오류콜백함수)

- Promise.all : 여러개의 프로미스를 병렬로 처리하고 싶을 때 사용

```bash
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '완료');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, '완료']
});
```
