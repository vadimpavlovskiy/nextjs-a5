import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled, asLink } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import AffixTop from "@/components/affix";
import TableOfContent from "@/layout/tableOfContent";

type Params = { uid: string };

export default function Page({
  page,
  footer,
  header,
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
        <Header header={header.data} data={data.bannerdata}/>
        <main className="">
            <SliceZone slices={page.data.slices} components={components} />
          <AffixTop />
        </main>
        <Footer footer={footer} />
        </>
    );
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<Params>) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params!.uid);
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: { page, header, footer },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: false,
  };
}
