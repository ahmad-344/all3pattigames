import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy load all non-homepage routes
const GameDetail = lazy(() => import("./pages/GameDetail"));
const PopularGames = lazy(() => import("./pages/PopularGames"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const AndroidPlatform = lazy(() => import("./pages/AndroidPlatform"));
const Favorites = lazy(() => import("./pages/Favorites"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ReportProblem = lazy(() => import("./pages/ReportProblem"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games/:slug" element={<GameDetail />} />
          <Route path="/popular-apps" element={<PopularGames />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/platforms/android" element={<AndroidPlatform />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/pages/about-us" element={<AboutUs />} />
          <Route path="/pages/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pages/terms-conditions" element={<TermsConditions />} />
          <Route path="/pages/disclaimer" element={<Disclaimer />} />
          <Route path="/pages/contact-us" element={<ContactUs />} />
          <Route path="/pages/report-problem" element={<ReportProblem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
