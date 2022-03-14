import Link from "next/link";
import { FC } from "react";

import styles from './ContentWrapper.module.css';

const ContentWrapper : FC = ({ children }) => (
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

export default ContentWrapper;