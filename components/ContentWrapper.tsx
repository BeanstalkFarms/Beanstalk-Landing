import Link from "next/link";
import { FC, ReactNode } from "react";
import Button from "./Button";

import styles from './ContentWrapper.module.css';
import Footer from "./Footer";

type ContentWrapperProps = {
  variant: "default" | "side-image";
}

const ContentWrapper : FC<ContentWrapperProps> = ({
  children,
  variant = "default"
}) => (
  // Side image variant
  variant === "side-image" ? (
    <div className="flex flex-row">
      <div className={styles.TextContainer}>
        <div className="max-w-[720px] space-y-24 lg:pb-12">
          {/* Header */}
          <div>
            <Link href="/"><a><img src="/logo.svg" className="md:h-12 h-10" /></a></Link>
          </div>
          {/* Content */}
          {children}
          {/* Footer */}
          <Footer />
        </div>
      </div>
      <div className={styles.FarmImage}></div>
    </div>
  ) 
  // Default variant
  : (
    <div className="flex flex-row">
      <div className={styles.TextContainer}>
        <div className="max-w-[720px] w-full space-y-12 lg:pb-12">
          {/* Header */}
          <div className="flex flex-row items-center">
            <div className="flex-1">
              <Link href="/"><a><img src="/logo.svg" className="h-8" /></a></Link>
            </div>
            <Link href="/blog">
              <a className="inline-block px-4 py-2 text-sm mx-2">
                Blog
              </a>
            </Link>
            <a href="https://app.bean.money" target="_blank" rel="noreferrer" className="inline-block border border-gray-200 rounded-md px-4 py-2 text-sm">
              Launch App
            </a>
          </div>
          {/* Content */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
)

export default ContentWrapper;