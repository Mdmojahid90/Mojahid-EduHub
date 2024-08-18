import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="section-header">
        <div className="navbar-container">
          <div className="logo">
            <NavLink to="/">
              <img src="./images/mojahidlogo2.png" alt="logo loading" />
            </NavLink>
          </div>
          <div className="navbar">
            <ul className="navlist">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
