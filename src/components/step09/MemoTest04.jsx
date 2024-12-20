import React, { useEffect, useState } from 'react';

function MemoTest04(props) {
  console.log("컴포넌트 호출")
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  const location = isKorea ? '한국' : '외국' ;

  // useEffect(() => {
  //   console.log ('useEffect 호출')
  // }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type='number' value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라 사람이 있나요</h2>
      <p>나라 : {location} </p>
      <button onClick={() => setIsKorea(!isKorea)}> 비행기 타자 </button>


    </div>
  );
}

export default MemoTest04;