// app/privacy/page.tsx
export const metadata = {
  title: 'Privacy Policy – Snipersverse',
  description: 'Privacy Policy for Snipersverse Services',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 text-gray-800 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-600 text-center">
          <span className="font-medium">Last Updated:</span> July 19, 2025<br/>
          <span className="font-medium">Effective Date:</span> July 19, 2025
        </p>

        <p>
          Snipersverse Company (“we,” “us,” or “our”) operates the website{' '}
          <a
            href="https://snipersverse.com"
            className="text-teal-600 hover:underline"
            target="_blank"
            rel="noopener"
          >
            https://snipersverse.com
          </a>
          , the mobile application Snipersverse (“the App”), and related services
          (collectively, “the Services”). We are committed to protecting your privacy
          and handling your personal data responsibly under UK GDPR, the Data Protection
          Act 2018, and other applicable laws. This Privacy Policy explains how we collect,
          use, disclose, and protect your information when you use our Services. By
          accessing or using the Services, you agree to this policy. If you do not agree,
          please do not use the Services.
        </p>

        <ol className="list-decimal list-inside space-y-6">
          <li>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p>We may collect the following when you interact with the Services:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Personal Information:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong>Email Addresses:</strong> Collected when you register, subscribe,
                    or contact us at{' '}
                    <a
                      href="mailto:support@snipersverse.com"
                      className="text-teal-600 hover:underline"
                    >
                      support@snipersverse.com
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Wallet Data:</strong> When you connect a crypto wallet, we collect
                    addresses, transaction hashes, and metadata. We never store private keys.
                  </li>
                  <li>
                    <strong>Account Information:</strong> Your username, hashed password, and
                    preferences.
                  </li>
                  <li>
                    <strong>Contact Information:</strong> Any additional details you provide
                    via support requests.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong>Cookies & Tracking:</strong> Session & persistent cookies,
                    web beacons to personalize and analyze usage.
                  </li>
                  <li>
                    <strong>Device Information:</strong> IP address, browser type, OS,
                    device model, and approximate location.
                  </li>
                  <li>
                    <strong>Interaction Data:</strong> Pages visited, features used,
                    and time spent.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Third‑Party Data:</strong> If you link social accounts, we may access
                public profile data or contact lists with your consent.
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>To Provide & Improve Services:</strong> Operate the platform, trading, and discovery tools.</li>
              <li><strong>Communication:</strong> Send transactional emails, updates, and—if opted in—newsletters.</li>
              <li><strong>Security:</strong> Monitor for fraud, unauthorized access, and suspicious wallet activity.</li>
              <li><strong>Analytics:</strong> Analyze trends and usage in aggregated, anonymized form.</li>
              <li><strong>Legal Compliance:</strong> Fulfill legal obligations and enforce our Terms.</li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">3. How We Share Your Information</h2>
            <p>We do <em>not</em> sell your personal data. We only share it when:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Service Providers:</strong> Vendors (hosting, analytics) under
                confidentiality agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or regulatory
                authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> On merger, acquisition, or sale of
                assets, under the same privacy standards.
              </li>
              <li>
                <strong>With Your Consent:</strong> Only if you explicitly authorize sharing.
              </li>
            </ul>
            <p>We never share private keys or seed phrases.</p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">4. Data Retention</h2>
            <p>
              We retain data only as long as necessary for the purposes above and to comply
              with legal obligations. Wallet addresses and transaction records are kept
              up to 5 years for potential AML audits unless you request deletion (subject to
              legal limits).
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">5. Cookies & Tracking Technologies</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Enable core site functionality.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Track usage patterns (e.g., Google Analytics).
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings (language, layout).
              </li>
            </ul>
            <p>
              Manage your preferences via our consent banner or disable cookies in your
              browser (may affect functionality). See our Cookie Policy (footer link).
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">6. Data Security</h2>
            <p>
              We implement reasonable measures (encryption, secure servers) to protect your
              data but cannot guarantee 100% security. Wallet data is read‑only to minimize risk.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">7. Your Rights & Choices</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Access:</strong> Request a copy of your data.</li>
              <li><strong>Correction:</strong> Update inaccurate information.</li>
              <li><strong>Deletion:</strong> Erase your data (subject to legal exceptions).</li>
              <li><strong>Restriction:</strong> Limit processing of your data.</li>
              <li><strong>Objection:</strong> Object to processing (e.g., marketing).</li>
              <li><strong>Portability:</strong> Receive your data in a structured format.</li>
            </ul>
            <p>
              To exercise these rights, contact{' '}
              <a
                href="mailto:support@snipersverse.com"
                className="text-teal-600 hover:underline"
              >
                support@snipersverse.com
              </a>
              . We may require identity verification. Opt‑out of marketing via the link in
              any promotional email.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">8. International Data Transfers</h2>
            <p>
              Our servers are in the U.S. By using the Services, you consent to transfer of
              your data under UK GDPR adequacy mechanisms (e.g., Standard Contractual Clauses).
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">9. Children’s Privacy</h2>
            <p>
              We do not knowingly collect data from children under 13. If discovered, we will
              delete it promptly and notify parents if required.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
            <p>
              We may update this policy for legal or operational reasons. The “Last Updated”
              date will reflect changes. Continued use implies acceptance.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold">11. Contact Us</h2>
            <p>
              Email:{' '}
              <a
                href="mailto:support@snipersverse.com"
                className="text-teal-600 hover:underline"
              >
                support@snipersverse.com
              </a><br/>
              Address: Snipersverse, 121 City Road, London, EC1V 2NX, United Kingdom<br/>
              You may also lodge a complaint with the Information Commissioner’s Office at{' '}
              <a
                href="https://ico.org.uk"
                className="text-teal-600 hover:underline"
                target="_blank"
                rel="noopener"
              >
                ico.org.uk
              </a>.
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
}
