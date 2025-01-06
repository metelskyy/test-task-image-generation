import type { Metadata } from 'next';
import '../globals.css';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Test task',
  description: 'Kirill Linnik',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const sfProDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-display',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sfProDisplay.variable} antialiased font-sfProDisplay`}
      >
        <div className="max-w-[1440px] mx-auto min-h-dvh">{children}</div>
      </body>
    </html>
  );
}
