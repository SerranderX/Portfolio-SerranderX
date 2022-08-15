import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import Script from 'next/script';
import React, { ReactElement } from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<Record<string, unknown> & {html: string}> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
      }

    render(): JSX.Element {
        return (
            <Html>
              <Head>
                <meta charSet="utf-8" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          );
    }
}
