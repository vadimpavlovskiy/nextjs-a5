import { clsx } from "@mantine/core";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Simplify } from "prismicio-types";

/**
 * Props for `BigTabs`.
 */
export type BigTabsProps = SliceComponentProps<Content.BigTabsSlice>;

/**
 * Component for "BigTabs" Slices.
 */
const BigTabs = ({ slice }: BigTabsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full p-10 flex flex-col"
    >
      <div className="w-1/2 mb-4">
        <p className="font-raleway font-bold mb-8">{slice.primary.smalltext}</p>
        <h2 className="text-5xl font-nunitosans">{slice.primary.textheading}</h2>
      </div>
      <div className={clsx(`w-full grid grid-cols-3 auto-cols-fr grid-rows-${slice.items.length % 3 + 1} gap-x-4 text-light`, 
      {'grid-cols-1': slice.items.length === 1,
       'grid-cols-2': slice.items.length === 2,
       'grid-cols-3': slice.items.length === 3,
       }
       )}
       >
        {slice.items.map((item:Simplify<Content.BigTabsSliceDefaultItem>, index:number) => {
          return (
            <div className={clsx("group p-6 duration-300 rounded-2xl col-span-1 hover:text-white hover:bg-light", {})}>
              <p className="font-bold font-bebas text-7xl">{item.numbertab}</p>
              <h3 className="font-bold font-bebas text-2xl text-tertiary group-hover:text-white">{item.headingtab}</h3>
              <PrismicRichText field={item.texttab} />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default BigTabs;
