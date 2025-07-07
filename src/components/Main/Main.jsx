import React from 'react';
import styles from './styles.module.css';
import react from "../../assets/react-logo.png";
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import gitHub from "../../assets/github.svg"
import email from "../../assets/email.png"




export function Main() {
  return <main id='inicio' className = {styles.main} >






    <section >

      <h1>
        João Gustavo
        
        
      
      </h1>
      
      <p>
        Desenvolvedor Full-Stack
      </p>

      
      <h1 style={{fontSize : "20px", marginTop : "2rem"}}>
        Entre em contato
      </h1>
      <ul>
        <li>
          <a  href="mailto: gustavociscotto@gmail.com" target='_blank' title='Email'><img style={{width : 25, height : 30}} src={email} alt="Email" /></a>
        </li>
        <li>
          <a  href="https://github.com/gustavocanepa10" target='_blank' title='GitHub'><img src={gitHub} alt="gitHub" /></a>
        </li>
         <li>
          <a  href="https://www.linkedin.com/in/joao-gustavo-ferreira-canepa/" target='_blank' title='Linkedin'><img src={linkedin} alt="linkedin" /></a>
        </li>
         <li>
          <a  href="https://www.instagram.com/gustavocanepa/" target='_blank' title='instagram'><img src={instagram} alt="instagram" /></a>
        </li>
      </ul>


     

      


      







      

     

    </section>
      
      <div className= {styles.image}>

        <img className='img' src= {react} alt="icone react" />

      </div>


   

      

    


    





  </main>
}

