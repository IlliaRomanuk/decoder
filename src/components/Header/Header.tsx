import { Link } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import './Header.css';
import useTheme from '../../hooks/useTheme';
function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header>
      <Link className="logo" to="/">
        VIN Decoder
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/variables">Variables</Link>
          </li>
          <li>
            <DarkModeSwitch
              checked={theme === 'dark'}
              onChange={toggle}
              size={28}
              moonColor="#e5e7eb"
              sunColor="#f59e0b"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
