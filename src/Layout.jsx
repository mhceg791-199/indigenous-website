import { Link, useLocation } from "react-router-dom";
import Footer from "./shared/Footer/Footer";
import { SidebarWithBurgerMenu } from "./shared/Navbar/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import logo from "./assets/logo/logo.webp";
import logo2 from "./assets/logo/logo2.webp";

function Layout({ children }) {
  const location = useLocation();
  const [inHomeTop, setInHomeTop] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setInHomeTop(scrollPosition < windowHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const navbarWhite = !isHome || !inHomeTop;
  return (
    <>
      <div
        className={`flex justify-between items-center px-2 md:px-10 fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          navbarWhite
            ? "bg-lightColor animationNavbar shadow-xl"
            : "bg-[rgba(0,0,0,0.5)]"
        }`}
      >
        <Link to="/" className="w-full">
          <img
            className="w-1/2 md:w-1/4 transition-all duration-300"
            src={navbarWhite ? logo : logo2}
            alt="Indigenous Mosaic"
          />
        </Link>
        <SidebarWithBurgerMenu inHomePage={!navbarWhite} />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
