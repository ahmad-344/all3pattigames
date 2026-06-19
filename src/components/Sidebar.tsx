import { Link } from "react-router-dom";
import { getPopularGames, getEditorsChoice, categories } from "@/data/games";
import GameCard from "./GameCard";
import CategoryIcon from "./CategoryIcon";

const Sidebar = () => {
  const popular = getPopularGames();
  const editors = getEditorsChoice().slice(0, 10);

  return (
    <aside className="space-y-4 sm:space-y-6">
      {/* Popular Games */}
      <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <h3 className="font-bold text-sm">Popular Games</h3>
          <Link to="/popular-apps" className="text-xs text-link hover:underline">More »</Link>
        </div>
        <div className="space-y-0.5 sm:space-y-1">
          {popular.map((g) => (
            <GameCard key={g.id} game={g} compact />
          ))}
        </div>
      </div>

      {/* Editor's Choice */}
      <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <h3 className="font-bold text-sm">Editor's Choice</h3>
          <Link to="/popular-apps" className="text-xs text-link hover:underline">More »</Link>
        </div>
        <div className="space-y-0.5 sm:space-y-1">
          {editors.map((g) => (
            <GameCard key={g.id} game={g} compact />
          ))}
        </div>
      </div>

      {/* Categories - desktop only */}
      <div className="bg-card border border-border rounded-lg p-3 sm:p-4 hidden lg:block">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <h3 className="font-bold text-sm">Categories</h3>
          <Link to="/categories/all" className="text-xs text-link hover:underline">All Categories »</Link>
        </div>
        <div className="space-y-1">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/categories/${c.slug}`}
              className="flex items-center gap-2 text-sm py-1.5 px-2 rounded-md hover:bg-secondary transition-colors"
            >
              <CategoryIcon type={c.slug} /> <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Platforms - desktop only */}
      <div className="bg-card border border-border rounded-lg p-3 sm:p-4 hidden lg:block">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <h3 className="font-bold text-sm">Platforms</h3>
          <Link to="/platforms/android" className="text-xs text-link hover:underline">All Platforms »</Link>
        </div>
        <Link to="/platforms/android" className="flex items-center gap-2 text-sm py-1.5 px-2 hover:bg-secondary rounded-md transition-colors">
          <CategoryIcon type="android" /> Android
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
