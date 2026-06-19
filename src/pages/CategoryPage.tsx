import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GameCard from "@/components/GameCard";
import { games, getGamesByCategory, categories } from "@/data/games";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const isAll = slug === "all";
  const category = categories.find((c) => c.slug === slug);
  const filtered = isAll ? games : getGamesByCategory(slug || "");
  const title = isAll ? "All Games" : category?.name || "Games";

  return (
    <Layout>
      <Helmet>
        <title>{title} - Download Latest APK for Android | All 3 Patti Games</title>
        <meta name="description" content={`Browse and download all ${title} APK for Android. Safe, verified download links for the latest versions.`} />
      </Helmet>
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {filtered.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </Layout>
  );
};

export default CategoryPage;
