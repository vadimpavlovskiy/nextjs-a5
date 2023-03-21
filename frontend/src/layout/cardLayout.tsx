import CardComponent from "@/components/cardComponent";
import { Epilogue } from "next/font/google";
import Link from "next/link";
const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
})
const CardLayout = ({articles}:any) => {
    return (
        <section className="w-full bg-gray-100 p-10 flex-reverse flex-row justify-between gap-y-10  max-md:flex-col-reverse">
        <p className={`w-full flex text-blue-700 font-bold pb-4 ${epilogue.className}`}>Our Blog</p>
        {articles.map((article:any, index:number) => {return <CardComponent key={index} linkTo={'articles'} title={article.title} slug={article.slug.current} mainImage={article.mainImage.asset} />})}
        <Link href={'/articles'} className={`w-full flex text-blue-700 hover:underline hover:decoration-blue-400 decoration-2 font-bold justify-end pb-4 transition duration-300 ${epilogue.className}`}>
            Browse All
        </Link>
      </section>
    );
};

export default CardLayout;