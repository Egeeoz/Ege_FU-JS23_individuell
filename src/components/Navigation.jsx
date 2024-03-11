import { useState } from "react";
import "../styles/navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <nav className={`nav-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {/* Icon Content */}
      </nav>
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
