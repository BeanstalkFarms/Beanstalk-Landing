import Footer from "./Footer";
import {ReactNode} from "react";

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