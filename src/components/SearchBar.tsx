import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { games } from "@/data/games";

const recommendedSearches = ["Ludo", "3 Card", "Teen Patti", "3 Patti"];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof games>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (val: string) => {
    setQuery(val);
    if (val.trim().length > 1) {
      const filtered = games.filter((g) =>
        g.name.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 8);
      setResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div className="mb-3 sm:mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Game Here"
          className="w-full border border-border rounded-md px-3 py-2 sm:px-4 sm:py-2.5 pr-10 sm:pr-12 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-primary"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length > 1 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        <button className="absolute right-0 top-0 h-full px-2.5 sm:px-3 bg-primary text-primary-foreground rounded-r-md">
          <Search size={16} />
        </button>
        {showResults && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-card border border-border rounded-b-md shadow-lg z-50 max-h-60 overflow-y-auto">
            {results.map((g) => (
              <button
                key={g.id}
                className="block w-full text-left px-3 sm:px-4 py-2 text-sm hover:bg-secondary"
                onMouseDown={() => { navigate(`/games/${g.id}`); setShowResults(false); setQuery(""); }}
              >
                {g.name} <span className="text-muted-foreground">— {g.developer}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 flex-wrap">
        <span className="text-xs text-muted-foreground">Recommended:</span>
        {recommendedSearches.map((s) => (
          <button
            key={s}
            className="bg-tag text-primary-foreground px-2.5 sm:px-3 py-0.5 rounded text-xs font-medium hover:opacity-90"
            onClick={() => { handleSearch(s); }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
