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

export default function HotelLF() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzCo0cQpCRMkmV0X3kdzIZ3owA5Vy3y1K1AHABtQjQQ5rhhRJBsw0dTYXucoTilx9tDdVctCXZSTUUfKCrjxoQhWiVlAqcYrdIspKkB-VmTYCQoQTCGo9VjXRe0OHW7YZzHwVtce2FQo6PQMgI7MZOIEElTzMiJWvVsevWdPx2VzwA7Ue_A23TSsF_Yb5s_BDUSZIV01nw8ou29g_tRzXBCfu2DqoQSFr1J8SAugoFCFgF3BXOH904jYKrakbxf0KpiqvzfkVUk9lc7w7A_5t6T6vmbk1SkV8rShjJv8av-XXg_p-NYJ1LlkuiU6l9KeeLmkn6blL1lPzDDSAnOy-BMpbprFOh2JGGgQ3stgFPOpbcLQcFndZOcOE13KhF4nv6jOKnuSW6LSwRvQM-p9dI3bCcQMZ6X73axs1Nhy_Q0zXFWpDd9RQ1Z2h5rcasHpM235EScVduxwh6jtRg7P6p53rzWjrzRG_qJI-PLrBxQWT7GWDc0LDpNub_JQ25CgmHH3gU__BxFWnQwNOLQdAsB7vmp-fc3yrcVxbFyoCnXCWenyFJEqhFaZkCS2nIaByoUef9WUi3p2b8VxpbCgZmD2xOJNpfGtTci9uEKVN-1OZPaFpUC02DX5e3rImxFs8LEb-yk2aLf_47kp12x_vQqmPJsB1hZZlz4w4NCmFuF3Xixr4JKsS8OATM-mKOsG4MpoLaXuwGiHZu4rLalWf4TAoG-CAVrreLjiuJcaV8gmfaWM5aOq0PqkVaNEH9sfLD_5v-6zYo6JiYlfy-Bw5vwSGelQfAn6WoZsMluxPiHlsIRAYl6Fx5bpHQa8v1jO7_K3HEr4iLHH3gl97I46dgUKYzbZfNssTQ6PUypwZzyBS10keMWz09lNSvfj-lV-_Ha6Mp0zMTfL0zPSzqyXFDLYmcHkNAcCIliNs2F0b93RzK6DMjbB9styFaxjSOHTr3KsdsJ_MEFL_l1cssYW5M84YLRVnmO7KEePR0S8Ouce2XYyLhT5yWUVzFxO-mfm18OqL2IwusL509DoV9MgY_79yGoIhW9NmIYxXTvQ_zgWoDnwnxouLipfZO1VjuJ4QzKrCzTUGoRuDjOFmnhby0VvkjK5oG1IroWDeRidk9AJsZr-Xi0vNJW2VCyW0KaOZn40HpstdxEJ73kepZTkScWh-YCH87fPl1X0j4tKBY_0W4YK7S5mDINeteFBnH1opqNJmb937uOeOuA7_g3JT8_8vr-0hN4wnVPojHh_CLT4IQ2YaLPBMfulMofybFrB9dqfTUJRNUAHNjxtGnfX1yWYqsB8pMjOD5V_OEqUGokyBvBfzzGQBGCYMx4ds5JIiUsnMwkMLVpEdyiOvn1Pr8uKwgemPhsX6E29GpFxJivOA8Z9EXYSdzqlXyJYw_LsxAWa54-EYvQ-I6UwsQPPDgwfBcKic3KbZX0uM5HQ8Ewk9UJ3ROzZeL93Xs7EqFd53csljkBHZEzj7IG6Ag1nN3tUw5CCWsf9oT8kkMje1Vc848-zzaoNT0Uvry-TbzbfMY2xQBYumhVdqdkn2jl8KdFOSiCwikoiLWyz2cxcpOcvNJfN4y6fa2e2w=w1365-h880",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDylj7xp8NPF8skJRHaa776dy_0c7R3_L03pIiLSpTANsJyPSWZ96AfNMq1UhZfgsSxQ0j89xybgSMfK03G_p0jfRpCcKxzY6gd9CRnbhXrZGkiCFIMdhGZmhqUsE3wmYBE5Lsfb_V6Dy7yq00TfeR9TDXzzF_5UiszERY78MsBH3HIt3gPGJo0UFm1WZpkUcLSiH7RTR7Ut4JH5ihv2ISe7_K2mM35Ub3LeKdnwDCiFpJP61kImhc1YGW6bZjJFalOevTHLq7zF85Kv-_IfmtZqvwD5PRMjtWuV1T-jrD9PzmseMLit6lTVUGFStQY_CkoE0GE6yahz9GtqBKmdhKcLdujYwofUyk2fU4a54_fQeQrGv63Ymh3jDPwADAmkBvlU2nnd5P7GlXFG-pHxEyT0kbZ-oe_dGtaEBU4QNxaNfvLLCrvG9OjK2PNHvvPzxmcRCzcIztEIa-8Ro1tXdMbDAmp_LgznTI_8fnGLHmic-lnsS8xyD1cG250eZWV88-HZOUgShz4f1acp8_yqN3PVY7I2kRhaqsPjxB9kUsDKXXBHawNtkhHAd0fh_P3gcKHS7eUNCdEX3FIK8S_x5B23hE0umA5AjZgZ5v22xc2gqe5XKE0iGsqJTyQ-EEwJk7RKiKEFudzjn8W9jC4CXP_aiU4PPJub7ZeLAVCHEq-ftY5dW5M6uzs1pNiZmNvAF4pwUpe4e5-g3ZTb1cFDTVKiv0jJvGc4PI8ybevxDKyhdPKeIfhI4qLXVBJNrW18YJ8EilqnxXJdzELDXAFAZ1EG-yE3fSWpa0LsApb3pc7F8aLQo6BAr0hnfGcQK_oBKwpFFWjEkm3LpJoxUdE153XVivCcwFZALB2xTCCjgX9PPtyAPjMSqh1QXx1TieLzZKRQM38L2cXQj2swsFNaYpMdMH9a9FkEauNh4s9a6WiB9XekCuyFWoExFXfhQA59UQoKpUDjw8BdNGQNB1_7bUZ-oVx4TRP_NVjRdrU4L-aIvZrZRWOejcU9Y1SQ8a8NQWKmt-jobLcbgGa5sDKrdc-z8e9dfmglsN2x7gZLmKiKExaIYo-e0QY0SdyVkeETbsDnsF3tvRVsIK-8uNQsQtHy8ghg3X4oGXGLhTYwdxvkK6W5mPMBxyqvYqz7wxFYZiF1EsP8TPCMxEb6r4rT49AzG54urT_Ni7zpxOXwSTcw6ifHThwgiyVqWwCas6sFAPTyGWntZLysRf3x2NPaBG1W-C4rFUKFpHajkEsNTThSdUqeTfHzkKbc8akTnXASTSFxqhpAPxKtVa3lu0nUNYR-0FWa8SE-e6PnkscGkdoj0SGszDpkQ9C_TfplBDG3PUBAR0kvrTtIos8REeVGy6y6nJihhUKRVa2i4_a3MCVJsnS0spRsltkbh4B834e_86LEek_EvBnka38jhvEji94ffQaBPCFMQVC9UG0pzb1O_S58qFJGbyFxv51u1d94M5jOzpaXf8D5x78ao3HS6SGDqXpdsSV9e2iIHTCPyQ1gaoENzo47D59s9rxq4I0EsxyqwuTr_wvdWqH-pg4oqvxzA1QpCInC5aKA9OPP2h9Z_f7Rhh5c_jPuQw=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxR0Svty7h59z2eb52ZfdM-0Qo7qWEIXV7LC1cvz_LkxUr0Ib7vd9VAjRIqdtI6RMersEpwkVs2Rk_GBeM28-3sm60a7NgPmock6nrBTBAcRSretXNNXzMl-TgSaxp8ck-T5ULcSFSLmJn0Ps9KsR4sRWxLbVHRa1IBnDebAzyBYBfd7Mj7Jlu7FMHjRxWuPhwoq2FepOw8S2JXdAhONOkjIpyzSTS-9ugswz4-GKpmqugqVRupVQ7-jwVXn5p0EkMsxmy9eHXI1xbu5KhqeNwbEp3UyNOPdtXpVd-ghNcAV2um8HItiAvh5C9TBHe6O5D-AkslaWnK2c7OFgP9266L47YHGNWVg-Ki5qfsr1iahiMm1d1FoyIs21g5gsj-o5E3Fj66u4pLKbpRTZi5qHzEcZTqp_GZTB_WXK8_Cr6SqVzwcR2q6wsQCIOrxlD_IIM1s3sOby1K66WOJlPaQ94gzjtDjeq1j-reNYJEpN-N-9dLdqLfQrb_G9l0a3PN6S45SEOqyIdi74aLsvQMbMPybgvh2kC8Pl1JQ7fFRBxl5-WtSdypseuOpkQEfbhljNFjuemtw-QPI4jjqR6SlR7soi2wEqnGH6P6bvuQRX2LjzFeKFXtpxPwx7a6YYA2tbHxGUvBnGVHFYXzdltJzkM3yjw81fxFkECOiPJpCCcx-eqR52SrLG-74IooWWDEIK8sFxM3ZktIp1cwybLX2UQba2tJMUJ5ReUGkIcKWT3FrINVP_FCYuebLbB7URC_vnLK_MpRB12T05AS4eYl2ZMBrbXQ_XNhh655-S0xIZw01DIhWyfiOFHgWWP_wFmPCeirRvjuEG74STZEiKHZx616xSn1Tn3uAPlsfAYhQufHT7ddu8UsoTc94nbn9Auvwr5gaA7pzBcOWRdZ1iMQuFhDF8DakN7KBNHEVwL-UsoAIpu_4sgZsDnDxGUU333CFlxfxp6YDjY7wyLo6yaZDUY21ybGdFj0Qfck5BeuUdWYcN5WcIMXLbMU2QI_z62sHU4uoV88JRYwUcOTqBfnokdisiqfFUMlqmKleYUt1h9Q-u0Fh_kw1bvYmoYK5WH8R1xeqmSzmrHwx1sMkH-bkaPWHeF5KP_hzg9XPNiteC4TUYUapt8qozsDTqj95N88rR8o8hAsjw_m3LqdcIfFFOmyVYKJ14zvCjuMNsnu0LAZK7VrOdliNYUXGl8Cpy8t5Agqv781MxKk_FnUHVk-O6SiALnoTNsrz6AlLgmkiKXhuC0j8lSAGhifrk_kROEtKKvuaopYJSZLLkX9Gj8xRtV7AoulXKOXaEJHTINGGbPy0-YvqhKZk8yUOcNVf5LuggQd5GM-FJlAWEIYlxmlCeTn6suP9jETvvbcu1G_E-Flr-ClRDywvBNGotB-7rGlntmh6gDo7LYVCksXYnf4Fp923d8bIccbQCAHu9VzdGbk-cnE09kK7rn1wgST0un1ubbQF_BbMy5TVB_PMHF7xP2o1vg6nTK0mw_QhDm21eV58uDvWIEzJmU5jfBs3j4R_UVaaLza1X_y5rIp5ZnLClt1Mr41jQhAsY7xz0Xsi0nh7Y5wv5WlQ289eA=w1365-h880",
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
                alt="Pousadas Shalom"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>Telefone: (49) 99840-1945</h3>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114505.72928194582!2d-53.635909!3d-26.251794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a3163395261%3A0x59464fdb29b6eb90!2sR.%20S%C3%A3o%20Paulo%2C%20148%20-%20Barrac%C3%A3o%2C%20PR%2C%2085700-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1696710725361!5m2!1spt-BR!2su" />
      </div>
    </>
  );
}
