
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/layout/header'
import Main from '@/layout/main'
import Footer from '@/layout/footer'
import header_image from '../image/header-back.jpg';
import client from 'client'
import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react'
import { InferGetStaticPropsType } from 'next'
import { isFilled } from "@prismicio/client";
import { components } from '@/slices'
const inter = Inter({ subsets: ['latin'] })

export default function Home({
  page,
  footer,
  header
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {data} = page
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <Header header={header.data} data={data.bannerdata} />
      <SliceZone slices={page.data.slices} components={components} />
      <Footer footer={footer} />
    </>
  )
}
export async function getStaticProps({ params, previewData }:{ params:any, previewData:any }) {
  const client = createClient({ previewData });

  // The query fetches the page's data based on the current URL.
  const page = await client.getSingle("home");
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: { 
      page,
      footer,
      header,
     },
  };
}
