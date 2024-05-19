import { Burger } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "@mantine/core";
import logo from '../image/bigger-logo.svg'
import CoverImage from "@/components/cover-image";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { HeaderDocumentData, HomeDocumentDataBannerdataItem, Simplify } from "prismicio-types";
import { GroupField } from "@prismicio/client";

interface IHeader {
  data?: any,
}
export default function Header ({data, header}:{data?:GroupField<Simplify<any>>, header:Simplify<HeaderDocumentData>}) {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    return (
        <header className={`w-screen flex flex-col justify-center mb-24`}>
            <nav className="navigation text-black font-bold fixed bg-white top-0 items-center border-1 duration-300 drop-shadow-2xl w-full flex px-10 py-6 justify-between z-10 left-0 hover:rounded-b-lg">
              <Link href={'/'}>
                <PrismicNextImage width={12} height={12} className="w-12 h-12 duration-500 hover:rounded-xl " loading={"lazy"} field={header.logo} />
              </Link>
              <div className="flex gap-x-2 max-md:hidden max-md:flex-col  max-md:rounded-xl max-md:w-full">
                <ul className="flex list-none gap-x-4 max-md:flex-col max-md:gap-y-5">
                  {header.navigation.map((item:any) => {
                    return (
                      <li className="transition-transform font-bold text-xl decoration-white ease-in-out delay-150 hover:underline hover:decoration-light decoration-2">
                        <PrismicNextLink field={item.link}>
                          {item.label}
                        </PrismicNextLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
      <div className="hidden max-md:block">
        <>
        <Drawer className="text-3xl" opened={opened} onClose={() => setOpened(false)} title={ <PrismicNextImage width={12} height={12} className="w-12 h-12 duration-500 hover:rounded-xl hover:border-1 border-primary" field={header.logo} loading={"lazy"}/>} padding={'sm'} size='sm'>
          <ul className="flex justify-center list-none gap-x-4 max-md:flex-col max-md:gap-y-5">
        {header.navigation.map((item:any) => {
          return (
            <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2 text-3xl">
              <PrismicNextLink field={item.link}>
                          {item.label}
                </PrismicNextLink>
            </li>
          )
        })}
          </ul>
        </Drawer>
        </>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title}/>
      </div>
      </nav>
    {/* <CoverImage header_text={data ? data[0]?.bannerHeader : ''} paragraph_text={data ? data[0]?.bannerParagraph : ''}/> */}
    </header>
    )
}