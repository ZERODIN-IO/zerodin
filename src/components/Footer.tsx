import Link from 'next/link';
import { Shield } from 'lucide-react';

const footerLinks = {
  Products: [
    { name: 'TALOS', href: '/products/talos' },
    { name: 'SENTINEL', href: '/products/sentinel' },
    { name: 'ODIN', href: '/products/odin' },
    { name: 'FORGE', href: '/products/forge' },
    { name: 'NEXUS', href: '/products/nexus' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Trust Center', href: '/trust' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Responsible Disclosure', href: '/trust/disclosure' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-mono text-lg font-bold text-foreground">
                ZER<span className="text-primary">O</span>DIN
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              See the unseen. Universal cybersecurity platform protecting organizations against zero-day threats.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Zerodin Security. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            "See the unseen."
          </p>
        </div>
      </div>
    </footer>
  );
}
