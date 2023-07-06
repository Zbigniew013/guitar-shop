import '@/styles/globals.css';
import Layout from '@/components/layout';
import { Antonio, Overpass } from 'next/font/google';

const overpass = Overpass({
  variable: '--font-overpass',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const antonio = Antonio({
  variable: '--font-antonio',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className={`${overpass.variable} ${antonio.variable}`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
