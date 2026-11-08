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
    <footer className="relative border-t border-white/[0.04] bg-black/[0.30] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Shield
                className="h-6 w-6 text-primary"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,227,253,0.3))" }}
              />
              <span className="font-mono text-lg font-bold text-foreground">
                ZER<span className="text-primary">O</span>DIN
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              See the unseen. Two products, one standard: ATHELOS for
              cybersecurity operators, OTA Sentinel for telecom SIM security.
            </p>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              security@zerodin.pro
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

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 ZERODIN Security. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            "See the unseen."
          </p>
        </div>
      </div>
    </footer>
  );
}
