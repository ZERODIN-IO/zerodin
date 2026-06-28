'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Trust Center', href: '/trust' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A2D44] bg-[#060B14]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Shield className="h-7 w-7 text-[#00E3FD]" style={{ filter: "drop-shadow(0 0 8px rgba(0,227,253,0.4))" }} />
            <span className="font-mono text-lg font-bold tracking-tight text-[#E8EDF5]">
              ZER<span className="text-[#00E3FD]">O</span>DIN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm text-[#6B7D95] hover:text-[#E8EDF5] hover:bg-[#0A1628] transition-all duration-200 flex items-center gap-1"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-[#6B7D95]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1A2D44] bg-[#060B14]">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 rounded-lg text-sm text-[#6B7D95] hover:text-[#E8EDF5] hover:bg-[#0A1628]"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/login">
                <Button variant="outline" className="w-full" size="sm">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button className="w-full" size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
