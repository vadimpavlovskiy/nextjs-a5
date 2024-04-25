import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SectionTwoBlockHome`.
 */
export type SectionTwoBlockHomeProps =
  SliceComponentProps<Content.SectionTwoBlockHomeSlice>;

/**
 * Component for "SectionTwoBlockHome" Slices.
 */
const SectionTwoBlockHome = ({
  slice,
}: SectionTwoBlockHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col p-10 bg-gray-100"
    >
      <div className="flex flex-col items-end">
        <p className="text-blue-700 font-bold">{slice.primary.sectionsmalltext}</p>
        <h2 className={`capitalize text-3xl font-bold my-4`}>{slice.primary.sectionheadingtext}</h2>
      </div>
      <div className="flex flex-wrap gap-20 justify-between">
        {slice.items.map((item:any) => (
          <div className="w-1/5 drop-shadow-2xl border-solid duration-500 border-2 flex  gap-y-3 py-5 flex-col items-center justify-center rounded-xl  bg-white hover:scale-95 hover:border-sky-500 max-md:w-full max-xl:w-1/3">
          <PrismicNextImage className="w-1/4" field={item.logo} width={100} height={100} loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text`}>{item.description}</h3>
        </div>
        ))}
        
      </div>
    </section>
  );
};

export default SectionTwoBlockHome;
