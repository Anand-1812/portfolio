import './Navbar.css';
import searchIconLight from '../../assets/search-w.png';
import searchIconDark from '../../assets/search-b.png';
import toggleLight from '../../assets/night.png';
import toggleDark from '../../assets/day.png';

function Navbar({ theme, setTheme }) {
  const toggleMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const searchIcon = theme === 'dark' ? searchIconDark : searchIconLight;
  const toggleIcon = theme === 'dark' ? toggleDark : toggleLight;

  return (
    <div className="navbar">
      <h1>Anand Kumar</h1>
      <div className='link'>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>
      <div className='right'>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <img
          src={toggleIcon}
          alt="Toggle Theme"
          className="navbar-theme-toggle"
          data-testid="theme-toggle"
          onClick={toggleMode}
        />
      </div> 
    </div>
  );
}

export default Navbar;

