import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';

function App() {
  const currTheme = localStorage.getItem('currTheme');

  const [theme, setTheme] = useState(currTheme ? currTheme : 'dark');
  useEffect(() => {
    localStorage.setItem('currTheme', theme);
  }, [theme]);

  return(
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App
