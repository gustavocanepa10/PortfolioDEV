import React from "react";
import { ArrowRight } from "lucide-react";

import movie from "../../assets/image-movie.png";
import keeper from "../../assets/keeper.png";
import event from "../../assets/event.png";
import react from "../../assets/physics.png"
import typescript from "../../assets/typescript.png"
import html from "../../assets/html-5.png"
import css from "../../assets/text.png"
import refund from "../../assets/refund.png"
import js from "../../assets/js.png"









const projects = [
  {
    name: "EventCheck",
    description:
      "Aplicativo mobile para gerenciamento de eventos com autenticação biométrica, envio de imagens e localização via GPS, além de uma interface moderna.",
    image : event,
    linkGitHub: "https://github.com/gustavocanepa10/my-app",
  },
  {
    name: "Keeper",
    description:
      "Keeper App é uma aplicação web inspirada no Google Keep, projetada para criar e armazenar notas de forma simples e intuitiva, foi um projeto que aprendi state.",

    image: keeper,
    linkDeploy: "https://keeper-two-blue.vercel.app",
    linkGitHub: "https://github.com/gustavocanepa10/keeper",
  },
  {
    name: "The Movie Tracker",
    description:
      "TheMovieTracker é um projeto prático em que exercitei o consumo de APIs com fetch, o uso da Context API do React e a construção de uma interface moderna.",
    linkGitHub: "https://github.com/gustavocanepa10/TheMovieTracker",
    linkDeploy: "https://the-movie-tracker-psi.vercel.app/",
    image : movie
  },

  {
    name : "Refund",
    image : refund,
    description : "O Refund é uma aplicação web, feita com o objetivo de ser simples e intuitiva, é destinada a facilitar o processo de solicitação de reembolsos.",
    linkGitHub : "https://github.com/gustavocanepa10/Refund",
    linkDeploy : "https://refund-nine.vercel.app/"
  }
];

export function Projects() {
  return (
    <div id="projetos" className="projects-container">
      <h1>Projetos</h1>

      <div
        className="project-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1e1e",
              color: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              width: "280px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              alignContent : "center",
              justifyContent : "center",
              gap: "1rem",
              textAlign: "justify",
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
              {project.name}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#ccc" }}>
              {project.description}
            </p>

            

                <div style={{display : "flex",flexDirection : "column", gap : "4px", marginTop : "auto", justifyContent : "center"}}>
                    
                    <p style={{fontSize : "16px"}}>Stack utilizada:</p>
                    <div style={{display : "flex", marginTop :" 0.5rem"}}>
                        
                    <img style={{width : 30, height : 30}} src={react} alt="" />
                    <img style={{width : 30, height : 30}} src={html} alt="" />
                    <img style={{width : 30, height : 30}}  src={js} alt="" />
                    <img style={{width : 30, height : 30}} src={css} alt="" />
                    


                    


                    </div>

                    
                

                </div>
                
           

            <div style={{ display: "flex",marginTop : "auto", justifyContent: "space-around", alignContent : "baseline"}}>
              <a
                href={project.linkGitHub}
                target="_blank"
                style={{
                  justifyContent: "center",
                  cursor: "pointer",
                  width: 105,
                  height: 35,
                  borderRadius: "8px",
                  border: "1px solid azure",
                  display: "flex",
                  gap: 4,
                  padding: "6px",
                  alignItems: "center",
                  
                 
                }}
              >
                <img src="src/assets/github.svg" alt="" />
                <span>GitHub</span>
              </a>

              <a
                href={project.linkDeploy}
                target="_blank"
                style={{
                  justifyContent: "center",
                  cursor: "pointer",
                  width: 105,
                  height: 35,
                  borderRadius: "8px",
                  border: "1px solid azure",
                  display: "flex",
                  gap: 6,
                  padding: "6px",
                  alignItems: "center",
                }}
              >
                <span>Visitar</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
