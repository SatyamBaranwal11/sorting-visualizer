import React from 'react';

const ArrayVisualizer = ({ array }) => {
  const maxValue = Math.max(...array, 1);

  return (
    <div className="w-full flex items-end justify-center gap-2 h-80 bg-zinc-900 p-4 rounded-lg shadow-md">
      {array.map((value, idx) => {
        const height = (value / maxValue) * 100;
        return (
          <div
            key={idx}
            className="array-bar"
            style={{
              height: `${height}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ArrayVisualizer;