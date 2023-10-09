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

export default function RestauranteCasaDeodoros() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzMpBaQbojsuiwnX2k66_B3o2C2Rz8K0hWSK-3nrXQjSTTz4sCdx5cIUMlRxIrOSlB4xTohddajYjijRZesSBpmQOtRvxp-hLO0LWCHxtVvVbK3cbilS9TtG464_gNRrjCtJXDHsNaELolGdzMELFWTLGG_l6rhhCtN3akgDbJ0Kquh8Kk5X2HxmLuLa82xHpZD5BUvswfcnpJs3UA8UDnnAxv4oDC7DmEQWLKEU-ZznupIaqo6Ht1GeKZ5zBXtFI4oow2V8Q-idtl-9_gomMqpxgPQZUwLs7WZ9oeH6ybgZv5A-5gIdCG5rrlJqdfrYK9aFGysVjqJLz1s-YYuz75CTFkoitFBahpf8_zX8crHE4t5LsKczKb59RFFQ7W1NOLS8XGIOllUdROIVKjGwvFjUXjPoaQXIw15-HM6mhts3VipTVBOfbR0xRvyjT4XqJvj6H1vyd7IE9ECODVpNbAoyESs2Mp7QVHUiXtx4xS9RY6a8pHoMb1l97uuwCasjLN3xLHFg1F-lvC05z5hQi0BjV7n_oHIfboe41hZatxA7I0JGyRbZi3j7n9Cz5fLtZj7XzWRa7GHzoUKhH-tg12kyO-flIlRt11SXf2x7m9IuklNHV4JHKP3jgn59l4BdCfFzvoa0vfh7g9Vs9fsjEPifoxBXZq-ZBL_HtCqQtUpG4_OGq3PpVLG59gmx_wCn5KFTL4Pc2ah7RKsiNF2Hk03gQqaeQ5gFxt9-iCM49D5jxTj8R5E3eo0AJWojrOk6O18TqANvFlIh3OiizNWlUZ7K-rRZQw_P_yZ9iDiQvluDt58zd29GlbDHUYyTZA2vaZIw39j5LX4SCD5Qw7ehqUo4KchrCCpvp8zbKM4WM0TNpj9QyXs4OX6fsb1XuZ3ZmlnYBy9FNBjTSkcRSfDIARUtis5ZHRsm3CcyIWXZNDtZPxXDMt3UqBlQPj0_rEEWtBJ3q7-6bR3y1n2q9rebo_z2m2qKbETA7OkZSPqDuWkIO_ldRjj-7xL0hXqdmJTVGI7LPD9fsrG6_nRreOlF7PepfAEzhebSAAfRAQRGz51Xa1gNJpQVWudKcBAlQcOt6o8KI6rxPgUXUjmwu_fFZ5H55PbqANlPSMQgz9g0aqEMZdXp82cSEwbTcld9pB8roHYBBcfJVyGfYdPWl8vHxJbHNnVAIy5FioslUyscu9uIEfyLHE8564xS06Bg06QiDG8NPR0Squ4FU_0ol2_7mR51yfokcvKL_eNeakqb66XBWbitDMCzHCi8gGHR1csEMAAavDrc0HsRCYkh9E8q-FgbtWbGypMSCNDoA36d2arId6bBbVf_-WMMC5rWjmq4P_zJLqHXIz1u9CFOXG8ohPgmRsSHCKd28PFZ-xvq7Oiz04MAucA4tsurCrqCkPQQoL_OySKYBZSRs4vftysqasbU0XII_QAdwzaIQMnjA-kqtXrR4F8_3UFE_eudCI38jpkMjI5TYVO1RKY8N8vfOnnw27LEtkqmRV1uaMs2oX1UjAZncPHbwyK1DaJ5UlksQEv5Tpb0xMk399SLgm3FaoObtfwGEbiJf1S7XtROC-Rfga5Elt1ojDTpg=w1365-h880",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyVAeqm1hDqfXhQMP0s2zqkalzYhSM_xPLIaNN9cTyzRkS3AG4aY_BtL5qlmIx49EdshoGKWJWAploNpLHGWVopZ9mkZb6F675YnXOwr5x735DlWOBQb5OQRD1aTjUS-nb1XtlGtUwsTDqKvcGu3YCbijQpBRVa53VHtSFiR77D67TgyRxbctAJMIAA5ZAfsT0aiF35kbHBQPBWCdgXncEA5BUCS7ba37nlhXO7faTnSMWEpXlJXKYwgGFpk-30q4SsIUeZPoAMiRCoBEt4Gv_ONQRKTI90p-oHtw-R3mCBLnX3BSt_DJol1Ci6PS0mFEAWrWf3HRzK9-YJ-541JomMqNo0KaQFL8WSi7z5AXx5gV-Mo5olHD7RKspSqm-V5faTt2UJcO-rPpkzhEBMDoLwq0cXcUNjQeFmg044oUVs1yPM32uxmHTiDe9XmtsA3kJe612AQQJeohX81jOIPe2wwK6GmDzW3NgTCy4YYwSnDDJUSWRfXAlmQggw4bRYBYSxNlQYpO4D60mi1wN1Qf8gT4ZFPVynTSgc4tPGihGRpxA-mbAPtUDE7VKmpnSzLWHMF372bkNcZQb9PVtTHRaSvAD-fFHfHU9lZJxiJmr7zcVwg_7GgjsGnHIhd07jch-USaIvuLf_DruXPLPo6KJoQ_p2iLq0KRxp0n8opUJvEGInLq4v163Ax1QbmTMysjRkqR3S_RrOOKGEQlA0BrBK5vZQ4KHCapNQN-IUYpj5O8nWJZiVBrvr3vSFWjLNYHafKLqu6JoCDENaO2BXb5TUDNO3PwA3xL7ELh-7H2L9CJrW4Ax2y5hZ35X_zYvnn6sTBuuDU3YIurnE8rh9hWP5UHBbfe7nzpDSGm_jKhfpnV6uwA9Zv3MFpDkKa6eqCd_u3E7JT8VoP092px2ba3irTG7JWxPKPiSqNbN-xCsD3CqBOqji5zwdP5wg5Q2cURek0V9uZ-QfqBydrz82gVrMWh1Z98LT381gmRsjLzMZkX8LSf8FZTrwwswaXMZpTwS8hLqjl2dWrx8q_m8rGglaU_L4hyihhRfbzO0Ee9isdkND2oPoqlwerpj03CqeHDmwqpHxIxhzIzwmkpypyJ2b-GwLETCrA8ztb9TSp_RkZ5l-Yj0le9x97kp12vZTQNKvBdCtl4NIwj69x-uTrUjzdp-vamy7NsKpCzQv-yFujB0zioXelMuJ9t5EVxdHFI8rcXW_b9xmlwulCIAmhpavES5HbzZ_83jB5rC-4PM54-Vrh65MJ3R212zRKgF-vzZYTq6ShGUNM1S_rq_LLd1rkjfdioDhl6QI4uHX920Yhnkk-1D10XTqJb5zwvBRyY5aB32wGZcDaFCfEA84JHDIlDDLQYGLM-UJZ_MCWQsBHEm-cdrBQNxpmwBEzA9lBC9MRatut4qeSQXRWK4hA3xPcxhl2YhKiyA-2anfr686CVEGzhE3r8MPrJCMfTwzVkhJFyesJxstyg1defEvWeKri-u6B9S4-46V7kt0UtlsirNAk3BGsAs2nZG_UZl4MgZEPa4ZeP_8F3dyHIFwPnR9Ugk6kUOs6YJAUinIT6t1m_zkwrh4uQxipg=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzb4S7jewFpzKnDWtGaxXnzwP3HeL3bfu7VaM4qR1DkO6wew3_nldWcgQfIZqzhX718_IfpQW68SZASXBxAkWfAdWWeZnEmOc0daqU4l8B1qyObpVQuaCsQEcc9R4EYrmm0HC_HyJaZnidXE-0ZzjzrfRUMprvwgwijhqaCd2vxV5sLOM6OyV2t2a46fo-cSN78H5A9o0eg-uyBB7BlUKVJx8FtuQteHnFUIq5YX1Rye3BNCzBVr7hBy0OI20ewt4OsTbhDZLfkf6DF20ya9PYKX_h59n5CCAGCP--kQ5WCnPHj3UgdHej7UVvHNhgQiNg4urhJgaaaWB22drPq2OUZwHk4pAu3cU0ShNVkgTqALHIDr1NvPX13JLX4tCJHQd-XTUwY1vw2WNCk2fF8oueni-7T7ZLyUm-ew6tHewaZWT08NZRewdmlNVi5xf7L9xJ9dgBZo9Gl6jSNIAwHe8VbkzSpBPn7ryWjVMiC5FCLdoycz9_S4MsOrtCvIml5SATHI04f82Cpzty6HWKbhZML7TjISX5hX_D3I-lae0bOM4wGdjLO1RUYwjWMF_4pIfRsd-3bbHGZou4aJT_2MLhzbHCfo73EcG_SvZkDagYHLX0eB43RD2T5veqEEk6G770QPp0OIHWH70qNPfTL593ijJYgzddnvJyKfmplvNN48qQwDubMaNDucLF3lBY2ICFYGdveyKxQbi_R--26jP6U3h3H9RFBkF7lEMEqkXWmDgRQbB8N1UzqIl5HstCiiuf9tUzEC1uLYjG9mNiv5qvpFwdEHz9toU10StaRLlJ4LkOv5W3BqXvtiFg8t5HADr4W1Y9AxQDPwGxwZYfFllA034qcW8lLYmqNXwvOqL6hxlPSuxeMEUCsjHimbSu1ybplJpMu9TgRCzFVTZnMPt-vw68On9APpNaNsBVNHGsC2oUiI0OHwt0jU1rH4qCRx_qtfUT4K9hr3y6WNsavZKrmDSWmuiGWvCLvnmhC33qcB3KfpwM-KMfI1eDj1xbXOLGMBXmRL9atTZG4ViJXeF9SbTQnEqllVtSYAVrJSMd17R_va-scM20Cb2kYoldegmfEeNJl4WKzx_h4jj6SEfSEMoKRTw0Qgb_1fhsTmctTx8OSTMysa19EN9bpXWzzLuZJHMBoMOu1yvLy6QH1I1i1r7eUlOthJxV76ihZ8hoJMUZevm3DHtvfm4nf_WqsCVpf74K9bGNpuRsibfZMe2qx0SC4HEqI18pI7Kike58gBOrDzsWLm9vsxt_C2eD7XgG9H0kto2zvNYI6JQKKpF8tYNR0qQAxj_vhUm0_0UmhUP9V2YaWsJddc4I7JUcTgG4HZNx5J4keK2WkX87bPYFk1izm8-pp8doIDgxun6cLMPKO1XBTErkEUTwPg-zRrB5pv9kEupovF9K467uXvSO27GDX4vP7ivA8UJr8j-Ud0SAeNC6O7utNaJng51px0OSo0DU78ML6a90RU_o4PimZvXQZTnXrbvn-K3HxaBe_9TFkcFmqog74acMH90Inabb8rFbIvqjIQp-k_YIiGH3xvpNhK4vIOGddD9hSa-JSFxVfZ43W6KZsvg=w1365-h880",
    },
    {
      id: "4",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDwcPoUqvX4CkH5Brm4OQu74L3WedKcYZclZlLZbvv7LFg_IL96RRlZVyak9HHgcgq2UbCO-Bt0irr9IalRdrb2o5jn4pT1m1V0MVURDNrab10_uYjLqsnpIRtl11GFq2LOaMtOt5KAymj2Fuy3LihRgNgCBncz4FsL0RvPtXvL_v7IDF1jSxLn1fED67brHgh4aRqkdS4ydBwOCVnHzmgoIR8aCo1cyXAcBpzP_FObbB2tmd1WF5wz3wtCEld5kXcD2pcGiqYZLtoCSWaQYnlpmcozxYnejHhKgJY__wTkLmKGUQQOqPHWqDo8DVT7VwTYA4VXX6KW-sxPtraWM-J5TRD2u01E61RCGmKsZpiCzsbRAQdnf8wIX4PMULbcvMafM3xvQZkHEIz5-GYAQhGe3gsfX3oVpwgBV63xkTy7Gwq1fA6fa50IJsa2UQWvD6a-fk7Tyfi4A6mf3N1mb3swrkRTjp21HVD8Fc-uc_3X_rDid03isSYEHfobsI_62dbw0KLhgFDJytMqyCVxDwp7Bl4h6QYSjv4K8I5gk44rCtZWUWROVohEsRutR1ZuYbW98AZRvYxXz8rWheQmeDBzbWD300aAcXmFbGYJ8Fh_ljved7t-0CJ1heqrBi46kmSkt1f8osSkoQ-CSH4osACXB9tEnyeaEQ7X1jEe40pxoogn4mJSW_zQ2h-TGiwmypDBU8iffNZdw0OXlgwh1B-1Q3l_7RrUBCgXz_BTlZzAQgZ8oLG197pmfAi93F-SEMSDMzmL6RxWJ7wyrZ_rOqhTOu3m9tLesGBlRz1ESmNEmIJ8geBmAMV92Ffjek4VvX4FyRZ1afizL9ZbGlv0ttzNt-gd1lLzaTJ2wo28kB0tF0jzxuRIhucoAlDfAWoewRHmoQofTBMD5MYvM8lg-bkFNPx4JTwkb6rXqRXLRVexMt0YQuBrTppUbszXbSRxrpzpIgIyhGF4PcaxvL562a-BQAKqy8SWLrMJ26iLIPXCanB9Kg_RejSvPD4LSxSroGeaGO3e78bVtVTzUcR6LJc4OYEipGKcVqrIMHtsNY_qw1dx6j2B3ME3KP73sS7sibP1HFlTBPNp6xaMe1pqtS5DNwqltrMOyQgMf-KmHkzAsfsZXO434KPPMU1K_XiwLFqeYg-ykTnydclj9pOLMT8huSwq36cp4ytygbdu-UjgAWe8Xx-BvfBbAt21CzLYiP4jqV_zK0x6cZAl0Tql5ceVrAaQYT8QiajNWhH_Rgg9LPI0WsgMnDltNnvTQDpKgA5dgqwG-VMug9wlCQgjn-TpW1WJ4YOxnd6MvtQXOQm14MfLyJuo_IGNSFntjXYr1SHmwNop0HOZnNOxloMyJYQtKaUHwcrFr-1QJprHRzgQZmyfuZVcVznRKnhG1FeMM8PVW3NwwxdRrxW2RZXcbkOWyRWWOMVX83F-bjvYc1q3NpUaBXsyA75LdlkCw-xMCaCyE4rTjqo6L4aA_SwqH7W_XxuRZY3JKV2Aju1TKIT-I297-pdBVtn3DJMGDu8BHeAeRBihBuJzEfgKAJieB-XDzsGEWu07rcTQZJFY6EGsth_Lo2_6CM1ZItA=w1365-h880",
    },
    {
      id: "5",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDwaI_V1jO3aL_ZShbHHi3gC9TtnQuENv7-3FfPQV_cxYqaXXSBB0SdqWbGAEKgZyWRnYfc8Klc9fnd0K1Hm053L4UBPeQbBo9_88aWfBNIntvX7qx99Kcz9k4snxeCaiGdyJ_EEsEgt_rz_h2IW-JiwQfVa1YNq0bzp99NpFnFu_DdZ5SCfNRjy_VP3RgTEDgMmQVYXYTmwV6ohNBeAUp2IqX7goEBur3f0ervV41egLrJ5aLrl06PYfJ5TE0KWmRuD_Xoc-VpJ3KuyLlrG08JTqRepDREc96uaiF_6ztZsFwRICeMQZ0F5wpxSxo6ClUM1v7IgSo4YgkbRwU4WgZPTtGig22vLapQgiVJvIpOzdwCjwkKE5KZLTUZcu2bMCPAFZ3xRPBEo0vKtLb_tptBUte773EdzD66w9ZySajjyVS24kZY5FC4CAQkzDeA133BWbvgLcoARWCTg3fArUbj-Gjt3UlBgA4cMrViZrxpmTzLvlUgia1f_zb5lrWNgNozT0cb9KawiVg9YkN47Ab4nSigPseA9gwDeukY7SAs53DGRZ-fQQX3WpopDSzvSame3EkF3l80KYLUXFdbB595GaqvqzZ1l9D7JBBMv4QutBp7fpc-vKI0sCgUnC7Nb0MnXzAIYC1Q8VpJN3JmyWMgd67rmvhBIBLoUj3MfgdUjy1shtsATZcYvrX_uGVKwhbfE8VGMi-VJ4WyKaJcAC1RiYmm2BR_D8Ui79Y4Rh-nAxCloGaWSoBo-mUkRzDApnWyqpOPNHyurr1-1saoXBJ4R4tsaKiKYDxDnoXSShH6kjl_IokywDJTR1Sh9k8HjR428yobIko8tUOuDOYfMoQFyXtQRtmQoYrqtz8H1kVv5IErP-9CoKTf14hJFkwFK1F3A_J-tHx7aMdhC0LwCOpEeMDBueG2puR2zQh6tIghfp079PjVwlOOLzhP85KjzAURBVuPVQY305yrG5xPQSsmTXfZi4eYzuk0nAv11XMnOavS-EFZP_wTk4ufNT2BFwuw400YK3Q2GF99MMBCcan2s5um-em5gw5XvIRwv98DWFziXCUZhcV82lbAxw-gEc_A3agQqBRD9IgYnEYFymB43bCLaoSLJdnrs6aqot3uJK0Mmbd_DdDQmZDpMQ18sKpaV77cv6BFFDCZC_UyMqLwLx5ccOCIHz1JP24EMRLOoUepRteXZlSfPHatjwk386_KAL___RrMEgRBJLfak4NByX1_anH99YAm-0Lw2Eh0hz_Daf-AmDxDeZaZTvbD42-xOWQqCbFVYOHCYvtAdKtVedBHGSM8a6CUxmuGuGJuv15nUgZ-y3xdCKtbAr1hJj_q9KayrHCSlg7gQ9yiUuIql3JiGKuh7lcmYBhv1u8xdepJDyBtMKJuwWszeBBs5x5HqjcWWHG-VPqnSgHvaLTp98qcf_frx6Vos-c1CY2RH3EKbjJ6KUZ3vjC8dd4B78XXuTdfnvfZGTikfKjgbH75esndIExuj0rqoSAYCnHhfdVtzXjq1XzQyoG2trAoTmCMsK1Sz0RhS5WNvx3hsXhl6ZO_O4u_PEWdJp5oe2NxbyjqGX8phQECcJg=w1365-h880",
    },
    {
      id: "6",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyTFpbFUoDF3cG10yUkRAnEDdvxEWbT5abBx6mNYWWF7o4jQVbl3tItMV7FvF54JaSU2xmOAimRNDJlfVVi0ZvsHOx-iZYVlV-m2fSz-vmhcCpz2sN-N8lxcgy_f7zvMOhAU7cd0Psc6lwrtbSX0VwTlVymwDroKBRWqHobQ4qlbn38nEXVCYlDhT2JYtrahiS8HxJowwTh4_QZUiweVPUO0plxK42D2QIrbBu7ikn0PXL8EItvjMERJhaJPt8eVec8VZm9C3WivFx7399UaRfLGDHxaVgl3k4JI1UIV2CNF_mz5Fnn191zaYQs-w0eRjP6-oZqoj5FLzMktMgjyca-z0y4wziDTHWE8QN2lrUKCyWbxaIatfZscB0_eoB1jSYLZ-JXkOhvCvvz-ipV0eyUwMheYUVLcC3oQhHS-FmUIxMyXvv8C-BVbWY6TyJ72LO3Gzvw-veNwmngEtz3SLE8KCu07cBe4tO3oQYswzJfNmDq6Uv5sxpNt-FuRMgv79qYEXUabbVjfQEaXZX_xtgnSnbXQlEnzwn0x1q6l_OsxDcQqNrO-7V2yf2KAj3gQ0kB1D1tJC_kL5rfutK4ri-Iz1_dhj66gDtzZP-6oeVcqu_Jwy0PFlJuTh5PyZIY5pS_p2_cmETmBSf-oJ0LRADj4qqd33gJ4BfcDQRfcs58DlJqIs7Jui2hg3D5rVmS4Va8_cUk3G4g73My9SSAtvq8bTqpuZ9X_bxB742h-8LLeNGDIz7UZa982xmXwnJVxM-gYdPJLxbb4W-LkJXk0KP2wMsmvFztP0NLZdOVZNf_dNjEo1I_gZsQVb0ZEAjQ--xVd15P8wjOYrDzx5XNDKjH_oLawCTmow4TqL2mKYsSyCOVJ1xAq6KXlcjuXVUH4bjd89cWbIf1UHPoi0YZ4desMBX7djThpkwdeSD83vVqlXtu79VGlcpHRRKY1g6WxSnqcMsBoOoz2ScSGVHv7V-e8IyWYE6FPLID8PmwHdyMVbLL-84ccpnyU--JZ07BNxTgoMC16v8LVvbPKpClIqK7OkgQ0EfESPHT3MQCBwxwB9_px2F1ZgbUTPrYtYqFLAr6i9bNf_d_DVhfwerayxUQOW9tu5TORK8FG4GyafZsLmo4Kd0GP6U7ovOMjJr7-tvBg4zmN4CbK8x75dPDY_r_NmMHMfUmUzTZWYibSZvBKZ4wJBMQ83BuYIYUt6QZecz5hCL9iFXThKfP9ZJuh64eSCLfmNO3liu17GAxnDZbh-sg87WGb8rrz7EJhbRHOT8alkBrRNuDBDUGSa1YqjRJC3s6jPYaBBSeyf2pWc9Q935YGseGcOSKAfId5gQXsDSaUSYuGUVejS-7-HfV5YkUyxvx1eI_K0c1U8UUJoGJyrWuyVLG9G6VPbRRSuEEKdvO7p668HMnitTQwHrQUKzQFEiFQP6eHL8owFIxKIz6yi4tnnzKoJNcUgpXMYcZ7nUvEaO3l_jY5a42q5GSDPk6bowdTd7cpSEvsWTvmFNnMJ5jty2yD40uiSLQN1kkBP8_TciSy6S_oOMkFBwxSycVUlNYKnK2q2W_HgZvw87hZ7j9MyyKGCKBDg=w1365-h880",
    },
    {
      id: "7",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxNK1n-HwLh7iG85rQFvYq7fMYkutB2CEUAeoeUiKP36gH7f9jvZmSl8g0OrClfdAxi4pT-xsEc8tUl03e1eLnopVHw35SqgRSuuOl9jJMhaVl5cfLgPxQnmfwwkQCPSoPuDsYfstvaQe2Q-aA6U8DArbZJl0-3sX_KbDDvH6SBK6IdOlmEesrCioqnoBTGuD4L7pRCI4gmm5QqZmyIT1yBUQO6sE7Lx0bkbjx69VfMPVFOdpKSpljsqXy2FIrhd0VWy43d6-Ud3wegJZFJ9-cEl8eztn2AxTCRdt6iMHkA2jAX9QIN7F_xmLsUo9Nkv30FvrdG-zo-taPsdq1pZvpDkX-3tahaUz1FdJgJ5kGxDNJmZon4DnzWsMBc6_RUORgWuWpp1prSiqCgh3wZieaMMMHjataI0Ug8Z6-gbWrERY1QE4vvBA3g2VDhOqWTmg1XZ0ESr-3FAGcnff_29RIQAwXKoCYlJH5NAPNb2ytmQsbuYiE-4LiG1nKMTtIZl0Ez5CveGp-sOTRWN03oKGA57NAWeY7wkPgl__SvCjL9-uce_9bNen__s-x4Nhy8PhxXl8A0T-crwOBg2KUlguBWqtzT4sryBaVexE2FLBcWpZ3fbNU476ARespiDGIofgMEO0XmT_sWVKsn9IaCzt94-uk_lBdOeo5F6ASEoLqGsMuNJKFbMqS-bkJz5W8g3B_gAF3PtvT3XhubxN220AE1R7-qoXZAXb574vJU8tPdT2p-f8Dnw2xIYry06lF_ZuXfzZihlv_2myABFCgE1Dx0ZGHaQgDBjxqiq4W_QuXapzS1bEY9a6M3NiFa4aV8ZLcchJ8GtqGb7r6JcAlupFNMdendC994rc0mg3-PUPBVKudL8_NDkvUSOmyP7SiZMEyrqL6hb08ohZbATQqgce5ZYcNR72o2SS6zo1hIfr6Z403-qwVKy7AHFKMBSSjTsmkrT8eu8F8JkSoHdE9p3VHTOZwv2lxpIvsvOyhy_XoxqJoq2k2_sTYlEa_PIOP7EUoICR71W83sGjASTy6XBVnciH57Lus9RQENPOUWJ7CbtxxKtYrbWRAPxszLOGiuZY2ovLua7oHBmTu6gDUdv0aydY1S_WZdiQCwq8O0CxBb9pv4rD6LCZazDBGAJovaMQJ0ttO1YhlDGoW2zs2C9CSXY-rJ0GS7IfSZ-5jxEiusSW7_bD78rHV0e5l9R_G8Xd3iWx4es_sI7qYeJYUREaOfAQVcaUdlxwJrkbVUvlr0dl1HagtPg6DGQK5asG1bgifJBcE1Nyyhj_AKoRxj2AfAscxjaZPpVaZcmXfs6KMMD7WcnBKOqy0WwO0vJtRUd2ZMUGUHfkhnIY77oclOJhY8e8iT9SwoGSa0SiiV5jV-GhBlq5lx6O1DVZMCSaJVXg71J_r4VTog1R3k1LnvxAEJntIElfUiYPJueLdy-aWz2aT7DMDLYG0hzxUK6wJY5hb5oUpXJIIWReLoY0CoVubqz0ILUgEDjut99_5KwJgHnpRT36aWralEILMxK58ssqNSAF23gOG8P_X9n8pG1du7labphB17DvqI041i3wXIAp5cv7fAXDBKUQ=w1365-h880",
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
        <h2>Restaurante Casa Deodoro´s</h2>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Restaurante Casa Deodoro´s"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>Telefone e WhatsApp (49) 99617958</h3>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114505.77264962805!2d-53.639782!3d-26.25175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b06c537c55f%3A0x259b8998d5aba9dd!2sRestaurante%20Casa%20Deodoro%C2%B4s!5e0!3m2!1spt-BR!2sus!4v1696718276091!5m2!1spt-BR!2sus" />
      </div>
    </>
  );
}
