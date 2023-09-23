import React from "react";

function PortfolioItem({title, imgUrl, stack, link}){
    return(
        <div className="border-2 text-brwon-700 border-green rounded-md overflow-hidden dark:border-beige-500">
            <img 
            src={imgUrl} 
            alt="Portfolio"
            className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-bold">{title}</h3>

                <p className="felx flex-wrap space-x-1 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block p-1 font-semibold border-2 border-green rounded-md dark:border-beige-500">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;