import { ReactNode } from "react";
import Footer from "./Footer";

type LayoutProps = {
  children?: ReactNode;
};

export default function BlogLayout({ children } : LayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}