import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head/>
        <body className="bg-white text-black dark:bg-black dark:text-white">
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}