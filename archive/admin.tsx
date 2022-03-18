import Script from "next/script";

export default function Admin() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js" strategy="afterInteractive" />
    </>
  )
}