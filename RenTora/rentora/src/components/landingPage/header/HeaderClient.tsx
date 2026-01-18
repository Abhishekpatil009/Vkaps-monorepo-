'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export default function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  // Scroll detection (cheap)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auth logic
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        setUserName(
          data.user.user_metadata?.full_name ||
          data.user.email?.split("@")[0] ||
          "User"
        );
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserName(
          session?.user
            ? session.user.user_metadata?.full_name ||
              session.user.email?.split("@")[0] ||
              "User"
            : null
        );
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav
  className={`
    ml-auto hidden md:flex items-center gap-8
    rounded-2xl px-6 py-2
    transition-all duration-300

    /* BASE BORDER (always visible) */
    border border-white/20

    /* OUTER RING EFFECT */
    ring-1 ring-white/10

    ${
      scrolled
        ? `
          bg-[#161A22]/75 backdrop-blur-xl
          shadow-lg
          border-white/30
          ring-white/20
        `
        : `
          bg-[#161A22]/40 backdrop-blur-md
          border-white/20
          ring-white/10
        `
    }
  `}
>

      <Link href="/rentals" className="nav-link">Browse</Link>
      <Link href="/categories" className="nav-link">Categories</Link>
      <Link href="/owner" className="nav-link">Become an Owner</Link>

      {userName ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#C5C8D7]">
            Hi, <span className="text-white font-semibold">{userName}</span>
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-xs font-bold rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            LOG OUT
          </button>
        </div>
      ) : (
        <Link
          href="/auth"
          className="ml-2 px-6 py-2.5 bg-[#5A80E9] hover:bg-[#4e73df] text-white text-xs font-bold rounded-full transition shadow-[0_0_15px_rgba(90,128,233,0.4)]"
        >
          SIGN IN
        </Link>
      )}
    </nav>
  );
}
