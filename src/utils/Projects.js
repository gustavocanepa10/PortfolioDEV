import event from "../assets/event.png";
import keeper from "../assets/keeper.png";
import movie from "../assets/image-movie.png";
import encurta from "../assets/encurta.png";
import refund from "../assets/refund.png";

import react from "../assets/physics.png";
import html from "../assets/html-5.png";
import js from "../assets/js.png";
import text from "../assets/text.png";




export const projects = [
  {
    name: "EventCheck",
    description:
      "Aplicativo mobile para gerenciamento de eventos com autenticação biométrica, envio de imagens e localização via GPS, além de uma interface moderna.",
    image: event,
    linkGitHub: "https://github.com/gustavocanepa10/my-app",
    skills: [react, html, text],
  },

  {
    name: "EncurtaURL",
    image: encurta,
    description:
      "Um encurtador de links simples e funcional, desenvolvido com React.js, que consome a API da Bitly para gerar URLs curtas de forma prática e rápida.",
    linkGitHub: "https://github.com/gustavocanepa10/Encurtador-Front",
    linkDeploy: "https://encurtador-front-livid.vercel.app/",
    skills: [react, html, text],
  },
  {
    name: "Keeper",
    description:
      "Keeper App é uma aplicação web inspirada no Google Keep, projetada para criar e armazenar notas de forma simples e intuitiva, foi um projeto que aprendi state.",

    image: keeper,
    linkDeploy: "https://keeper-two-blue.vercel.app",
    linkGitHub: "https://github.com/gustavocanepa10/keeper",
    skills: [react, html, text],
  },
  {
    name: "The Movie Tracker",
    description:
      "TheMovieTracker é um projeto prático em que exercitei o consumo de APIs com fetch, o uso da Context API do React e a construção de uma interface moderna.",
    linkGitHub: "https://github.com/gustavocanepa10/TheMovieTracker",
    linkDeploy: "https://the-movie-tracker-psi.vercel.app/",
    image: movie,
    skills: [react, html, text],
  },

  {
    name: "Refund",
    image: refund,
    description:
      "O Refund é uma aplicação web, feita com o objetivo de ser simples e intuitiva, é destinada a facilitar o processo de solicitação de reembolsos.",
    linkGitHub: "https://github.com/gustavocanepa10/Refund",
    linkDeploy: "https://refund-nine.vercel.app/",
    skills: [html, js, text],
  },
];