import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <Layout>
    <Helmet>
      <title>Privacy Policy | All 3 Patti Games</title>
      <meta name="description" content="Read our Privacy Policy to understand how All 3 Patti Games collects, uses, and protects your personal information." />
    </Helmet>
    <div className="bg-card border border-border rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy – How We Protect Your Information</h1>

      <h2 className="text-lg font-bold mt-6 mb-3">Introduction</h2>
      <p className="mb-4 text-sm leading-relaxed">
        Your privacy matters. This Privacy Policy explains how our website collects, uses, stores, and safeguards personal information when you browse our content, interact with our pages, or contact us directly.
      </p>
      <p className="mb-4 text-sm leading-relaxed">
        We are committed to maintaining transparency about our data practices. This document outlines what information may be gathered, why it is collected, and the steps we take to ensure responsible data protection in accordance with applicable privacy standards.
      </p>
      <p className="mb-4 text-sm leading-relaxed">
        By using our website, you agree to the practices described in this Privacy Policy.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Information We Collect</h2>
      <p className="mb-4 text-sm leading-relaxed">
        To provide a secure and efficient browsing experience, we may collect certain categories of information.
      </p>

      <h3 className="text-base font-bold mt-4 mb-2">1. Personal Details You Provide</h3>
      <p className="mb-2 text-sm">When you voluntarily contact us, subscribe to updates, or submit inquiries, we may receive information such as:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Full name</li>
        <li>Email address</li>
        <li>Any message content you choose to share</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">This information is only collected when you provide it directly.</p>

      <h3 className="text-base font-bold mt-4 mb-2">2. Website Usage Data</h3>
      <p className="mb-2 text-sm">To understand how visitors interact with our platform, we may collect non-personal analytics data, including:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Pages viewed</li>
        <li>Time spent on pages</li>
        <li>Navigation patterns</li>
        <li>Referring sources</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">This helps us improve content structure and user experience.</p>

      <h3 className="text-base font-bold mt-4 mb-2">3. Device and Technical Information</h3>
      <p className="mb-2 text-sm">When accessing our website, certain technical details may be automatically recorded, such as:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Device type</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">This data supports security monitoring and site optimization.</p>

      <h3 className="text-base font-bold mt-4 mb-2">4. Cookies and Similar Technologies</h3>
      <p className="mb-4 text-sm leading-relaxed">
        Our website uses cookies and related tracking technologies to enhance performance and personalize content. Cookies are small data files stored on your device that help us analyze traffic patterns and improve usability.
      </p>
      <p className="mb-4 text-sm leading-relaxed">You can manage or disable cookies through your browser settings at any time.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">How We Use Collected Information</h2>
      <p className="mb-2 text-sm">The information we gather is used strictly for legitimate business purposes, including:</p>

      <p className="mb-2 text-sm"><strong>Improving Website Performance</strong></p>
      <p className="mb-4 text-sm leading-relaxed">Analytics data allows us to refine navigation, enhance loading speed, and provide relevant content aligned with user preferences.</p>

      <p className="mb-2 text-sm"><strong>Responding to Inquiries</strong></p>
      <p className="mb-4 text-sm leading-relaxed">Contact information is used to reply to questions, feedback, or support requests.</p>

      <p className="mb-2 text-sm"><strong>Sending Updates (With Consent)</strong></p>
      <p className="mb-4 text-sm leading-relaxed">If you subscribe to receive communications, we may send updates, announcements, or relevant information about our services. You can opt out at any time.</p>

      <p className="mb-2 text-sm"><strong>Maintaining Security</strong></p>
      <p className="mb-4 text-sm leading-relaxed">Technical information helps us detect suspicious activity, prevent misuse, and protect our platform from unauthorized access.</p>

      <p className="mb-4 text-sm leading-relaxed">We do not use personal data for unlawful profiling or misleading advertising practices.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">Information Sharing and Disclosure</h2>
      <p className="mb-4 text-sm leading-relaxed">
        We respect your privacy and do not sell, rent, or trade personal information to third parties. However, limited information may be shared in the following circumstances:
      </p>

      <p className="mb-2 text-sm"><strong>Trusted Service Providers</strong></p>
      <p className="mb-4 text-sm leading-relaxed">We may work with reputable third-party providers who assist in website hosting, analytics, or communication services. These providers are contractually obligated to maintain confidentiality and use data only for specified purposes.</p>

      <p className="mb-2 text-sm"><strong>Legal Requirements</strong></p>
      <p className="mb-4 text-sm leading-relaxed">Information may be disclosed if required by law, court order, or governmental authority, or when necessary to protect our legal rights and user safety.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">Cookies Policy</h2>
      <p className="mb-2 text-sm">Cookies help us deliver a smoother browsing experience. The types of cookies we may use include:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li><strong>Essential Cookies:</strong> Necessary for core website functionality, such as page navigation and secure access.</li>
        <li><strong>Analytics Cookies:</strong> Used to evaluate how visitors interact with the website so we can enhance performance.</li>
        <li><strong>Advertising Cookies:</strong> May be used to display relevant advertisements based on browsing behavior, where applicable.</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">You may disable cookies through your browser controls. Please note that restricting certain cookies may impact website functionality.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">Data Security Measures</h2>
      <p className="mb-2 text-sm">Protecting your information is a priority. We implement appropriate administrative, technical, and security safeguards designed to prevent:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li>Unauthorized access</li>
        <li>Data misuse</li>
        <li>Accidental loss</li>
        <li>Alteration or disclosure</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">While no online system can guarantee complete security, we take reasonable precautions to protect all stored data.</p>

      <h2 className="text-lg font-bold mt-6 mb-3">External Links</h2>
      <p className="mb-4 text-sm leading-relaxed">
        Our website may contain links to third-party websites for informational purposes. Please be aware that we do not control the privacy practices of external platforms. We recommend reviewing the privacy policies of any third-party site you visit.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Children's Privacy</h2>
      <p className="mb-4 text-sm leading-relaxed">
        Our services are not directed toward children under the age of 13. We do not knowingly collect personal data from minors. If we become aware that information has been inadvertently collected from a child without parental consent, we will promptly delete such data.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Your Privacy Rights</h2>
      <p className="mb-2 text-sm">Depending on your geographic location and applicable laws, you may have rights regarding your personal data, including:</p>
      <ul className="list-disc pl-6 mb-4 text-sm space-y-1">
        <li><strong>Right to Access:</strong> Request a copy of the personal information we maintain about you.</li>
        <li><strong>Right to Correction:</strong> Ask us to update or correct inaccurate data.</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your personal information, subject to legal limitations.</li>
        <li><strong>Right to Object or Restrict Processing:</strong> Limit or object to certain uses of your data where legally permitted.</li>
      </ul>
      <p className="mb-4 text-sm leading-relaxed">
        To exercise any of these rights, please contact us through our{" "}
        <Link to="/pages/contact-us" className="text-link hover:underline">Contact Us</Link> page.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Updates to This Policy</h2>
      <p className="mb-4 text-sm leading-relaxed">
        We may revise this Privacy Policy periodically to reflect operational, legal, or regulatory changes. Any modifications will be published on this page with an updated effective date. We encourage visitors to review this page regularly to stay informed about our data protection practices.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Contact Information</h2>
      <p className="mb-4 text-sm leading-relaxed">
        If you have questions regarding this Privacy Policy, data protection practices, or your personal information, please reach out through our{" "}
        <Link to="/pages/contact-us" className="text-link hover:underline">Contact Us</Link> page. We value your trust and remain committed to transparency, responsible data management, and secure website practices.
      </p>

      <h2 className="text-lg font-bold mt-6 mb-3">Conclusion</h2>
      <p className="text-sm leading-relaxed">
        Your confidence in our platform is important to us. This Privacy Policy outlines our dedication to responsible information handling, secure browsing, and ethical digital practices. By maintaining clear communication and implementing appropriate safeguards, we strive to create a safe and transparent online environment for every visitor.
      </p>
    </div>
  </Layout>
);

export default PrivacyPolicy;
