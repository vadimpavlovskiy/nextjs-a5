import CardComponent from "@/components/cardComponent";
import Header from "@/layout/header";
import client from "client";
import { Epilogue } from "next/font/google";
import Link from "next/link";

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
})
const Articles = ({articlesList}:any) => {
    return (
        <>
           <Header isCoverImageVisiable={false} header_text={''} paragraph_text={`Test parahaphs`} image_url={''}/>
           <main className="flex flex-col gap-4 w-full p-10 bg-gray-100">
            <h2 className={`${epilogue.className} text-2xl font-bold pb-4 `}>Our Blog</h2>
            {articlesList.map((article:any, index:number) => {return <CardComponent key={index} linkTo={'articles'}  title={article.title} slug={article.slug.current} mainImage={article.mainImage.asset} />})}
           </main>
        </>
    )
}
export async function getStaticProps(context:any) {
    const articlesList = await client.fetch(`
    *[_type == 'post']`)
    return {
      props: {
        articlesList,
      }
    }
  }
  
export default Articles;