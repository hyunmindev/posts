import Script from 'next/script';

function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9G09E3XDMX"
        strategy="lazyOnload"
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9G09E3XDMX');
        `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
