import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const TermsConditions = () => (
  <Layout>
    <Helmet>
      <title>Terms and Conditions | All 3 Patti Games</title>
      <meta name="description" content="Read the Terms and Conditions for using All 3 Patti Games website. Understand your rights and responsibilities as a user." />
    </Helmet>
    <div className="bg-card border border-border rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions – Website Use Agreement</h1>

      <h2 className="text-lg font-bold mt-6 mb-3">Introduction</h2>
      <p className="mb-4 text-sm leading-relaxed">
        Welcome to our platform. These Terms and Conditions outline the rules and guidelines that govern your access to and use of our website. By visiting, browsing, or interacting with our content, you acknowledge that you have read, understood, and agreed to be bound by these terms.
      </p>
      <p className="mb-4 text-sm leading-relaxed">
        If you disagree with any part of this agreement, you should discontinue use of the website immediately.
      </p>
      <p className="mb-4 text-sm leading-relaxed">
        We may revise these Terms and Conditions at any time. Continued use of the site after updates are published constitutes acceptance of those changes.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">1. Purpose and Acceptable Use of the Website</h2>
      <p className="mb-4 text-sm leading-relaxed">
        Our website provides informational content related to online card games, including guides, reviews, and download-related insights. The materials published are intended strictly for educational and informational purposes.
      </p>
      <p className="mb-4 text-sm leading-relaxed">
        We do not develop, operate, or own any third-party games mentioned on this platform. Users are responsible for ensuring that their access to and use of any external services comply with local laws and regulations.
      </p>
      <p className="mb-2 text-sm">By using this website, you agree:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Not to engage in unlawful activities</li>
        <li>Not to interfere with website functionality or security</li>
        <li>Not to distribute malicious software, spam, or harmful content</li>
        <li>Not to attempt unauthorized access to restricted systems</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">Any misuse of the platform may result in restricted access.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">2. Intellectual Property Rights</h2>
      <p className="mb-4 text-sm leading-relaxed">
        All original content available on this website—including written material, design elements, branding components, and graphics—is protected under applicable intellectual property laws.
      </p>
      <p className="mb-2 text-sm">You may:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>View content for personal, non-commercial use</li>
      </ul>
      <p className="mb-2 text-sm">You may not:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Copy, reproduce, republish, or redistribute our content without written authorization</li>
        <li>Use our materials for commercial purposes without permission</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        Any third-party trademarks, logos, or brand references remain the property of their respective owners. Their appearance on this website is for identification and informational purposes only and does not imply affiliation or endorsement.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">3. User Responsibilities and Conduct</h2>
      <p className="mb-2 text-sm">When accessing our platform, you agree to maintain responsible behavior and comply with applicable legal requirements. You must not:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Publish defamatory, abusive, or unlawful material</li>
        <li>Impersonate individuals or misrepresent identity</li>
        <li>Use automated systems to extract data without authorization</li>
        <li>Disrupt or damage the website's performance</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">Failure to adhere to these guidelines may lead to account restriction or permanent removal of access.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">4. Third-Party Links and External Resources</h2>
      <p className="mb-4 text-sm leading-relaxed">
        For user convenience, our website may include links to third-party platforms. These links are provided solely for informational purposes.
      </p>
      <p className="mb-2 text-sm">We do not control external websites and are not responsible for:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Their content</li>
        <li>Their availability</li>
        <li>Their privacy policies</li>
        <li>Their security practices</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">Before engaging with any third-party site, we recommend reviewing their terms and policies independently.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">5. Limitation of Liability</h2>
      <p className="mb-4 text-sm leading-relaxed">
        While we strive to maintain accurate and updated information, we do not guarantee that all content is complete, current, or error-free.
      </p>
      <p className="mb-2 text-sm">To the fullest extent permitted by law, we shall not be held liable for any losses or damages resulting from:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Reliance on information published on the website</li>
        <li>Technical interruptions</li>
        <li>Inaccuracies or omissions</li>
        <li>External service usage</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">This limitation includes direct, indirect, incidental, or consequential damages, including loss of data or business interruption.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">6. Disclaimer of Warranties</h2>
      <p className="mb-4 text-sm leading-relaxed">
        All content and materials on this website are provided on an "as available" and "as is" basis without warranties of any kind, whether express or implied.
      </p>
      <p className="mb-2 text-sm">We do not guarantee:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Continuous or uninterrupted website access</li>
        <li>Error-free performance</li>
        <li>Security against all potential threats</li>
        <li>Accuracy of third-party information</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">We operate solely as an independent informational resource and are not affiliated with game developers, publishers, or payment service providers mentioned on this platform.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">7. Indemnification</h2>
      <p className="mb-2 text-sm">By using this website, you agree to defend, indemnify, and hold harmless our platform, team members, and affiliates from any claims, liabilities, damages, expenses, or legal costs arising from:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Violation of these Terms and Conditions</li>
        <li>Misuse of the website</li>
        <li>Unlawful conduct connected to your activity</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">This clause remains enforceable to the maximum extent permitted by law.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">8. Governing Law and Jurisdiction</h2>
      <p className="mb-4 text-sm leading-relaxed">
        These Terms and Conditions shall be interpreted and enforced in accordance with applicable laws. Any disputes arising from the use of this website shall fall under the jurisdiction of the relevant courts. Users agree to submit to the authority of these courts for resolution of disputes.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">9. Termination of Access</h2>
      <p className="mb-4 text-sm leading-relaxed">
        We reserve the right to suspend or terminate website access at our discretion if user behavior violates these terms, compromises security, or poses risk to other visitors. Such actions may be taken without prior notice when necessary to protect the integrity of the platform.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">10. Modifications to These Terms</h2>
      <p className="mb-4 text-sm leading-relaxed">
        This agreement may be updated periodically to reflect operational, legal, or regulatory developments. Revisions will be posted on this page. We encourage users to review this section regularly to remain informed about their rights and responsibilities.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">11. Contact Information</h2>
      <p className="mb-4 text-sm leading-relaxed">
        If you require clarification regarding these Terms and Conditions or have questions about website policies, please contact us through our{" "}
        <Link to="/pages/contact-us" className="text-link hover:underline">Contact Us</Link> page.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Conclusion</h2>
      <p className="text-sm leading-relaxed">
        These Terms and Conditions are designed to ensure a secure, transparent, and legally compliant browsing experience for all visitors. By using our website responsibly and in accordance with these guidelines, you help maintain a safe and reliable environment for everyone. Your continued use of the platform confirms your understanding and acceptance of this agreement.
      </p>
    </div>
  </Layout>
);

export default TermsConditions;
