import Header from "@/layout/header";
import client from "client";
import {PortableText} from '@portabletext/react';
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'

// Fonts imports
import { Epilogue } from "next/font/google";
import { Inter } from "next/font/google";
import Link from "next/link";
import slug from "slug";

// Here we gonna describe how to render response from Sanity CMS

const builder = imageUrlBuilder(client);

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const myArticleView = {
  types: {
    image: ({value}:any) => {
     return (<Image key={value._key} className={'my-2'} style={{width: '50%', borderRadius: 12}} width={800} height={800} alt={'twenty'} src={builder.image(value).url()} />)},
  },
  block: {
    h1: ({children}:any) => (<h1 id={slug(children[0])} className={`${epilogue.className} text-4xl pb-4 font-bold`}>{children}</h1>),
    h2: ({children}:any) => (<h2 id={slug(children[0])} className={`${epilogue.className} text-2xl py-4 font-bold`}>{children}</h2>),
    p: ({children}:any) => {return (<p className={`${inter.className} py-2 text-xl`}>{children}</p>)},
    ul: ({children}:any) => (<ul className={`${inter.className} flex flex-col gap-y-2 py-2`}>{children}</ul>),
    li: ({children}:any) => (<li className={`${inter.className} gap-y-2 py-2`}>{children}</li>)
  },
  list: {
    bullet: ({children}:any) => <ul className={`${inter.className} flex flex-col gap-y-2 py-2`}>{children}</ul>,
    number: ({children}:any) => <ol className={`${inter.className} flex flex-col gap-y-2 py-2`}>{children}</ol>,
  }
}



// Article markup

const Article = ({page}:any) => {
  
  const test = page.body.filter((data:any) => {
    if(data._type === 'block' && data.style.includes('h')) {
      return data;
  }});
  
  return (
    <main className="w-full">
    <Header isCoverImageVisiable={false} header_text={page.title} paragraph_text={`Test parahaphs`} image_url={builder.image(page.mainImage.asset._ref).url()}/>
    <div className="flex">
      <article className={`flex flex-col mx-10 my-6 py-10 w-3/4 ${inter.className}`}>
        <PortableText value={page.body} components={myArticleView}/>
      </article>
    </div>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug:any) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context:any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const page = await client.fetch(`
    *[_type == "page" && slug.current == $slug][0] 
  `, { slug })
  return {
    props: {
      page,
    }
  }
}


export default Article

