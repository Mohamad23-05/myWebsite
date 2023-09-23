import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio(){
    return(
        
        <div className="flex md:flex-row items-center justify-center">
            
            <div className="grid grid-cols-1 w-7/12 md:w-11/12 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;