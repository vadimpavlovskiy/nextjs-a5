import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';



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
      <Component {...pageProps} />
     <PrismicPreview repositoryName={repositoryName} />
    </MantineProvider>
  )
}
