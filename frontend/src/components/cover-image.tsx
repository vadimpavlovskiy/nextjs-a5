import React from "react"

interface ICoverImage {
    header_text: string,
    paragraph_text: string
}

const CoverImage = ({header_text, paragraph_text}:ICoverImage) => {
    return(
        <div className="flex w-full flex-col justify-center items-center">
      <h2 className="uppercase text-gray-100 text-3xl font-nunito max-md:text-center">{header_text}</h2>
      <p className="text-5xl w-full text-white font-raleway font-bold text-center ">
        {paragraph_text}
      </p>
    </div>
    )
}

export default CoverImage;