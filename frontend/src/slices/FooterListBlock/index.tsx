import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterListBlock`.
 */
export type FooterListBlockProps =
  SliceComponentProps<Content.FooterListBlockSlice>;

/**
 * Component for "FooterListBlock" Slices.
 */
const FooterListBlock = ({ slice }: FooterListBlockProps): JSX.Element => {
  console.log(slice)
  return (
    <div className="flex flex-col items-center p-10">
    <h2 className="text-xl font-bold min-w-10 max-2xl:pb-4">{slice.primary.footerlisttitle}</h2>
    <ul className="flex flex-col items-center gap-y-4">
      {slice.items.map((item) => {
        return (
          <li className="cursor-pointer text-center"><PrismicNextLink field={item.linktopage}>{item.linktext}</PrismicNextLink></li>
        )
      })}
    </ul>
</div>
  );
};

export default FooterListBlock;
