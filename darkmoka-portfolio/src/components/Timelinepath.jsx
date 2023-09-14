import React from "react";

function Timelinepath({year, title, discription}){
    return(
        <ol className="flex flex-col md:flex-row sm:ml-4 relative border-l border-green-200 dark:border-stone-700">
        <li className="sm:ml-2 mb-10 ml-4">
           <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5  border border-white dark:border-stone-900 dark:bg-stone-700" />
           <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-5 py-1 font-semibold text-white dark:text-stone-900 bg-green-500 dark:bg-white rounded-md">
                 {year}
              </span>
              <h3 className="text-lg font-semibold text-grey-900 dark:text-white">
                 {title}
              </h3>
           </p>
           <p className="my-2 text-base font-normal text-grey-900 dark:text-stone-400">
              {discription}
           </p>
        </li>
     </ol>

    )
}

export default Timelinepath;