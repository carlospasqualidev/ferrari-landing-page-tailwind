import { Navbar } from '@/components/Navbar';
import { DM_Sans } from '@next/font/google';

import './globals.css';

const DMSans = DM_Sans({
  style: 'normal',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${DMSans.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
