import React, { useState } from 'react';
import DollarInput from './DollarInput';
import DollarRadio from './DollarRadio';

function Dollar(props) {
  const [unit, setUnit] = useState("doller")
  const [x1, setmoney] = useState("")
  const convermoney = (unit === "doller")
    ? (x1 * 1300).toFixed(1)
    : (x1 / 1300).toFixed(1)


  return (
    <div>
      <h2>달러 / 원 변환기</h2>

      <p>변환 : {x1 ? convermoney : "-"}
        {unit === "won" ? "달러" : "원"}
      </p>

      <DollarInput
        value={ x1}
        unit={unit}
        onChange={setmoney}
        />

        <DollarRadio unit={unit}
          onUnitChange={setUnit} />


    </div>
  );
}

export default Dollar;