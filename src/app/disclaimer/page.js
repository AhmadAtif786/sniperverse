// app/disclaimer/page.tsx
export const metadata = {
  title: 'Disclaimer – Snipersverse',
  description: 'Disclaimer for Snipersverse Services',
};

export default function DisclaimerPage() {
  return (
    <main className="bg-gray-50 text-gray-800 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Disclaimer</h1>
        <p className="text-sm text-gray-600 text-center">
          <span className="font-medium">Last Updated:</span> July 19, 2025<br/>
          <span className="font-medium">Effective Date:</span> July 19, 2025
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
          </a>{' '}
          (“the Site”), the mobile application Snipersverse (“the App”), and related
          services (collectively, “the Services”). The Services are provided as a platform
          for discovering, analyzing, and facilitating access to cryptocurrency tokens.
          This Disclaimer outlines the limitations of our liability and the risks associated
          with using the Services. By accessing or using the Services, you agree to the
          terms of this Disclaimer. If you do not agree, please do not use the Services.
        </p>

        <ol className="list-decimal list-inside space-y-6">
          <li>
            <h2 className="text-xl font-semibold"> Nature of the Services</h2>
            <p>
              The Services are provided on an “as is” and “as available” basis. We do not
              guarantee that the Services, including token discovery tools, wallet integration
              features, or any content (e.g., market analysis, token recommendations), will be
              uninterrupted, error‑free, or meet your specific requirements. Your use of the
              Services is at your sole risk.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> No Warranties</h2>
            <p>
              To the fullest extent permitted by law, we disclaim all express or implied
              warranties in connection with the Services, including but not limited to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Merchantability:</strong> The Services are not warranted to be fit for any particular purpose.</li>
              <li><strong>Fitness for Purpose:</strong> We do not guarantee the Services will meet your individual needs.</li>
              <li><strong>Accuracy:</strong> We make no representations about the accuracy of content.</li>
              <li><strong>Non‑Infringement:</strong> We do not warrant that your use will not infringe third‑party rights.</li>
            </ul>
            <p>
              We do not endorse or guarantee the legitimacy, value, or security of any
              cryptocurrency tokens or any third‑party content linked through the Services.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Limitations of Liability</h2>
            <p>
              In no event will we or our affiliates be liable for any direct, indirect,
              incidental, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Loss of profits, revenue, or data.</li>
              <li>Financial losses from cryptocurrency transactions.</li>
              <li>Service interruptions or errors.</li>
            </ul>
            <p>
              Our total liability is limited to the lesser of the amount you paid us in the
              prior six (6) months or £100.00 GBP. Certain UK laws may override these limits.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Cryptocurrency Risks</h2>
            <p>
              Newly launched tokens carry inherent risks, including rug pulls, liquidity
              removal, price volatility, and smart contract vulnerabilities. We provide tools
              but do not verify token safety—conduct your own research.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Third‑Party Content and Websites</h2>
            <p>
              The Services may link to third‑party websites or content. We do not endorse or
              verify such content. Your access is at your own risk.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Interruptions and Modifications</h2>
            <p>
              We may modify, suspend, or discontinue the Services at any time without notice.
              We are not liable for any resulting inconvenience or loss.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> No Financial Advice</h2>
            <p>
              Content on the Services is informational only and not financial or legal advice.
              Consult a professional before making investment decisions.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims arising from your
              use of the Services or violation of this Disclaimer.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Governing Law</h2>
            <p>
              This Disclaimer is governed by UK law. Disputes will be resolved as per our
              Terms and Conditions.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Changes to This Disclaimer</h2>
            <p>
              We may update this Disclaimer and will post a revised “Last Updated” date.
              Continued use constitutes acceptance.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-semibold"> Contact Us</h2>
            <p>
              Email: <a href="mailto:support@snipersverse.com" className="text-teal-600 hover:underline">support@snipersverse.com</a><br/>
              Address: Snipersverse, 121 City Road, London, EC1V 2NX, United Kingdom
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
}
