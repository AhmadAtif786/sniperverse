// app/terms/page.tsx

export const metadata = {
  title: 'Terms and Conditions – Snipersverse',
  description: 'Terms and Conditions for Snipersverse Services',
};

export default function TermsPage() {
  return (
    <main className="bg-gray-50 py-12 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="text-sm text-gray-600">
            Last updated July 19, 2025
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-4">
          <p>
            This Agreement to our Legal Terms (“Terms”) is between you and
            Snipersverse Company (“we,” “our,” or “us”), a UK‐registered
            company at 121 City Road, London, EC1V 2NX. By accessing
            https://snipersverse.com (“the Site”), the Snipersverse mobile app
            (“the App”), or any related services (collectively, “the Services”),
            you agree to be bound by these Terms. If you do not agree, you must
            stop using the Services immediately.
          </p>
          <p>
            Supplemental terms or documents posted on the Services are
            incorporated by reference. We may update these Terms at any time;
            your continued use after a change means you accept the new Terms.
          </p>
          <p>
            The Services are intended for users aged 13+. Minors under 13 must
            use under parental supervision.
          </p>
        </section>

        {/* Table of Contents */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            {[
              'Our Services',
              'Intellectual Property Rights',
              'User Representations',
              'Purchases and Payment',
              'Subscriptions',
              'Prohibited Activities',
              'User Generated Contributions',
              'Contribution Licence',
              'Mobile Application Licence',
              'Third‑Party Websites and Content',
              'Social Media',
              'Services Management',
              'Privacy Policy',
              'Copyright Infringements',
              'Term and Termination',
              'Modifications and Interruptions',
              'Governing Law',
              'Dispute Resolution',
              'Corrections',
              'Disclaimer',
              'Limitations of Liability',
              'Indemnification',
              'User Data',
              'Electronic Communications, Transactions, and Signatures',
              'California Users and Residents',
              'Miscellaneous',
              'Crypto Risk Disclosure',
              'Contact Us',
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </section>

        {/* Sections */}
        <section className="space-y-8">

          <article>
            <h3 className="text-xl font-semibold mb-2">1. Our Services</h3>
            <p>
              The information provided via the Services is not intended for use
              in jurisdictions where it would be unlawful or require
              registration. Users outside the UK do so at their own initiative
              and must comply with local laws.
            </p>
            <p>
              The Services are not HIPAA/FISMA/GLBA‑compliant; do not use them
              for regulated data or purposes.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              2. Intellectual Property Rights
            </h3>
            <p>
              We own or license all intellectual property in our Content
              (code, designs, text, images, trademarks, etc.). You may access
              and print a single copy of the Content for your non‑commercial,
              internal use only. Any other reproduction or distribution without
              our express written permission is prohibited.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">3. User Representations</h3>
            <p>By using the Services you represent and warrant that:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Your registration info is accurate and you will keep it updated.</li>
              <li>You have legal capacity to agree to these Terms.</li>
              <li>You will not access the Services via automated means.</li>
              <li>You will comply with all applicable laws.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              4. Purchases and Payment
            </h3>
            <p>
              You agree to provide accurate payment details. Prices are in GBP,
              plus any sales tax. We may correct pricing errors or refuse orders
              at our discretion.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">5. Subscriptions</h3>
            <p>
              Subscriptions auto‐renew monthly until cancelled. All sales are
              non‐refundable. You may cancel anytime; your subscription remains
              active until the end of the paid term.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              6. Prohibited Activities
            </h3>
            <p>You may not:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Scrape or harvest data without permission.</li>
              <li>Use the Services for unsolicited advertising.</li>
              <li>Bypass security features or reverse‑engineer our software.</li>
              <li>Upload malware or spam.</li>
              <li>Violate any applicable laws or regulations.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              7. User Generated Contributions
            </h3>
            <p>
              Any content you post (“Contributions”) must be your own or you
              must have rights to post it. Contributions may be made public.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">8. Contribution Licence</h3>
            <p>
              By posting Contributions you grant us a worldwide, royalty‑free,
              sublicensable license to use, reproduce, and distribute them in
              any media.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              9. Mobile Application Licence
            </h3>
            <p>
              If you install our App, we grant you a revocable, non‑exclusive
              right to use it. You may not decompile, modify, or redistribute
              the App.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              10. Third‑Party Websites and Content
            </h3>
            <p>
              We’re not responsible for any external links or third‑party
              content you encounter. Use at your own risk.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">11. Social Media</h3>
            <p>
              You may link your social accounts to our Services. You control
              what data we access, and you can revoke access at any time.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              12. Services Management
            </h3>
            <p>
              We may monitor usage, remove abusive content, or suspend
              accounts at our sole discretion to protect the Services.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">13. Privacy Policy</h3>
            <p>
              Please review our{' '}
              <a
                href="/privacy"
                className="text-teal-600 hover:underline"
              >
                Privacy Policy
              </a>
              , which is incorporated herein.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              14. Copyright Infringements
            </h3>
            <p>
              If you believe your copyright is infringed, notify us at{' '}
              <a
                href="mailto:support@snipersverse.com"
                className="text-teal-600 hover:underline"
              >
                support@snipersverse.com
              </a>
              .
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              15. Term and Termination
            </h3>
            <p>
              We may suspend or terminate your access at any time, for any
              reason, without notice.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              16. Modifications and Interruptions
            </h3>
            <p>
              We reserve the right to modify or discontinue the Services
              without notice. We are not liable for any downtime.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">17. Governing Law</h3>
            <p>
              These Terms are governed by UK law, without regard to conflict
              of law principles.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              18. Dispute Resolution
            </h3>
            <p>
              Disputes will first be negotiated for 30 days, then finally
              resolved by binding arbitration under UK/EU rules, except IP and
              injunctive claims.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">19. Corrections</h3>
            <p>
              We may correct errors or update content at any time without
              notice.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">20. Disclaimer</h3>
            <p>
              THE SERVICES ARE PROVIDED “AS IS” WITHOUT WARRANTIES. We disclaim
              all warranties to the fullest extent permitted by law.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              21. Limitations of Liability
            </h3>
            <p>
              We are not liable for any damages beyond the lesser of what you
              paid in the last six months or £100 GBP.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">22. Indemnification</h3>
            <p>
              You agree to indemnify us against third‑party claims arising from
              your use of the Services.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">23. User Data</h3>
            <p>
              You’re responsible for the data you upload. We perform backups,
              but we’re not liable for data loss.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              24. Electronic Communications
            </h3>
            <p>
              You consent to receiving electronic notices in lieu of paper
              communications.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              25. California Users and Residents
            </h3>
            <p>
              California residents can contact the Dept. of Consumer Affairs
              at (800) 952‑5210 for unresolved complaints.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">26. Miscellaneous</h3>
            <p>
              These Terms, and any policies posted on the Services, constitute
              the entire agreement. Severability, no waiver, assignment, and
              force majeure provisions apply.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">
              27. Crypto Risk Disclosure
            </h3>
            <p>
              Crypto token trading carries risks (rug pulls, volatility,
              smart‑contract bugs). We provide tools only; you bear all risk.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">28. Contact Us</h3>
            <p>
              Snipersverse<br />
              121 City Road<br />
              London, EC1V 2NX<br />
              United Kingdom<br />
              <a
                href="mailto:support@snipersverse.com"
                className="text-teal-600 hover:underline"
              >
                support@snipersverse.com
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
