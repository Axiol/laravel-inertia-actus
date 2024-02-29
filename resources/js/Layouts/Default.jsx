import { useRemember } from '@inertiajs/react'

const DefaultLayout = ({ children }) => {
  const [counter, setCounter] = useRemember(0);

  return (
    <>
      <header className='max-w-screen-md mx-auto mb-5'>
        <h1 className='text-3xl font-bold underline'>PDT RTBF Actus</h1>
        <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
      </header>
      <main className='max-w-screen-md mx-auto'>
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
