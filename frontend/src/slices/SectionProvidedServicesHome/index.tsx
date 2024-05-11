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
    <section className="w-full p-10 justify-around bg-secondary text-black">
      <p className="font-bold">{slice.primary.sectionsmalltext}</p>
      <h2 className={`w-1/2 capitalize text-5xl font-bold my-4`}>{slice.primary.sectionheadingtext}</h2>
      <div className="flex flex-wrap justify-between max-sm:gap-4 max-md:gap-2 max-lg:gap-10 xl:flex-wrap md:gap-4">
          {slice.items.map((item:any) => {
            return (
              <div className="w-1/4 cursor-pointer group py-10 bg-primary drop-shadow-2xl border-solid text-black duration-500 border-2 border-primary flex flex-col items-center justify-center rounded-xl hover:scale-95 hover:text-white hover:bg-light hover:border-tertiary max-md:w-5/12 max-sm:w-full max-sm:gap-y-10 md:w-5/12 lg:w-1/5 md:gap-4">
                <PrismicNextImage className="w-1/4 group-hover:scale-110 group-hover:-translate-y-4 duration-500 bg-light rounded-2xl p-1 hover:fill-white" loading={'lazy'} field={item.serviceimage} />
                <h3 className={`w-1/2 text-center text-xl`}>{item.servicedescription}</h3>
              </div>
            )
          })}
          
      </div>
  </section>
  );
};

export default SectionProvidedServicesHome;
