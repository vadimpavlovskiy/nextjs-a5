import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled, asLink } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Header from "@/layout/header";
import { PrismicNextImage } from "@prismicio/next";
import { ArticleDocumentData, ArticleTextSliceSlice } from "prismicio-types";
import { slugify } from "@/lib/slugify";
import { clsx } from "@mantine/styles";

import { motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import TableOfContent from "@/layout/tableOfContent";
import AffixTop from "@/components/affix";

type Params = { uid: string };


const Article = ({page,
  footer,
  header
}
  :InferGetStaticPropsType<typeof getStaticProps>) => {
    const {data} = page;
    return (
      <>
      <Head>
          <title>{page.data.meta_title}</title>
          {isFilled.keyText(page.data.meta_description) ? (
            <meta name="description" content={page.data.meta_description} />
          ) : null}
      </Head>
     <Header header={header.data} />
      <main className="w-full flex mt-40 gap-4">
            <div className="w-2/3">
                <div className="relative mx-10">
                  <PrismicNextImage className="w-full rounded-xl bg-white" field={data.articleimage} />
                  <div className="flex flex-col w-full absolute bottom-0 pb-4 px-5 text-white font-bold backdrop-blur">
                    <h1 className="text-gray-100">{data.articletitle}</h1>
                    <p className="text-gray-100" suppressHydrationWarning>{(new Date(String(data.articlepublishdate)).toLocaleDateString())}</p>
                  </div>
                </div>
                <div>
                  <SliceZone slices={data.slices} components={components} />
                </div>
            </div>
            <div className="w-1/3 h-full max-h-screen overflow-y-auto flex flex-col flex-grow relative">
              <div className="fixed pr-10">
                <TableOfContent slices={data.slices} />
                </div>
          </div>
          <AffixTop />
      </main>
      
    </>
      )
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<Params>) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const page = await client.getByUID("article", params!.uid);
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');

  return {
    props: { page, footer, header },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("article");

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: false,
  };
}



export default Article

