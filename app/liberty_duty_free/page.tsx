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

export default function LibertyDutyFree() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxPWjvTkf1L8rC8IaqoIEKjZ5VmwzY_DW4KuDP8J3u6yvF-eRtm-9aV0APQMNUpGkd3lyzb4DCYbaCS1rHjHisgqn_IDOgkjDiQfSGGmIl9K0GvZqIGA0n_hNiKG1wZr46Vm-mfuZ9sBjRIoQ_cZPl2pjeman6TeCE97zkDRAjVreAYLtTBK05QlozHX1tlR4mGeZfONoUOKMrSH5BQvx8rF_PQe1dcZk-LapyGRYLcqRd77myRdZHy8XKRuX5AjB3LnAUSFaJiBXl9BIB3Kh8_bEssWjEU-gPzyKCGHl6JGF87kF-C4FgbQwMcUEnanSZSFjDyL__ihjKriTWCghgOVeIcTOIrMIhc_IIXnci-J-Ij7lcH-5ytnXEI9w2u_JpOyXOHYunMn5yRud2xfx59Pr0BFICYWONCzxGhJtMdBodQzF1yQfbxWdUqhKG3j36NjlWPWPyov8-rgSeWHpCeWJo2agPOMSeDK5to8rKsmYq9ai94haPw7QlwnIvL_voP7f6rB3vVydLmft5Y1EiPkv5pp3uqD6B-Rx5qayyt6jtdfQpZpvKvTIWdwEG3UTwuSXgLW4o16agMY_OcooPWIVb7BYKqto0wPFQK1X7EVVncWuNaRWAuMvID6C2OUbR2qSH3XIias_I6YgBHEg75K452sgffy6idP3JhlUSaqmhcCd2WkumuPjl0Ty2Yz6lYkpvHEhy_TLqgSvOmHavuFMON-XySQp_j_DlY8Md8DxrrFa5MP_x85eQr1SlZvQZS2UQ7MvWaTIF6kdn5LJ6vLYT0cUEes1bF_0mSKiwAmBWmDRJPK6POQ-4L8UrPsFu8HvKj30K3RbL50nQk0LWcTVisnTqrEbx-_VAs5oX4C2DihdVEXRHByM9FoAFzd8DsagWkzOqIYkFy8T-xlUoJ8KXpuwH_7425EgmWrM3_sDiGI2uPtL_fXad_hqNpdvjH8_AVNM7s3oOqtJu2-FhTegQCZL881wktYXoz1x1naYqtRSGdpf3uEY-dmgZOsEZIfI8kJswXs3AjDkJ5UT5T7AV4ztZNMWdI6dzjhiqGlrUA1dCQmD8O9JLwWJGLiKKkUynfIY2f0O2QB6HnrQ_h92HZgM3Ow3sBS3XhQiFOTEH_qMQJ-8PwYbW8pzMm4vaqOAUafFfQ6ZCp4j00-hfblMnP60RLW091SjF0NNc4P8kD8iqYxyyONjr_gda0fjAApxJ2yDvqFbH7eN2EY7wWUvODoVyqdflKY0utKuzOoxVisT5N8LwRMx9ZhgLIlfhndc0rurS2Stk-bruB4Xh0myy5EeO9KvWcTmek6hFVh-wTaILFcq0eLWadzaeHv6iC59LhVNBC9cO1rFVOjBP3nytjbBHBa2nhR97wjmzsRXarCjGV_WtAvVmzuyyBLUxvAsdZXddVmiqCC_i-BGkzO3eVbt7vYUvqbOFhQM8G0mJMCIpLkjlu7nUghO5wkBDolQFU_V1n0iG6qNYoa3ZZs-M-Gxyvt7BGclwuV0aSyU1cq9hRulIS3ZlutkP0emLHUSkSehstjt8mEpcS60tO3ZyjFwFVK2IswF_yAQWoEDsC3ER3ozuyLA=w1365-h880",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzqX66to0cuVSzt4PhN4dqyNBGnZj7KgNObpz8L3QN5ciRQG4OESHpfC1xcpaS07dwKYp39oIe6Z2KAX1OU0i2BEoe7Io7NBBHWo8iBkgVIb_-4AIGZvQf492FzjWGrj5HL_WRXIwKRhLXWm8fM82m8fu7Pe4ldmYxGx9WThLwOrBufjZzTUMgDTjgWUjZLQ27dK_vqiEcyNH4KCPLLHN_bLKjDbKrrs_2oIyfAE_H42f2K7rdL3zvzP975cF63c9-ujA-DIjEb9sbbANyofhoVx_AuvyL88rONR5PlmZjzJvzqcX7aKORoDNFAVQ8NI7iSGofOjpOzitUo9XxOQyFJ0fxGFJcPsm0LA5oIEibaUTvcXk69pMgBDlwLJFlHDryThLOO8ywY1rkuXjwqQ5DlaGEF3obV6GAqcm2j8I1DdfpLWVgyqMogDd91NpkvTSU7sAKMfcLXTPzsP0DI113NMPtswMQXmdpIs9VQ3UMVoSRGX1TMRWD1UNfBnOq4cI9bsxQtVey-c249KgdaoDW_5peEYNoPyBUNv5T3QaklM5AGfqhQ80G86kad3BxPhVcGKfLa6Bfj-C1KcHoTIQuAWKoUdjpLty4BI4-C3Yr-J2ZiZhmbi820bSnmRj30eUWNWVHLia_hQWWmpF2uoViW1fu9F6hip6NlJ8rXkKyH4fbocxRrL4aVQB2kxQUa7SUbsWNLKp5pqilzTAUs153UeYpOlZ-Ie_3hbrMWrKMO10C8khcg9qHW5aGfs3Nmw88jqBDzsYR1fQqGWRCmSVmW9h4VX5g-KaLUBsLRfKlJ7U5i_u1jWKM71CrP1U2M03pYn4rDjQtrQDB512jLIgbQcHZLccl5rwxtwm6ohe--0F1xfsfu4zOp6c7oROFQxq9mV21Y8qD-9ZvAvCnPDlegM3cSzFg_Ti3F41wQIHVpz_n8dMUp8_Rd29KA2d6oxVOhViYTZI2IlpHd0v1hYr1DqFcY7gkzhkZ5hAodqluytkU2UnlJTxu4fTjGr_BncqAOunOmr4ME9Q_1B-RwwqkoKrLiitXeNmEmkJjpDz4AwPzq7KuD-yT9SbI8Vgr437MgG21-paWmfszMrqvs-z7-QbDCV8fCQ_29Gm-UNFosU1zaE3b8WkmQj9-ByBzugXOL1EwK9zE0K3HUaCslJbpnsrkwKZqWcP_5j5sN83SH9gOuG8IMX1W0SUlUhV-Un4P9nt1nnXsx_d40kvvN5AInXUH3IUxhTI9DkRyHHKyvSv73fEAqOL25jZgZFK_CE21yvfjccTypjZNm9Hkf44EgBhxjvnUCrM6ZB5ZNtoelj6BhF83puFUM9oUmjWpzYg4fPvyV8B2Q9t9CWJZVVPM7snV_TyWwkz5pGZ9i6DzEl7m6vRPpzk384f13HA1SJcyvCVaXm_OZVFWAgid-NPMyoTaf-j_TxHGNyrdJ0i3xCV6AjmXyUl_WJGgObKUAkSngvdo5nexq8mjTaJpqrshEq11uT7rO6unRoIE0PqnAqamH5s7XIUQ-tyyEq1KFvW-3N4HaP_xbBFP7uQ3YCvPGJoaxhC5VC9ngNxVfxWyJVEDc45BhHaQsaQ=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzj2WcFzfJgFVHjyxpRLcfjwzS8QYMfhrqVTo59ZbtL0qvGqji7QbOh4V5Sottk_wnZjN23YEKEz08ZFxE7_dImhuAa4_TMZjL6pmI9iueTInhKDo4a3QjS9F6Ab-0OU3CfdsLrB0FSZTe7vTz16LVIdS7SbRpbJFoQyFAVN2uW4Lmn86hG6Y2LdRYYGgRVnzCivjNWBD5Catei2KK1al1-eVJVPTq30Y6TkudEdc3E9-ympqcCUrZUaZjCSHaFQd6hyvQ5-Nq36empSl5SWAZsqrtUNwat9Q4jnxvEzO9pn1tiJhDQB0V2cVUhlZR-qYDK9Qdj4qLzEINKzoeVrWxgBYC5yfQDmSFENOh9dBzRyfLQAKu64SvCQDGYS7ZRxuxI5FMekYNvHW2x6NPbOYvKeTTeJACdsuMpX9qE65ANyNViFJYryjbCxz1Jvb3EdkqVhv9hdYMxBFT4tRcKrb0O9EPVZEGRX13C4QSv3JLnOgPGFpzOjOElRTMEBrb-mdbqX_HXrHlQmDt3tNJAuvUPuyq2ZPvwAWmqN3lQRdw02bA0W7_D3rnUdbyr-O5JxBNLNiVx7tLy0nh1VGKVR8fdRBjp_-YSI17eX0_ULBWWWAP6jGC6uRwIAVDNNeISgMjv4ClK7aCP8fs7UVsnQ9VtyBAYQQRA0PPHOU8o4KXHdfoTxpxUgHR87QD23gyKWmUxICUUXLf9ukS0mtWduOBgYIWsJ-DlWcF_5yCx3v7EyS6ZbgiHnhrfl5zBeXcKvwTunhWBevomw_8c4LbPufJKxkA-pPYTXbdg3c6G8-S0Z_6NFgeTBVRNFsH1joX_FihAOsbmsbMjFPze5U5VGQcW7iVGBYyZFqX1v8VSXht_-pSLsj4Hfwsz5shOLOPbo4DUyNjAv_EVcqbsrUAV-AJyoS1MINbF3v8G1AhsyQgg9wsaeZr40MByIui2q6RguxLNsfuOR7O9396tlxMV66i1aBZHqtX4h9bwFuHw0FXmcRk5o7WeJMFSlzch6sxVMF0Wx4rI1-qX8eJ9yShfMuMlanPeY9fCOSTDIJRN4OaF6c50XHs19iV4fSEZJIn1HYZdkbrPGM9-xfRqXPInJs34GcLX17GucZEC61ddxCrEAmwHg4YTfxxIPvE5sTREFBDh9lCakaUA-L3PdNuTIk3tct9Y6WGuI_NHEdFHFdXadtsbvekCeYTXTHJPeyNo_nCiKdtoa3OEbVatJHYmKikAqzsEKjQFqLEnO-QR50BjTVNdml8l2pV_l6L-S-XWeeVjvPg1Dj6agp_TAhqAtx8bROmA3oCiwSsbUaGX7V5dbh6e2qjNSxQ77CZt6JGGmdDRg7e-k3vKDGhXKT1_ImC0mc-VOmE6vtSSuGT91Z4lpiWzXA_bAvtVIcByoet0NEaLZm2lYO2kqodij2ogmhIB8A50R0wdEM5kJm47LH6rMelMREi_gsIyVO9z8fBge026chwRhpn3lvXSyRPZscfgYq1Z2-q20SCRrKI0qWzFeGmAnZZ7Bmsl-2-pEIx96cjk4X4zJPdv7tdHPapQs6_m7jhOTaMAIc7ILEoHVH8E25vlfK7mImEyrA=w1365-h880",
    },
    {
      id: "4",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyTSudOn_uP3pQi5c2y3DRP8muRGkyuQghPP358WNx8TvfBIuWBzwbEY-2r81wC9mZUo_gdvLInjxmOzpxbMSmwwqsYi43LUmfxKtey1pnMtl5SZSE0MBKKQMKCqkmZ0kkN5Pl2iZuhXApXGjOUw-3fFNwCoRC87dr0H38NWW-K4LauGJkY8Ob9gDsI9XLoo61xPB2SddmKezdLFubn4nzIRUHC7W5Lw61Mjhkg-g7PaxIHR6FVAVl6ri2AIFsgUUPNE17gBi3gJdGjE1-m_vqyoS94xISpVH86ztxK38bHszTYuZhJcMFP-xLOEr5cYOLd8YndI-eK337WLENpaQ_mUA8mqNSITduejwq8MeLAY23Nfkm3cMUDteDOrl7-Mc6pH_wxkCpeviVbb1_zbWEgH3c8Acktvun0opF-brPtIHhhqaO_p12mQrNZv_Aa4sin1-NQesQk_T3iDJLPW6dC0PDimdZYoIxXGG5PwXxQTBqYALcpi0McMjythtKz5pTjHBwi1zK68qeGV7B3_qvxAvn9vwg3ePVZu8mtV74VnQX4sVmSwjrPYHp-9Bcz9vtjK_ym7qfyFTJ36dIcp00ZTW7UXKaBt_nOT_xBOjihO8Yuiq-kVl8v62yD1rc8Ay-U3A3tZ1YvmzxkZ9w-adSQzyZOSDa2Q7eZ933P38u0R8LNCvean8xWpsBeVjAi_7a7yVgszxqesQiRwvsiRFisHBX1P_czJWCxk1Kb1whkepUb7RJZsC767QWcqdwpBwW9hsx6cACvuYuGda0gVaTgrsUdlcaBTgKx0F1mhDnno2wySMTAK5L0-YUj6GsgfxVBkUkc0s00MJp_IRpQVevY9V8v6XhYyjI2Zr9YnFfdEO13vzW8GxOUXpycDGQBT80Rch0flNJgF4Rdw6lpFp1eo3AvgeNk7lbh8SofF7QBbXaA7tasBVrlrjq4i3wlP20aztBvGSOUMJdfzkSqUva6A_Y1l6Ea-4CaQcLhjrRbuYdVjrL5RUJ2e7ysybTyU7nC2WmgfVZ8rnH2Xx_AYAl8xOePSKSNqONqzsh-_G4yM_XRzonPbYO57LZ9CyAuhAoGb3AlTSzTeR41oA0vaoCO7vspWXXUfg28c-M1a6gVmUpcSRQ-uaevNWXWUQskFhxCK2yiujEVCYDz0F-SxbjA7rhSAbwXMerCmtpejLCQgUaXSRp4zumOS0r7aVodofFvNEnrbaZ3qKY_-DoXiAHmpulqdM6V9QhkZx-Hh35oEOmo6qzdtdsg-TVE0UGQ5XxNa8jfYFwzsEx3MWWc9aoY88cXrWALizmtf1oyNYQxxq_76FiOB6odFmDkV9hRf8D77FV3m8-kyAi_El3bMfec8QoQqy0hC1VIxQkXf9G7r-4NM4DzsXjVFHJCZqqK4cTe8E8KOUPayP-ilCM1eIufWME9cQtUvuh8SIdeLqOMRV-0Fjm6zOWkfYlqUzgzIxfnzoVlyKT-b6K-l3ZJfuuCBuzf0QGexfFTrf6z1zSrbcmnv0QsUUhTVe7AtpFm8m8059v_JHTASuRllB-jMRdlELaZEgzGzEviBjCJGSnJkjyJGsGweQPgTQ=w1365-h880",
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
        <h2>Liberty Duty Free</h2>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Liberty Duty Free"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>Telefone:</h3>
        <Maps url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.29793018361!2d-53.63774232548743!3d-26.251992365920355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b0983358eb5%3A0x98d6e1d4be5a525!2sLiberty%20Duty%20Free!5e0!3m2!1spt-BR!2sbr!4v1696710114490!5m2!1spt-BR!2sbr" />
      </div>
    </>
  );
}
