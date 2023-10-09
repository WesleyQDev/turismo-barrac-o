"use client";
import { register } from "swiper/element/bundle";
register();
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Maps from "../components/maps";
import { useState, useEffect } from "react";

export default function LosPaleteros() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.google.com/u/1/d/1yWmAabLPepjQ9_jfzKQpsy43leITCW_-=w1365-h880-iv1",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyYOxZESL9r3wXeB7xZZHUuqsH04MwAX0xkt3k9qtSsp_3dWm1-51fQtPXzdA3XqDzSlya3B6nYrTSZp9tCDvp13aiKSOi99ONDS6iFq1RIVLGFbOTCD5xAdp8sBiUWNuDbPM1-rfSNqtwJw4tRu2DRJVLVWSG2tGroms8TvelH2CMpCUwzkmzuWACGom9kQHh7WW2VqKAUH_DXUc5-na4veyz3oyV7KQpkQQdVnXep_SABMY0X8GxGybQXhoGhe22jdes6KKawlwa4uRLrzDkyjD1HiTHd1OTzWBiqBCQKOUKjc9jxkbc7wMJwx7SFS79hA5AFvJ5uVhMp9iH07r-kpezrdTL2r67OKzCnD23dCBGmdKdVEI-6bYD_9lcoLoK3PhXi8AHLVNGuArpLdoxr9EcoBn7S7pC855HnO3KisooVdB_I1uW1dtZYK1cKn3b78lgsZ8dXpb6my8JESTnVoOoZxjdEpGV9bOLJDddm4Bn2xstAcQDMrqyI7kpzpm1FQB6H8VDkjadAXB3l4CD8zM8Og4rzIJRL9NGd3UhUEtR3ysNO7VT1ko4KIX_pgozkbHDNXbVtdojL-phYa9Clg7vkm1_KQDM1Jst31KY3u77_tLXK_jeXTLP5uHH2dNI67a80iRPRjygaxHPhVbLxhTkq7MVnKUveP7cON8SmXWW07dxZoicco5C1cd3KlHSWneAHXSje7EctZvCTbdBAxhwICEnSo9pcXLO_0R_PzXZT4lFdDslXrIpucOGEAIu_juB8m20h3BzbNC9PbXpoRwVvjlbFsMDU60g0MjTTyKfk_f-_9VjjsH2MLPL7sdeKGmG6qLRziHxVOLA3LwHT75o_vFlFMDUHKlwOwyhFPtN332UVYTABT5pWIsvBdgEHVIAXhRpnRKv4_GcySnXD06AeMPihb9DesnOvY5Lf34Sb1lASSdN5OEvuxhFN7uE2izbtslWwglpVen4u8y9-pkJ4h0FObNVtWVw4iNPoXpFfI1lPrRTiMd3HJcQHRJTFmMxuMISZWYLAkWOnwnGJ4JA3ZdvujX-M5WYVLINfIw36fRsL_zLn09RuN9FuX33s6SRN6cKd3VGLHMix90PIPVSenuVxwYGHOo4PecPEjiBA_trI9TD42LWiGPh-HGH-tRMGHVapouV1QsEH9Q_fAgkkmEN6KiPh5WbF1g2Lu_YXB_fI6MdlKUziCwlhVSfSLK5krBESIB6NDQZa751cF4HTaSRrW3_6fcpiC-II6LSB9b9QAuj2H-Jls0bE8oTXWq-l0DbWthnBozHCqvGtZH9Ju4U6ktouNDyXJA522EXNstp5Zk2wuLPH4daHoZx-JV90ElMIv2P0X68R4AtbMrDokYXUICxxNQwTcCb6ARiDOW8w4r7dxqUC04HAVHADt9hpAeBK7tYFf_y2-ojg7IV1smgTx9seAqx4Q74Pn0Y002FgLvmGa2TOJvNPoSgEJYf7UN6jxquzHV5QyiT3V3TLCqLI-RTYMGytsYP4otJQxLeF9Cjqv3UtGgNjId9vazhlqIT8YJGyQgh_V3Pp-SS1sT9_kxaDl5rADeT89CHV1ZSJ-d9Drw=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.google.com/u/1/d/1C1fnSPeS6EQ7Cb1ds1XIFN8HWnsO_Sxk=w1365-h880-iv1",
    },
    {
      id: "4",
      image: "",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="conteudo">
        <h2>Los paleteros</h2>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Los paleteros"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>Telefone: (49) 99953-6683</h3>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114512.03167196561!2d-53.63402!3d-26.245399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b545a87a039%3A0x70c5115e6a41d91e!2sHotel%20pousada%20Shalom!5e0!3m2!1spt-BR!2sus!4v1696703737973!5m2!1spt-BR!2su" />
      </div>
    </>
  );
}
