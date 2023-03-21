import client from "client";
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CardComponent {
    title: string,
    key: number,
    linkTo: string,
    slug: string,
    mainImage: string
}

const builder = imageUrlBuilder(client);

const CardComponent = ({title, linkTo, key, slug, mainImage}:CardComponent) => {
    return (
        <div className="flex flex-col duration-500 bg-white rounded-xl p-4 max-w-sm hover:scale-105">
        <Link href={`${linkTo}/${slug}`}>
            <Image 
            width={350} 
            height={200} 
            src={builder.image(mainImage).url()} 
            alt={slug} />
            <h4 className="text-xl py-6">{title}</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti aspernatur quos assumenda accusantium voluptas, natus obcaecati sed minus sequi, deserunt, incidunt libero repellendus id quia quidem nam. In, eligendi.
            </p>
        </Link>
        </div>
    )
}

export default CardComponent