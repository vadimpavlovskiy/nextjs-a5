import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Link from 'next/link';



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
    </MantineProvider>
  )
}
