import { useState } from 'react';
import './index.css';

const App = () => {
  const [color, setColor] = useState('Olive');

  return (
    <div className='h-screen w-full flex flex-wrap items-center justify-center gap-4 transition-colors duration-300' style={{ backgroundColor: color }}>
      <button
        className='bg-green-600 rounded p-[1rem] text-white outline-none'
        onClick={() => {
          setColor('green');
        }}
      >
        Green
      </button>
      <button
        className='bg-blue-600 rounded p-[1rem] text-white outline-none'
        onClick={() => {
          setColor('blue');
        }}
      >
        Blue
      </button>
      <button
        className='bg-red-600 rounded p-[1rem] text-white outline-none'
        onClick={() => {
          setColor('red');
        }}
      >
        Red
      </button>
      <button
        className='bg-yellow-600 rounded p-[1rem] text-white outline-none'
        onClick={() => {
          setColor('yellow');
        }}
      >
        Yellow
      </button>
    </div>
  );
};

export default App;
