import React from "react";

function Title({children, id}){
    return(
        <h1 
            id={id && id}
            className="text-2xl font-bold underline underline-offset-8 decoration-2 mb-5 text-green-600 dark:text-beige">
            {children}
        </h1>
   )
}

export default Title;