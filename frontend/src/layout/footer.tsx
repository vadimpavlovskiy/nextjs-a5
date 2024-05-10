import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { FooterDocument } from "prismicio-types";

export default function Footer({footer}:{footer:FooterDocument<string>}) {
    return (
        <footer className="w-screen bg-light text-white max-md:flex max-md:flex-col max-md:gap-y-10 max-md:px-10 max-2xl:flex max-2xl:flex-wrap flex-shrink">
    <div className="w-full grid grid-cols-4 justify-between max-sm:grid-cols-2">
        <SliceZone slices={footer.data.slices} components={components} />
    </div>
  <div className="max-md:flex max-md:gap-y-7  max-md:items-center max-md:w-full max-md:flex-wrap max-md:justify-around max-2xl:flex max-2xl:w-full max-2xl:justify-center">
    <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-2xl:flex max-2xl:flex-col max-2xl:w-full max-2xl:items-center max-2xl:flex-grow">
      <p className="text-xl max-md:w-full max-md:text-center border-t max-md:pt-10 max-2xl:w-1/2 max-2xl:text-center max-2xl:pt-10">{footer.data.endtitletext}</p>
      <div className="text-center py-5">
        <p className="text-sm italic">{footer.data.endtextdisclaimer}</p>
      </div>
    </div>
  </div>
  </footer>
    )
}