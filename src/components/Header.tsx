import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/games";
import CategoryIcon from "./CategoryIcon";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [platOpen, setPlatOpen] = useState(false);

  return (
    <header>
      <div className="bg-header-bar h-1" />
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between h-12 sm:h-14">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" fetchPriority="high" />
            <span className="text-lg sm:text-xl font-bold italic text-primary">GamesAPK</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
              >
                Categories <ChevronDown size={14} />
              </button>
              {catOpen && (
                <div
                  className="absolute top-full left-0 bg-card border border-border rounded-md shadow-lg py-1 z-50 min-w-[200px]"
                  onMouseEnter={() => setCatOpen(true)}
                  onMouseLeave={() => setCatOpen(false)}
                >
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/categories/${c.slug}`}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                      onClick={() => setCatOpen(false)}
                    >
                      <CategoryIcon type={c.slug} /> {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors cursor-pointer">
                Platforms <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 bg-card border border-border rounded-md shadow-lg py-1 z-50 min-w-[150px] hidden group-hover:block">
                <Link to="/platforms/android" className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-secondary">
                  <CategoryIcon type="android" /> Android
                </Link>
              </div>
            </div>
            <Link to="/favorites" className="text-foreground hover:text-primary transition-colors">Favorites</Link>
            <Link to="/pages/contact-us" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-1.5" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-3 py-2 space-y-0.5">
            <Link to="/" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
            <div className="py-1 text-sm font-medium">
              <button className="flex items-center gap-1 w-full py-1" onClick={() => setCatOpen(!catOpen)}>
                Categories <ChevronDown size={14} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>
              {catOpen && (
                <div className="mt-1 space-y-0.5">
                  {categories.map((c) => (
                    <Link key={c.slug} to={`/categories/${c.slug}`} className="flex items-center gap-2 py-1.5 text-sm ml-2" onClick={() => setMobileOpen(false)}>
                      <CategoryIcon type={c.slug} /> {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="py-1 text-sm font-medium">
              <button className="flex items-center gap-1 w-full py-1" onClick={() => setPlatOpen(!platOpen)}>
                Platforms <ChevronDown size={14} className={`transition-transform ${platOpen ? "rotate-180" : ""}`} />
              </button>
              {platOpen && (
                <div className="mt-1 ml-2">
                  <Link to="/platforms/android" className="flex items-center gap-2 text-sm py-1.5" onClick={() => setMobileOpen(false)}>
                    <CategoryIcon type="android" /> Android
                  </Link>
                </div>
              )}
            </div>
            <Link to="/favorites" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Favorites</Link>
            <Link to="/pages/contact-us" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
