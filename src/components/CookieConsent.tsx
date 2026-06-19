import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-3 sm:p-4">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies to improve your experience.{" "}
          <a href="/pages/privacy-policy" className="text-link">Learn more</a>
        </p>
        <div className="flex gap-2 shrink-0 w-full sm:w-auto">
          <button onClick={accept} className="flex-1 sm:flex-none px-4 py-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90">
            Accept
          </button>
          <button onClick={accept} className="flex-1 sm:flex-none px-4 py-1.5 text-sm font-medium border border-border rounded-md hover:bg-secondary">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
