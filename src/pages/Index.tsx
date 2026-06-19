import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ImageSlider from "@/components/ImageSlider";
import GameSection from "@/components/GameSection";
import CategoryIcon from "@/components/CategoryIcon";
import { games, getGamesByTag, getGamesByCategory, categories } from "@/data/games";
import { Link } from "react-router-dom";

const Index = () => {
  const sections = [
    { title: "Latest 3 Patti Games List", data: getGamesByTag("latest"), link: "/popular-apps" },
    { title: "Featured Games", data: getGamesByTag("featured"), link: "/popular-apps" },
    { title: "Recently Updated Games", data: getGamesByTag("recently-updated"), link: "/popular-apps" },
    { title: "Must-Have Games", data: getGamesByTag("must-have"), link: "/popular-apps" },
    { title: "Trending Games", data: getGamesByTag("trending"), link: "/popular-apps" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>All 3 Patti Games - Download Latest Teen Patti & 3 Card APK for Android</title>
        <meta name="description" content="Download the latest 3 Patti, Teen Patti, and 3 Card game APKs for Android. Find safe download links, reviews, and guides for all popular card games." />
      </Helmet>

      <ImageSlider />

      <p className="text-sm text-muted-foreground mb-4 font-bold">Latest 3 Patti Games APK Download</p>

      {sections.map((s) => (
        <GameSection key={s.title} title={s.title} games={s.data} moreLink={s.link} />
      ))}

      {categories.map((c) => (
        <GameSection
          key={c.slug}
          title={c.name}
          games={getGamesByCategory(c.slug)}
          moreLink={`/categories/${c.slug}`}
        />
      ))}

      <GameSection title="Editor's Choice" games={getGamesByTag("editors-choice")} moreLink="/popular-apps" />
    </Layout>
  );
};

export default Index;
