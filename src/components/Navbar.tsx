"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Shield, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Glass, GlassButton } from "@/components/glass";

const navItems = [
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Trust", href: "/trust" },
];

const products = [
  {
    name: "ATHELOS",
    slug: "athelos",
    tagline: "Cybersecurity command center. Self-hosted. Proven.",
  },
  {
    name: "OTA Sentinel",
    slug: "ota-sentinel",
    tagline: "SIM security for telecoms. Audit and manage.",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="rounded-full border border-white/[0.08] bg-background/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between h-14 px-5">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Shield
              className="h-6 w-6 text-primary"
              style={{ filter: "drop-shadow(0 0 8px rgba(0,227,253,0.4))" }}
            />
            <span className="font-mono text-base font-bold tracking-tight text-foreground">
              ZER<span className="text-primary">O</span>DIN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  onFocus={() => setProductsOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setProductsOpen(false);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.name}
                    <ChevronDown className="h-3 w-3" />
                  </Link>
                  {productsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <Glass
                        material="frosted"
                        className="w-72 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                      >
                        {products.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="block rounded-xl px-3 py-2.5 hover:bg-white/[0.06] transition-colors duration-200"
                          >
                            <div className="text-sm font-medium text-foreground">
                              {product.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {product.tagline}
                            </div>
                          </Link>
                        ))}
                      </Glass>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right side: theme + actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link href="/login">
              <GlassButton variant="ghost" size="sm">
                Sign In
              </GlassButton>
            </Link>
            <Link href="/register">
              <GlassButton variant="primary" size="sm">
                Start trial
              </GlassButton>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-3xl border border-white/[0.08] bg-background/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 rounded-2xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-white/[0.06] space-y-1">
              <p className="px-3 pt-2 pb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Products
              </p>
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="block px-3 py-2 rounded-2xl text-sm text-foreground hover:bg-white/[0.04] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-2xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <GlassButton variant="ghost" size="sm" className="w-full">
                  Sign In
                </GlassButton>
              </Link>
              <Link href="/register" onClick={() => setMobileOpen(false)}>
                <GlassButton variant="primary" size="sm" className="w-full">
                  Start trial
                </GlassButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
