import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="header">
      <h1>Tanstack Route</h1>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/news">News</Link>
      </div>
    </header>
  );
};

export default Header;
