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

export default function MarcoDaTriFronteira() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDymNSCdeFnzcobL1Lz9DfaXwfMdu1iuxRe_eQjclJWHotf8xDk7J4xu8JJk2zk16JHy9Vjudv99Tobs8dzj9HnOGbVGUV2l0HqggMll2PJjTIBDehWCppe6FTZZRgsHwJPwSogUJjOvPeZe8kBlP0MW96xJKvARYxfMbVXXhYpKBmnehyKQ0SqA2gAXpjjuIIsd3qbiY0MkhYrVuDsk8rs0Bp72SK2s4vPNtV8PRwENomUsYzUnxMiXqxAHAZB7zGZ8iRQstW6nLtjDgNUEAL4DVeAezvaBJMPapwHRLC5xfh221aHNPN6PLpdGb4lbkeHst4f4zRSe1BX_UUe5YFVIKjWIq6WfsM2yIakZ2A6J1cMflQvvFiLC6bAT7pcURK_Tj4pHLgc5X2WWakQgYyBfDvISkuG6FL2oJNYF6vREh9YLf_V0qx1CviP-1c0hZ1qcX6OfSdV9hHZ-vzjXJXVoE2zcqDPEFTUml_jKcEYvk_zF-v02bHMCpVf00-TDhhNiDJJ3K2_mpWewl752nudNvFc9kHWqn76EgcfHkEMxhM2tiHH917mJic4kG5reUTQLnTD5JAVA0c6pqd92s8CJR8mcRgMyTgcFxlWiWtsiO4NHNWbnjAGk2W0avdPlUHYdm8oddDxULq89_UMt9hntIMtMokL3LTXNHHNHrlGpQX5GRYBrsSlDSdr1xNM5f-Su5aZ6LAEFZwH4E5liLHcRLefAnsovcM68fAt3oFV9gCU5Z_PE3gX8EirnW8X0WR7uMLOj9A0US5VGn2nuSdhode8BUFh5k7dyWHvwm_g2CvyGESYJKH5P0DrOXIC9DChJm7rNn8_M80bNmrrgBHkRSF40owT14B3y2mVILgKhLb41ssKWfY68SE27Fvjk-Ycnu4ISUrxxHndSh9mJe78V9duXTqmKxvzo4gv2_Q2j7rNgShClYdJ3XPefee_A05cGwg3TIQt21ec9POdHtIwgg-1ebkUziUvzKftje8GarHOejwFIqDg0gJG1N3pAbnBgzTqxgZO3Ir2pmW7vyufS6YL6P_yC-qofLASEoLYtbYt_kmNAuGCzWDblMHwmExybTEGPFM7hRE4p36bn7wG-z4RFsNhOTEdQLAOi5usIQHEcUTWDoWhIWj1cjiL06elUjhF66iVUSYbjI9-utAsBjxoNETlhbmg6ycuJUBc-FnVmfdgYKbYRDq8JtY53dulgC-oJEUxkIaXIOIk1ZWWwSsStLa8RBhWTxPc4NHc7ggWA-X-Ql6wyW5QVExjYNpBniIBlGbYJIRB8crkE5t_uWc7v3N9F1mdNIZrPssSkpGyNttitgVs7UWmN_UxslHmhkwBzALEpKJrlFYhSNrJIg92eehbEnukXlgX9NZ7t0Td3eYTbvuulA4-eahjgolJwpE9-P5ezu6c-TWLvhd-XTOiVMU2farx-Yyy7XZvmBQeLzM6E4U1Fqc2a5cKTzQcu5TrhWgQj7tf7ojjKbiITwifOf-YXOSFRAe4VPMM3hwuzaSqHtIa0IW3BGGOvKlHVeKg6lSrsFbqT2mfT4qw23QGQ5tWAWQWpwwEhO4llPFTCZar_Xj_tDw=w1920-h937",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyshmQo8DeBE8n_85VGjjIROeNOwkr8rS_5mZDpVhuZeMS6ZClWuDLyQTAAtQZLZsC6XsdNiJVRKIkcraFA00MT-tQWslctwHEBoBkzwl9uUsCd9A9dzBnNvCeEFevdhhqeqiwd71GdR2WeMulXtqEVoeqi438pdQ-pF-lpm6WTQQykSegQTtcVpU5nlFTTAqd2OPhGXvGz_eUa13Ls3EOyxgbLo7ZHU3MIglMiB9xQPW5enZKfL_-b5MGBJwHiGiJIL95bgniikMhSWhEL-q3ctwG27fw89MTL-w-DKZlHFQxLvGGg9IRILccO8Qul4MwTMxUj2c9cU0TI7bQ2oQc85j9TfsZVcgxbYSEWPk5f8DbdMFf9hlBi2C7ZIz3t5gcLaf5GqPMPE9opwi_Vz-wV99UdSr-rtWCMm57QKlE9P4qPlBIXAyr4n0bbe-X4FMJZW77TP0d1Hk4H7WZ4uEB6NZDvYmikMHSWmhhP6gILGaOPrPoBJTfeL6x-dVrMwfCPDF4SXjvoerB6t7y9Jik39wkeKgQ2Nzz3ZhA0_b8AcPsP7pc0JQdEpdP2F6B9CqWgVvnoDGAEm0WJhqAMAJpsobghY4ztnHLIl8A_ZtsFtj8_iLYPmjc11A3Z2h0iIZTMmFUnOVV5ONMfIeC4kCdl0T4-rVdIJIeODMDUS8LbS7iKLV7hxZF3Ergmo6Mrpk9FwhhpPkGvwUNG5pm38iAyb8ilYRHBzkli3mUu5xnOWL1Z9N6JtDBiCmYuAgb_PxSOjMW8308BRrW7Iwd31VGs3_5y9j91sLzXtLXUTeHvbsdoBjTLjbs8nP3pYqZWOY9nl5-sYqkCGddlugPsXSwjHxALa3l1QAMHWZrwCOyq40x5-l-VyhU80HE_Dkl1wmCnuAQb1QNWJlhQhBXMof1ggZ1VQsZS0Ovs3T7ig17PBR_9eJPLI3utUUFcAiS_IqUk5witDcUoYBe-RYpalIJfVDpw81dUHbA4vV-qYmd3GBpfqepJGL2KxYxC3T_FFH5okTNU1-oTGb6KIekM9D1EJy90ZwudplNLZKF6g7nCrZVbME8eP4U6T3B67nnrEO88IIIUXYJT7YmupH5FNAe9O5-kbeSeg0191kzZCCHuVKc_HrldIbPZ6EGv8s59e-VQ5l6xrnXV2-xz9J6hfNBjeQmEmsSwL6-03ZExDJsqeYuvYy78SA9cKli3DejlRE92Gm-mM5WqRg0bIUHrQeYx9UqzQnf8aEPyG2M9wmKhv23hP2-T6vuHemtduG8Aybwje7jyOrNiJmyazcXdfwUmAyiFXXgpKVambp5WkUx0fPxznsBrAkaPoqfS3MSO3HIpNfqGZa4XwFGthbQT3hNI9bezyOg1_mI94O0hP8FeLJRJkp2asxfL01KRGoLHJpdKSodWCDS-R5M1diFmk8gmaEN_5q4tK7fM1tKufnO3tZLFyH0FJNMQKJzhTm7JAAqAGGhk1uRLgBlkoR2G2eP8ksniuFPkdp8SBJQtPge9Sxd_GqkzCbComreuXtzK_ekhjtkhr82wJPkg4Kc6GWCZelvAEVm-NrlymI6LmSzrUauS_wlibTt07g=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyz_ZebHeb3l6iUOMz8d8b3g2YFq6aPwNz81CUh8mI4GqidT9Sqq6ycOIset8hf9TIO_0MCcBCXREGGVzcJn6dEshr8RQVvgHgJxeKfr0tQXCHtR3Hl00C1CKKuZgV8GwP_B6kw14czN1rQnlYQU--V05u5u0Q-15ONvCfJWUFiFkG4FesV4NJbbe5CPASJRsOWhHr2nwd_jMIACRVixvopFv0ZYofzLvUQpVhfq3Ry_Rq8HVShj6f_6jlHsdoKZlCDAfi8MFMooXA1cV7xr-__fd9IwrAnih7Zf5JeR9C2aQu-V9Fu90pieFKJevtKrr6f1Aevr2fClr1wIUEvLgZG4aHcn2AzNQM7_dx9iLYbmVOZAp7ywstxFYRTCtJXij-UTKd024DNINyp6fOAnESXmU41LrrZrwmhJgtn07HkA4eWMROMlQOoG0OEFLMdNQebaeeVzTk9Ztk133UasGiyYZFS9MM8OoQlXHUZvcmZkx3F6fT_pqCPwGxyuqc7Z109V6Nblf5jNpB5vRA8Og_jgN8NP73WD6dx6WxXlYjJY16duDKktLjvOu1WiUsD2_5mOxCeHOk68n6WHZvljP0I7RaCEJh9v4BqS9G0qtUf01YGW6JcKH25znRV73aXuuvmPJFzbp05jI5sxWB6HeOqe5uDdrqWaC-le9gSUBESx1e-lyhjDMgo8AI_ACcTZpGt3GrCa8GiecdohlpQZ7g1uv6y3fjNo6yXO41ybVc6_JRGULTaDdOm6vt5JFiFG8rWW84842gF_VCdaWJVP1f_OYi2zs94K9qLcsEG234Q9hFSC3zWbJCYH1G7TRgPk2vSPLRb6x9WSA2CGh32SQKSV4AuuaAvAINE1twZXLS8rOWKnOmCMISw3u7mHUjd97Vy14llXu3ZSsqxvO_gL4MwzBWk1wA2N6VujfmN13x1_WAMODz_Py__dDgkiDKO_Fs8srRMkoL6BKd24f99InyNkQNDKLwuk9LS8ePhtNIUOeldt_3U9afFYoLpx2EsZDLRWr26LzcK9BDNXyA7_q5KDAKspzHV_i8IDD1XetUVc5Fxy5qnpslx-rw7kO2FcK2gOKeYAxnW60Aa3K7GCdu6B1xhLTmKyo8ypQZHxRNm_Ykg0oOg-9V52B0cLQ8ZDSVN2UwHplKbJQ375izfZ6W-M0IdjQ-artW5wdz2FBNG1eKOWOsnnnYn2Sg6I_9GI4vzIZlWpogasQcWVBscbFwvXeCnxSUX1-w7ujkJdkjFE8HdMtQ9ZzJBOcH2-7zO6XKmP68C7jyXGd8rFKP7SFVf8SmCXSzD8MHhW9i6xnYuGc5wTbF_ItHEK_IC4ZMr18b2VlJj3yn7Xg5XeblZ9TXsUH4enXYP3wVy-CibGB8sTjW1GiOSfmVFCXaHv1_ocw86EY7o-SnQMrVACRcsNcXd4G5WbFPPek5jg0A0Ud8Z-zV-09gL5i12yJeImPun7UNnJYIGtBVJE2N5z8NF7EuQEWlzKn09wT_ut_b3QeE2VwTwu5v7rJ-SfbkHwbt-9ycYnPBgg4oUzafPGSRhhBkBSK2Dhep-wqkR0PkAryMApG4fhzASR89lZg=w1365-h880",
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
        <h2>Marco da Tri-Fronteira</h2>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Marco da Tri-Fronteira"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d223.645863490695!2d-53.63912317317146!3d-26.25082726636046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09bb403ef1f07%3A0x2a2974f6e1ac1a17!2sMarco%20da%20Tri-Fronteira!5e0!3m2!1spt-BR!2sus!4v1696719712626!5m2!1spt-BR!2sus" />
      </div>
    </>
  );
}
