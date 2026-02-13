// components/Analytics.js
import Script from 'next/script';

const Analytics = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-MSLLLB0N8T"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MSLLLB0N8T');
      `}
    </Script>
  </>
);

export default Analytics;
