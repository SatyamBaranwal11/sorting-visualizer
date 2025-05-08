import React, { useState, useEffect } from 'react';
import './App.css';
import ArrayVisualizer from './components/ArrayVisualizer';
import Controls from './components/Controls';
import CodeDisplay from './components/CodeDisplay';
import * as algorithms from "./algorithms/index.js";
import { JAVA_CODES } from './constants/javaCodes.js';

function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(20);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubbleSort');
  const [speed, setSpeed] = useState(50);
  const [javaCode, setJavaCode] = useState('');

  // Generate random array
  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 5);
    }
    setArray(newArray);
  };

  // Initialize array on mount and when size changes
  useEffect(() => {
    generateArray();
    updateJavaCode();
  }, [arraySize, algorithm]);

  // Update Java code when algorithm changes
  const updateJavaCode = () => {
    setJavaCode(JAVA_CODES[algorithm] || '');
  };

  // Start sorting
  const startSorting = async () => {
    setSorting(true);
    const algo = algorithms[algorithm];
    await algo(array, setArray, speed);
    setSorting(false);
  };

  return (
    <div className="app">
      <h1 className='text-2xl text-center mb-8 font-bold'>Sorting Algorithms Visualizer</h1>
      <div className="container">
        <Controls
          generateArray={generateArray}
          startSorting={startSorting}
          sorting={sorting}
          arraySize={arraySize}
          setArraySize={setArraySize}
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
          speed={speed}
          setSpeed={setSpeed}
          updateJavaCode={updateJavaCode}
        />
        <ArrayVisualizer array={array} />
        <CodeDisplay javaCode={javaCode} />
      </div>
    </div>
  );
}

export default App;