import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { IBM_Plex_Sans, Inter, Nunito_Sans, Oswald, Raleway, Roboto } from 'next/font/google';

const raleway = Raleway({ 
  weight: ['100', '700'],
  subsets: ['latin'],

 });
const nunitosans = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
});


export default function App({ Component, pageProps }: AppProps) {

  return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light',
            }}
          >
            <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
          --nunitosans-font: ${nunitosans.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
     <PrismicPreview repositoryName={repositoryName} />
    </MantineProvider>
  )
}
