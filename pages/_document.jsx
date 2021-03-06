import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <title>Starter App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/static/css/bundle.css" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Exo+2:400,500,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Exo:400,500,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
