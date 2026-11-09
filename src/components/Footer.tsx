import Link from "next/link";
import { Shield } from "lucide-react";

const footerLinks = {
  Products: [
    { name: "ATHELOS", href: "/products/athelos" },
    { name: "OTA Sentinel", href: "/products/ota-sentinel" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Trust Center", href: "/trust" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-surface/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Shield
                className="h-6 w-6 text-text-accent"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,227,253,0.3))" }}
              />
              <span className="font-mono text-lg font-bold text-text-primary">
                ZER<span className="text-text-accent">O</span>DIN
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              See the unseen. A cybersecurity company building tools that
              find what others miss.
            </p>
            <p className="text-xs text-text-tertiary mt-4 font-mono">
              security@zerodin.pro
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © 2026 ZERODIN Security. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary font-mono">
            "See the unseen."
          </p>
        </div>
      </div>
    </footer>
  );
}
