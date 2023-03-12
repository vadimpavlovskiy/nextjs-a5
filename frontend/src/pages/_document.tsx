import { createGetInitialProps } from '@mantine/next';

import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
 
  render() {
   return (
    <Html className='w-screen overflow-x-hidden'>
     <Head />
     <body className='w-screen'>
      <Main />
      <NextScript />
     </body>
    </Html>
   );
  }
 }
 