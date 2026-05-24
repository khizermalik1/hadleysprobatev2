import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hadleysprobateautos.co.uk'),
  title: {
    default: 'Hadleys Probate Autos — Specialist Probate Vehicle Buyers',
    template: '%s | Hadleys Probate Autos',
  },
  description:
    'Hadleys Probate Autos specialises in buying probate vehicles from families, executors and solicitors across the UK. Respectful, trusted and hassle-free service. Classic, vintage and all vehicles considered.',
  keywords: [
    'probate cars',
    'probate vehicles',
    'sell probate car',
    'executor car sale',
    'classic car probate',
    'vintage car probate',
    'probate vehicle buyer UK',
    'Hadleys Probate Autos',
  ],
  authors: [{ name: 'Hadleys Probate Autos' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Hadleys Probate Autos',
    title: 'Hadleys Probate Autos — Specialist Probate Vehicle Buyers',
    description:
      'We buy probate vehicles from families, executors and solicitors. Respectful, trusted and hassle-free. Classic, vintage and all vehicles considered.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hadleys Probate Autos — Specialist Probate Vehicle Buyers',
    description:
      'We buy probate vehicles from families, executors and solicitors across the UK.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
