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

export default function GrutaDeSantaEmiliaRodat() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDywDr57Kkue2d-FsXFz6O693cNxB0epk9h3hZ9DdLnFNM9FMNuWb2DsoOELal3Jc6h2tCQrYGMCr1UTAgcpryZ22YPD2-jkmx3VhZP1X2odHNb12UrbxtVSltZsMk60PCcrdnC1SKOhIAOVTq7tBpQoZZ658gH6zYnAQWHO2EpUUAXXe53flioopB1W2m4_pSqPSYUxvurEgPI6G2m5XKFvPOMC0FadNJhG7IuumCiiWcvY8S1f39HDgpoVeYLZ4qofC514LnaiMZwZM8xGc7US_UeJvfbMH55W0rdkNrkPuA5JudqkREkEVHFIyKwdvS8NCjjkG-clYtsD15L-LXbogYAavgdV32wTM2pP8biU3NnwVerU92jfedRs9xX7zvi84yQZIyHjJODOSt-NaDrZwsbaj2hyp73pmC0ARvj_sGtzyMINxTLc2wGOjHqno178tkiPl8IbZGQlFQBliH2OhBlV7bJnanVUirvPkcQhZESRZ1nYhmOCuS4zc6A3Fxejqopay4XuPl7K-8avwKQgZloTy55NfNKLx9-U2nO1iSF55CKPvEJJ4ENismDtDOkq1oetqNwUNY1_8kllOVvNiRhK7LWkqwBq2Zi-K03Dn8zHzeg1dxHL5HtH6JfjFRdQkh6NtzC-znhvTJBSSd2WzvLAlLbdVvivh-rgTgGXbqHF2A5C9w3hNCYpeBtrfa5MjdE5k06IDH4H1-NpYa7QOJZorlX_Pj9E38SrjeUVnUBmX-KPZNOJGPvyh9gH3I09Xlpz1XmaL8tfjr8IKzn5j87fDyxxtuHXvl344FZ9KiycMpv99UJX6i8LI-aGgsSQ7g9debG51qKnFKHbSx-F1FDr2HudijX4E3qZyd32rTje_j5J7S_VHTa54Sfxo4IILohQcTNTcaZZkImH0fHBSddeXABwB6sXe_f3dD7OtmCMG9xmFk_wqmGOuvFmDahaZ-xbeqg4X9KWH4YR4KdOz8xqfsbV-f8-HAQ0TSQUn07A0nKA7IKG6sa7w_KHrClDA2hiCPqcBdqnhs5k8YeP59hjZZI4E5i9kMkMzMRlqCcaIFXXwWPpJ-_EOXppM7yxINEthcTRIrixogs2uf6HMKmOTaRS0KM4QY2yIpOJ8_pnJ_OHLVyRaCYxhkFKygUMqnJB2ZhZzcWP9zErXjx4BJCRZoOg3dsAoy-lSywRVtfktYHPCSLpjRf8XOu60-gxkcFR0nXp5pQmW8lr-jOdk-cFGhk9goL9lEgyfVwXUSY007aWfihJ0xUUMvg1iERZTI1sxslNRyaSSENIAu-P0abB0sTGInu6f6sI-rDc7q_xloqkDnh3yVBxH9Nf5_ce-KQ0k0Zr-bxTfz4ptmF4TVRhW-LtssDedBkHvyWeBE0Rq9ca_My6dv0HZ-rtS9u5HLurxNkD0Vga4gaYfIVOvbZQ3PqMWwzc4Cz1_vIus1gz2x8qS68tWqdrSeD38Z2hrk3QmY0joE7Jl2l-x62NW7h4ShCVhnz8Z660YEK5NpJVZCN8sXtVERduSXWrJBa1eY0fk1GHXZ2jym-_mkosZxs_F9HdQbRP7S48r8e3YQFwJts7pnHpfg=w1365-h880",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDwOlUsr7KgZypd0cQxtSdg0wkAGQ5FA34SJDjJpDIQodFfIe3ujRsy4IexjUESSeME1icKlCyxLugj4xLNaSoUPu5QWcKIsQ5ClEmYW9UuXN0iLJWcAdsFWL4zyQVHWkVXyllzFQ0kHKIdBHJ-45_Vwx8qUT4W2B6RQ9RzmZyZxxlnvHOdXvsmCYo0WgPeZWne-siOEL2NpCRtlOBAcTcMd8kkiswwuXxep4P7svfBO3OtS0x3uNYQHzQOvjUBxuzzGU7gnk2mKQ__0WXXyhXHy6UfI0GLL92acq57CbjzwVY6CzDzydsMjIDKVIRSvWAQA-kqLD168Rgki2Qriz1W5LyXqCZrmYrP0pWm30OWolqkRKGRG0_H658CkJIvqrs50wY1ehVdYvkALu-wsx-IRkyuAxm0_QVWNVehq0SUF_DkhnUz8Se9VdRphsm0Swqhv4s0RE8eX3-j6VzRyTmH2cFa3S9fr_MN5HFuEZqkrR84w5j_Ve41mvxAZvcciPl7-Z6pHLyR71izyxy0TttCfAIZtmT6v1AVVaNg25N_fx31WBaeGTkCIbjz9UyAMbkZSJCDE951t0jYgOwXVgzmMJVWSTGBA5-rFDUl185UENPZRgZRgxIlVAZMK11lqJDjng9lYlmcFpES1PIQulpVUNyc_BErAfJRPNw4odAqSio3OArwt5pcP1KnoqLyL9yuWM3xW4lxvqLtDcQaP6xRGuVkVlnw9kDq2jUGrTaqQvvpUFTPXa2hJR1HuAT5uneV0kwwxT_OG4YQePpJhXiZYRmAay_-htDtYbQJC_7IqXOi8vrPnSQstaULyCVKpL0QW0w3PuY2gCnZS3z2n_0_Rg2cwsXz3W8Ne9ClNsqyiNhOcRjowdFomUaE2txLQ8eYcFzZHUetQlvqlcBUbT5HQ-WeGSiHnJ8MCETHTso5VS9yAdJiZFed57ar_ZjAc-s9gbdzDkEdvu3A1BVOA-pf_5Mts2E3_xyXG-ZrEoOP5sRHyVpo_82SIqIWvFMgOpH9agedrjxV_M-HMASQGCYq6cM9CR5uae-WenBEEL8cj5gLS-Xjp2VxyLZigrNJiGf08aodrvfRhhKP9QD01Z_aqm05xHAEZOjL15PK2_OyQ_VRqZev9MlAVSl07xkymH-82AJ2hdNMTnfPvbbybNTzt9XhZXYn4b_QFW2kiT49axhxlLQTBaFCXbjEi-RlAbXmyCXi-9oqhKVOPxr2pchcmqYbGto9stfaA8PRTgCNTqP82kzAghkKjZXZAGBg7HPKFWjUi5T1c1rp57xF6XJ8x_8eU4fBhK84IUyl9C4MZw2r7Jg-XFawT133USJo8G6jNPc4TZB5-DUdcZ7a_VwBMJdzBxZqqpwDx8B7aNZbQpefDI0WzEZd_L_5PGsGom1_RYW5o8UvS2Urb7Ux_IInU-Lahr-tbRU-Y4O233iGPCqdVgI2ikjmRGXjAVnAHAzVwGXrns6-oIed8VlFGdeEEpCXaR4eOBvFu2qwkZS2hhCkuzG5Few-GZAXqemgpNdJncQ1gQeUPSJUvaecFtCmNO6SujZFdpID8rT0eU0pdc8th-FP9med__A=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDynp1sjpSA5JRWxHB4dKBvuv9xVAPEtq7yVxtUluVchjgmXbgra5ISpka9lBl6Rs9qDCjh_FZLRp9_kGnKzymOh6jZjwUQ9nDrq5na7e7Vi7VPO44mLr8m1Xj1-k3JODQXULF93i5RqYdHmiJZcO0hQ9_uFsHSWN3s6knt1n7ycr-cmRcSa4EgBOocP1PQIHvaHB4JoiKB28EOmRYOMzG__b-2bduv-iMF7j8q0ctmG1ir6pqcbAnKJP9Wf2fynUx10hETqi4H2e_Y1dhT9DF1rbFw0372oWjgblbj0VC5uJCY7X4SJtkzxDZJH1mUX1Xg-DNNvM2FSAnIcXMQg3KXtoPlgg-9SNzJo0MVAgUkTPqsRr0MI3RtjMe_rTwKWCwEOs2UQKnKU9hk8az_aOW7YT4WP1xbWc8EFl7XNx91JsXbCOSfazXVY402X3oB1_-tj8jG9BPt6ODf5Y_7xt4BWP7h0Z1Bsju0DIhGRkNZO1-Q8g0Og0lw7Skc12NGV-lEEDYKNCZ0uw_R7riND6fqCZgRb-O9-IVLTOKkWHxxu8HFpF1LTkDZmBnyy5QgAXazjHL-wlL8mreo9OuusEveCychuso4PEaNUimbjuWmejFv8lIM2JPSl5QosxJoTK7bOlRUi5ZWBhtA9YxK0GN_1PJHWgqeyiS_SUNdZ67g1AXQOfosFf16dn2PHDB_PfIPWsOABJ357HPcmLVD3XpCzAijmMbQlyPVqPddA0a1gj-yAcBWOyg4zu9KgYJzqCH1IquS0RdQvO7BPh1_Jm6NxKEqZJZQ5hs-_j0DNSQYFybLWqRPfSviDTBA4k-xm39SaRq5oJW2K3n3108F4AQWj9qCrybeO9MpZM8wmk_hjeQ4sLnrqs2qdbMWDFhlm4O_uEEYYRNorPst42oU0mf4B_XvQVk9KQeAHmza-1iXd5zswBS7ajKIWaPMdOtKoCAv3oDWDnBQRKbLLP1BPpFH7_K9Q92R5Z7N3BdHxlpzQeX-CNsAyU70v1jgRXvf_lujYPrng_-mv4qPeAQFuM50PBtx9C2WJ57innZCYsNMzxAKk0cJ9TBE71obDeGI9B8MmkMOiGe5AqCGaN6jbP6KtmqI-H2-Xk5SeO6wJBlgitWNGKh7H0UFcrYQqBvzkvlFPiKiLTOS4uAZMYofWV5MW9aepnimbsvjB5YPjUyR2vGlAgyNS_qwTmm5axy4CNi-C3Ueg21VHorT5lUDD_JZmOIq6XD4KCYWE3PxbhKPQY4COUGBu7rkbPuY1PU_1LqvNHCYRMgMcHmOtXDjVynYpuLWPfrfWAXmMKsmtTnaoV5PF5gVMDxpGmsq3cxdc0UzeVzgyXZF6So_O_j2lJSXIJTU5eiz3HWtkY1mL0Fhl1qXrKhF28B7trRlkZ4m4MO3UytNqz9tJf4VP3aeICiu97Ysof8pYM8zOakbEZnyi3l93MnZo2gDdFRiSouYuSykC7-nN1mnIVRQsM3pHWCjGgigKetp4YJQqAOgKfrEOMmZQsp8Ida4t8CBqO6lhGG2d10h-U5yEORMZV18pOsvWKPYrks4nn6AGsk1qXmmI9gFAlwDDyRvlKA=w1365-h880",
    },
    {
      id: "4",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyju7DhrADIXDShM1IxB6BWvywq7pro0AiJXbTIOa1BlX0OhLCLwRs1oTsLvvbpadiL09ccuMG2c93TfZDlXC3RpshxxHcc1RbbYcNG55SLUy48l6PsMYQYJ5wHgvMAuF3fXHBwiwPbmVsQue-swT-WCIgO5AxwxUUUHOfE6TaOBxMl4za2DP5kNmJxSidB3NvTXd49SYMsREc9-6n5AUpJup8Pfa8lhDGfinXtw0r8scZntwq9ug_9DJZJvpKGBMrwWfHTC62CA8NIcZgVwDEuXFKM60ysyVqgWts15kC6u2q-2j7UccHH5aXTeNm8EDJWb9DjcvZ0nRDH0UllTVg3n01tI9LKlsN-ZSvNoyv6j_JJSzy6rP1UT9P_P6SZrGHWjtuJVFzvTDJzteUt683asH-M7MvF19KGqQnNyT036GZqMCf922BauOAAJq4tQe-YUe_hVdE4eVTLJCmv3ffnizT1TmhtlRSr_lZUit335QovjfgNwwCAiKEhL9J6U-hz_MISBzHY3TMbvp68G7KR3-Mxhd3Uho5AaP3UvN-2C-1C27Ya2F6hHx03HoYjyTqPCrc8ib0rvlnIPDU2aGhZqrl3eb_gEK2OxxPw9aqwkH_evKTiWIjwik8vz_3dAX2q9muLNjU2ITsYE3XR7IyNSs6CEvV5MR3zsNXcptXrFThRqI18SMP-WdebevDzflPvgoq8IN2UAI6XbZNhU7V_U279M7W_Nlbn_g4rzmi38BenqlJas5FyDdRarMFY8l2dq68CrQ__XezaZmZfOdaUy-5GktOxXW2YqJ-WpeZglHuHYLyB8uSjF-RXzS-W9P3Jyq9mYGvkW4Loeo6cinXbexYjBO2YMR4tHLo_qvNJxqwUvT6YZVRbzpP2EtEB3iaQpLOQ-qgf7h5JubTL4ztvm1qIpsVT8T59jVhMOFwsOt2vVq6MoY60nBFz8TvBYeq1kiEfu8FWG_hVR-JXI-1pGRCinJjT335i12ErrniyKYAyv3GFkU1UGlCZJBnMXXy19Ms5Y6X2R6U2pMIeEHF2MufcaQ3SIjT6n-9RLra07gvbiONh2WIPRWNVChocPHWKm1OybpZW5Rz2kfk-lJQD8KWFs_uyohknOYrAtKpY-ofFdFQZEdqsEZwc1zQ5PzKAbk2uBFxaUd3ETlyK_osbyavP9lQvPeC7q-hdpYHxslXftdxCGXnJ4D9TWzmHlQVrwJLN-_XL_cSwl9Zh40drrJTI4U1WPVqN-d8ca_DdmvPBslF2zqeIV0LbtldNQ2vCW26aPYL5Xv1QxzknR0kQvqI4XqfNmLcL0LcL-9x-sBKzScRhRDQWebakVhc66CNlljYHqjjJWuG1yqp7ijsXCnH0FIMvnVPIRGifEbEVWjFQ2SJKGQxRTrLgCr4f0selTw7WkHzX_rDKPCPfc62XHm9wTmgQO-8KB4UACwOxqdDm5NvpjumLztAcAAOicG7aZHkrE_0L_ZAAdFQ7lF1IxUlsd_eljAjZaIb_cEYKAXVy8L9JwM_FBJUQuBQeBrkhmCbjxqucBG0jAC9WnDkMTodpSHwpiT_alUxaACuU-nYRStseEbgBpQ=w1365-h880",
    },
    {
      id: "5",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDx5BoBY7BMruLdSTqDDLHJ_YAVjivRyU6Usp5O9We0HaR7P4g6y7FM5C_I8IsPT8NmJWbqtRO1iquCVbVqqJjF4HAvhmRUbgwFdDtyDsMWRtGuGfkntlYmcpnuAbOEmWot_nyZITWyFzzoOLEfuMz-oFB5ITE158fu58l2oM8Pqp-dlludlZMXipagIJ-eI5XeRjAWNBArdf4yH-nn0R4NLQUGuToVRYykLtSpO9Ln-KFdVZkuybRCLQ1YoWt8M7v-AMDoouoVKAPipIi5lwitlGTkh9PLclRW4GsJ_LJGvZeCT3nF97ZaZZfKq0tE-SDd3bhrber7VCk--o8k6iA5Mjr4_gkkfWdVNKxBuRTq8Px-AFahQXCNw1M_q1PaeZc0qT4DvbcKmnO6a-ZdI1z39cT2axDDP1xM0GuCrUWa5vVemzIWfVbXENijYJD2T1xsgLidAT4OvG0RnuYsyVLdzSt_igbviKzOnAil5DLPjda8SNw_yZ-R1FoZcR0ROWsVND6lPqOUsONKROJ6lzXLrxOlvxCE71aFX3VjIOrUxFyUxR4ozc5sT_2CsCqL_ncfR6hd0LLYNUlZCqXayQBN4A-4hfwVaGYEcbxMRuSa-dM9gCGeCnWoV6r8olEiuTTL_1JNT8hZyjIBCXRVHGWvVsG12MAJp8xbmapsx5NBDLZR9PYQaRLHrp-LxeB0nhAVOlSVXt2AEWX4L0_5I-z7VE7sfhKRIx7TzNJY_OHJJ6mKu6BXpMSlijGrnm1XMlEPPi5V_hp5AHX-dzf5B-tf_cecNW8oJbTox0dVtV9tc39PH0p7dk-h4mE_sqT3vV1CrvY9pjJei6V6F4vCrrHuBChwO8p4tezPMVYFrEx_aE4MFiz41cEbPza_btX8XKfKqad6iwH-XpWrOQtN-SaxaX7AIssGFd8aApz-DgcWOwI87RhRSsBm2sqX1sFke-Kpnwsf542vR44aMcmo4pC8gvJrQxeh59YBAZVs8XZEZTeWJ-iB3R4su-7kt0idcw8O_HyMwKXBvmXgdwPur_qe3gXA6d5EJDvp-fTtgJwNFYyhw4uwLF067_0sDKgXoSYPZYd6Knjgah0VB5bQ2z1HeJriME2rNBZ9padUz7WX56whAtXoA1q83kpyNzZ60J6y-B9RGvfe8szsTJYzM5BLYBbJpv6XKT8v-x6WOFVlZK0UuGdGLR1e7Xbr1wPxoEW1dEMwuHNkqLq9UPNRjd9oQnO2wanbgfGxJJgV9h7BtZLNBFxOLoUkwpPlWnY25UuZNBguu624QcPWl5NaBl2DxU-cpiT8jxzYsFHjTMQYis7G8-_sDSUIrquZhk3nMTL5ckLQuK8QleB4UKmDkdLxdSkUl2Bsz77P_3bK_r5q7piubDvH3pmm1nSEaWq37yQsAcMUS5UiSiGxraVvSvl9AYlLqTke3xpfB4eMY7q9Bb5hFo8UzhKM5QYB_MY1RC8Mt1c72ZW7_D7lDFPYlN2biujTc99TS8h-LUbWIuMakTV0DeiBA62qTBGFsuXSjMVHq0k1J8AWGbLp0h_MV-xtbTXtoqTAcAz0ZDtWAh7xHLNlF4QUl9HTvmw=w1365-h880",
    },
    {
      id: "6",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxry6_OEGYXxL-7yLfwyWUAJ8qJ1SPGf4hxM8I8tugYXi_TgccblXkLLnbadLPyyPmYu3gNmzPzouoxARe6ZwoE8mJNVvYq4IGl-O-NVNk1qnVoNyxL78fteWV-P7OE0Ea4er94sIIhmWzscFsFygk_SUslEk8rbKeECvt2fsoL6pONreAIBSexDCcMJai4YXapSANBBVqiIXE0a742wzj5QDKI-F7RbO08zshTRTBau_xcvkL5CyPN4BSBGlXXjJx6kOZRyH4J3wD9BeViYx02KTfDea6Ws8k4CHwkrwBjGKU7vOo0L5jF7ph285ZjhKMEe3oRtayrJf3sR68TxDEPmjzrb5a7YFoZuxNwkzRCW65oz03nUbxzbQuSG-dgZPs3B8BkScAORO9py2ZFip_rx3qCo0pm5lxz_s_0dHQBXN3Cmz-08VYEAHnOoixBVGuuHDwv_9cYAtnrlWkJhl21KN4Z9l2TV2vWR4Vb-hnpUlYWC4nqsTJIhbF0Kg9LxaGy6CihY1ZEUEFYB_MeGzh0leNnIOO1lR43icDvoy2puLAsAKlLn2oJI1A85gMh8TF4ni40tiAKYHpYc4QeBD-wRchglmw3jtzue_wixDVOD_fWlfoIwDG1gimr681QEcrBF5fl8zY95I_f2bQLQk2QDZLQFEIcQaVRyzQpqlmOWvlc71-u39FA8gnzxOjynmzcr0NQZhjpXBMOyt2G1ld_1fPiIAoPj1YhLC-tnmrIyc9ftHniTiC5gF10G_tZJFmvsFGzeQPn7j4pEp-fXq-iVf7W2XWofYGf6XbKm7P9bf6-le6-PLE-B5sGSMmEKKZ0-iYUBicDNM2h2WOxJ070YLZ1mMLCYxqYv1txPwmMOt9gyx57T2SnaH2qxS8b8xH2GEI_7LAWpc_7dIiNK1TrdboCkwWSsXiFL2_2Z6pQxk2mCirtEMPuPMTnjbIp01zWV-PrtRz-Ew56ADE-lMI-fYOPCOZXe5OCaLiXcyKAkLnyuO2TDDl2Hekx3zzZtET8G7kRG0bAbr3g_g12h3xrOS5LgFRPLfsC1NDhU2yq5QICL-P1AWwAZMaKbyqFK8k6sdr8Vzq_u1PuyFO7COQSXtywiR3CslAHfc3po4W4pnkjdrGH20gBkeRSWmoQ7SfEzjCUHrvZn9RORsFrTxw8iM0iixgZZ2B476f3UL3XBCUQv4R7njp-wcCo5RqpReTt7cQdwJOIa-kz1M1vfDED-q9IXMFGUpHxyGZlTYcO8j_44DgJAZ7rbftTemBKHiOGE_KweJMys8FvKv_w5aHFO4zG7_GRmlEQjPvue6-03GCsLcKYmT1JcMER5Q5ONz7bCw17KX-wopaOYMs-NQPuK3uAd0mL9iu_COkYZuD5k9Qvkm6EXFU5k-Rxe-zeQs31ActhmIKwl3Mr19Mr2ofMAlMVzXwD6TmT4DEhLH71xHeL3f5OjW823QdmAO5L_SoMxvcNhP58UW_G2fTcEuMBdQFcEDwLnsZTkgOd7oq9nbCHax645XKmzouyappvJBPJvSxCoA-NKyVeDq0WkxfuH5HMpTNfcr5rGNxA68u9xgH5YaUqXaaJJg=w1365-h880",
    },
    {
      id: "7",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxgJ5YF3Fo0hMpFZzAlYD6XhsPU8rw46I_o16ZO5MQvMuoP2TAAduPmEViUUv0dVUkFRDRK2dTZTwCUORUxVj9zzJtdg_l404mCDDO5c7aG9wG-gOr9KgStYwxD90BcXz_mbc5-40PiDwxU1COIh3WB8ll7TLMu9BYFTn7diVeyPUc7poLgzX8sEju7ALvvW-YfBDHzKAMrmzqcbvQMRI_pvb3vTjFmYuEgYkWRPeDhdLCqHc9XOGDRkPvVSlcQzXlEBxV11HE_0i8ADDEkUGVqW-WrpcLrZyevjtwXcIa9AtQnMXlHXo5vypkpmLnE83GvxzT3IaXrmOXbW8XHPp_FoGuDI4nHG_K2UZoCM-M-jg7FadSPf4C62CiaqnTMx9tcmMBj1Zxy3WhCTcsoOI4Zwumt1N2BM4HNfY2sNsTptrMgbv9eD_znzfAwMeyMCrfXaiderh2-VctiXbqCCHNnTx9KoFB2kfuTigsqaPiZyVP4vhgWlFYjgLnaAq23cRdBCHnB53qKD7CWmGRG5sMjeIA1PhnJjSCN-fUZ2y6ECnZuZ8_CQA-1Zt_DiVt-C8nrE30JPEaqu9aAc7ejISGB9FCF2NltDjUjOqaA4kyJzdKx2KysXcnw7xA91Oxvgywq6-wRUDuEJoBT_ytHentQb143LK0MnjFn65mpxiUkkBPBIO9cD9QUtb631X7XeuHOM0jJhvinuEN4UikT7J0vynr5rdlCP9yNc11uX5NsYodIToiuBhLE2MZZjQlIT-M2-bOZAw-_KGxEeD0BJaDDRAetoL-YGmCN_ya4j2Bh6-QG39tlyISCTDQZvZ602g2tRRY_tud5P_eOipnoXRJ78gTrYNEIAgK2w3ZfGASb_W-jdoUp_98y2vXX1KYNbRxF9XygEtt85DOn1dwAyrSmYiwiEoOd0399XlwMC_4Rq71mWsVc7F2x9nNy7r3T7L2oMWwE3BXHydzeGa70b4ry9U_szFZ4rI63SMTnYD4xydkFivVB2oa5Pbn-TdHMJAHt1urs_7G5kMcUMLKqLnbnFv9SdY6BwoeiHCRjqBo3pcDjcCRZAEtprL5eaD4_IBEaLTsvMMtTVzLHtJGUm6_kfjR8TbKxJKhwy_oi3_Y585iOyUGUCVZcHSHrZnkvHUuidcDkNeERrz2KCFcYp10ZbJQsbOMTZUTbd6YT4ms8mBBFKjt0qVk7u5fQjQ5goqRr_QSjINhvIXhDr7zolgDBcfMp-_WBnvwXxT4b0S4W42hQbkmHT59OoAjFpBl_VbfXzMEGLZvCut9y9i94RCgYjkCqnnsEuIugzMJ62z0ccwrVqYTIsBYertbOO_GsnOXd8akBA2ir0XvoCtY7PS3dOJqoZMhvj2qUFtK87WaL9zF0xz_OZsdPyW7CCzl_HD4K98EKePjCb9AnDOHm9jUalqeZTRnU_OBFtAHAYcgXaEXBj3db4fhW1ssR3eGwI22cQYnJluDsOLykUlGYJfaKKdnlf5cBfwr-ubblyQZnyv6WgZQTwKkXRPumOUfdMErPF7X07puYRXpiIAJEdXwlq2VeJWzvffRzdUHGavXb28PpqBPWue5GWA=w1365-h880",
    },
    {
      id: "8",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxRpVFxOowI6oN7g7s93L6Wtuiv2euEa8LJcjhOhb0zTuhMRBQbKF5m7kCXM6H7s2SmvtFojFXT7uhQlAto_0AzIXu-QaelCSSBL6Pd5TwpehSpAmmkCnhcjUzMn1TGqv6h4uuPJxDd2Za3DXuDy2G0vxk2fSxB7n0_F360iTqtUQ601LRs4ckC47acAMndti0G5fFku47BjsbQwZCdGR1G8fzFX3PS5YYyr0wEWEOKpBvh7WfQnAEPk-lp1XZsq_3LksKpRal4E2y6TRclEdSf_47eljFw2trzKzo_hTNOJsL98HqUtFIUEzqXp0K5z8OnsuXkgCEh4Bbkks4E-DU0kKpuE9ChEXzl-weK3yoee4APnGIP0EpwFZ89xMWUSfnjCOX5BfOVJnc-I9I3NPNBUiT2dZFOt-saCe5H5xuQ8oZEDzyvS-WLjr2yNUyOKYNkYEYLBbYqCyVSiW8kKSdQJ2RlSFOReIxjKzuUYVCcGHGIxYRG358QZD2IcK3L_486pA5KmAhuU7QyKYvFFum2u7mUbhXOJeaFUBhSB5P7xrq4_dXGjISDNcuxFdkJFA1-jqGZRLsyFwIjNpO-zLNrk2H0BMEqgabA5Lt-sxUW8pdp7JjmSjklVt6ZA5M-GKhtALuOCufQBRPoI8XYCY_uUskI_6rWkBH1SK8ApdrspmFXl7NCK8xuXFq9RbMG4wghnGdPQjdLz5GQ4w4nHE0uSerZ1-mHfklwdM6eFuE-Lx6j-ydRdvXYx_iA8u1Iq6Lx0nvhSDydjOnez5HljX8uFCM8blQhbg2SiH-EeZKBqKAThY3kdDs6UjvuppXSw2T6BszjtgVEwr-6IrT2EIEJVQhgTbkX0mbUbomNUNHxM8dZioiUuZ7NtWmtCEqkP8qecJysnjUJ-du9I3hU5FFA1DVanL3V1FD4rm3tiFqOvVAD9XHPMbvab9QGDr6bep8fb9MWQWd7uB_fU-JeR6TWk96YMu4B0DOwxg5tmWiu23LhMERPdCghjCHqJVu7Q4wh1U-ZV1QvUBzsF28aTzNFJEXbVkg9GAeJy9lIGciRQs0x1v0naJlADf2v48HuJCc91ACBFsFUnTm7PgUp-n_be1veTAGmSa3S97LQjhWRf0XF3kxzQMD3EI45zTe2ydoJZk2uJoxBrFwmt4u9iW6VGmjVkGRRIhhUlEMeWJj_T7ertItfHP_G4DKJf2LL3TDiVv3U6RPC1IZbhN71fioeaFHBcw9MbYJ79aiAXrUGV8ncYm4Wui6G6FxPS45sAeeGIujTv98XhrdW8Hi_uA2rnw4d-f406Yhb27panaU98oogmiR4GLWD5NsEkZt2WRogeKhSPh3SdNY4gkGuj7IETxyGiwOT_luH1P75xIc7jmsSgxOA352cYt5sQXzHYZQcuwPyJ0CR8r_3oF97zvFjbOAC1OZ4K1z_uhh0hNc4T2Y1RZpqLGK0BTq0tr0vH3JMZMcERdRj2mgVHXAuQdh1KO6SYoblRXViSomSmbeTuz6j_levvBngYt1fT1lzz8PzIxM_RYA14_9CIIUP2oPXfK7IKMlj4fHVPTRY_bj8Vpo-dadMnwWQHg=w1365-h880",
    },
    {
      id: "9",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzag1yAZBxH2vyQneWZro_pff_AL5wVOWcgYWMJ3LGVuHmGCCdm2lXCKUFvkeH2HSBpzfg-2deFjUbhl5FK3ugHKGttdzYVSh5dGksWGMFQpnLGkdQRRfr-lIUN0StSN9hoOMbErVisd8854yfEA9t7VyY5sNzSkafqY2yZymNHW9vaZKa5_JXqsfbDCRGGgq0H2_E5oiKDIAHD4CySI4tbDGnMc1A4wW1WPgeeWdS6a3ydoT3AlRRUUJMXRBVGV5twAu9AfPhC_34ciHh7IY1QWIgicfyBvmmKkkZpfwezZ-5gPXSjP-w7sd4yoA_RNHIpjVXe2gD_qHjjseYBHZdiIlmpLWmdjUdLaK5nvl0PuVT56dIvItMnb8wC82e1Fz004EMISpMCn61bOdBreBidCJCVbhOFOjpFoYdedrFfQjqlpg7dXQlIF6eWsKGTaRFuuY-KFq0wAcPhgZtBabYK602beVDaQwEtBZi_Dt8zpnaoPY-1XhbXlSODTNuVafZYT6tymNiR8FJt5MSu_5V0Of51fa77P4rAK82zjq-0lzVP05CL2l8vLwltPA67KOFEjGATVYOxiWFN8IGyIJw0oPLgsQIQ6l_Brr89vH9T4ONXCbBMdLii9xuYMGK87W1oLO8PnAz3jlv2vfIC2XLmYPjgI4MK8b5TiWDDWAiT9YE1tKwlPIqvd80LVsCE-1T7v3wD-_s3EQgTYbq7-5ktlVTV7oIMW1mRItlUzMsK9WJCIarUR9CTaEecs-5hlqukCJgXebO2BfdnoA2cswmLzO22HC9fDLBtA4pmEEaMUvqwAsE4A9OMMV-ZPFiDiBByZhyzS6GW-_iad5GE-Rpfj770fF4eA5Sf1HH0rJGrLnvUiQmYimfYrsQiNhpgZXeQ33lx-8rWofeOM4wj68Rf3fqLXW_aBkP8MjX8ScDnZa27uPGaHio43wX4XYIIYSFlmj8o3rTAYjLNDRpkiz6Bz8PqlopbQF_fAyt2CVWvv9s-ZVgYtma0JHXtiaEAKIxmsf6Ek0DTaTB3aNDVM4LbmuTdweEUB92_Yc6YpnJ3HWJp3GozbTIup5qDntPw5dhgoKSE6JjA9XqmSnu3rS_9EjQkwToQZQwWWfb4Yjh_1iqvgzbbCO6HbTJ891j-o6X0NtVjRStBECTYXlyr1BrNcg1j6cdHcMr07UlGqh0nVWuEUf_4NjKGhf7iKQyjOnVuzg1s7XcuMbzz_UvX2wb9yjTp66j5QaAAVzdU98VJavctbXEo5UUEbL7DU9sagwvNLaayEbjqmn7nPw8401KMaHZ2dyxQ67hQFWdKvSti3O5hGtV9p2mUZBIMkk0jy1lyuhH3i_gm8sbCVi0zYnoEiLQgVfO9BuwtA7tSgQeZC12Iz6tyDY-yiUdt2n2q0zzhck9isMgvRl7V6V9iVvTqsZDrg__fOhGYnsSc8rbO7jml-Fe8GhXeHg0H7UqvodkObprvrBmm-AoM6-MLWnTi6EJ0QXUfDSVoQYNRK93klEq9TU7XdY47rN4bVl4k1M_gWa64RlSctwD438_AQ-oWaE1b2SFF3o3HN3DF1zOWb3TVIKMYdE_MCw=w1365-h880",
    },
    {
      id: "10",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzXYe_pweCS5scan11bbd9yipo6yPdqKeyvV_-fYf0okrvjnYfGzhkmHwceRwEbQ_ZB60tTl82HbirA1MRs0SDNxzCGvW6iZMA-GsAnxz97Q0Jax02_XXjvALoJtvDLmRv0gaIFtsYOLILooQsHn-JOqAXee_wxLf0w8-TILutFTdPY_BoYpIY2nUj6ZyVI5bgxvtywozPBjHkEMYOBmdLIxcbOi3uV1FAFMsg4EfN9Zy2xW2ECPZgPsqZiUglACxaulykmlC3awM6e2vArDO3ViM4mNXKJnDeoNlolr9O8w_5Wl6AhdVZLKH4EqDkQz5ZVBi_JDdD0VBAvSSuMOOc3C4JtN_VrDUM_rUVOG--BU5XDZelLN77t7AJ2W5v1k3-Ld-eG8ZZUulCzZbhVHUPrOYUu1eSaufWEqj6fq3mcAaMmw6G7uq1L07N1zJNLrfSPdApPjLyRLgKYC3EY_Shyl2H6UuI9jHiRnn4Hi07YCoesKWVqkCrBT6BjFsKqzA_mQeBfRjondxr5CqtvOJ-78or313DJ-LCzY7N6_-GX_ffN_PKLyo9xAPrizaweNpyfkJPxmvHsFR_6FrQr2v0vF0IOrQjEpkMKaG75Chg0_MiTSDizg9nqWvTqquldxqmuk-zI2o23RmLZCY6J1K4_sz2qhwlkD-6akboKtNUjrkvvapTFqBXOydGbE3uFI_VcBPbVUlmDAFv9DP-CWWdyUM6zRXJ-S8-v-zxSl5HydOt1KJ3pq3XMjYRd9j9PtTc9NbL8BkueHllmYqPCeoBd5MIlZqvXuoPCD6NxpGlbrEy6Rh0PJl-JgRVLTnDkkXkFkpd1WJWPBL74VaRpnsQAo52M0iBpDSdrZe1NosDthckARiz-I5mVUxNrvBeE32sFHcETvY1xj8oHWrl4FESJY6oSVqWwlAoDTrUnJTYEb-qywWmSLoNlv0u_qydH0VEoAzJF84ozKfozFdXY8l57577CgHQvjg2rD-nv9x_k6rhCjqbh5ROqNoAM11mHa_Vz4Tm1IjyLlhDbEF8fhd-Mks2H2cghHNqcW7AaSg68Fy9gmFeqbLJuFLOuaJTWBYVeAmjwGkb8XQIONHHnQSmVX8i1hLoGeU9s0WzsSv17-VdijmIQsUBF5jyL6AMONzqxzVbYVjC9G1Y7bCJ0kgP7XExv8vDntddv-KvRDwwipHb--GuWX3Cvve9zAGzoX7Ny0OfBTE0Cc2QGkaUX82S5HcFATDnlVqjQHxi7l0zncXwXOnTu-hNRewQKeiHjzi-Oqz4Y_A4nblPoRGllFLLHlcRgfYL1WWTfhkjXMSwYKJjmWyyXYNLX8xN-Vs0DIvbGXZk2ha12s4kCiI8Q4enY-Rd8rmJVXNd7toRk2zRoYOXRX1oFUuib99coWhu5NE0yROxU2hPYbDc4UrU8L1mkSZqRtREFVbijpboF4W6A1eKWTOW7yy8hRLGp-SOGDeEOqa0_DOVxzT9bUpjp5lJJS6FScAGzQN5pAnHUCiDVvOT-6nXMf1PCGbVG45dOQRxpbhIT867O6ruj1fxpk2xpvh545I_ajsOx57LTHHmz8-FOLSI-AtPZow=w1365-h880",
    },
    {
      id: "11",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzaBpgF7a5V97UZmXKxDIfbLTMCWjmPowMjNXO4jQDSb5xBJl2hf7Cuefi2JJ5o4UiHh2jLFQvZF774R7cAzOrvDoIo2LK5RYgRZCnw2ZtQX8LmbW3_4KSmZrIc_Boee0OKvf8r2bYe6XcUPdukSfGU_3ZHd2vOm5db9oN89HS9NfBOqBUFmsr2q0--InppcU1gF2jzyr89aFXI1zxxPnsyW0rZaLc2zMdEVzaU6FdVz0YLbSmQPv1LdaVT1t61AmBVoM4nR3eSe7cMVWg66Lf4bgdkraZOzPEMn0bLACnsVipcST5X8Pt2bifFuMdV94SF-0Hc_0Pb3_gYIZYjXmPZp4ycxOOCwuOALUuFioZB3amMOt84odbFWIEpsXMmhOX_FH9Qs_5bZqCxJ7S2xNTaXD3S38VR-tuxWxjAggvHyRTYrBrN1SKbfFfBThupi3eIPFTaZWGZznS9lQSDldp6wJUOTf1qoP9fLIAUoKowDitzLWxW9PK5wnbGFANISi2OWATX5DUHQ6u5McizDCCJ8F3UTA59V5zFxFjc6Qxt7Wxpm960pG-WqtgCMGQRu8SO8Zz7-StmU5WYuIpTkC0K76l8pIISpgNiW7RiFjOPeWungxElJbbOTvWyhvqvXZUps7OkFXq4G2wn1mOJN_RHrEklrc7fwIJHzWwsJvU8RN2aaKs1FkwAeuS-0pzUtgKYgwOsFbd1qc4twnOYAi3tofH9zsqOdjAbteTyMiURWU3n-0cw7mnkWo013nl0Od7FN7KcXqE4faiPmllHlqfIlre04cFJa40lA734m3JQi8RC8dC2ALp19Ul_k1iLytwrFgaY7rRuuR5YbA2Ik8jXUnfwIjOxkc4jk-0lP4v8FRPewglISzNhSD71Gd68zyqmT1ZXWXnZmr3cdDukv1UmGGCyp_bJXBOUJ74sR9yIfUrOvbtkyyyD0Uny3PoJ2GicVuHYJm1PqpbmT1H3uEML7R4gWarrQawHa8YTU7rcfVW6ObKlz6DfLp7cvBVAttIeZEOTrsJ32Ajbeqd-ixwg_ZDLfNphqMx-yI19uotfxNYJ9Bqhf8r4IO7FAOtOBqsvDlgA4ejypOkkkt38o6SgGfm7dI4q8uPSsQEtvAyBOnd6For4IcnsAZYZ04k_bCopeYYBgqqO9DdBX6PEH050UAymCt2ycKU5bHTDvZEVHEdyPcuklL-nuYQUHKyvZW_g3MpVSndSaOnRkh2-fpooADrDE6EAYCWU5o5tFTU9Eq9yKc6-dav9ENmMSkHHvNAW4Vmgy36EQ9piWwBN951YZyXekm5fLjxY2j2Kcp7JFkJ0ph7KM1QqLg1tRja9u-eD_02x9idtTf3SyH2r87vtKk07K16cRrJzg2-Bk2O0nZNx9NrgRoniHMmcAYSlXERrqrgvPQpNjNvax_H9-N-lfkD-pYdrT720hWuj8Yxz99v303sVOCkTgfkfOO7eA-KNFsLsSduUDj7Rr9GZKXAJ8Q5OLSD87YSHByw9bR_pyXGWW6qnzZeajnjdKDZIwStC0-uwgdsyd61OccPH_EopdKGNSrOci-Nc-24C_D5jgv6pd40f0nkt7Q=w1365-h880",
    },
    {
      id: "12",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzTc2o5HqlwtO3UQh9MwPAp_WHi3IQ2li_im_58j5XUTX-oTgGcqc5HW4xggw5JT1Kx8Zr7o27PF5G0D-GoXWOWGYF2UGL-eWLM9p5-XuqGLM_xwyKNOfoPmKFWaUEWi7wzVd-AbNJaBq6KtaKBZugtRJoEn3N7LFB2enJ6TzltIoze1WMOb1OH95gmxrf50f6zLPGV95n6x9xEelQyDImVgVYPMEUaL04p7VZlacSBCUG4NZDR59S-hV2lIQ5BzcGxzLKzZz68iHfitrRNSeQkyhtNNGPGyWFO_WmRm03gi7uzixrezOluuCsNOJCC6YC1m3QJV29O2nPz0ZSewcLgr_k04B4rOrRbG91v8T80O03MlGn9jDvlddx22Pa0FDvcqjPdUdpdciF4gS0lnG_M6PGO19KyPSP9iLe2jJrAZW9F196Xa-bRiEApgJooB5vXlq2KRvkuY1oDgxengXJz-9AwmpE5CsA3-eJCW6Rl2SIMj5AIjznwjN_7x4jnuS_iE1qN_rWmYBDCPkVGbdY_r_Fvn8GMxEFrRl8gnJgICHn00GNzF--HqHawRgWHGM1IZKHWj315dJSjFb-uQ0iPzYs4Ld96nF12a4eFZ1ioSplKMZKhMd2M2EMrqX3IW1G8tbwUU-11omFALjP4ltVu38cEarVg-gAu1wp7Ou9RGBVpM1HgnPX5KPluyF8a5lRiEIFllyf_cyfE4ogAEg9919W_YMzYdVle3MSypVUmq2Reh__jxQ_RAIlYeepZvNLaHL0_I_TYTDbq4jKegE9H5IWc__9LxjayLbI7ht6g4ygDaPUBlz-VWBcPIdESwFTc1zZXjhFZp42f1tPG1Jpbs4nDqG3JvLwzyd5b6YgPJLwxGa8g_WqCFqRTW5ROsoIWgPVXhwtEOiv15EH2Ry8B17VrkSR0YOFTbRFmcGoajVreEo0eBGwZMlqlDzCOpB3wJ9GqP1IizuVt91lG4AZWvrmncINy9qIAWD65tizZaNKC58imyY8R9yYGF0_ccPG4abSsXi4E3075nS8sXRYLccw-JlaWRHiTRmZjkiyO6FT7-c7e1GlwBDRC5cfb2qOH_m-4a1RscY-Fr8J5r29Wp8U4y0KbxRbDtSEOdaR1mftnRomh2KKvTsZdn4swIV5QbyihnzJ7918KsV2A4ti8QxeHTSeNJz3BDL15mB9V7OKDxQibS8rZ8AuwbHchqCeKtTeUeQ7E7ErhH2sGuj3-vpVYg2Ms20l87S2jdbShsvWeVmbVvoUJfabmNqIF51HJ6-YkzPnCjv9b3AeD46TJWR5QCfQ3TlKQMSPDxWQhuDwqmm3fHjhlm4IysSrympFlRxH13-TuYz71eT0LVGeeNy6YdJ6UGAc3p1wIJ9TVLUIx6ngsOu6QDkemubNBFVTOUG5mHAepxJHWIi3Mg4rbiW_XS4814qWjxGUWYcz40vIVk9gs_v3nYa5ycjQvHkftf8h4DhLA4K5amPy2bniTMSJQSTS3FmiiGrzdHwLdibdpP9HLStH4WU8qovnEAYy4VcUwvhanCvtgQmQ7WXD8JEZReBcWy1z4lT8ts10E8R6IcS8A7EiwrA=w1365-h880",
    },
    {
      id: "13",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzTc2o5HqlwtO3UQh9MwPAp_WHi3IQ2li_im_58j5XUTX-oTgGcqc5HW4xggw5JT1Kx8Zr7o27PF5G0D-GoXWOWGYF2UGL-eWLM9p5-XuqGLM_xwyKNOfoPmKFWaUEWi7wzVd-AbNJaBq6KtaKBZugtRJoEn3N7LFB2enJ6TzltIoze1WMOb1OH95gmxrf50f6zLPGV95n6x9xEelQyDImVgVYPMEUaL04p7VZlacSBCUG4NZDR59S-hV2lIQ5BzcGxzLKzZz68iHfitrRNSeQkyhtNNGPGyWFO_WmRm03gi7uzixrezOluuCsNOJCC6YC1m3QJV29O2nPz0ZSewcLgr_k04B4rOrRbG91v8T80O03MlGn9jDvlddx22Pa0FDvcqjPdUdpdciF4gS0lnG_M6PGO19KyPSP9iLe2jJrAZW9F196Xa-bRiEApgJooB5vXlq2KRvkuY1oDgxengXJz-9AwmpE5CsA3-eJCW6Rl2SIMj5AIjznwjN_7x4jnuS_iE1qN_rWmYBDCPkVGbdY_r_Fvn8GMxEFrRl8gnJgICHn00GNzF--HqHawRgWHGM1IZKHWj315dJSjFb-uQ0iPzYs4Ld96nF12a4eFZ1ioSplKMZKhMd2M2EMrqX3IW1G8tbwUU-11omFALjP4ltVu38cEarVg-gAu1wp7Ou9RGBVpM1HgnPX5KPluyF8a5lRiEIFllyf_cyfE4ogAEg9919W_YMzYdVle3MSypVUmq2Reh__jxQ_RAIlYeepZvNLaHL0_I_TYTDbq4jKegE9H5IWc__9LxjayLbI7ht6g4ygDaPUBlz-VWBcPIdESwFTc1zZXjhFZp42f1tPG1Jpbs4nDqG3JvLwzyd5b6YgPJLwxGa8g_WqCFqRTW5ROsoIWgPVXhwtEOiv15EH2Ry8B17VrkSR0YOFTbRFmcGoajVreEo0eBGwZMlqlDzCOpB3wJ9GqP1IizuVt91lG4AZWvrmncINy9qIAWD65tizZaNKC58imyY8R9yYGF0_ccPG4abSsXi4E3075nS8sXRYLccw-JlaWRHiTRmZjkiyO6FT7-c7e1GlwBDRC5cfb2qOH_m-4a1RscY-Fr8J5r29Wp8U4y0KbxRbDtSEOdaR1mftnRomh2KKvTsZdn4swIV5QbyihnzJ7918KsV2A4ti8QxeHTSeNJz3BDL15mB9V7OKDxQibS8rZ8AuwbHchqCeKtTeUeQ7E7ErhH2sGuj3-vpVYg2Ms20l87S2jdbShsvWeVmbVvoUJfabmNqIF51HJ6-YkzPnCjv9b3AeD46TJWR5QCfQ3TlKQMSPDxWQhuDwqmm3fHjhlm4IysSrympFlRxH13-TuYz71eT0LVGeeNy6YdJ6UGAc3p1wIJ9TVLUIx6ngsOu6QDkemubNBFVTOUG5mHAepxJHWIi3Mg4rbiW_XS4814qWjxGUWYcz40vIVk9gs_v3nYa5ycjQvHkftf8h4DhLA4K5amPy2bniTMSJQSTS3FmiiGrzdHwLdibdpP9HLStH4WU8qovnEAYy4VcUwvhanCvtgQmQ7WXD8JEZReBcWy1z4lT8ts10E8R6IcS8A7EiwrA=w1365-h880",
    },
    {
      id: "14",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxBZ4LWQXQFW0_PKesztUkTqnfZ_VZnD5ew_N7byLNUHuL5KAoPCiXQBJ5xgQ18wc0FjHaTctQroU2qpJLGntmGmJHerV4hik9B6rzflejSnoqPSY2TPA863XiP99kLgq5Wm8kY9vjLZpRRwhqd6j9H3-nDhT4A-giaoSbkdwpLEJiH6IPXkLNCJgcUkniBnEezJPDkWcXgohRdNk6VQLcw7DANpLo3OlCtb7LqS040ITQVDCZrmlSW77vV8kn-M_mWSq3Wr87JloLDbIwTudu_rtjJ9UaWcClw0GZTsV34jf_bfBHMSu5AkyZb5OtrC5uSYBOyQOZDZMWsucEiKH1OAB01lGp1KQ7vQKkF1GtSySCVQKaUk-x34E5xdsvwfRdz9CS8rIyync7VNX_265P4y-oplSJ-zvRvXTIMiLH9fw14W3STOIFxgljoxF1Slbi2P0D3NMgg_qzPJTgV6Xo0Qpj-RCEzZH3qmPsB2i64Hkwo8qGuI5AUX5XyQd736tyBQAZc0XN5OAZJj4-Hf5UEbYJU6voCwoEsepLZRrod_GRe4ZF701kxqy1ok0KC74sbb1MRo9qhdIptitg7P2RCrWB4Fvs4z-LPETbYTFecq0ITTgkEKqE_UgBkdkkZhs09VgAG7rFcpccs_ykLwlV7TcCGZ7KXL5l1Vd4cxbKYDChSI50edWGtEg_nn-Zvd8y_Nv1N3BGpJdl7r_gJCOAK2Cib7gUvYd-0MvHU8-V8zVM00SzTkjv1okPBICODLMfnEVn4S4wzE-TMoBEs7FfAvBLKluKobX5rPoT-K6JIaHQ2pCLU78_5XvPJ_ecBZf2s60WISdk6w8hw8-d75pmebdrvtETPU2hbtV6QLylwyW0C8WsI7oySzdlc09V5X5wA9vbkp1BlKvA1nFF6AG18vQBCtXYwNnEoo-BVvXCrLuzw8WogINY0TdbdT20P6cdA9Yg8diFSC7pl_5_PDQUZaoU_oAwQNUSS8xHWEzyXEw_vxlHXPAmUwGs3p85nQUJB1Z3cunWYxmdlVas5cuzHV-FPb5t_E12wnaDqV2NFp2TyOI8AWKrKhRWkx-AOtgCj5IjfyOh5pzp7FMQOITbiUPmWuEJ3RNilBVWwgSo1HTP-yPpSFhUaL_UVPXZGV48DMdBbhwzrRX0IvwVl3xrJYR-ACdiHfHBb2YQT1B7mPCIDDBOJzmVdY7uA6qhkjHVlAQnAaDlDqxn5lBmOyIwOG4blQ8_h7xIqqLyqZ-Red-5uYHLOUFV1FAnSC7FHsuhOM2D04aLo3KZAed9Eja65u8rWRQZM-3e9RWQse0OEHdRxARJ4YoynDhlCsMvzicwS6Jqtkv7TuABhi_VQ73IUmYE38D_hsI5vu7n0YsoraGXgq0FgiW3oQ2q6vYcmQv66E-cTYYQ26zgByV51YzOwqhfKCyAH9uPYSZyH97WedP9DyU-_EoELoYfaHwwhR_X8n5rDsMtZ9iyE2b2wgZfFJtMY_u87b9cZETDnWZ_gOOTSFqlYsqjZU8tGWfJr1N-49RPGJ4hWnC3r4l2txpdOPUJdvkBkp1IggHP5t0ZCwtDJP3hoRXulHQ=w1365-h880",
    },
    {
      id: "15",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDz8gs64L58IgClRCEG9K8ar_aSrS_S2pyo0w1RCBE2tG4luIfXsJ88CyP1_KRRuR2RvccWNp7XWjrr_zl9hBU8H30NqR7iZ719kiRVS5iVuZtfFz_ITAHcOtuLsGggGVmXXD7LTJ5OD44Fch15Bf7Xx9kBqknNCSwK7dHvIjPdMFmdOntCRZRw4wzgcykqwlLHGRnW122MvPT1-5jxL6CDvMXR8KW-Y89G9TTACYUQPsL7yNUDOXWqpSb_rnY-yiUDeihi2fizxcXZcLu7ckomRnXJkI2BkJ2yh5IPVOGdjuwYeB3vhiwcX7S7yJaF8aDfHYuiqT973u2NmVRaLDMwppqyaHmIGmxlqfB_Z_IkwOU46bfh_89TivVeONk4nWy4HWo9V4k3TuIV0fRQktgZQrBpCWx01b1QTuoHyiu6Y9KbnrmKApxEhFR8ZLNM8qh12q121bkNp0b15n4ajorDIFVMXytRqmjR4sMcMdC0Kp9f4d-jMQKZzs17w7rEyG5bhPbeAHW4iqMix3B-NgAYqFNYA8D8lq6wQGih78gfC9iPSRjl--5rlj3gMBr5SKPZ8NE7bhagoRSNYUIxzgK28LZJtqoipKBWAmCXOo8F3YxIg3mlYt850h7iieDNQLykCslNhcpmULz6eopaCK6ms31nrQ-5vai76PbdRBNxCYxrDbzKXTSSUYPs_uK-mfwgTHK7zjfcIM3PTiXs7gDkVhwf5oCiczTn4JE5xxchjZokO8z6wV3UQrFK_f-gcw7asBI5166YrvZavQi4Wnz0rg5p5uBY6mlIey4lacnC5viVLl4HSg5s1Kg4Su3M0r5ZJFoKr3SWR0lM3xEnUGlivOe-OEhq-3nUCOA-bzDxaOZ4WLOB1mkdsqM17ZJkXX_maqEWZHeCzP5XjVTijro9g-hbAzY-zMShHnB2y6qqWzhkrRzjK8J9njylHKir0nybveEtPenFGwRUMZN-B1ziOpdfblTOeI0Tk0eOjIe7wSWFNQVyNqjaYyxfnsFWCdypSKYeUGiddHlmYrnLdwwpe0GBYIH2ib5bUg0jngMM9LhkH6gdq-SikTuHvsMZPsuaxTcHg93nfbSw6M5X8nhQH2d2-ZQd_9WjMKQTfkJyKZi87I1HybaLSUAQFQbxrXxcVDDY_EJ4VwMrAufHxRPm51kwgUjxm-xmQJ-OLdDD-eMx9QePYA8DugmHXifT6WiGY9310MX2EfATH0KzSdmbFBsfIX4vC_pcjSqdSKvkDj_Q2r8PIeolOoYPWfHAWaiHhsWIjk2kj_qib4cVenztvUetou1ertTLsXjeVY9msaE3z65DqqNOV7TtGSsFNQCBRGkccM9E9-NWjKtQQJR-es7fJykaRLyMI6CU5wKufqBNu_gwPmmFTvuoyx2_zdHLVy6_e_ep2p9ydCk0-OG2R2Znb3Mykphb0d1X7UiLrRT38LdiRonG4aMQUvEenwsLi_NA2TUwk7JPa4GIm2bbdf5rLZkT_-vLam989YDVscwP1bHlqV4VmTEyXrBmCH2sGpf-eP_fmk5C8_17dcFO4IYzDT937hMf2G0tX_VR37JHMck6dcFDAng=w1365-h880",
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
        <h2>Recanto dos amigos</h2>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Recanto dos amigos"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>Telefone(49)991299281</h3>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114518.97595299575!2d-53.631444!3d-26.238351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a3efc00d4d1%3A0xa2639fd77d18404c!2sR.%20Quinze%2C%20357%20-%20Barrac%C3%A3o%2C%20PR%2C%2085700-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1696721969200!5m2!1spt-BR!2sus" />
      </div>
    </>
  );
}