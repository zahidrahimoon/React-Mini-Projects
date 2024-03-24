import { useState } from 'react';
import './index.css';

const App = () => {
  const [Color, setColor] = useState('Olive');

  const colors = [
    { name: 'Green', color: 'green' },
    { name: 'Blue', color: 'blue' },
    { name: 'Red', color: 'red' },
    { name: 'Yellow', color: 'yellow' },
  ];

  return (
    <div className='h-screen w-full flex items-center justify-center gap-4 transition-colors duration-300' style={{ backgroundColor: Color }}>
      {colors.map((colorObj) => (
        <button
          key={colorObj.name}
          className={`bg-${colorObj.color}-600 rounded p-[1rem] text-white outline-none`}
          onClick={() => {
            setColor(colorObj.color);
          }}
        >
          {colorObj.name}
        </button>
      ))}
    </div>
  );
};

export default App;