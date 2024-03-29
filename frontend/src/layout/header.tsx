import { Burger } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "@mantine/core";
import logo from '../image/bigger-logo.svg'
import CoverImage from "@/components/cover-image";

interface IHeader {
  header_text: string,
  paragraph_text: string,
  image_url: string | StaticImageData;
  isCoverImageVisiable: boolean;
}
export default function Header ({header_text, paragraph_text, image_url, isCoverImageVisiable}:IHeader) {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
  
    return (
        <header style= { isCoverImageVisiable ?  {backgroundImage: `url("${image_url}")`, backgroundSize: 'cover'} : {}} className={`w-screen flex flex-col justify-center ${isCoverImageVisiable ? 'h-screen' : ''} bg-cover] bg-blend-darken m-0`}>
    <div className="flex justify-center w-full p-10 ">
      <nav className="navigation bg-white fixed top-0 items-center border-1 duration-300	text-black drop-shadow-2xl w-full flex px-10 py-6 justify-between z-10 hover:rounded-b-lg">
        <Link href={'/'}><Image width={12} height={12} className="w-12 h-12 duration-500 hover:rounded-xl hover:border-1 border-blue-500" src={logo} alt="a5 Logo" loading={"lazy"}/></Link>
        <div className="flex gap-x-2 max-md:hidden max-md:flex-col  max-md:rounded-xl max-md:w-full">
        <ul className="flex list-none gap-x-4 max-md:flex-col max-md:gap-y-5">
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2"><Link href="/">Services</Link></li>
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2"><Link href="/">Media</Link></li>
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2"><Link href="/">FAQ</Link></li>
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2"><Link href="/">Contacts</Link></li>
        </ul>
      </div>
      <div className="hidden max-md:block">
        <>
        <Drawer className="text-3xl" opened={opened} onClose={() => setOpened(false)} title={ <Image width={12} height={12} className="w-12 h-12 duration-500 hover:rounded-xl hover:border-1 border-blue-500" src={logo} alt="a5 Logo" loading={"lazy"}/>} padding={'sm'} size='sm'>
            <ul className="flex justify-center list-none gap-x-4 max-md:flex-col max-md:gap-y-5">
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2 text-3xl"><Link href="/">Services</Link></li>
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2 text-3xl"><Link href="/">Media</Link></li>
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2 text-3xl"><Link href="/">FAQ</Link></li>
          <li className="transition-transform decoration-white ease-in-out delay-150 hover:underline hover:decoration-blue-400 decoration-2 text-3xl"><Link href="/">Contacts</Link></li>
        </ul>
        </Drawer>
        </>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title}/>
      </div>
      </nav>
    </div>
    {isCoverImageVisiable ? <CoverImage header_text={header_text} paragraph_text={paragraph_text}/> : null}
  </header>
    )
}