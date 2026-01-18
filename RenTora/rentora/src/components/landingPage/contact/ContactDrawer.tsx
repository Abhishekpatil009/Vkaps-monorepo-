'use client';

import React, { useState, useCallback, memo, useEffect } from 'react';
import { classNames } from '@/utils/classNames';

const ContactDrawer = memo(() => {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  // Close on ESC key
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closeDrawer]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openDrawer}
        className="fixed bottom-10 right-10 z-50 h-14 w-14 rounded-full bg-[#5A80E9] text-white shadow-lg
        hover:scale-110 transition-transform"
        aria-label="Open contact drawer"
      >
        💬
      </button>

      {/* Overlay (render only when open) */}
      {open && (
        <div
          onClick={closeDrawer}
          className={classNames(
            'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm',
            'opacity-0 animate-fade-in'
          )}
        />
      )}
    </>
  );
});

ContactDrawer.displayName = 'ContactDrawer';

export default ContactDrawer;
