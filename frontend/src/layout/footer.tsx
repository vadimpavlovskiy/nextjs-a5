import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-screen bg-sky-500 text-white max-md:flex max-md:flex-col max-md:gap-y-10 max-md:px-10 max-2xl:flex max-2xl:flex-wrap flex-shrink">
    <div className="max-md:flex max-md:w-full max-md:flex-wrap max-md:justify-around max-md:py-5 max-2xl:flex max-2xl:w-1/2 max-2xl:justify-center flex-grow">
        <div className="min-sm:w-full max-md:w-full max-md:flex max-md:flex-col max-2xl:w-1/3 p-10">
            <h2 className="text-xl font-bold min-w-10 max-2xl:pb-4">Company</h2>
            <ul className="flex flex-col gap-y-4">
              <li className="cursor-pointer "><Link href={'#'}>About Us</Link></li>
              <li className="cursor-pointer "><Link href={'#'}>Privacy Policy</Link></li>
              <li className="cursor-pointer "><Link href={'#'}>Contact Us</Link></li>
            </ul>
        </div>
        <div className="min-sm:w-full max-md:w-full max-md:flex max-md:flex-col max-2xl:w-1/3 p-10">
            <h2 className="text-xl font-bold max-w-10 max-2xl:pb-4">Social</h2>
            <ul className="flex flex-col gap-y-4">
              <li className="cursor-pointer "><Link href={'#'}>Twitter</Link></li>
              <li className="cursor-pointer "><Link href={'#'}>Instagram</Link></li>
              <li className="cursor-pointer "><Link href={'#'}>LinkedIn</Link></li>
            </ul>
        </div>
     </div>
  <div className="max-md:flex max-md:gap-y-7  max-md:items-center max-md:w-full max-md:flex-wrap max-md:justify-around max-2xl:flex max-2xl:w-1/2 max-2xl:justify-center flex-grow">
  <div className="min-sm:w-full max-md:w-full max-md:flex max-md:flex-col max-2xl:w-1/3 p-10">
      <h2 className="text-xl font-bold max-2xl:pb-4">Legal</h2>
      <ul className="flex flex-col gap-y-4">
        <li className="cursor-pointer "><Link href={'#'}>Security</Link></li>
        <li className="cursor-pointer "><Link href={'#'}>Privacy</Link></li>
        <li className="cursor-pointer "><Link href={'#'}>LinkedIn</Link></li>
      </ul>
    </div>
    <div className="min-sm:w-full max-md:w-full max-md:flex max-md:flex-col max-2xl:w-1/3 p-10">
      <h2 className="text-xl font-bold max-2xl:pb-4">Pages</h2>
      <ul className="flex flex-col gap-y-4">
        <li className="cursor-pointer "><Link href={'#'}>Sitemap</Link></li>
        <li className="cursor-pointer "><Link href={'#'}>Privacy</Link></li>
        <li className="cursor-pointer "><Link href={'/articles'}>Blog</Link></li>
      </ul>
    </div>
  </div>
  <div className="max-md:flex max-md:gap-y-7  max-md:items-center max-md:w-full max-md:flex-wrap max-md:justify-around max-2xl:flex max-2xl:w-full max-2xl:justify-center">
    <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-2xl:flex max-2xl:flex-col max-2xl:w-full max-2xl:items-center max-2xl:flex-grow">
      <p className="text-xl max-md:w-full max-md:text-center border-t max-md:pt-10 max-2xl:w-1/2 max-2xl:text-center max-2xl:pt-10">Best Dynamics Solution Company</p>
      <div className="text-center py-10">
        <p className="text-sm italic">© 2022-2023 A5 Solution</p>
        <p className="text-sm italic">All rights reserved</p>
      </div>
    </div>
  </div>
  </footer>
    )
}