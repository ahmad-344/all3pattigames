import { useParams, Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Star, Download, ChevronRight, Flag } from "lucide-react";
import Layout from "@/components/Layout";
import ShareButtons from "@/components/ShareButtons";
import GameSection from "@/components/GameSection";
import { GameArticle } from "@/utils/generateArticle";
import { getGameBySlug, getGamesByCategory, DOWNLOAD_BASE_URL } from "@/data/games";
import useEmblaCarousel from "embla-carousel-react";

// Lazy load all article components
const articleLoaders: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "teen-patti-real": () => import("@/utils/teenPattiRealArticle").then(m => ({ default: m.TeenPattiRealArticle })),
  "teen-patti-best": () => import("@/utils/teenPattiBestArticle").then(m => ({ default: m.TeenPattiBestArticle })),
  "teen-patti-showy": () => import("@/utils/teenPattiShowyArticle").then(m => ({ default: m.TeenPattiShowyArticle })),
  "teen-patti-spin": () => import("@/utils/teenPattiSpinArticle").then(m => ({ default: m.TeenPattiSpinArticle })),
  "teen-patti-go": () => import("@/utils/teenPattiGoArticle").then(m => ({ default: m.TeenPattiGoArticle })),
  "teen-patti-mela": () => import("@/utils/teenPattiMelaArticle").then(m => ({ default: m.TeenPattiMelaArticle })),
  "teen-patti-elite": () => import("@/utils/teenPattiEliteArticle").then(m => ({ default: m.TeenPattiEliteArticle })),
  "teen-patti-gold-pro": () => import("@/utils/teenPattiGoldProArticle").then(m => ({ default: m.TeenPattiGoldProArticle })),
  "3-patti-pak": () => import("@/utils/threePattiPakArticle").then(m => ({ default: m.ThreePattiPakArticle })),
  "3-patti-new": () => import("@/utils/threePattiNewArticle").then(m => ({ default: m.ThreePattiNewArticle })),
  "teen-patti-fun": () => import("@/utils/threePattiFunArticle").then(m => ({ default: m.ThreePattiFunArticle })),
  "s9-pro-game": () => import("@/utils/s9ProGameArticle").then(m => ({ default: m.S9ProGameArticle })),
  "ludo-tiger": () => import("@/utils/ludoTigerArticle").then(m => ({ default: m.LudoTigerArticle })),
  "3-patti-online": () => import("@/utils/threePattiOnlineArticle").then(m => ({ default: m.ThreePattiOnlineArticle })),
  "3-patti-gold": () => import("@/utils/teenPattiGoldArticle").then(m => ({ default: m.TeenPattiGoldArticle })),
  "teen-patti-club": () => import("@/utils/teenPattiClubArticle").then(m => ({ default: m.TeenPattiClubArticle })),
  "3-patti-royal": () => import("@/utils/teenPattiRoyalArticle").then(m => ({ default: m.TeenPattiRoyalArticle })),
  "yalla-rummy": () => import("@/utils/yallaRummyArticle").then(m => ({ default: m.YallaRummyArticle })),
  "3-patti-sky": () => import("@/utils/teenPattiSkyArticle").then(m => ({ default: m.TeenPattiSkyArticle })),
  "card-rummy": () => import("@/utils/cardRummyArticle").then(m => ({ default: m.CardRummyArticle })),
  "teen-patti-star": () => import("@/utils/teenPattiStarArticle").then(m => ({ default: m.TeenPattiStarArticle })),
  "3-patti-union": () => import("@/utils/teenPattiUnionArticle").then(m => ({ default: m.TeenPattiUnionArticle })),
  "3-patti-fast": () => import("@/utils/teenPattiFastArticle").then(m => ({ default: m.TeenPattiFastArticle })),
  "joy-game-pro": () => import("@/utils/joyGameArticle").then(m => ({ default: m.JoyGameArticle })),
  "s9-plus-game": () => import("@/utils/s9PlusGameArticle").then(m => ({ default: m.S9PlusGameArticle })),
  "3-patti-blue": () => import("@/utils/teenPattiBlueArticle").then(m => ({ default: m.TeenPattiBlueArticle })),
  "3-patti-super": () => import("@/utils/teenPattiSuperArticle").then(m => ({ default: m.TeenPattiSuperArticle })),
  "3-patti-master": () => import("@/utils/teenPattiMasterArticle").then(m => ({ default: m.TeenPattiMasterArticle })),
};

const LazyArticle = ({ articleKey }: { articleKey: string }) => {
  const loader = articleLoaders[articleKey];
  if (!loader) return null;
  const Component = lazy(loader);
  return (
    <Suspense fallback={<div className="text-sm text-muted-foreground py-4">Loading article...</div>}>
      <Component />
    </Suspense>
  );
};

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug || "");
  const [showFullArticle, setShowFullArticle] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true });

  if (!game) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Game Not Found</h1>
          <Link to="/" className="text-link mt-4 inline-block">Go back to Home</Link>
        </div>
      </Layout>
    );
  }

  const screenshots = game.customScreenshots || [];
  const relatedGames = getGamesByCategory(game.categorySlug).filter((g) => g.id !== game.id);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const downloadUrl = game.customDownloadUrl || DOWNLOAD_BASE_URL;
  const shareUrl = game.customShareUrl || pageUrl;
  const gameIcon = game.customLogo!;
  const metaTitle = game.metaTitle || `${game.name} APK Download - Latest Version ${game.version} | All 3 Patti Games`;
  const metaDesc = game.metaDescription || `Download ${game.name} APK v${game.version} for Android. ${game.shortDescription} Rated ${game.rating}/5 with ${game.reviews} reviews.`;

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
      </Helmet>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4 flex-wrap">
        <Link to="/" className="text-link hover:underline">Home</Link>
        <ChevronRight size={12} />
        <Link to={`/categories/${game.categorySlug}`} className="text-link hover:underline">{game.category}</Link>
        <ChevronRight size={12} />
        <span>Android</span>
        <ChevronRight size={12} />
        <span className="text-foreground">{game.name}</span>
      </nav>

      {/* Game header */}
      <div className="bg-card border border-border rounded-lg p-4 mb-4">
        <div className="flex items-start gap-4">
          <img src={gameIcon} alt={`${game.id}-logo`} width={80} height={80} className="w-20 h-20 rounded-2xl object-cover" />
          <div className="min-w-0">
            <h1 className="text-xl font-bold">{game.name} Game APK</h1>
            <p className="text-sm text-muted-foreground">
              {game.version} by <span className="text-link">{game.developer}</span>
            </p>
            <div className="flex items-center gap-2 text-sm mt-1">
              <div className="flex items-center gap-1">
                <Star size={14} className="text-star fill-current" />
                <span>{game.rating}/5</span>
              </div>
              <span className="text-muted-foreground">👤 ({game.reviews.toLocaleString()} Reviews)</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{game.updateDate}</p>
          </div>
        </div>

        <ShareButtons url={shareUrl} title={`${game.name} APK Download`} gameId={game.id} />

        {/* Screenshots */}
        <div className="mt-4">
          <div ref={emblaRef} className="overflow-hidden rounded-lg">
            <div className="flex gap-2">
              {screenshots.map((src, i) => (
                <div key={i} className="flex-[0_0_48%] sm:flex-[0_0_32%] min-w-0">
                  <img src={src} alt={`${game.id}-ss-${i + 1}`} width={300} height={192} className="w-full h-36 sm:h-48 object-cover rounded-lg" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game details table */}
        <div className="mt-6">
          <h2 className="font-bold text-base mb-3">Latest Version</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div><span className="text-muted-foreground">Version</span><p className="font-medium">{game.version}</p></div>
            <div><span className="text-muted-foreground">Update</span><p className="font-medium">{game.updateDate}</p></div>
            <div><span className="text-muted-foreground">Developer</span><p className="font-medium text-link">{game.developer}</p></div>
            <div><span className="text-muted-foreground">Categories</span><p><Link to={`/categories/${game.categorySlug}`} className="font-medium text-link">{game.category}</Link></p></div>
            <div><span className="text-muted-foreground">Platforms</span><p className="font-medium text-link">Android</p></div>
            <div><span className="text-muted-foreground">File Size</span><p className="font-medium">{game.fileSize}</p></div>
            <div><span className="text-muted-foreground">Downloads</span><p className="font-medium">{game.downloads.toLocaleString()}</p></div>
            <div><span className="text-muted-foreground">Package Name</span><p className="font-medium text-xs">{game.packageName}</p></div>
            <div><span className="text-muted-foreground">Report</span><Link to={`/pages/report-problem?game=${encodeURIComponent(game.name)}`} className="flex items-center gap-1 text-link cursor-pointer text-xs"><Flag size={12} /> Report a Problem</Link></div>
          </div>
        </div>

        {/* Download button */}
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-download text-primary-foreground py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
        >
          <Download size={18} /> Download Game APK ({game.fileSize})
        </a>

        {/* Article */}
        <div className="mt-6">
          <h2 className="font-bold text-base mb-3">More About {game.name}</h2>
          <div className={`relative ${!showFullArticle ? "overflow-hidden" : ""}`} style={!showFullArticle ? { maxHeight: "30em" } : undefined}>
            <div className="text-sm leading-[1.5em]">
              {game.customArticle ? <LazyArticle articleKey={game.customArticle} /> : <GameArticle game={game} />}
            </div>
          </div>
          {!showFullArticle && (
            <button
              onClick={() => setShowFullArticle(true)}
              className="text-link text-sm font-medium mt-2 hover:underline"
            >
              Read More
            </button>
          )}
        </div>
      </div>

      {/* Related games */}
      <GameSection
        title={`Other Games in ${game.category}`}
        games={relatedGames}
        moreLink={`/categories/${game.categorySlug}`}
        maxItems={12}
      />
    </Layout>
  );
};

export default GameDetail;
