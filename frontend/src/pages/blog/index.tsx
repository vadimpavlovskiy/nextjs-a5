import * as prismic from '@prismicio/client'

import { GetServerSidePropsContext, GetStaticPaths, GetStaticPathsContext, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { PrismicImage, PrismicLink, PrismicRichText, SliceZone, useAllPrismicDocumentsByType } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Header from "@/layout/header";
import { ArticleDocument } from "prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { clsx } from '@mantine/core';
import Footer from '@/layout/footer';


export default function Page({
  blog,
  header,
  articles,
  page,
  footer
}: InferGetServerSidePropsType<typeof getServerSideProps>) { 
  const {data} = blog;

  const router = useRouter()
  return (
    <>
      <Head>
        <title>{blog.data.meta_title}</title>
        {isFilled.keyText(blog.data.meta_description) ? (
          <meta name="description" content={blog.data.meta_description} />
        ) : null}
      </Head>
      <Header header={header.data} />
      <main className="w-full flex flex-col justify-center mt-40 p-10 px-10 gap-4">
        <div className="w-full flex flex-col items-center gap-5">
          <h1 className="text-5xl font-bold">{data.blogTitle}</h1>
          <p className="w-1/2 text-center text-gray-600 text-base">{data.blogDescription}</p>
        </div>
        <section className="w-full flex justify-between flex-wrap">
          {articles.results.map((article:ArticleDocument) => {
            const {data} = article;
            return (
                <div key={article.id} className="flex flex-col w-1/4 bg-gray-100 p-4 rounded-lg">
                  <PrismicLink href={String(article.url)}>
                      <PrismicNextImage className="rounded-xl h-56 pb-4" width={400} height={200} field={data.articleimage} />
                    <span className="text-xs">Published: <time suppressHydrationWarning>{data.articlepublishdate}</time></span>
                    <div className="pt-2 pb-3 h-16 overflow-hidden text-ellipsis whitespace-wrap">
                      <h3 className="text-xl ">{data.articletitle}</h3>
                    </div>
                    <div className="text-ellipsis overflow-hidden whitespace-wrap h-20">
                    <PrismicRichText components={{
                      paragraph: ({node, children}) => {
                        return (
                          <p className="text-sm text-gray-600  w-[full]">{children}</p>
                          )},
                        }} field={data.articleexcerpt} />
                        </div>
                  </PrismicLink>
              </div>
            )
          })}
          {/* <button onClick={()=>Router.push(`?page=${page + 1}`)}>Next Page + </button> */}
        </section>
        {articles.total_pages !== 1 ?
        <ol className='flex gap-4'>
        {[...Array(articles.total_pages)].map((_, index) => (
          <li className={clsx('border-solid border-2 text-black py-2 px-4 rounded-xl hover:bg-primary hover:text-white', {'bg-primary text-white': Number(page) === index + 1, })} key={index + 1}>
            <Link href={{
              pathname: '/blog',
              query: index + 1 === 1 ? {} : { page: index + 1 }
              }}>{index + 1}</Link>
          </li>
        ))}
      </ol>
         :
         ''
          }
      </main>
      <SliceZone slices={blog.data.slices} components={components} />
      <Footer footer={footer}/>
    </>
  );
}

export async function getServerSideProps({previewData, query: {page = String(1)} }: GetServerSidePropsContext) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });
  // The query fetches the page's data based on the current URL.
  const blog = await client.getSingle("blog");
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const articles = await client.getByType('article', {page: Number(page), pageSize: 1})
  return {
    props: { blog, header, articles, page, footer },
  };
}