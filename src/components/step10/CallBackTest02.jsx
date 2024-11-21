import React, { useEffect, useState } from 'react';

function CallBackTest02(props) {
  const [number, setNumber] = useState(0);
  
  // useEffect에서 input에서 증가/감소 클릭할 때마다 리렌더링이 되면서
  // someFunction의 함수 주소값이 새로 생성되면서 변경된 것을 감지한다.
  // const someFunction = () => {
  //   console.log(`someFunc : number : ${number}`);
  //   return ;
  // }
  
  const someFunction = () => {
    console.log(`someFunc : number : ${number}`);
    return ;
  }


  // 렌더링될 때마다 주소값이 바뀌기 때문에ㅔㅔ
  // 이펙트는 []가 변경된 걸 감지함
 useEffect(() => {
    console.log("someFunc 변경 되었네요")
  }, [someFunction])

  return (
    <div>
      <input type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>someFunction 함수 호출 </button>

    </div>
  );
}

export default CallBackTest02;
