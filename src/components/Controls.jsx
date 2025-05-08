import React from 'react';

const Controls = ({
  generateArray,
  startSorting,
  sorting,
  arraySize,
  setArraySize,
  algorithm,
  setAlgorithm,
  speed,
  setSpeed,
  updateJavaCode,
}) => {
  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
    updateJavaCode();
  };

  
  return (
    <div className="bg-zinc-900 space-y-4 p-4 rounded-lg shadow-md">
      <div className="controls-row">
        <div className="control-group">
          <label className='flex flex-col gap-1 text-zinc-400'>
            Array Size
            <input
              type="range"
              min="5"
              max="100"
              value={arraySize}
              onChange={(e) => setArraySize(parseInt(e.target.value))}
              disabled={sorting}
            />
            <span>{arraySize}</span>
          </label>
        </div>

        <div className="control-group">
        <label className='flex flex-col gap-1 text-zinc-400'>
            Speed
            <input
              type="range"
              min="1"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value))}
              disabled={sorting}
            />
            <span>{speed}ms</span>
          </label>
        </div>

        <div className="control-group">
        <label className='flex flex-col gap-1 text-zinc-400'>
            Algorithm
            <select
                className='bg-zinc-700 border-none text-white p-2 rounded-md'
              value={algorithm}
              onChange={handleAlgorithmChange}
              disabled={sorting}
            >
              <option value="bubbleSort">Bubble Sort</option>
              <option value="selectionSort">Selection Sort</option>
              <option value="insertionSort">Insertion Sort</option>
              <option value="mergeSort">Merge Sort</option>
              <option value="quickSort">Quick Sort</option>
            </select>
          </label>
        </div>
      </div>

      <div className="controls-row">
        <button className='bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700' onClick={generateArray} disabled={sorting}>
          Generate New Array
        </button>
        <button className='bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700' onClick={startSorting} disabled={sorting}>
          Start Sorting
        </button>
      </div>
    </div>
  );
};

export default Controls;