import { Link } from "react-router-dom";
import "./assets/Css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-con dp-between">
          <div className="logo">
            <h4>Logo</h4>
          </div>
          <nav>
            <ul className="dp-align">
              <li>
                <Link className="link" to="/">Ana Səhifə</Link>
              </li>
              <li>
                <Link className="link" to="/vacancies">Vakansiyalar</Link>
              </li>
              <li>
                <Link className="link" to="/jobseekers">İş axtaranlar</Link>  
              </li>
            </ul>
          </nav>
          <div className="profile-side">
            <Link className="login-btn btn">Daxil ol</Link>  
            <Link className="register-btn btn">Qeydiyyat</Link>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
