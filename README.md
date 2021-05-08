<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">Level2 - 페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

### 🎯 Step1 요구사항

- [x] `Storybook` 상호 작용 테스트

#### 카드목록 구현

- [x] **보유 카드** 라는 문구가 상단에 위치해야한다.
- [x] 등록된 카드 목록이 보여진다.
- [x] 카드 추가 버튼이 있고, 누르면 카드 추가 컴포넌트가 보여진다.
      <br />

#### 카드 추가 구현

- [x] 카드 추가 컴포넌트가 렌더링됨과 동시에 카드 종류 선택 모달이 보여진다.
- [x] **카드 추가** 라는 문구가 상단에 위치해야한다.
- [x] 상단에 뒤로가기 버튼이 활성회되고, 누르면 카드목록 컴포넌트가 보여진다.
- [x] 아래 폼에 작성하는 내용이 카드 미리보기에 실시간으로 보여진다.
- [x] 카드 미리보기를 클릭하면 카드 종류 선택 모달이 보여진다.
- [x] 카드 종류를 선택하면 모달이 닫힌다.
- [x] 현재 입력 input 테두리에 색이 있다.(focus다

1. **카드 번호 입력**
   - [x] 카드번호 숫자 16자리중 뒤의 8자리는 `•` 로 숨김처리 된다.
   - [x] 카드번호 4자리마다 `-` 가 자동으로 보여진다.
   - [x] 카드번호 8자리 채워지면 키보드 모달이 자동으로 보여진다.
   - [x] 키보드 모달은 총 11개의 버튼이 있다. (0~9숫자, 지우기)
   - [x] 지우기 버튼은 고정, 숫자는 모달 열릴때마다 랜덤으로 배치된다.
   - [x] 카드번호 16자리 입력하거나, 지우기로인해 7자리 이하로 떨어지면 키보드 모달이 자동으로 닫힌다.
2. **만료일 입력**
   - [x] 만료일 숫자는 4자리 입력 가능하다.
3. **카드 소유자 이름 입력**

   - [x] 카드 소유자 이름은 입력하지 않아도 된다.
   - [x] 카드 소유자 이름은 `String`이어야 한다.

4. **보안 코드 입력**

   - [x] 보안 코드 숫자는 3자리 입력 가능하다.
   - [x] 보안 코드 입력 칸 오른쪽에 물음표 버튼이 있다.
   - [x] 물음표 버튼을 누르면 CVC 코드설명 모달이 보여진다.
   - [x] CVC 모달은 화면 아래에 뜬다.
   - [x] CVC 모달에는 보안카드 텍스트, 이미지, 확인버튼 내용이 있다.
   - [x] CVC 모달의 확인버튼을 누르면 모달이 닫힌다.

5. **카드 비밀번호 입력**
   - [x] 카드 비밀번호 입력칸 하나에는 0~9 사이의 숫자가 들어간다.
   - [x] 위의 입력 form이 다 입력되어야 다음버튼이 활성화 된다.
   - [x] 다음버튼을 누르면 카드추가완료 컴포넌트가 렌더링된다.

#### 다음 버튼을 누르면 입력값 유효성 검증을 수행한다.

- [x] 유효성 검증을 실패하면, 가장 먼저 에러가 발생한 입력칸에 붉은 테두리와 함께 바로 아래에 에러메세지가 뜬다.
- **카드번호를 덜 입력하셨어요! :(**
  - [x] 카드번호는 16자리를 입력해야한다.
  - [x] 카드번호는 `Number`이어야한다.
- **유효한 연월이 아니에요. :(**
  - [x] 월은 01 ~ 12 사이의 숫자만 허용된다.
  - [x] 년도는 올해 이상이여야 한다.
- **만료일이 정확하지 않아요. :(**
  - [x] 오늘 연월보다 유효한 이후 연월이여야 한다.
- **이름에 특수문자, 숫자, 30글자 이상의 글자는 작성할 수 없어요. :(**
  - [x] 카드 소유자 이름은 30글자 이하여야 한다.
- **CVC 코드를 덜 입력하셨어요! :(**
  - [x] CVC 번호는 3자리 입력해야한다.
  - [x] CVC 번호는 `Number`이어야한다.
- **카드 비밀번호를 덜 입력하셨어요! :(**
  - [x] 카드 비밀번호는 `Number`이어야한다.
  - [x] 카드 비밀번호는 input 당 한자리 숫자여야 한다.
- **이미 등록된 카드에요!**
  - [x] 보유카드 리스트 등록된 카드번호와 비교한다.

#### 카드추가 완료 구현

- [ ] 앞서 만든 카드에 대한 미리보기가 보여진다.
- [ ] 카드 이름을 등록할 수 있다.
- [ ] 카드 이름이 비어져있으면 확인버튼 활성화되지 않는다.
- [ ] 카드 이름은 중복되면 안된다.
- [ ] 확인버튼 누르면 보유카드 컴포넌트가 보여진다.

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-payments/issues)에 등록해주세요.
