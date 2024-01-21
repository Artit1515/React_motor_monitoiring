import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <h1>Monitor</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about-us">About Us</Link>
          </li>
          <li>
            <Link to="sign-in">Sign In</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
