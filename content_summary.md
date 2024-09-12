# 자바스크립트 정리

- 매개 변수
    사용자로 부터 받은 값을 임시적으로 저장하기 위한 도구
    여러개의 매개변수를 사용할 수 있다.
    단, 함수를 호출할 때 입력해 주는 입력값의 개수는 반드시 매개변수의 개수와 일치해야 한다.
- ex
    ```
    function plus(x) {
        console.log(x + 2)
    }
    plus(5)
    결과: 7
    ```
---

- 객체에 저장된 데이터 불러오기 
```
let id {
name: "병헌",
age: 40
}
불러오기
id["name"]
id.name 또는 id.age

객체에 새로운 값 추가하기
id.name = "테스트"
id.name["테스트"]
```


## JSON 

- 자바스크립트에서 사용하는 객체의 규격 
- json에 삽입할 수 있는 데이터의 종류 
    - 넘버, 스트링, 불리언, 배열, 객체, null 
    - json규격을 검사해주는 서비스 -> json formatter, json vaildator

---

- 이벤트 핸들러 
태그와 관계없이 js코드만으로 실행된다.
```
    <input type="button" value="click" onclick="alert('안녕하세요?')">
    <p onclick="alert('안녕하세요?')">클릭해보세요!</p>
```

- 인터널 방식의 js 코드 작성 
```
    <script>
        function red() {
            let button = document.querySelector("input")
            button.style.backgroundColor = "red"
        }
    </script>
    <input type="button" value="click" onclick="red()"/>
```

- 자바스크립트 코드 별도 파일로 분리
   가져오기
```
    <input />
    <script src="ex_1.js"></script>
```

- 비동기 처리 방식, 동기 처리 방식
  비동기 처리: 코드가 다 실행 된 후 js 코드를 실행 
  동기 처리: 하나의 작업이 끝나면 다음 명령 실행

- js코드 실행 위치 
 1. script태그 위치 아래로 옮기기 
 2. 인라인 이벤트 모델만 사용
 3. DOMContentLoaded 이벤트 사용
-----------------------------------------

- 요소의 속성 제어하기
입력창의 포커스 상실
keydown: 포커스가 상실되지 않는다
change: 포커스 상실

- setAtrribute 문법
element.setAttribute(name, value);
name: 설정할 속성의 이름을 문자열로 지정합니다.
value: 속성에 설정할 값을 문자열로 지정합니다.

- getAttribute
var value = element.getAttribute(name);
name: 값을 읽고자 하는 속성의 이름을 문자열로 지정합니다.
반환값: 해당 속성의 값을 문자열로 반환합니다. 
속성이 존재하지 않으면 null을 반환합니다.
