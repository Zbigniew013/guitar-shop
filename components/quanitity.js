import React from 'react';
import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

export function Quanitity() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1);
  };
  return (
    <div>
      <div className='mx-2 mt-6 w-1/2 lg:w-1/3 lg:mt-12 border border-fuchsia-blue-300'>
        <div className=' h-12 flex flex-row gap-8 items-center justify-center text-fuchsia-blue-500 text-2xl font-Antonio font-normal tracking-wider'>
          <div>
            <FiMinus onClick={handleDecrement} />
          </div>
          <div>{value}</div>
          <div>
            <FiPlus onClick={handleIncrement} />
          </div>
        </div>
      </div>
    </div>
  );
}
