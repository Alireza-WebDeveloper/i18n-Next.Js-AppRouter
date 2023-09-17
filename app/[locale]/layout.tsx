import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import useTextDirection from './useTextDirection';
import './globals.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: any;
}
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: '...',
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = useLocale();
  const direction = useTextDirection(locale);
  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir={direction}>
      <body className={inter.className}>
        <Header />
        <main className="mt-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
