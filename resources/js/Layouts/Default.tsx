import { useRemember } from '@inertiajs/react'

const DefaultLayout = ({ children }) => {
  const [counter, setCounter] = useRemember(0);

  return (
    <>
      <header>
        <h1>PDT RTBF Actus</h1>
        <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}

export default DefaultLayout;
