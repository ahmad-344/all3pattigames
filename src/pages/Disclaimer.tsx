import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Disclaimer = () => (
  <Layout>
    <Helmet>
      <title>Disclaimer | All 3 Patti Games</title>
      <meta name="description" content="Read our Disclaimer to understand the terms of using All 3 Patti Games website, our limitations, and how we operate." />
    </Helmet>
    <div className="bg-card border border-border rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Disclaimer – Important Information About Our Website</h1>

      <h2 className="text-lg font-bold mt-6 mb-3">Introduction</h2>
      <p className="mb-4 text-sm leading-relaxed">
        This Disclaimer explains the scope, purpose, and limitations of the content available on our platform. By accessing and using this website, you acknowledge and accept the statements outlined below.
      </p>
      <p className="mb-4 text-sm leading-relaxed">
        We encourage all visitors to review this page carefully to understand how our website operates, what responsibilities we hold, and where those responsibilities end.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Independent Gaming Information Resource</h2>
      <p className="mb-4 text-sm leading-relaxed">
        Our website functions solely as an informational platform focused on online card games and mobile gaming apps, including Teen Patti, 3 Patti, 3 Card games, and slot-style applications.
      </p>
      <p className="mb-2 text-sm">We are not:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Game developers</li>
        <li>App publishers</li>
        <li>Software owners</li>
        <li>Payment service providers</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        All trademarks, brand names, and copyrighted materials referenced on this website belong to their respective owners. Any mention of third-party games is strictly for identification, review, and educational purposes.
      </p>
      <p className="mb-4 text-sm leading-relaxed">
        Our role is to provide structured information, guides, and curated references to help users make informed decisions.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Affiliate Disclosure</h2>
      <p className="mb-4 text-sm leading-relaxed">
        Certain links featured on our website may be affiliate or referral links. This means we may receive a commission if a user clicks a link and completes a registration or download. There is no additional cost to you.
      </p>
      <p className="mb-2 text-sm">Affiliate partnerships help sustain our platform and allow us to continue publishing:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Detailed game reviews</li>
        <li>APK guidance</li>
        <li>Installation tutorials</li>
        <li>Safety recommendations</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        However, commissions do not influence our editorial standards. We aim to maintain transparency and provide honest insights based on research and evaluation.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">No Real Money Gaming Operations</h2>
      <p className="mb-2 text-sm">Our platform does not host, manage, or operate any real money gaming services. We do not:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Process payments</li>
        <li>Handle withdrawals</li>
        <li>Store financial information</li>
        <li>Facilitate betting transactions</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        Any gameplay involving real money, deposits, withdrawals, or rewards is conducted entirely through third-party applications. Users must review the terms and policies of those external platforms before engaging in any financial activity.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Third-Party Apps and External Platforms</h2>
      <p className="mb-4 text-sm leading-relaxed">
        We strive to verify information and review available download sources before referencing them. However, we cannot guarantee absolute safety or uninterrupted performance of third-party apps or websites.
      </p>
      <p className="mb-2 text-sm">By accessing external platforms, you accept that:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Installation and usage are at your own discretion</li>
        <li>We are not responsible for technical issues, losses, or damages</li>
        <li>External services operate independently from our website</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        We strongly recommend using updated antivirus protection and exercising caution when installing any Android game file or APK.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Legal Compliance Responsibility</h2>
      <p className="mb-2 text-sm">Online card games and casino-style applications may be regulated differently depending on your country or region. It is your responsibility to:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Confirm local legal requirements</li>
        <li>Ensure you meet minimum age requirements</li>
        <li>Verify that access to such platforms is permitted in your jurisdiction</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        We do not encourage illegal activity or underage participation in any form of gaming.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Content Accuracy and Updates</h2>
      <p className="mb-4 text-sm leading-relaxed">
        While we aim to keep our information accurate and current, app features, policies, and availability may change without notice.
      </p>
      <p className="mb-2 text-sm">We do not guarantee:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Continuous availability of referenced apps</li>
        <li>Permanent accuracy of third-party details</li>
        <li>Error-free content at all times</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        Users are encouraged to verify details directly through official sources before taking action.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Updates to This Disclaimer</h2>
      <p className="mb-4 text-sm leading-relaxed">
        This Disclaimer may be revised periodically to reflect operational changes, legal updates, or policy adjustments. Any modifications will be published on this page. Continued use of our website following updates indicates acceptance of the revised terms.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Contact Information</h2>
      <p className="mb-4 text-sm leading-relaxed">
        If you have questions regarding this Disclaimer or need clarification about any content on our website, please contact us through our{" "}
        <Link to="/pages/contact-us" className="text-link hover:underline">Contact Us</Link> page.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Conclusion</h2>
      <p className="text-sm leading-relaxed">
        Our objective is to provide transparent, structured, and educational information about online card and mobile gaming apps. We operate as an independent informational resource and do not control third-party platforms or financial transactions. By using this website responsibly and reviewing external policies carefully, you can make informed decisions while protecting your interests. Thank you for taking the time to understand our Disclaimer and how our platform operates.
      </p>
    </div>
  </Layout>
);

export default Disclaimer;
