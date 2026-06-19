import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const ContactUs = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

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
        <title>Contact Admin | All 3 Patti Games</title>
        <meta name="description" content="Contact the admin of All 3 Patti Games via Telegram, WhatsApp, or the contact form." />
      </Helmet>
      <div className="bg-card border border-border rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Contact Admin</h1>

        {/* Telegram & WhatsApp */}
        <div className="space-y-4 mb-8">
          <a
            href="https://t.me/AhmadGames344"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-secondary rounded-xl p-4 hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
              <MessageCircle size={24} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-bold">Telegram</p>
              <p className="text-sm text-muted-foreground">@AhmadGames344</p>
            </div>
          </a>
          <a
            href="https://wa.me/923122883976"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-secondary rounded-xl p-4 hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
              <Phone size={24} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-bold">WhatsApp</p>
              <p className="text-sm text-muted-foreground">+92 3122883976</p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-bold text-center mb-2">Contact Us Form</h2>
          <p className="text-sm text-muted-foreground text-center mb-6 border-l-4 border-primary pl-4">
            Have a question, feedback, or inquiry? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>

          {sent ? (
            <div className="text-center py-8">
              <p className="text-primary font-bold text-lg">Thank you!</p>
              <p className="text-sm text-muted-foreground mt-2">Your message has been received. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

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
                <label className="block text-sm font-medium mb-1">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message..."
                  required
                  rows={5}
                  maxLength={1000}
                  className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
