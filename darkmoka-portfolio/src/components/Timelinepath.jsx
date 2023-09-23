import React from "react";

function Timelinepath({year, title, discription}){
    return(
      <ol className="flex flex-col md:flex-row relative border-l border-green dark:border-beige">
        <li className="ml-3 mb-8 md:ml-4">
           <div className="absolute w-4 h-4 bg-green rounded-full mt-1.5 -left-2  border border-beige dark:border-brown-700 dark:bg-beige" />
           <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-4 py-1 font-bold text-off-white-500 dark:text-brown bg-green dark:bg-beige rounded-md">
                 {year}
              </span>
              <h3 className="text-lg font-semibold text-green-600 dark:text-beige-600">
                 {title}
              </h3>
           </p>
           <p className="my-2 text-base font-normal dark:text-off-white-600">
              {discription}
           </p>
        </li>
     </ol>
   )
}

export default Timelinepath;