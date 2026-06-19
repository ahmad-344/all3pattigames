import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

const Favorites = () => {
  const [favIds, setFavIds] = useState<string[]>([]);

  useEffect(() => {
    const load = () => setFavIds(JSON.parse(localStorage.getItem("favorites") || "[]"));
    load();
    window.addEventListener("favoritesChanged", load);
    return () => window.removeEventListener("favoritesChanged", load);
  }, []);

  const favGames = games.filter((g) => favIds.includes(g.id));

  return (
    <Layout>
      <Helmet>
        <title>My Favorite Games | All 3 Patti Games</title>
        <meta name="description" content="View your saved favorite 3 Patti and Teen Patti games. Quick access to your preferred card games." />
      </Helmet>
      <h1 className="text-xl font-bold mb-4">My Favorites</h1>
      {favGames.length === 0 ? (
        <p className="text-muted-foreground text-sm py-10 text-center">
          No favorite games yet. Click the ❤️ Favorites button on any game page to save it here.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {favGames.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Favorites;
