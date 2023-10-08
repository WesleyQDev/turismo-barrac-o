"use client";
import { register } from "swiper/element/bundle";
register();

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
export default function PousadasShalom() {
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyjgFm0db40Ul8nGFYlEEf8oXvRnHmMdD8JQ5pzJJFuEa8hRGQ-UOX3pbl_lYnavoxOUp5XmADlzREykVR_zVpZwAd214MozfG9P-NDrP2BLRNvSWzIcG2HBuPtYaafnFavabBp_y0X5r1hEvEa1rA4r4acMg0dtV_P5aiiQx-PZdZ8XkQe81SgipIuY_6-5DqOtyNUeXXEVIBB-fVYpt6e4Ne9-HuYddHcxrKerznIQM6vfu-T_XvS6_4UG-kVZ8PEaE0V_NF0tICgY0TCaokBiqBk010NQ2rR_kPPQpteW6yJI06sORBiJz2eK8WRkiZxXEzDb01bikUmkEgaXq0Cdy3iW7d0HAuk2mr7WotPz4I44D156GorCVtz24MO9yvo6Md0tvK7CnlSBrOfqcH2OLY7wX_a-hpOZPhim9jtTuxgBmFFG-Y3WkcaK3e4SsBsfpVkD_iz99wfxPsqxmZsxY7cj0XM7ETsIYmOt9MIQz87ch59PqEVwR-pLuAF8PcFSEpqRpY_f52XT5o0Gwk_XwS6M_tkJFSv_D79kROM9p1fQ0A7D1ObHz9AwA1UeXd929wBI0yLLOpIwxnW7srutakFwqH0SFUbPOAUnHoZkiPQmO7FeXafZEHp7EkJjurAi6E1MME59LlnSlgMgf63aLYS2rQHC7ClQk419h_sxDuPIw-r3z29YFRExjPNlaJVpDl7FLh2DsHPhW6qn8bMwxaebFIqKyWngHXgGoprbgI7Lrv86VNSbXCR0OXdLcx4LeF6i6Y3UPl7rx1PVeB533GtTamKNKRJQOrwgen_WnQZ5Ce8KtoQCNwBgYIqB1eOwBwNRs9h6wU0J4Rs48n-a4FI9uemC5H9O9Wkg5osbD7umgXqfjvUS1pxdkYZRiE4FFGD95fGJWW9jMztderIH5xV691KzVmyOFYGY590tThxUNkP2b9ENlwuShhuDnXvid87WPgB0G9iUrF0lAzDmcR2ydrL7zWo7Goy72uzCaDTGAdrmKF1B7GbNXCQKIt9UuOrbTyZnVUbiE0InOS-xxhGFAt5Usi9JKyeCgyBlLfZ1NGioPMPRk-bPy4v0mB8lIOuQTP4TVXD9aheOgz9A_GZL35y_QawfH6RHezoDIIdKhFQ9zaz_G_57-BVn3UjLIFbawFBIKeCxYdzu48xgLV8lDBbFGzaJ1173vqCQ-Og48oruGNF7csD2BdzzFvbNDVeab3iiC_WuidwojYKTJbnUX-ZrHuqW44PrYeVyfF5gi4uLyhSSd0dot9vhvALvJViDQOGBJKEZeDZr5SqmFIPMeBWGiqRGZrRgCYk98CotRcRTp8KXvgGYXhkZhM5AXfhXxZRMWh7ZSgsxQAz37p7GPM5oKTSXw5tcZ7PEqFZiFouh_xsrABnLepdP1YWVCewwA9Cqtt9GahuLnKiDXar-jyRAJJem3wpqVCgCPNns2NKn5cpARPeMch09rJLi3-moTGwA6FRe1IR6NcvbjlRNFBWYVXzXnemoU1fHuqI0Atk6jYP-H5xcV5OtcuuOTVdFZO1rZABWxi6=w1366-h619",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyjgFm0db40Ul8nGFYlEEf8oXvRnHmMdD8JQ5pzJJFuEa8hRGQ-UOX3pbl_lYnavoxOUp5XmADlzREykVR_zVpZwAd214MozfG9P-NDrP2BLRNvSWzIcG2HBuPtYaafnFavabBp_y0X5r1hEvEa1rA4r4acMg0dtV_P5aiiQx-PZdZ8XkQe81SgipIuY_6-5DqOtyNUeXXEVIBB-fVYpt6e4Ne9-HuYddHcxrKerznIQM6vfu-T_XvS6_4UG-kVZ8PEaE0V_NF0tICgY0TCaokBiqBk010NQ2rR_kPPQpteW6yJI06sORBiJz2eK8WRkiZxXEzDb01bikUmkEgaXq0Cdy3iW7d0HAuk2mr7WotPz4I44D156GorCVtz24MO9yvo6Md0tvK7CnlSBrOfqcH2OLY7wX_a-hpOZPhim9jtTuxgBmFFG-Y3WkcaK3e4SsBsfpVkD_iz99wfxPsqxmZsxY7cj0XM7ETsIYmOt9MIQz87ch59PqEVwR-pLuAF8PcFSEpqRpY_f52XT5o0Gwk_XwS6M_tkJFSv_D79kROM9p1fQ0A7D1ObHz9AwA1UeXd929wBI0yLLOpIwxnW7srutakFwqH0SFUbPOAUnHoZkiPQmO7FeXafZEHp7EkJjurAi6E1MME59LlnSlgMgf63aLYS2rQHC7ClQk419h_sxDuPIw-r3z29YFRExjPNlaJVpDl7FLh2DsHPhW6qn8bMwxaebFIqKyWngHXgGoprbgI7Lrv86VNSbXCR0OXdLcx4LeF6i6Y3UPl7rx1PVeB533GtTamKNKRJQOrwgen_WnQZ5Ce8KtoQCNwBgYIqB1eOwBwNRs9h6wU0J4Rs48n-a4FI9uemC5H9O9Wkg5osbD7umgXqfjvUS1pxdkYZRiE4FFGD95fGJWW9jMztderIH5xV691KzVmyOFYGY590tThxUNkP2b9ENlwuShhuDnXvid87WPgB0G9iUrF0lAzDmcR2ydrL7zWo7Goy72uzCaDTGAdrmKF1B7GbNXCQKIt9UuOrbTyZnVUbiE0InOS-xxhGFAt5Usi9JKyeCgyBlLfZ1NGioPMPRk-bPy4v0mB8lIOuQTP4TVXD9aheOgz9A_GZL35y_QawfH6RHezoDIIdKhFQ9zaz_G_57-BVn3UjLIFbawFBIKeCxYdzu48xgLV8lDBbFGzaJ1173vqCQ-Og48oruGNF7csD2BdzzFvbNDVeab3iiC_WuidwojYKTJbnUX-ZrHuqW44PrYeVyfF5gi4uLyhSSd0dot9vhvALvJViDQOGBJKEZeDZr5SqmFIPMeBWGiqRGZrRgCYk98CotRcRTp8KXvgGYXhkZhM5AXfhXxZRMWh7ZSgsxQAz37p7GPM5oKTSXw5tcZ7PEqFZiFouh_xsrABnLepdP1YWVCewwA9Cqtt9GahuLnKiDXar-jyRAJJem3wpqVCgCPNns2NKn5cpARPeMch09rJLi3-moTGwA6FRe1IR6NcvbjlRNFBWYVXzXnemoU1fHuqI0Atk6jYP-H5xcV5OtcuuOTVdFZO1rZABWxi6=w1366-h619",
    },
  ];
  return (
    <>
      <div className="conteudo">
        <Swiper slidesPerView={1}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Picture of the author" />
            </SwiperSlide>
          ))}
        </Swiper>
        <h2></h2>
      </div>
    </>
  );
}
