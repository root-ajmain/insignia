/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import Header from "../../Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? "Insignia | " + title : "Insignia"}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
