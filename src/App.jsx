import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const currTheme = localStorage.getItem('currTheme');

  const [theme, setTheme] = useState(currTheme ? currTheme : 'dark');
  useEffect(() => {
    localStorage.setItem('currTheme', theme);
  }, [theme]);

  return(
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Footer />
    </div>
  );
}

export default App
