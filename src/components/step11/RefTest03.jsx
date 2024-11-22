import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {
  const [count, setCount] = useState(0); // 몇 번 눌렀냐를 기억하려고 씀
  const [count2, setCount2 ] = useState(0);
  const randerCount = useRef(0);

  // 방법1
  // randerCount.current = randerCount.current + 1;
  // console.log('렌더링 수 : ', randerCount.current)

  // 의존성 배열이 없는 경우 : 렌더링 될 때 마다 실행된다. (위에 같은 것 )
  // 그러나 의존성 배열을 주면 골라서

  useEffect(()=>{
    randerCount.current = randerCount.current + 1;
    console.log('렌더링 수 : ', randerCount.current)

  });

  return (
    <div>
      <p>State: {count} </p>
        <button onClick={() => setCount(count + 4)}>State 올려</button>
        <button onClick={() => setCount2(count2 + 3)}>State 올려</button>
    </div>
  );
}

export default RefTest03;