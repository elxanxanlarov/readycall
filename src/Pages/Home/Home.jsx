import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import "./assets/Css/Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="vacancies-card">
        <div className="vacancies-top">
          <div>
            <h4>Surucu</h4>
          </div>
        </div>
        <div className="vacancies-bottom">
          <div>
            <ul>
              <li>+ Mesulyetle</li>
              <li>+ 2 il tecrube</li>
              <li>+ Seliqeli</li>
            </ul>

            <div className="social-icons dp-align"> 
              <CiInstagram />
              <CiLinkedin />
              <FaFacebookSquare />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
