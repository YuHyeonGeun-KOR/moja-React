import ReactDOM from "react-dom";

const App = () => {
  // return null;
  return <h1>안녕하세요!</h1>;
};

// ReactDOM -> render라는 함수 제공
// 첫번째 인수에는 render대상  , 두번째 인수에는 render위치를 지정

ReactDOM.render(<App />, document.getElementById("root"));
// 리액트 에서는 함수명을 HTML과 같이 태그로 감싸서 "컴포넌트"로 다룰 수 있다.
// 지정하고 있는 태그 = public > index.html > div 태그
