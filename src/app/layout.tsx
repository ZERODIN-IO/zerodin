import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuroraBackground } from '@/components/glass';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'ZERODIN — Security infrastructure for the operators',
  description: 'Two products, both shipped. ATHELOS for cybersecurity operators. OTA Sentinel for telecom SIM security. Self-hosted, audited, no cloud AI on client data.',
  keywords: ['cybersecurity', 'penetration testing', 'SIM security', 'OTA management', 'self-hosted', 'ATHELOS', 'OTA Sentinel'],
  openGraph: {
    title: 'ZERODIN — Security infrastructure for the operators',
    description: 'Two products, both shipped. ATHELOS and OTA Sentinel.',
    url: 'https://zerodin.pro',
    siteName: 'ZERODIN',
    images: [{ url: 'https://zerodin.pro/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZERODIN — Security infrastructure for the operators',
    description: 'Two products, both shipped. ATHELOS and OTA Sentinel.',
    images: ['https://zerodin.pro/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <AuroraBackground />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
