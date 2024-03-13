import { useState } from "react";
import "../styles/navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  // State for opening and closing nav
  const [isOpen, setIsopen] = useState(false);

  // Function to open the nav
  const toggleMenu = () => {
    setIsopen(!isOpen);
  };

  return (
    // Nav menu with links to other routes
    <>
      <nav
        // Contional classnames depending if the nav is open or not
        className={`nav-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></nav>
      {isOpen && (
        <div className="nav-menu">
          <button className="close-btn" onClick={toggleMenu}>
            ×
          </button>
          <ul>
            <li>
              <Link className="nav-link" to="/menu">
                Meny
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                Vårt Kaffe
              </Link>
            </li>
            <li>
              <Link className="nav-link">Min profil</Link>
            </li>
            <li>
              <Link className="nav-link" to="/status">
                Orderstatus
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
