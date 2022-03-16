import Link from "next/link";
import { FC, ReactNode } from "react";
import Button from "./Button";

import styles from './ContentWrapper.module.css';

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
          <Link href="/"><a><img src="/logo.svg" className="md:h-12 h-10" /></a></Link>
          {children}
        </div>
      </div>
      <div className={styles.FarmImage}></div>
    </div>
  ) 
  // Default variant
  : (
    <div className="flex flex-row">
      <div className={styles.TextContainer}>
        <div className="max-w-[720px] space-y-12 lg:pb-12">
          {/* Header */}
          <div className="flex flex-row justify-between items-center">
            <Link href="/"><a><img src="/logo.svg" className="md:h-8 h-6" /></a></Link>
            <div>
              <a href="https://app.bean.money" target="_blank" rel="noreferrer" className="border border-gray-200 rounded-md px-4 py-2 text-sm">
                Launch App
              </a>
            </div>
          </div>
          {/* Content */}
          {children}
          {/* Footer */}
          <div />
        </div>
      </div>
    </div>
  )
)

export default ContentWrapper;