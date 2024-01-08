import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("App 렌더링");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  // const onClickReset = () =>{
  //   setNum(0);
  // }

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);
  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      {/* props로 함수 설정 */}
      <Child1 onClick={onClickReset} />
      <Child4 />
    </>
  );
});
