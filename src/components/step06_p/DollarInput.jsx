import React from 'react';

function DollarInput({value, unit, onChange}) {
  return (
    <div>
      <input
        type='number'
        value={value}
        onChange ={(e) => onChange(e.target.value)}

        />
        <span> {unit} </span>

    </div>
  );
}

export default DollarInput;