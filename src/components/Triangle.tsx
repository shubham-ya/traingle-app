import React, { useState } from 'react';

const Triangle: React.FC = () => {
  const [base, setBase] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [area, setArea] = useState<number | null>(null);

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBase(value);
    calculateArea(value, height);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setHeight(value);
    calculateArea(base, value);
  };

  const calculateArea = (base: number, height: number) => {
    if (base > 0 && height > 0) {
      setArea(0.5 * base * height);
    } else {
      setArea(null);
    }
  };

  return (
    <div>
      <h2>Triangle Area Calculator</h2>
      <div>
        <label>
          Base:
          <input type="number" value={base} onChange={handleBaseChange} />
        </label>
        <label>
          Height:
          <input type="number" value={height} onChange={handleHeightChange} />
        </label>
      </div>
      <button onClick={() => calculateArea(base, height)}>Calculate Area</button>
      {area !== null && <p>Area: {area}</p>}
      <svg width="100%" height="200" viewBox="0 0 200 200">
        <polygon
          points={`0,${height} ${base},${height} 0,0`}
          style={{ fill: 'lightblue', stroke: 'blue', strokeWidth: 1 }}
        />
      </svg>
    </div>
  );
};

export default Triangle;
