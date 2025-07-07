import React from "react";
import styles from "./styles.module.css"
import cafe from "../../assets/cafesemfundo.png"

export function About() {
  return (
    <div id="sobremim" className={styles.container}>
      <section >
        <h1>Sobre</h1>

        <p>
          Meu nome é <span>João Gustavo</span>, sou apaixonado por tecnologia e
          desenvolvimento desde que comecei a explorar esse mundo da tecnologia. 
          <br/>
          Estou cursando <span>Engenharia de Software</span> e, nos
          últimos anos, venho me dedicando a criar soluções que façam sentido na
          prática com <span>código e boas ideias</span>. Já atuei como
          estagiário em desenvolvimento de software , trabalhei em projetos pessoais e
          sempre busquei aprender fazendo. Eu estou começando a pegar meus
          primeiros trabalhos como freelancer para ajudar pessoas e negócios com
          soluções digitais. (Ah, e sim — também sou movido a café 😄)
        </p>
      </section>

      <section className = {styles.img}>
        <img className="img" src={cafe} alt="" />
      </section>
    </div>
  );
}
