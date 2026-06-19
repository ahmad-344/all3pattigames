import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

const AndroidPlatform = () => {
  return (
    <Layout>
      <Helmet>
        <title>Download Android 3 Patti Games APK | All 3 Patti Games</title>
        <meta name="description" content="Download all Android 3 Patti, Teen Patti, and card game APKs. Browse the complete collection of games available for Android devices." />
      </Helmet>
      <h1 className="text-xl font-bold mb-4">Download Android 3 Patti Games APK</h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </Layout>
  );
};

export default AndroidPlatform;
