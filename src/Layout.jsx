import Navigation from "./components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      {/* Simple layout, only pages who has nav bar have layout */}
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
