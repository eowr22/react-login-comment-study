## 리액트 스터디 5주차 과제
### 로그인, 댓글 기능 만들기
#### 요구사항
#### Basic
- `로그인 & 로그아웃` 기능
    - 텍스트 인풋과 로그인 버튼이 존재
    - 임의의 텍스트 입력후 로그인 버튼 클릭시 ⇒ `로그인`
    - 로그인 상태인 경우 입력한 텍스트가 `유저 네임`으로 쓰이고 `로그아웃` 버튼이 나타남
    - 로그아웃 클릭시 다시 처음 상태로 전환
    - 댓글 목록 & 댓글 입력 기능
      - 로그인 상태에서만 입력 가능
    - 댓글은 유저이름, 댓글 내용, 작성시간이 나타난다.
      - 댓글에서 삭제 버튼은 로그인한 유저이름이 같은사람만 보인다. 삭제 기능은 로그인한 유저이름이 같은사람만 가능하다.
#### Hard
- 새로 고침해도 로그인을 유지 하기
- 만들어진 댓글은 30초가 지나면 사라지게 하기
