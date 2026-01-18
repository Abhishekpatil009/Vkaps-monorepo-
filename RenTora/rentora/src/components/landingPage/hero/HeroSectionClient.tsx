'use client';

import styles from './heroSectionClient.module.css';

export default function HeroSectionClient() {
  return (
    <div className="absolute inset-0 z-0">
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-[#5A80E9] rounded-full blur-[80px] opacity-30 ${styles.pulseSlow}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A8C5FF] rounded-full blur-[100px] opacity-20 ${styles.float}`} />
    </div>
  );
}
