import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SectionProvidedServicesHome`.
 */
export type SectionProvidedServicesHomeProps =
  SliceComponentProps<Content.SectionProvidedServicesHomeSlice>;

/**
 * Component for "SectionProvidedServicesHome" Slices.
 */
const SectionProvidedServicesHome = ({
  slice,
}: SectionProvidedServicesHomeProps): JSX.Element => {
  return (
    <section className="w-full p-10 justify-around">
      <p className="text-blue-700 font-bold">{slice.primary.sectionsmalltext}</p>
      <h2 className={`w-1/2 capitalize text-5xl font-bold my-4`}>{slice.primary.sectionheadingtext}</h2>
      <div className="flex flex-wrap justify-between md:gap-10 lg:gap-20">
          {slice.items.map((item:any) => {
            return (
              <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500  border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
                <PrismicNextImage className="w-1/4 group-hover:scale-125 group-hover:-translate-y-5 duration-500" loading={'lazy'} field={item.serviceimage} />
                <h3 className={`w-1/2 text-center text`}>{item.servicedescription}</h3>
              </div>
            )
          })}
          
      </div>
  </section>
  );
};

export default SectionProvidedServicesHome;
