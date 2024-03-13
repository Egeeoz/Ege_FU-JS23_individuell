import Layout from "../Layout";
import Cart from "../components/Cart";
import "../styles/menuPage.css";
import useStore from "../store";

const MenuPage = () => {
  const addToCart = useStore((state) => state.addToCart);
  const menuItems = [
    { name: "BryggKaffe", price: 49 },
    { name: "Caffè Doppio", price: 49 },
    { name: "Cappuccino", price: 49 },
    { name: "Latte Macchiato", price: 49 },
    { name: "Kaffe Latte", price: 49 },
    { name: "Cortado", price: 39 },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <Layout>
      <Cart />
      <main className="menu-page-container">
        <section className="title-section">
          <h1>Meny</h1>
        </section>
        <section className="content-section">
          <section className="icons-section">
            <p
              className="add-icon"
              id="add-1"
              onClick={() => handleAddToCart(menuItems[0])}
            ></p>
            <p
              className="add-icon"
              id="add-2"
              onClick={() => handleAddToCart(menuItems[1])}
            ></p>
            <p
              className="add-icon"
              id="add-3"
              onClick={() => handleAddToCart(menuItems[2])}
            ></p>
            <p
              className="add-icon"
              id="add-4"
              onClick={() => handleAddToCart(menuItems[3])}
            ></p>
            <p
              className="add-icon"
              id="add-5"
              onClick={() => handleAddToCart(menuItems[4])}
            ></p>
            <p
              className="add-icon"
              id="add-6"
              onClick={() => handleAddToCart(menuItems[5])}
            ></p>
          </section>
          <section className="menu-items">
            <p>
              <span className="item-name">{menuItems[0].name}</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">{menuItems[1].name}</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">{menuItems[2].name}</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">{menuItems[3].name}</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">{menuItems[4].name}</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
            <p>
              <span className="item-name">{menuItems[5].name}</span>
              <br />
              <span className="item-description">Bryggd på månadens bönor</span>
            </p>
          </section>
          <section className="menu-item-price">
            <p id="price-1">{menuItems[0].price} kr</p>
            <p id="price-2">{menuItems[1].price} kr</p>
            <p id="price-3">{menuItems[2].price} kr</p>
            <p id="price-4">{menuItems[3].price} kr</p>
            <p id="price-5">{menuItems[4].price} kr</p>
            <p id="price-6">{menuItems[5].price} kr</p>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default MenuPage;
