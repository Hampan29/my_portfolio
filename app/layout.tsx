import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HAMPAN | 2nd Year B.Tech Computer Science Student',
  description:
    'Portfolio website for HAMPAN, a 2nd-year B.Tech Computer Science student focused on software engineering, frontend development, and problem solving.',
  openGraph: {
    title: 'HAMPAN | Portfolio',
    description: '2nd Year B.Tech Computer Science Student | Aspiring Software Engineer',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
