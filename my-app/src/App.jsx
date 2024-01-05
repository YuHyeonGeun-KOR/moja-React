import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
// 함수로 정의된 컴포넌트 -> 함수 컴포넌트
// 다른 파일엗서도 사용할 수 있게 export
export const App = () => {
  // state 정의 , 기본값 : 0  ,num : 상태를 가지는 변수 , setNum : 상태를 변화시키는 함수
  const [num, setNum] = useState(0);

  // return null;
  // 함수의 반환값으로 여러줄을 원할 경우 ()로 감싼다.

  //Did you want a JSX fragment <>...</>? 에러 발생 --> return 이후에는 하나의 tag
  // return (
  //   <h1>안녕하세요!</h1>
  //   <p>잘 지내시죠?</p>
  //   );

  const onClickButton = () => {
    alert();
    setNum((prev) => prev + 1);
  };

  return (
    // <> = 불필요한 DOM을 생성하지 않는다.
    // 자바스크립트에서 정의한 함수명을 할당할 때 -> {}
    // props를 사용하기 위해서 전달하는 컴포넌트와 전달 받는 컴포넌트 둘다 수정해야함
    <>
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
    </>
  );
};
