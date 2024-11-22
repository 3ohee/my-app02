import React, { useEffect, useId, useRef } from 'react';

function UseIdTest(props) {
  const id = useId();
  const age = useId();

  const inputRef = useRef();

  useEffect(() => {

    // 가져올 수 없다
    // const element = document.querySelector(id);
    // console.log(element);

    const element = inputRef.current;
    console.log(element);

  }, [])

  console.log(id);
  


  return (
    <div>
      <label htmlFor={id} > 이름 </label>
      <input id={id} ref={inputRef}/>
    </div>
  );                       
}

export default UseIdTest;