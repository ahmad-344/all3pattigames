import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const ReportProblem = () => {
  const [searchParams] = useSearchParams();
  const gameName = searchParams.get("game") || "";
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/ilhamcrypto407@gmail.com", {
        method: "POST",
        body: formData,
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Report a Problem | All 3 Patti Games</title>
        <meta name="description" content="Report a problem with any game on All 3 Patti Games. We'll investigate and fix it as soon as possible." />
      </Helmet>
      <div className="bg-card border border-border rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Report a Problem</h1>
        <div className="max-w-md mx-auto">
          <p className="text-sm text-muted-foreground text-center mb-6 border-l-4 border-destructive pl-4">
            Found a bug or issue with a game? Fill out the form below and we'll look into it.
          </p>

          {sent ? (
            <div className="text-center py-8">
              <p className="text-primary font-bold text-lg">Thank you!</p>
              <p className="text-sm text-muted-foreground mt-2">Your report has been submitted. We'll investigate shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Problem Report" />

              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  maxLength={100}
                  className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  required
                  maxLength={255}
                  className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Game Name</label>
                <input
                  type="text"
                  name="game"
                  placeholder="Which game has the problem?"
                  required
                  maxLength={200}
                  defaultValue={gameName}
                  className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Describe the Problem</label>
                <textarea
                  name="problem"
                  placeholder="Tell us what went wrong..."
                  required
                  rows={5}
                  maxLength={1000}
                  className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-destructive text-destructive-foreground py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Report"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ReportProblem;
