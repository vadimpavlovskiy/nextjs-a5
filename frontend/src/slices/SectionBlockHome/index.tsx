import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `SectionBlockHome`.
 */
export type SectionBlockHomeProps =
  SliceComponentProps<Content.SectionBlockHomeSlice>;

/**
 * Component for "SectionBlockHome" Slices.
 */
const SectionBlockHome = ({ slice }: SectionBlockHomeProps): JSX.Element => {
  return (
    <>
  {slice.variation === 'default' && (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary text-black"
    >
      <div className="section-1 p-10 flex-row-reverse">
      <p className="text-light font-bold">{slice.primary.sectionSmallText}</p>
        <h2 className={`w-1/2 capitalize text-5xl font-bold my-4 max-lg:w-full`}>{slice.primary.sectionHeadingText}</h2>
        <div className="flex items-center justify-between gap-6 max-lg:flex-col-reverse">
            <PrismicNextImage className="w-1/2 rounded-xl duration-500 max-lg:w-full hover:scale-95" width={500} height={500} loading={'lazy'} field={slice.primary.sectionimage} />
          <div className="w-1/2 flex gap-y-10 flex-col max-lg:w-full">
          <PrismicRichText field={slice.primary.sectionText} />
        </div>
        </div>
      </div>
    </section>
    )}
    {slice.variation === 'reverse' && (
      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary text-black"
      >
      <div className="section-1 p-10">
      <p className="text-light font-bold">{slice.primary.sectionSmallText}</p>
        <h2 className={`w-1/2 capitalize text-5xl font-bold my-4 max-lg:w-full`}>{slice.primary.sectionHeadingText}</h2>
        <div className="flex items-center justify-between gap-6 max-lg:flex-col-reverse">
          <div className="w-1/2 flex gap-y-10 flex-col max-lg:w-full">
          <PrismicRichText field={slice.primary.sectionText}/>
        </div>
          <PrismicNextImage className="w-1/2 rounded-xl duration-500 max-lg:w-full hover:scale-95" width={500} height={500} loading={'lazy'} field={slice.primary.sectionimage} />
        </div>

      </div>
      </section>
    )
  }
  </>
  )
};

export default SectionBlockHome;
