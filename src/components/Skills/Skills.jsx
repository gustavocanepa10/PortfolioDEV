
import React from "react"
import react from "../../assets/physics.png"
import typescript from "../../assets/typescript.png"
import html from "../../assets/html-5.png"
import css from "../../assets/text.png"
import node from "../../assets/nodejs.png"
import js from "../../assets/js.png"

export const skills = [
    {
        image : react,
        title : "React"
    },
     {
        image : typescript,
        title : "Typescript"
    },
     {
        image : html,
        title : "HTML"
    },
     {
        image : css,
        title : "CSS"
    },
     {
        image : node,
        title : "NodeJS"
    },
     {
        image : js,
        title : "Javascript"
    }
]





export function Skills() {
    return (
        <div id="skills" className= "container-skills" >

          
                <h1>
                    Skills
                </h1>

                <div className="grid-container">

                    {skills.map((skill) => (
                <div className="skill-card">


                    <img src= {skill.image} alt="" title= {skill.title} />


                </div>
           )) }

                </div>
                
            

            
            
            


           
            


        </div>
    )
}