import logo from './logo.svg';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './Context';
import { useEffect } from 'react';
function App() {
  
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className='loading'>
        <h1>loading</h1>
      </div>
    );
  }
  return (
    <>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}

export default App;
