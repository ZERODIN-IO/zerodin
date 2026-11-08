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
  title: 'ZERODIN — See the Unseen',
  description: 'Universal cybersecurity platform. Zero-day detection. Automated pentesting. Continuous monitoring. Threat intelligence.',
  keywords: ['cybersecurity', 'pentesting', 'zero-day', 'vulnerability scanning', 'threat intelligence'],
  openGraph: {
    title: 'ZERODIN — See the Unseen',
    description: 'Universal cybersecurity platform protecting against the unknown.',
    url: 'https://zerodin.io',
    siteName: 'Zerodin',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <AuroraBackground />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
