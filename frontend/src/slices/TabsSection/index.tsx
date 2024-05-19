import { Tabs } from "@mantine/core";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Props for `TabsSection`.
 */
export type TabsSectionProps = SliceComponentProps<Content.TabsSectionSlice>;

/**
 * Component for "TabsSection" Slices.
 */
const TabsSection = ({ slice }: TabsSectionProps): JSX.Element => {
  const [opened, setOpened] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>(slice.items[0].tabslug);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full p-10 flex-reverse flex-row justify-between gap-y-10 max-md:flex-col-reverse"
    >
    <p className="w-full flex text-light font-bold justify-end pb-4 ">{slice.primary.tabssmalltext}</p>
    <Tabs value={activeTab} color="gray" onTabChange={setActiveTab} keepMounted={false} orientation={'horizontal'} defaultValue={slice.items[0].tabslug} >
      <Tabs.List grow className="flex justify-between text-3xl max-md:flex-col">
        {slice.items.map((item:any) => {
          return (
            <Tabs.Tab onClick={() => {setTimeout(()=>{setOpened(true)}, 1000); if(opened && activeTab !== item.tabslug){setOpened(!opened)}}} value={item.tabslug}>{item.tabtitle}</Tabs.Tab>
          )
        })}
      </Tabs.List>
      {
        slice.items.map((item:any) => {
          return (
            <Tabs.Panel value={item.tabslug} pl={'xl'}>
              <motion.div initial={{ y: -50, scaleZ: 0, display: 'none' }} animate={{ y: 10, scaleZ: '100%', display: 'block'  }} transition={{ duration: 1, type: "spring", stiffness: 100 }}>
                <div className="flex flex-col w-full p-10 gap-y-4">
                  <PrismicRichText field={item.tabtext} />
                </div>
              </motion.div>
            </Tabs.Panel>
          )
        })
      }
    </Tabs>
    </section>
  );
};

export default TabsSection;
