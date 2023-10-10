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

export default function CapelaSaoJose() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDy5p7kDlX5Vla_Mo6tEOEjNbb2P-G5i1vvRxKIgc5-cVJNufv-X5z04arryhrYBPyI19Qkvrb-CZzIPTy-bp7mYHoK5p_pP2pP6kbbXs6ItR2_OiwFLYOxc-IRrAD205IJN4SObJMTk2dj0TiGEyW4gq5eUiTxx0bUBxtXwDLKMqoTWuumFizzgzYiqtkG-EllZ4qSDNOle0e0IWb6NHcJTBqPGMDbF3AAYfYZ6DFfWuEmVZzV9SCMLpDpwwMDR4JKRJVJGULmEUFK43Ne8lnDYeKFFrhbzjk9TlMLty2lLe4rzDvMLRnHa9ayFnC_DxCkh5-9AUL6PmPgQcVF3IqgRFl7XKyDZPqbAbMm0iPsNqZCzIhJwaCCLX_ezu3AuxiR6H43juH2eWtQAuBkUBCZoONnfUoMQq7xcwi1w6UzmY0ehThtCQ7WmyB16ZEThfc45DILr8OkH43x2eUn7NE2JSPjIEDYymyDvqdz2N7np-cTU5cMpNDueKqqYiLu8BBwjUJq7AEIZrgSp7AzXgFx9FHdKmDCPwSlHtVEC7HO8tn1MeaOLyhEJFjlt6gkY9761x2kKamsIhujtfKCf7ef6E9JVTISvPsslfeLJWO8-qq2Q1P9Cd0aAuJIvFSevOLI_cnotKiGnH3Fo1M7LQenuc6j5oSI4GQ6qty0FYohsjMZfqBWnpUYxN3Cv6Xid_LGtEvVLcgcM2WCramCtNfMCEb7wq-Ybf1-dEEr_Y_gkJTvvyMZw49I9j9djtj7h6ZfM08qligvW5fthwjrFj_NAyzGDB1Nq7COZeWqw5TgHWmdURRbupOKqc078ENh4d7CzpvZD-rY9jaY_J2n_qpZpCUZd9O5WI0EgVntpVmfb6MBQe8GDtATLoULs-mj1O2uDCtPDSmwlF3xe7Un6-Fkc6SFphfaZcpoowQfUW0qzB37B09MeOxjY5OZjjslx_ld4jVh89CTc9-gZjWt0SGS5Vw-f6xnmUotIrMnaq39RdZD3pJ1TIM7GaWQW40IK-EtDDxUFwBUbdVNC_vZXNZuknZdcsoGVhLrpp21QoB7OaWGaLorSk2_AxpaZTrZFS6vVtf-QOJjiAlaZ4pJTpf32gOr38ayL3KZbCLy0PomQSMbDtbROztlV6dmkUpvZr1hkuTLrNWC2Vyrf5HcLlQcRF4yXFwnKHMmOkNL5exreOMJlursF3uWVI9wSUC0wPrOFhoEd2CkZVfzrsqb9PruQKgilxdkUzADlC_QNfAF8m98P66Orsm0eZxYnzWZrFMjiRJqhNYsn9s-WUZpBbIyF_rKIhMX5yjG1b2k9cK2iJOmMrlFOfIuxB2wGdSfCCntDDombpghnlEhlbR7bOIcbddc98dboFfUFASfhK7oZKepnZpJgtI_rYgrakQoialOshavG8RL_xJ1UZfkga9n0R5rcZI2st0N0Z2wW5WTu5iiUyFP88s3gKFl1r5L9C5NHyjw84kz3TmRPdXUUG6IvhuiS3fU2oKX_8hXAGWvGYfnFY5Je6Ny5CbPZgnwdqlPfqQ4suCCk9cJvLrtQlY4IJle5aE_R0wWpSolPlH9BaynATzejCGUUvQ=w1365-h880",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDwENQUkyqJUv3z7f_LcwZdamh9LakDxPhPxNQLAfXjGL7zS0p0KnzjQjO_fLLVETTop9-mQBCmNBgTkRcmwUl63paLJI5kJZOEAVQ74-CAvVKpuOHgeRp_yLnaQSw8USdMtsxidiR6y35zGG34W-G4cp08awSr44fSDaXV803YoU8oBh-nPitCNl89bgj9g5Xgj749fYtXnxAoDHFG0ODCiXi4tncPJyycxgf3CxwJWeuHdcQb_4VZ_qKdJwtW-BU2YXAtSWubsUy2lYTmFbXoJJLczQPTIjvfS6ePsTYk5PA5y0CZSUMyV4VhF4FRELgAkNQjSKlhJeapBt1dcyhrIsVAeYKw9rYXQPsagZbdnxFQ7Ks5HGJszDciBLGZFFLk70p2ULk1xS2Wzb_7iIvnzrahfTYibsXs8rp4YFW2E3R9RlOzc74j4NpDKfrNGE4_sqdssLUiS9Qd4IfwbFXRwusDjZx5i4cJQ4EIJuv1mQci06EuBVTKsJNkVtmZHLStJ-or6HF-EucDfERTVdLnGTf5poB2Ql4Rul50aDO_q142zk79k6RXJ4ymxCUqkIt4F7M6ZBfwupe3Ibiws1hgKkxAJ1jcwgRP1F3NgevO314Zq68Lu-y8oHvlUzOPBvvH0xW0i1LpP7RfUu6QTu4xjZ3Uyt5P2eGWEuFxWzV9UOwbiThYjpa2kb1S7j5AxIxTk_CBTNxnduvJOIbGkTYKJ6amaAgCs81Zj-IlSR1Zobj8TnCnHdMruCLlrB3zO3ptlTwA13AZ2PUR8KMN6DJzcR59d4gou2_72Fw0b6dXpyGeAGgYBAf8JZ3MgqiXYS4Fj8XY4tsUZhdrgudFH2359wnUW0lZSJSarzeMwLjOZnRXjrXLu3AVi73XAhYygsdtpUV8VM7MDQO9t0kbBotA1teDDJVX5pMwH3uvTOpCaJTNIqLmX5j5cXjnIA-Don6fFoFRoAnWRtLSvSd4665PkFitH2wA2VfwAXJrxGa0jJD3aLrhqxhio56wnYgLIOcBtB4dCf8dY9LoiE7C9f7EKAf1BWeAnj5hIO6nrH1KA0RYmxB3qnXPwngBGJUiNR4dcjaN9kQ2-J0jMpjZlyTsuaBopX_qXLW2orWaBnPYtFBG0Szcl5XXfpzz3AlJlPQ0lcVRUQ7nkcd6UlFdwx9g3rrsBm3BZwuRlmIDnGX9WJKZsabwkzieZtWUiJWKlY81Esz0IKNKs286l6da-6CBypXLtPuhroM2yC28p7JYv_imCMXp6sGQM2qXmnivzTyERqHd796dubUgqtRXJi0SFf290tz6y1m8fH13VOFP-CdjDn-kqjlKXw2609u9y441iYcDRYbIMMaNov9rj-IV_w1Qw8XV46GXH2DgHy8q5OsWX5MDoNo8181rymf6wmjETQgSL6KRYtgSJ9GvrrjoC5z5Uwva27sj3v9nUkqfW6oWGJqwRI_zVTDz-L4wlzD2uO4Q-IhUviBdza_zV4vhlo-HpWsqlebOwWM9eoDq3tA_W1p_f3UOAJozV5ZU9YRk2rJNpLay4yuhwCxl6u1pVMqUokVlOKKN1gXOO0XYH6J-pz7F2R5COIA=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDwlczt3o7gblfFB193oPo-SwWRhyETlId81spInoW3v518VrsLjSGXk4OnfBziQs6KOe2Cjdju9XpSGbAnUxwAJDhtwm_LKV1LA1mRWkRYyuDNVhG8tsVq9fTYgXuSGK5bmrSqn6fCZjwQhA8Tfjvl3xYz0cuN5y1iNaWi6guW8KUSfOE8Z8jIYbXBYRe5pAzKlK6aH3uVVZU51EgBFql5frhwXPnM6eJVC0hiez7ChO_A087MLrYGZQlIt_GjkI6KeU0EIlfHjKUIJDn-go5YE9eSNGTBtNmAss9bQqm0KESvstoskyd-nRXCEee50YT3ibskhHrqM2lgFh0qPxG6hs_mJroHPawYFhHOaLaAJ2rClPvM16HojJftVrJO2nzBlDKdrvtuw7S4qCgX8DZSmSLaF7McdhghDuMcxvN_1JugtpHhrjGPoJrh_P_iy2vrH5iTw5pxyHjK4knoADkQwTxV7HcIOw2xhxyID5nHh58RTEyvoNuDQvKiNTExqrzGiLRfrusNlh6Cn_lL48vJvMckwnZNI8Z0_0vcbD-rl3GlHthUVfNdmsl2Hm_bi41E-Fo1JY1S121U8OJSgjbC544Kn3Uw2m7uCfB7gbObBhb-0155MrRrX5WBYd9thZU2_Vk-QEWBP3AwB6GYzxRfAdqgXkAfORfTFFMKXWky6S92xwpdoXA-SgJ8SLgLNiE7Yi2d6qz3yBFq3NPegqyQ1MjxibXNnXHl2xc7U7xUiM5aU2lUM8i4nSfVbN-0Qms9Ou13TiDWFz9QX_E5KAxEs4R_lh7iZxHJBrpqH9vuefFO4Cbo49JZjf_64H_N-m4_JfeP7Pi0-nM2Kelf46I8sDy7Ds71_N7PbGoUau7-qo1GKKDfx6jZrw2LaubMROMnu17i7eE96r8pwOBI0ozIBBGuY07k8lh3CkTcyMlXfq6aqXlNWryanliNMSAIXIQZ18T8EcvYOXP1cG_XR1VEbvqXD0qvFciwOgDfWpNUwEI_mGPnNATivxiq8LjSzHXL4flgSSk5rl_e5857HBPP3lEvFk4Rlc10MznvY1mBmR6y7hZ1ad__tlBdow0uZmrKQ_LVyj0YL6rTwH9fDghHIALKeFKHOBTzUBl6nz2uwpV7IX6b8ltFutWC0k6s4mqUNzEZCCOhPuqSNWrfHPh0_KVOan7yT1sENpBZZ2im3zpyf5XG1U7DiTdb5r8preuDmKHaQQouTxwttz2XMUODwgPaSprJOVDndUxOSkgGQMTb2t3kxyj4HuP7IETvoCa966vBvKnkG8cKjNX6morw1BzFjFS1TM09bKLIh2-aOO029bUazzkn8Xj5hMMVh_Pv_t7ef4vRzKKvJGTjr9aIAInH2SzQ5faKDRADX76sB8z67Bru178ErOuMbCULsOaOhX3eikIDnL_2HQp4Cj3ryEqqiDcQ3zhNV36fII0OU4uQLpMPVmdWhVKhULcRHfIocmf3OBRNUYoVuXMHsxZAsQ0zzMy-xoXxrJCHdPUJEMAb5vpUr2HReuO7pM8JJHvWxk6lVTKTyjQZE4son8Ee35Zg7zNI5BcEc8fdJ6PtBnPvCDUhRMc3tdA=w1365-h880",
    },
    {
      id: "4",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzlzL6oIz-I7ODwORI4HPqJOJXQEeUH1j9ewDnLvryts_XL2Smr9XhOwM-Oy2AR6FX7JA9RYqD-I1DtEx-YoA9_opliiiiaiIIDTG6lfQfl9RE6dLbNoKDc2k4lTIkcJs04feOhTf9f_vNjW5uJoQHjo61ZzONyrFXZNUr5Lwgo0x8nu1BF26Hhci-ou4aHuHWeJs-G3c4v-v3BdZMKUG5VnwaKpBZ73sP85IV7vglyZ_7qh9YhMaZLIkHJTvW6jHBSExl31FwuvsmoH0O-ZAAbPmz8ncIqoZ4i4Ki4mDmm3EHE4bHhPX4H3_Vpc9NT9_soxj_ftzTp1S_l4DnlEoyna5v2VIbHsolbE_2R5to5ebS3xq3Q4MQjqc4YxT4xbVn9eRpznxU3yfN_qvc5WlO7UffkJob1D3tMzuQO3UQC_5O6aWNezU5L9heoGQY8fAkMF4yuSkEL_pUTHwpIdubW9KouS6uvbrmtS0qllVxUx0dvFdMbCqQB14_HVoIkhZgNcLVqJX5Zx21z59Om9bIjgeALBQH8ie4hkGydRqZdE6zbJyBzObGRqYXjQxA_zrJEBqwvi5vsyxEDU8LSIG2abUSTLWs8MaVKYeA7ZLR8__KASV2mxL0vQRItf32Mdb0k5mV3PjEoEtST37ujQUy9h9nVc-szUlD7ABb39qmxSLyMtDdaHTpzuv5RiL2jUizazp860Kllr5rCVpU7SUGn7g9yzGU3rJW5atEtsAllnRuy9G-M9epjSm27g89vqMLsp8FuI2Ked7UI9Nc7Av6lkNzcCfEs6Z4HbmZpS46x_jUtNWJWpB4vfkOgCuIeWwtyFemDmcLUcdSeMKxkBP6Fyuzx-6ILIapzADcUUzKCSCbXzJ0i-wpjBJAwI-34SU7p8uNnaspWcnsQUOzKwt4CZckBhgmSOzP0umLEiH5qezyF48o_ma42UGpaH9Z9q-bYB4_MU5ppuM13PZYz8oFSqshoze6TNWsZADvdMdQ405QJI0B4SUS7JOBzwIqh8fNLVsSZCjp7p6Tpgce0SbvgBgrmF-o_ZZ8FLp8evok7Wnjhl9GZZ1jy7FtJts5izdUPxhyUyjvGmD03FGXIrJ40tYqkV0U3RRs3OtR_kx7hkAfqJt1_CSWdiZcVIcK7OOibMLgiEZk5Jd9F_KigIfWMS5pQBJHaskRUL7_OsQn6TM15Y_0Yqzsdx3XSLaR-d6l80GD_SEcEQL_4tI9f0Gz3mtFVPnqQtN-paUDaVG5bLOeHCGyQTk4sJUkiWx5Wr2MGFq3jUKDj4l8NdpTvXwYbucbyqeBJzkxnZrMQM1EwPkaP8IgdnPfio3s2GCtewruGmUW00sKKHGDY_WBXAlYKmxQB9YL4uTQMyuFoA0--J-lOfK9HkkDxQ6ufNB-MIbQN5EVS6nRfpNyI-AqtrBaLGkh8FBDwWmkH9IoWU96FwQu7ikzII8TfUUYQ1Kypl4fOQVylbrQYNwlA9uyEiuxOnKI2s2KAon9zg8e2bj1p9ZHtvxKiMq1RYtmu5OZ3UhawI2htKvtd2qr0O6wflL2izeb3_pclklbLqPUC0xGpUfaMLsF9aI7N6g=w1365-h880",
    },
    {
      id: "5",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyJRQhtWtdeD7Nu8UF0Bye8S-5kIfUz19VnEtdPymKpf6KOqRiGHFGeFXuFPSYh374qOFBOyt-nHOm4SOPTgDPmXDtPDzqF8Qnin8oxzmunHpCG_rHcTfdRe_Uc8sKU0J7LjtrcAhhMiJXs2jT-af-ZakRYkVLmh_JSW5BuUyEECdIi9r-J3Z5wTgp9mQnvZC67oyXPmAi4UMY-ie1ej4hpaA6y9A8yaZWL2tLsluzfnvgvo_dXaht1UXY_nAuy7YU06ja_uHotVUUbewvqbne1hAFzi39bPk2hUR9JKZwgZ8VT1KH5N1o9_yjY1OW9EX0CV7sDmOZTbd6Gg4N_R3YzyIxFz9EP6XvlSBugBX2ODGEFquWgbI7n6OUbbduiWuPaYLrRtPFlg0LwNWTOXBroEcJMmEdqjrz7AV4eCySx4ovISHt6U5OdjBsrK8X0kP5-HdKJPCmoOLDwC-mmGynz8bfxUp-6qC9gtSvCV5_FUmzOL8gZ5leOk_4OVML8PSl6RoPu_Np4ipCl-bNsZIt-PqkAhVPPEd70v1Zl-D-cJyEK9gD6u5sMJ0uqW_ns5H0sMxzbmUgw_u3u92-y65BArcGlq8ZFiRKWH9yT0jMCOk89tGPk9kxEHOGLig0nOgkEjZdiRGbH1mVl7pNbS1Giv4RwkXLMBPhzj_tpZlloV6jNiCAlXx9U2TgpPu4z4bM8pyUVdYiioa2DC06k1HewmPOo6hreIQWOXk92uY6tbCgj2E5EPL3Wgb79NyQlopip9nsh_J07q9CgKuXe0GO1hIg2nwUFg_b7-2hw0AkZjgbolAsEm2tcbj4j5xjdaQe7ZiiHGHhLF0Ry6dmwc1wLhxXAB39wU3E3vQZW2jpUCgstZbZRS3TP4DKpeFpJ6xGFmHBU_YRhh4ITRgNWKerAk6LyuA_PoP6O5bO36ol2ijfih4U-NMyokT5iyAT8vvH1Pc3YhMv2KzOeX8gkTtmSqgDQJ9-brfzh0mOg1HF371Lp2QmU4GVTxTwpCorDMNq9OwUUf-PeTNMppGUVKBOchDR6Oeqpm6yNsKbbZkAFZ_Pe9vTGGc9TGc7ZOYFJPjf3LJTrPEflPD_gRxihDGE0wM-zS3B6cuammMuoenaGSco-N0EMxsNucuyZfODGqrE5puiLlJTpA6dbm5sLcQR51lBsj6P5dMugF5FzgDeOjZiUi3ZHMa5y-LFx93QBigPTWlA3FLWRUgF7dZrSpCeaTL0MRH-KPQFdNT2msooyKNSVaFqvNtfWY4w1yuUwGmqrLHJwK_zoWN5S3rp-T_w05S2MC8fSL6CWl_dBAsPb9uMCi4yzFlH6zu4oEJlQCV2xHXnxC8-ASep-VRznAXigDqwefXulaPPHVQKhtdOm9-EwIMdRVQTnal1veiFUIytOqtTAb02XvcEIYI2Pm0ea3Q3JHz2lr3qWh8X9HZev6OJWXMXnrzizA104B-znoV0NdIgkNEpJGWLbsYDEcwbXksaN_8dJArd00yQBjAOqXQ7J9EMSftuYa2JAU_zo1N7JGooAmAw0-CG0WA-wsSMnlFvJmBWQ0VEM_G-Hqzs8SG6YPjNGVmveNg=w1365-h880",
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
        <h2>Capela São José</h2>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Capela São José"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114526.61088786623!2d-53.582276!3d-26.2306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09ac32626bb8b%3A0xcaf4b5110ebe5589!2zQ2FwZWxhIFPDo28gSm9zw6k!5e0!3m2!1spt-BR!2sus!4v1696720141749!5m2!1spt-BR!2sus" />
      </div>
    </>
  );
}
