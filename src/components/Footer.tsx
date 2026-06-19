import { Link } from "react-router-dom";
import { categories } from "@/data/games";
import logo from "@/assets/logo.png";
import CategoryIcon from "./CategoryIcon";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-8">
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Mobile: Categories & Platforms compact sections */}
      <div className="lg:hidden mb-6 space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2 border-b border-border pb-2">
            <h3 className="font-bold text-sm">Categories</h3>
            <Link to="/categories/all" className="text-xs text-link hover:underline">All Categories »</Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((c) => (
              <Link key={c.slug} to={`/categories/${c.slug}`} className="flex items-center gap-2 text-sm py-1">
                <CategoryIcon type={c.slug} size="sm" /> {c.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2 border-b border-border pb-2">
            <h3 className="font-bold text-sm">Platforms</h3>
            <Link to="/platforms/android" className="text-xs text-link hover:underline">All Platforms »</Link>
          </div>
          <Link to="/platforms/android" className="flex items-center gap-2 text-sm py-1">
            <CategoryIcon type="android" size="sm" /> Android
          </Link>
        </div>
      </div>

      {/* Logo and description */}
      <div className="mb-6">
        <Link to="/" className="flex items-center gap-2 mb-3 no-underline" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="logo" width={32} height={32} className="h-8 w-8 rounded-lg" loading="lazy" />
          <span className="text-lg font-bold italic text-primary">GamesAPK</span>
        </Link>
        <p className="text-sm text-muted-foreground font-bold mb-1">
          Latest Teen Patti APK Download for Android – Updated 3 Patti Games
        </p>
        <p className="text-sm text-muted-foreground">
          Download the newest version of Teen Patti and 3 Patti games for Android devices. Secure APK files, updated features, improved gameplay, and optimized performance for a better online gaming experience.
        </p>
      </div>

      {/* 3-column grid: Pages, Categories, Platforms */}
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <h3 className="font-bold mb-2">Pages</h3>
          <div className="space-y-1.5">
            <Link to="/pages/about-us" className="block text-foreground hover:underline no-underline">About Us</Link>
            <Link to="/pages/privacy-policy" className="block text-foreground hover:underline no-underline">Privacy Policy</Link>
            <Link to="/pages/terms-conditions" className="block text-foreground hover:underline no-underline">Terms and Conditions</Link>
            <Link to="/pages/disclaimer" className="block text-foreground hover:underline no-underline">Disclaimer</Link>
            <Link to="/pages/contact-us" className="block text-foreground hover:underline no-underline">Contact Us</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Categories</h3>
          <div className="space-y-1.5">
            {categories.map((c) => (
              <Link key={c.slug} to={`/categories/${c.slug}`} className="block text-foreground hover:underline no-underline">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Platforms</h3>
          <div className="space-y-1.5">
            <Link to="/platforms/android" className="block text-foreground hover:underline no-underline">Android</Link>
          </div>
          <h3 className="font-bold mb-2 mt-4">Contact Admin</h3>
          <div className="space-y-1.5">
            <a href="https://t.me/AhmadGames344" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:underline no-underline">Telegram</a>
            <a href="https://wa.me/923122883976" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:underline no-underline">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} All Rights Are Reserved - <Link to="/" className="text-muted-foreground no-underline hover:text-foreground" style={{ textDecoration: 'none' }}>all3pattigames.com</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
