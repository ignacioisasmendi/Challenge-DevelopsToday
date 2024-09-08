import localFont from 'next/font/local';
import './globals.css';

const segoe = localFont({
  src: './fonts/SegoeUI.woff',
  variable: '--font-segoe',
  weight: '100 900',
});

export const metadata = {
  title: 'GeoInfo',
  description: 'Challenge for DevelopsToday',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${segoe.variable}`}>{children}</body>
    </html>
  );
}
