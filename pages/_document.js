import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
          rel='stylesheet'
        />
        <link href='https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
