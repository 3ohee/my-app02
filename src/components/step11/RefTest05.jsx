import React, { useEffect, useRef } from 'react';

function RefTest05(props) {
  const inputRef = useRef();

  // 맨 처음 한번만 실행할 때는 의존성 배열이 [] 이다.
  useEffect(() => {
    inputRef.current.focus();    
  }, []);

  const login = () => {
    const inputValue = inputRef.current.value;
    alert(`${inputValue}님 환영합니다.`)
    inputRef.current.focus();
  }

  // 엔터 누를 때
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      login();
    }
  }

  return (
    <div>
      <input type='text'
        placeholder='userName'
        ref={inputRef}
        onKeyDown={handleKeyDown}  // 키 이벤트
      />
      <button onClick={login}> 로그인</button>
    </div>
  );
}

export default RefTest05;