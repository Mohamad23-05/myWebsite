import React from "react";
import timeline from "../data/timeline";
import Timelinepath from "./Timelinepath";

function Timeline(){
    return(
        <div className="flex flex-col md:flex-row justify-center my-20">

            <div className="w-full md:w-7/12">

                {timeline.map(path => (
                    <Timelinepath
                    year={path.year}
                    title={path.title}
                    discription={path.discription}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;