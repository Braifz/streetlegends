"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils/utils";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-primary">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="StreetSpot logo"
            width={230}
            height={230}
            className="object-contain absolute top-2 left-10 hidden lg:block"
          />

          <Image
            src="/logo.png"
            alt="StreetSpot logo"
            width={100}
            height={100}
            className="object-contain absolute top-4 left-4 lg:hidden"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "font-display text-lg tracking-widest uppercase transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-foreground",
            )}
          >
            HOME
          </Link>
          <Link
            href="/allSpot"
            className={cn(
              "font-display text-lg tracking-widest uppercase transition-colors hover:text-primary",
              pathname === "/allSpot" ? "text-primary" : "text-foreground",
            )}
          >
            ALL SPOTS
          </Link>
          <Link
            href="/sign-in"
            className="font-display text-lg tracking-widest uppercase bg-primary px-5 py-1.5 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            LOGIN
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border mt-10 px-4 pb-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "block font-display text-xl tracking-widest uppercase py-3 transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-foreground",
            )}
          >
            HOME
          </Link>
          <Link
            href="/allSpot"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "block font-display text-xl tracking-widest uppercase py-3 transition-colors hover:text-primary",
              pathname === "/allSpot" ? "text-primary" : "text-foreground",
            )}
          >
            ALL SPOTS
          </Link>
          <Link
            href="/sign-in"
            onClick={() => setMobileOpen(false)}
            className="block font-display text-xl tracking-widest uppercase py-3 text-primary"
          >
            LOGIN
          </Link>
        </div>
      )}
    </nav>
  );
}
