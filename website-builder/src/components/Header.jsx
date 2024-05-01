import { FaHome } from "react-icons/fa";
import './Header.css';

const Header = () => {
  return (
    <header className="p-3 text-white d-flex" style={{ width: "90%", marginBottom: "2rem" }}>
      <div className="header-container ">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                <FaHome />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#5b506f", borderColor: "#e9ebee" }}>
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
