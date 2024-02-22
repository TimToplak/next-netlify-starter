import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const window = document.getElementById('iframe').contentWindow;
      console.log('window', window.mojmoj);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <iframe id="iframe" width={800} height={800} src="/asdf"></iframe>

      <Footer />
    </div>
  );
}
