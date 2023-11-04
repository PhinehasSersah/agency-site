import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import { ContextProvider } from "./context/CartContext";

const Layout = ({ children }) => {
  return (
    <>
      <ContextProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ContextProvider>
    </>
  );
};

export default Layout;
