import { ArrowRight } from "lucide-react"
import { Skill } from "../Skill/Skill"


export function Project({project}) {
    return (
        <div
           
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
                        
                    {project.skills?.map((skill, index) => (
                      <Skill key={index} src={skill} />
                    ))}
                    


                    


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
    )
}