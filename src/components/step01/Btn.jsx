import { Button } from '@mui/material';
import React from 'react';

// 선언식
// function Btn({ name }) {
//     return (
//         <Button variant='contained'
//             onClick={() => console.log(name)}>{name}</Button>
//     );
// }
// 표현식
// const Btn = ({ name }) => (
//     <Button variant='contained'
//         onClick={() => console.log(name)}>{name}</Button>
// )

const handleEvent = (name, e) => (
  console.log(name, e)
)

const Btn = ({name}) => (
  <Button variant='contained'
      onClick={(e) => handleEvent(name,e)}
      >{name}</Button>

)

export default Btn;