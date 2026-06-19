import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import CookieConsent from "./CookieConsent";

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://www.all3pattigames.com${pathname === "/" ? "" : pathname}`;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 py-3 sm:py-4 flex-1">
        <SearchBar />
        <div className={showSidebar ? "flex gap-4 sm:gap-6 flex-col lg:flex-row" : ""}>
          <main className={showSidebar ? "flex-1 min-w-0" : "w-full"}>
            {children}
          </main>
          {showSidebar && (
            <div className="w-full lg:w-72 flex-shrink-0">
              <Sidebar />
            </div>
          )}
        </div>
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
};


export default Layout;
