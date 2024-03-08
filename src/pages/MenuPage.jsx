import Layout from "../Layout";
import "../styles/styles.css";

const MenuPage = () => {
  return (
    <Layout>
      <main className="menu-page-container">
        <section className="title-section">
          <h1>Meny</h1>
        </section>
        <section className="content-section">
          <section className="icons-section">
            <p className="add-icon"></p>
            <p className="add-icon"></p>
            <p className="add-icon"></p>
            <p className="add-icon"></p>
            <p className="add-icon"></p>
            <p className="add-icon"></p>
          </section>
          <section className="menu-items">
            <p>
              <span className="item-name">Bryggkaffe</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">Caffè Doppio</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">Cappuccino</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">Latte Macchiato</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">Kaffe Latte</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">Cortado</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
          </section>
          <section className="menu-item-price">
            <p>49 kr</p>
            <p>49 kr</p>
            <p>49 kr</p>
            <p>49 kr</p>
            <p>49 kr</p>
            <p>39 kr</p>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default MenuPage;
