import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full min-h-full flex"
    >
      <div className="w-3/5 min-h-fit flex flex-col justify-center gap-y-4 bg-light text-secondary pl-10">
        <h1 className="text-6xl uppercase font-bold fotn-raleway">{slice.primary.heroheading}</h1>
        <p className="text-xl text-primary">{slice.primary.heroparagraph}</p>
        <button type="button" className="border-2 bg-primary rounded-lg border-primary border-solid duration-300 text-light py-4 px-8 w-1/3 hover:bg-light hover:text-primary active:text-light active:bg-primary active:border-3">{slice.primary.herobutton}</button>
      </div>
      <div className="relative w-3/4 min-h-fit">
        <Image width={1112} height={938} src={String(slice.primary.heroimage.url)} alt={''}  />
      </div>
    </section>
  );
};

export default HeroSection;
