import React, { useMemo, useState } from 'react';

// useMemo는 컴포넌트가 다시 렌더링 될 때 연산의 재계산을 방지하여 성능을 최적화 하기 위해 사용
// useMemo를 사용하면 불필요한 연산을 피하면서 상태 업데이터를 처리할 수 있음
// 사용용도 : 불필요한 연산을 캐싱하고 싶을 때, 참조값 비교로 인해 불필요한 렌더링 방지
// 두 개의 인수를 받는데 첫번째 인수는 캐싱하고 싶은 계산 (함수)
//                      두번째 인수는 계산이 다시 실행될 조건 (의존성 배열)


function MemoTest01(props) {
  // () => {}
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("컴포넌트 렌더링")

  // useMemo가 없으면 텍스트 입력할 때 마다 계산을 해야한다.
  const expensiveValue = useMemo(() => {
    console.log("useMemo 처리")
    return count + 1000;
  }, [count])

  return (
    <div>
      <h1>useMemo exem</h1>
      {/* <p> 연산값 : {expensiveValue} </p>
      <button onClick={() => setCount(count + 1)}> 클릭 </button> */}


      <p> 연산값 : {expensiveValue} </p>
      <p> Typed Text : {text} </p>
      <button onClick={() => setCount((prev) => prev + 1)}> 클릭 </button>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}

      />


    </div>
  );
}

export default MemoTest01;