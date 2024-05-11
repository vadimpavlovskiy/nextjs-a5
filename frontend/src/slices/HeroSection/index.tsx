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
      className={`min-h-full flex relative max-sm:flex-col-reverse`}
    >
      <div className={`w-6/12 min-h-[${slice.primary.heroimage.dimensions?.height}px] flex flex-col justify-center gap-y-4 bg-light text-secondary pl-10 p-14 max-lg:w-full`}>
        <h1 className="text-6xl uppercase font-bold font-raleway">{slice.primary.heroheading}</h1>
        <p className="text-xl text-primary">{slice.primary.heroparagraph}</p>
        <button type="button" className="border-2 bg-primary rounded-lg border-primary border-solid duration-300 text-light py-4 px-8 w-1/2 hover:bg-light hover:text-primary active:text-light active:bg-primary active:border-3">{slice.primary.herobutton}</button>
      </div>
      <div className={`relative w-6/12  min-h-[${slice.primary.heroimage.dimensions?.height}px] min-w-6/12 max-lg:w-0 max-lg:min-h-0`}>
        <Image fill={true} sizes="100vw" quality={100} src={String(slice.primary.heroimage.url)} className="object-fill max-sm:rounded-2xl" alt={''}  />
      </div>
    </section>
  );
};

export default HeroSection;
