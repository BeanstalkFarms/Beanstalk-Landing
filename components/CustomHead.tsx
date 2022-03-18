import { ReactNode } from "react";
import Head from "next/head";

type CustomHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

export default function CustomHead({
  title = "Beanstalk",
  description = "Beanstalk is a decentralized credit based stablecoin protocol.",
  image = "https://bean.money/assets/meta/farm-winter-night.png",
  children
}: CustomHeadProps) {
  return (
    <Head>
      {/* Basics */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Google Analytics */}
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KGLM87W');` }}></script>
      {/* Whatever else! */}
      {children}
    </Head>
  )
}