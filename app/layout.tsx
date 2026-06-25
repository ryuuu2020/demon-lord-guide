import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Demon Lord Archive — Dark Fantasy Guide Hub',
  description: 'Demon Lord: Just a Block complete strategy guide — all boss strategies, build recommendations, weapon compendium, and beginner walkthrough',
  metadataBase: new URL('https://demon-lord-guide.vercel.app'),
  openGraph: {
    title: 'Demon Lord Archive',
    description: 'Demon Lord: Just a Block complete strategy guide — all boss strategies, build recommendations, weapon compendium, and beginner walkthrough',
    type: 'website',
  },
  verification: {
    google: 'google4cd6cdf221ea7b0b.html',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b.html" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
      </head>
      <body className="font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
