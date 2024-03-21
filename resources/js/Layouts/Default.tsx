import { useRemember } from '@inertiajs/react'
import React from 'react';
import { Button } from "@/Components/ui/button"

const DefaultLayout = ({ children }) => {
  const [counter, setCounter] = useRemember(0);

  return (
    <>
      <header className='max-w-screen-md mx-auto mb-5'>
        <h1 className='text-3xl font-bold underline'>PDT RTBF Actus</h1>
        <Button onClick={() => setCounter(counter + 1)}>Counter: {counter}</Button>
      </header>
      <main className='max-w-screen-md mx-auto'>
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
