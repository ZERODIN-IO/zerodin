import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#060B14] text-[#E8EDF5]`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
