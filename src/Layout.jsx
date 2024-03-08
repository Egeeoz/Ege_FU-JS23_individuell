import Navigation from "./components/Navigation";
import Cart from "./components/Cart";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Cart />
      <main>{children}</main>
    </>
  );
};

export default Layout;
