import React from "react";

function Timelinepath({year, title, discription}){
    return(
        <ol className="flex flex-col md:flex-row relative border-1 border-green-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-500 rounded-full mt-1.5 -left-1.5 border-white"/>
                <p className="flex flex-wrap grap-4 flex-row itemsf-center justify-start text-xs md:text-sm">
                    <span className="intline-block px-5 py-1 font-semibold text-white bg-begie-500 rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold ml-2 text-brown-300">
                        {title}
                    </h3>
                </p>
                <p className="my-2 text-base font-normal text-brown-500">
                    {discription}
                </p>
            </li>
        </ol>
    )
}

export default Timelinepath;