import { KeyTextField } from "@prismicio/client";
import React from "react"

interface ICoverImage {
    header_text: KeyTextField | undefined,
    paragraph_text: KeyTextField | undefined,
}

const CoverImage = ({header_text, paragraph_text}:ICoverImage) => {
    return(
        <div className="flex w-full flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-white max-md:text-center">{header_text}</h2>
      <p className="text-3xl w-full text-white text-center ">
        {paragraph_text}
      </p>
    </div>
    )
}

export default CoverImage;