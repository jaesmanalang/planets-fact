import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=League+Spartan:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/assets/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <body className="font-body text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
