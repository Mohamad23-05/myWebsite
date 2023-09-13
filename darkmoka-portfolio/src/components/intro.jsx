/*eslint no-unused-vars: ["error", { "args": "all" }]*/

import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center p-8 pd-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">DarkMoka</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">This is my entrie Bio!</p>
        </div>
   )
}

export default Intro;