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
  image = "https://bean.money/assets/meta/basic.png",
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
      {/* Whatever else! */}
      {children}
    </Head>
  )
}