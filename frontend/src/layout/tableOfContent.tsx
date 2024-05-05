import { slugify } from "@/lib/slugify";
import { clsx } from "@mantine/core";
import { SliceZone } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { useScroll, motion } from "framer-motion";
import { ArticleTextSliceSlice } from "prismicio-types";
import { useEffect, useRef, useState } from "react";

const TocNavElement = ({ node, children, level, activeId }:{node: any, children: any, level: any, activeId: string | null}) => {
    const id = slugify(node);
    return (
      <li
        className={clsx("transition-colors list-none font-bold", {
          "pl-2": level === 1,
          "pl-4": level === 2,
          "pl-6": level === 3,
          "text-slate-300": id !== activeId,
          "text-primary": id === activeId,
        })}
      >
        <a className="block" href={`#${id}`}>
          {node.text ? node.text : children}
        </a>
      </li>
    );
  };

const TableOfContent = ({slices}:{slices:SliceZone<ArticleTextSliceSlice>}) => {
    const { scrollYProgress } = useScroll();
    const headingsList = useRef<any>(null);
    const [headings, setHeadings] = useState<any[]>([]);
    const [activeId, setActiveId] = useState<null | string>(null);
    const scrollRef = useRef(0);
    useEffect(() => {
        if (!headingsList.current) return;
    
        const firstHeadingId = slugify(headingsList.current.childNodes[0].textContent);
  
        setActiveId(firstHeadingId)
        headingsList.current.childNodes.forEach((heading:any, index:number) => {
          const id = slugify({text: heading.textContent});
          const text = heading.textContent;
          if (id) {
            setHeadings((headings:any) => [...headings, { id, index, text}]);
          }
        })
      }, [headingsList]);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = entry.target.getAttribute("id");
              if (entry.isIntersecting ) {
                setActiveId(id);
                scrollRef.current = window.scrollY;
              } 
              else {
                const diff = scrollRef.current - window.scrollY;
                const isScrollingUp = diff > 0;
                const currentIndex = headings.findIndex(
                  (heading) => heading.id === id
                );
                const prevEntry = headings[currentIndex-1];
                const prevId = prevEntry?.id;
    
                if (isScrollingUp && prevId) {
                  setActiveId(prevId);
                }
              }
            });
          },
          {
            rootMargin: "96px 0px 0px -96px",
          }
        );
    
        const observeHeadings = () => {
          headings.forEach((heading) => {
            const currentHeading = document.getElementById(heading.id);
    
            if (currentHeading) {
              observer.observe(currentHeading);
            }
          });
        };
        if (headings.length) {
          observeHeadings();
        }
    
        return () => {
          headings.forEach((heading) => {
            const currentHeading = document.getElementById(heading.id);
    
            if (currentHeading) {
              observer.unobserve(currentHeading);
            }
          });
        };
      }, [activeId]);

      return (
        <>
        <h3 className={`text-2xl font-bold pb-4`}>In this article:</h3>
                <div className="flex gap-x-4">
                <motion.div className="w-2 h-auto bg-primary rounded-2xl origin-top" style={{ scaleY: scrollYProgress }} />
                <ul className="flex flex-col gap-y-4" role="list" ref={headingsList}>
                {slices.map((slice:ArticleTextSliceSlice) => 
                  slice.slice_type === 'article_text_slice' && (
                    <PrismicRichText key={slice.id} field={slice.primary.articletext} components={{
                      heading1: ({node, children, key}) => (
                        <TocNavElement node={node}
                        children={children}
                        key={key}
                        level={1}
                        activeId={activeId}
                        />
                      ),
                      heading2: ({node, children, key}) => (
                        <TocNavElement node={node}
                        children={children}
                        key={key}
                        level={2}
                        activeId={activeId}
                        />
                      ),
                      heading3: ({node, children, key}) => (
                        <TocNavElement node={node}
                        children={children}
                        key={key}
                        level={3}
                        activeId={activeId}
                        />
                      ),
                      paragraph: () => <></>,
                      preformatted: () => <></>,
                      strong: () => <></>,
                      em: () => <></>,
                      listItem: () => <></>,
                      oListItem: () => <></>,
                      list: () => <></>,
                      oList: () => <></>,
                      image: () => <></>,
                      embed: () => <></>,
                      hyperlink: () => <></>,

                    }} />
                ))}
                </ul>
                </div>
        </>
      )
}

export default TableOfContent;