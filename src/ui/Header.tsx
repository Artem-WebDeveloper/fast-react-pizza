import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to={'/'}>Fast React Pizza Co.</Link>

      <p>Artem</p>
    </header>
  );
}

export default Header;
