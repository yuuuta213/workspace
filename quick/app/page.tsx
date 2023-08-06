import Image from 'next/image';
import { useState } from 'react';


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">Welcome to my APP
      <div>
        <h2>Counters that update separately</h2>
        <MyButton />
        <MyButton />
      </div>
    </main>
  )
}
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

