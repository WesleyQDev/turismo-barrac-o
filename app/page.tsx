import Image from "next/image";
import Banner from "./components/banner";
export default function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <h2>Guia turístico Barracão</h2>
        <p>
          Se você está visitando Barracão uma das primeiras coisas a se fazer é
          encontrar algum lugar para ficar, neste guia iremos lhe mostrar
          algumas opções de hospedagem e pontos turisticos e receptivos do nosso
          municipio.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.2881473403963!2d-53.63732782458313!3d-26.252309977047062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a34679f895d%3A0xd99cfe554f595799!2sPrefeitura%20Municipal%20de%20Barrac%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1696619216833!5m2!1spt-BR!2sbr"
          loading="lazy"
          className="maps"
        ></iframe>
      </div>
    </>
  );
}
