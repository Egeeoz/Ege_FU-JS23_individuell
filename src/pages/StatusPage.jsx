import Layout from "../Layout";
import "../styles/statusPage.css";
import { Link } from "react-router-dom";

const StatusPage = () => {
  return (
    <Layout>
      <main className="status-page-container">
        <section className="statusPage-main-content">
          <section className="top-part">
            <p className="order-number">Ordernummer #12DV23F</p>
            <div className="drone-img"></div>
          </section>

          <section className="bottom-part">
            <h1 className="delivery-title">Din beställning är på väg!</h1>
            <p className="delivery-time">
              <span className="delivery-minutes">13</span> minuter
            </p>
          </section>

          <Link to="/" className="ok-button">
            Ok, cool!
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default StatusPage;
