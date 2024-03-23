import { useCallback, useEffect, useRef, useState } from 'react';
import './index.css';

export const App = () => {
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(4);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nums = '1234567890';
    const chars = '~!$%^&*()_+={[}]|;<,>.';
    let pass = '';
    let numCount = 0;
    let charCount = 0;
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
      if (num && numCount < 2) {
        pass += nums.charAt(Math.floor(Math.random() * nums.length));
        numCount++;
      }
      if (char && charCount < 2) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
        charCount++;
      }
    }
    setPassword(pass);
  }, [num, char, length, setPassword]);

  useEffect(() => generatePassword(), [num, char, length, generatePassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert(`Password copied to clipboard: ${password}`);
  };

  return (
    <div className='w-screen h-screen bg-[#222222] text-white py-3 flex justify-center items-center'>
      <div className='p-4 flex justify-center items-center flex-col bg-[#444444] rounded-md'>
        <h1 className='text-center text-4xl font-semibold mb-4'>Password Generator</h1>
        <div className='bg-[#8d8d8d] w-fit mx-auto p-4 rounded-md mb-4 space-y-2'>
          <div className='flex items-center'>
            <input type='text' className='outline-none text-black rounded-l-md px-3 py-1 w-full' defaultValue={password} ref={passwordRef} />
            <button className='bg-blue-400 px-3 py-1 cursor-pointer hover:bg-blue-500' onClick={copyPassword}>Copy</button>
            <button className='bg-red-400 rounded-r-md px-3 py-1 cursor-pointer hover:bg-red-500' onClick={generatePassword}>Reset</button>
          </div>
          <div className='flex gap-2 flex-col sm:flex-row'>
            <span className='flex items-center gap-1'>
              <label htmlFor='length'>Length:{length}</label>
              <input id='length' type='range' min={4} max={8} onChange={(e) => setLength(parseInt(e.target.value))} defaultValue={length} className='w-full' />
            </span>
            <span className='flex items-center gap-1'>
              <label htmlFor='numbers'>Numbers</label>
              <input id='numbers' type='checkbox' onChange={() => setNum(prev => !prev)} className='inline-block' />
            </span>
            <span className='flex items-center gap-1'>
              <label htmlFor='characters'>Characters</label>
              <input id='characters' type='checkbox' onChange={() => setChar(prev => !prev)} className='inline-block' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;