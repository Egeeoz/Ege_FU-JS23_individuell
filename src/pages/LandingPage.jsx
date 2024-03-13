import "../styles/landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // Simple landing page
  return (
    <Link to="/menu">
      <section className="landing-page-background"></section>
    </Link>
  );
};

export default LandingPage;
