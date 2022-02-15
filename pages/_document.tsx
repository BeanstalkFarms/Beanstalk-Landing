import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGLM87W" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument