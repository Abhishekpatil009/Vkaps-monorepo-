'use client';

import { memo, useRef } from 'react';
import { RentalItem } from '@/data/mockItems';
import './featured.css';

interface Props {
  item: RentalItem;
  index: number;
}

const FeaturedCard = memo(({ item, index }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 12;
    const y = (e.clientY - r.top - r.height / 2) / 12;

    el.style.transform = `
      perspective(900px)
      rotateY(${x}deg)
      rotateX(${-y}deg)
      scale(1.02)
    `;

    el.style.setProperty(
      '--glare-x',
      `${((e.clientX - r.left) / r.width) * 100}%`
    );
    el.style.setProperty(
      '--glare-y',
      `${((e.clientY - r.top) / r.height) * 100}%`
    );
  };

  const reset = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      'perspective(900px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ animationDelay: `${index * 120}ms` }}
      className="featured-card animate-slide-up-fade"
    >
      {/* Glare */}
      <div className="glare-gradient" />

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="featured-image"
        />

        {/* Deposit Badge */}
        <div className="deposit-badge">
          DEPOSIT: ₹{item.securityDeposit}
        </div>

        {/* Featured Badge (optional but recommended) */}
        <div className="absolute top-6 right-6 px-3 py-1 bg-[#5A80E9]/90 text-white text-[10px] font-black tracking-widest rounded-full">
          FEATURED
        </div>

        <div className="image-overlay" />
      </div>

      {/* Content (NO PRICE / NO BUTTON) */}
      <div className="content">
        <div className="header">
          <h3>{item.title}</h3>
          <span className="rating">★ {item.rating}</span>
        </div>

        <p className="category">{item.category}</p>
      </div>
    </div>
  );
});

FeaturedCard.displayName = 'FeaturedCard';
export default FeaturedCard;
