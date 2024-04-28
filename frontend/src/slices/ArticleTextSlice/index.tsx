import AffixTop from "@/components/affix";
import changeWidthAndHeight from "@/lib/changeDimensions";
import { slugify } from "@/lib/slugify";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Props for `ArticleTextSlice`.
 */
export type ArticleTextSliceProps =
  SliceComponentProps<Content.ArticleTextSliceSlice>;

/**
 * Component for "ArticleTextSlice" Slices.
 */

const linkResolver = (doc:any) => '/' + doc.uid

const ArticleTextSlice = ({ slice }: ArticleTextSliceProps): JSX.Element => {
  
  return (
    <article
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex flex-col my-4 relative`}
    >
          <PrismicRichText field={slice.primary.articletext} components={{
    heading1: ({ children, node }) => <h1 className="text-3xl" id={slugify(node)}>{children}</h1>,
    heading2: ({ children, node }) => <h2 className="text-2xl" id={slugify(node)}>{children}</h2>,
    heading3: ({ children, node }) => <h3 className="text-xl" id={slugify(node)}>{children}</h3>,
    paragraph: ({ children }) => <p className="paragraph">{children}</p>,
    list: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
    oList: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
    embed: ({ node, children }) => {
      const iframeUpdated = changeWidthAndHeight(String(node.oembed.html));
      return (
    <div data-oembed={`${node.oembed.embed_url}`}
      data-oembed-type={`${node.oembed.type}`}
      data-oembed-provider={`${node.oembed.provider_name}`}
      className="py-2 "
      dangerouslySetInnerHTML={{ __html: iframeUpdated }}
      >
    </div>
    )
    },
    hyperlink: ({ node, children }) => <a className="text-purple-500 hover:text-purple-700" href={`${node.data.url}`}>{children}</a>,
    label: ({ node, children }) => {
      return <span className={`${node.data.label}`}>{children}</span>
    },
    image: ({ node, children }) => {
      // const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
      // const img = `<img src="${node.url}" alt="${
        //   node.alt ? node.alt : ''
        // }" copyright="${node.copyright ? node.copyright : ''}" />`
        return (
          <Image className="py-4 max-w-full" src={node.url} alt={String(node.alt)} width={node.dimensions.width} height={node.dimensions.height} />
            // linkUrl ? <a href={`${linkUrl}`}>{img}</a> : img
      )
    },
  
    }
  }
/>
    </article>
  );
};

export default ArticleTextSlice;
