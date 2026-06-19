import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

const PopularGames = () => {
  const sorted = [...games].sort((a, b) => b.rating - a.rating || b.downloads - a.downloads);

  return (
    <Layout>
      <Helmet>
        <title>Popular Games - Download All 3 Patti & Teen Patti APK</title>
        <meta name="description" content="Browse all popular 3 Patti, Teen Patti, 3 Card, and Slot games. Download the latest APK versions for Android." />
      </Helmet>
      <h1 className="text-xl font-bold mb-4">Popular Games</h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {sorted.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </Layout>
  );
};

export default PopularGames;
