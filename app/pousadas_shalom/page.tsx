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
export default function PousadasShalom() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyjgFm0db40Ul8nGFYlEEf8oXvRnHmMdD8JQ5pzJJFuEa8hRGQ-UOX3pbl_lYnavoxOUp5XmADlzREykVR_zVpZwAd214MozfG9P-NDrP2BLRNvSWzIcG2HBuPtYaafnFavabBp_y0X5r1hEvEa1rA4r4acMg0dtV_P5aiiQx-PZdZ8XkQe81SgipIuY_6-5DqOtyNUeXXEVIBB-fVYpt6e4Ne9-HuYddHcxrKerznIQM6vfu-T_XvS6_4UG-kVZ8PEaE0V_NF0tICgY0TCaokBiqBk010NQ2rR_kPPQpteW6yJI06sORBiJz2eK8WRkiZxXEzDb01bikUmkEgaXq0Cdy3iW7d0HAuk2mr7WotPz4I44D156GorCVtz24MO9yvo6Md0tvK7CnlSBrOfqcH2OLY7wX_a-hpOZPhim9jtTuxgBmFFG-Y3WkcaK3e4SsBsfpVkD_iz99wfxPsqxmZsxY7cj0XM7ETsIYmOt9MIQz87ch59PqEVwR-pLuAF8PcFSEpqRpY_f52XT5o0Gwk_XwS6M_tkJFSv_D79kROM9p1fQ0A7D1ObHz9AwA1UeXd929wBI0yLLOpIwxnW7srutakFwqH0SFUbPOAUnHoZkiPQmO7FeXafZEHp7EkJjurAi6E1MME59LlnSlgMgf63aLYS2rQHC7ClQk419h_sxDuPIw-r3z29YFRExjPNlaJVpDl7FLh2DsHPhW6qn8bMwxaebFIqKyWngHXgGoprbgI7Lrv86VNSbXCR0OXdLcx4LeF6i6Y3UPl7rx1PVeB533GtTamKNKRJQOrwgen_WnQZ5Ce8KtoQCNwBgYIqB1eOwBwNRs9h6wU0J4Rs48n-a4FI9uemC5H9O9Wkg5osbD7umgXqfjvUS1pxdkYZRiE4FFGD95fGJWW9jMztderIH5xV691KzVmyOFYGY590tThxUNkP2b9ENlwuShhuDnXvid87WPgB0G9iUrF0lAzDmcR2ydrL7zWo7Goy72uzCaDTGAdrmKF1B7GbNXCQKIt9UuOrbTyZnVUbiE0InOS-xxhGFAt5Usi9JKyeCgyBlLfZ1NGioPMPRk-bPy4v0mB8lIOuQTP4TVXD9aheOgz9A_GZL35y_QawfH6RHezoDIIdKhFQ9zaz_G_57-BVn3UjLIFbawFBIKeCxYdzu48xgLV8lDBbFGzaJ1173vqCQ-Og48oruGNF7csD2BdzzFvbNDVeab3iiC_WuidwojYKTJbnUX-ZrHuqW44PrYeVyfF5gi4uLyhSSd0dot9vhvALvJViDQOGBJKEZeDZr5SqmFIPMeBWGiqRGZrRgCYk98CotRcRTp8KXvgGYXhkZhM5AXfhXxZRMWh7ZSgsxQAz37p7GPM5oKTSXw5tcZ7PEqFZiFouh_xsrABnLepdP1YWVCewwA9Cqtt9GahuLnKiDXar-jyRAJJem3wpqVCgCPNns2NKn5cpARPeMch09rJLi3-moTGwA6FRe1IR6NcvbjlRNFBWYVXzXnemoU1fHuqI0Atk6jYP-H5xcV5OtcuuOTVdFZO1rZABWxi6=w1366-h619",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDwCInbc3whj_47ZKOv8LDmS7ClmUju6XFGXS6aqmLm6gouQWn2LFPwqt1cT1cdDWVXL3sR4joI-J1qNTBd45QyhAaJs9MX2j4u5NC10ChBZTOpuBycp-_MVgvMWDqMb0vhb0MOhU5hX6NLYdDJgvgUSjgunQJKVNlVjgYKuyzdlS4b8jbpW1pDfF7qgkhDstjjPjVSZxobwf5TyKWczD5BOq6qQtZVOY0uYmJ-AevES0Jd0L-h3KbafBwdjRVjetkUayBNMocHYHdjw1UTXPGcS1NqHztb8gowWpa1ku3ZgA_vFPJuNI4bcMjzoiqK-tkcBE464czu2rxu3F_xpprhd_V9UDrkh-lLYWek5-jrf5wJZOFpFuFSQuxIJxIsIYalmq118zUkknb5ET3pFejeMk9dqUOfF3cK60YuLH8CqaFyPCr1G8l13X-41Qxvb3uNgX8upwVciGQzDMiWKDZvV5XbC-eobM_VAlNXaCONbfg-Y1ACy12w9v9xmLkF_N8RK9TSecW1K9eiOGu7vdU-EmRXpNA6boPePB-9owczhGFKuAocndrBevFIIshCH2MMC_RJsB4A0o2cHmvta2ZgPecuI8betqsLJ5Kez2KNHTrJ_zs_8GZIVEAGchoqvmT5h5GUT4aCU_KWGfjh6tiA8rqWC0Vqdh8mTJiv6O-qnkwakewgDF7ZE9zz4F4aRTTYSdWBkOTjNNZ1JOxRa3Onvj5Q-e2oBV_IND0xKX5WO5f6BVeIj4qRwbQZov3LiT-OGyf3wL-bynphDfQve65C1vZ69gvmmexXVZ0OnAjxWmbtaWT1OZ-ODgB7-x458-1Og6UQH3WWCLIc0iCk9umQzEaftymH9jSQ_4eIOeSJURdNc2OAcKCnsu8NohdbjcGX03jI-urt8D2YHfDyR_WHXubKEjQRaabWjnv1-Bu0bzz1oFiV_RB_U73BbPojUlkwwHxtu0KR0uY83vBvgisI4pc2EN0Fg-LgLTieRJhO_TVJ_PIq5w6x7DbLj5XPY9LDkRSaU8_AcGvxjBtQXagDXg-OLVmfOzCqKeDb1j7yqZ8KBlizmmwPCdwSErINsmOKTOHanabuQBbPZU6dqfbuAKFh_ZsB3tHTmuSqpv6ixg1qUlK6y57F7DSD9eVdHQRDWEzCpRi5FilSOzqtfLGXgB1I7ynxHFOB4fXrFweFRcXSgGGk2DgA2zpofkW-ii23t3xPI0sLOq46QyGEN-UQtNAJPBp9c9pfC4vQFl3hoeSF_UIfPmlGOZDrk3CKRIDe8iKfprr3qbxgOSq-_pqqyTbvCC6qDBKC5BD8CM5jFeb67AVeYN95uCY0MwEfcriqfqf-IgNBWbqdjJlSLMWIeKOda2GheDHiA865AGM3ZKb0yI-jhOpLfZFBi9CgjnXagDZ2TpwCKr6oLoA_hOAFrzaRP9rxVQkWzNKeoblFKrX19D6XlDrkwfHr5rED5-Xw07_RMWQqUnZ8QPw1mYnuOLUciT8k0XD1ydXpowzQue1n7_xLS5LKmLgQn3gigNKIiq0or_USfO_1FpRB0FYhT-gaKk4EcOV9SowxtxMuy9WXV5rKCH-9UZg=w1365-h937",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDy5FksDDLu9SKZUu7ksT-mbK4BIa8v1PYq7SdKo1hY2u-yoBuYJPjQBJvqMUwTuGOpuPFmBFFGw97qqv_ypMbl0WoWESO-DbywsA6FUcTlH51nhZLgJzauR9MrIFdRXyT_LPzeYdd-lDwdAuXxZjjBo--ELTmmfwR852_RgvoD5K8gSbQ2_o0-XhuetvHBVUpbvA8I0AyXAgoea4oADe8qLPV_9ufveA71pVZD3IE0s_1FpZBTPcWhNXL4Ztg13g6OnCxUFVBUjeS61_1_aAFjsFQOFAFQmeRDOpHAWVLMtG4o9K0K17CNaINUpv0ZfrJP3kxWIsiwMhmePBVelpp9RG23ojr-Nq78lOHIvfgxiYPbkKB7CV253zMVzIFJkvaKh_IRA2RSINKVs-7j-R4MTbdUsjluiS9PMDomqAGO6BXZBiSTXaz-6wkSIxzXXrvz3l96dgcJZdwhH2NX40KLA13rp5PNz8G5d8K1CW5pTKxG22mXmCtvvVjC4u7I_VYtEiGDnS0sJZgiqdGqGiudrtTQqVgV9CWKH22qvQvmxmWQEvNN7HtBxN6Guf1q7dU1NSu22JJbxFjGO9__FuGuH2YFbO8jyRJZnYZqDKupcUbZ53LWCMy15Wyc0dISgvxcV4jcP_0eKKxQPdDn5m1OsBM32FtPgTqdLYx0M1znqXxfR0q6xLGWk1Bq4aJFaynaC6p2ZsYI9FguDo6-eFXNld7-GcVmZrtAENCPI05EyfpId6biZAH6yIBr-jF3a_N4rOSRzYho9E6CoTp7t6mawXbTdUQXDIAkY07jcoKU3kw2Syio3Z58cL1C5kU3UHbFKgJsgUiBGaYIgdu8qIMeYrhvdrrQjzETiA9rcEgULdQuD8G12eM6DSuqvzhc0yfwFSbyRdA-7DKsyvYmk6fQyinmBcMs1k_YNHFuTb7BEUaHFkw6uRYGfXGEUJOOzy9T7EAMzq2I9Ilr23zQz9GxCnEpvhiUAkUQ7vmWm5zXEH5GadHFw_3POMAgfvR6pzsJRGvRWGgAUFa9rMszfSyw4-d__xdBKENNjgPAiBuq5b5IePTysp1c7n-bjPS6TiYTGUP-Hucf7v6GUosebjB7s-KTufvhVx9CZ7XPcE7T3H3vftnnJywQrKRSyuHJy5DgHvTJK_CkWT0BJYMWmtRa-_FAAO40-o0TDxyatGsn-jn7hTTMDRzZELJnU1UngoIndIIuFqJM8h-8DCDze2s71NSbAg3ZOfNSR3C56WDXiH7ja3OvBJyTjjovfaSinbnZqMYSYh7i-_SqzqCbFDZWlyo6q-GbtJIbrju9JUpu7gFA_hwXNXm1SgVHlMGHo_3V5VCBAy_pqOkZQzD0fSfJBqN6KRc3_hbTRqQp2WJdlpXyIMzxOK-IUzgCJz1ij5Qsaqlq8bWDMGAV8JdoKTrbzmVwOBbXvf6s9eFLjUO35aFrqCHeHJl4Ye-etSCh6M7FXbaIP7qbAzAxckzmIKS9CMTVemknhdgcz5JENjm9lOIH_nu2aRc2ABpoNtZNryiAzI--RqAjkGEZqax4jVqwor1Y6lcOAOHK4QMu1LnTLrEvlhZj23U0hTQ=w1365-h880",
    },
    {
      id: "4",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyEHIoHVTRJb-QNMXWUjpp8YLve2UKN9ptwOBf6HbHJvTS88z6MEfpPJqhzDWB1kGlx88l6saV_nZmrPkSHVCAXSpe2kcgODHcRXcsP2AlcuQLco5Pd--RBmnU_9BG-AjOxE7Dn3nEKvedPbBFbvQnPb-aYH_4uXgZA1lthFQGJTnZ9_-aiI4zVypd5xSCAUNs8XslPohksroKNUV7AwILNtxGWd_2XtfVJ4RGILszrFhcHJrJ4Wo3zIHrUvpI8Wc7AVBfAaONtV9mYtFgLNmBNH9BwRst-sT0Q_W5ft4Eu3Hdm8TRISiBmy0GgUL3MuP_12omIOi2uMJTeENajNlXkTdIKJU5CylxbD5VKXVaHoWXfMAIGsX9A9oFt0IkojVbRSWKsyC0c5TyACqhtsX6jLsIoSQEPUMYI3lfNYekdkOGOzM0kephDO9JgzlsEY7vfl3WKvRzsPesxp6IIGrtmFZHY_VV0CgvNmePCymIeom3LJdKw29LDrPEq5N5o7qSluYU9XdxrLJRf4V8L1dw9jflDtzRy9VMfdrNqSL_7cmsNCzWOHUi5UtEH0GQGf7wXLQytRmIchJFlc5Mk3PHTjPti0GDLC7RxaC3bvSyA89WjcfHHwlxn31uHOda6MDbu35tIFh7qmPXPRC5zwVqBAJbzLCuVsehBfTwdEKxl6G9g2EEM4AKDZ5Xv6ZGHEBJNKuGKUW7KyEdsQnE8Nr1oJCpNEug7wkx31_P3GIaNPt7Jx11Fj5Dcqq4i9hTB3yLJeBi3B7CO1wzjh8ukY2OjR-sW4gBlE9ViHcRDvLt1Obj3gHsjW--4pOYTet6C68G-FXw5zUe2247FEG2traqD7CROCnk3iJC-cOSPZUoq70gfs4CmR6G23BqmTxQ3Rcr6jETyzy4gJkHxZjx2JiW5lPC0ms0idUeMTbyIEjiksMvQHmn8hlmYI24l8Yq7IjurK1Me20FzcYKabyhVWXeDPNanlCqS8cpnRc63nh4ZNH-_kDGt-9rb4DHLrOXu21tGd71ZCqXMEeJkF6pZCywALhl4UvMKHsz37iYn9QvXgXJN75cBB9L6CCO-M4LCxPs1Psj4X4_Wr97sAhigk2Uc4Z0AyixlWcoToSFl2tod0Pkq2VdPx9h9WtCtkjeCHOn5mZcLpnt_q6CaGWfOrZqNHeVisXAK8AKiXptfOcB5X7EQF0EOvBeyAbg-jCzQO6bmH0TrmvQ88i5ybFpDeoSvFGXubX6GH-QDUZNz2dDPrGN6pWw7LXj-YGmNotYHJqErk-LPrTQJgZhZvmYXzSD9gIi6hciEn425ZaNxIbieSiVO0UCjR695yZXMsq70CMiC-xyOnTVNQhw7ZkdIHQnilIB8APxn11eibERjzd9MDxMtyA8B2gt0xseff1fAd1aahk9IERDeylgdlMDyq4kf7UOu_IyW6DFldjMILbjO0b1lCj75Az48ScKYaOdUZD9WdXZA5w5Of5pY7ULkHlZBB-8YCFO6C-I6289uy2akzP4NpYDWvc5xDmUNbmincRGVSNOCVnHq60Heg3N2eYwcZlYv8ESCcHMTXLgrnrRHC2R5gAD20Epzug=w1365-h880",
    },
    {
      id: "5",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDwiswvXK-krlc33icjhdNL3-ZRXsNTJzSPxRDJe5vwA3n5X3SDdEQlsHBSBMHe_UbyG54-OVvBoZHbSOonx2eEkn9u8ZzCzO-GUGeltpXFlv7sqD-st6cXapI_INTsQX9H462BUo9oIfj43yBUp_y9ZmVxkRknxY3e9I8hoKIt4MFbKbvWx-WG16uU8czGb5mvhERrTTXqY7Rekf0aItKKp-2gLq5KxwTeBnDDEXm7kWSeicTY-mWKYNOHLs3hX8sAfhsC1t6Tg5VtSNiS-HmvKVXdDHU1ZE94zgJRvAKLxO0KVivr74kRMrEDz-dFB3GtsksyxJgOjpeEHX3Yp2x5gp8mQP6kxNLELLkax4yV6xewo941KGctnTeWdZkS5GjCMpvKYFR77eiTGeNol-BelhWp1RgoKjO4JWAjoYl2jQtfNshWQUyUtiO2C-mcWeBmuhDdl3ztT2Eb6wiWv41UeCDkve0JCyng8w-ah8L53iRHkOoPPEjIRFUBDkTePDCWW_8mm3eDmpRelOJ9r8impm3az5LItqu-PBGTl-zlg4XRhAexYWgqL4kZs36Rv5M9rQ5SWFDCboe-SstDMjZl0jCcmKkE9_Ef-YdzzeIVStrqmNUvkgRr4FskBsqkra6OSVgzihgJNQICq8F6r6nL4V3zTKzk-Zx8Kzp9EIampkLFE8lUWcWZx8EYsjlgYP_VCfTh0_oHNC-IO3ZRAp7cNV0bmIZYsz0zISjw6aoWMASSVr8ri8eb1LGOwF7NsWvpB2_j2YPAUz7vKGC_OY42Su1fdIPY1Yr9xUcWValANnqJylK_HOSc2J9EhH-ohXNJd8lfsbqa_azPKDQRRCLndbhuTD7F1flV8whYdU9PXs5V_hSJhaSlU-E09Kj0XQB1bO2czdZgLcXEOrv-R2C0AprXHOCigrAQih-bsc87BWGCD5NuZse8BwmPkWt2BCUtEfczQeiuSjzkJzHQ5-cGHp3wJWozMBCzkcoMW6mG6CrRB8j3GyFWOX8-z3nIBLktmGSiIdmV8nlNr-DypCZQdHCttEkHabU3KhFbvM5vjeJOcGq4P36KI3YrRwMioRX0spy44Kfz7LWByrRlpjH0sjpJkTfCLQJ1U3b0PVGqty8A1xiK-mupqNX5onaW6YXXe3TuYz1S6Fo91hPhO-enW07Ng9HJSxw1nE9PxMDELtvHWCwTy0jk9wIU_WT62tkDXY3hb60QnxPbLINZQAoTaw9OoDrxhaziR0xuAQqAh5zYD7Opse8XzRUxri0esQYWVoxJyrj59nD83jTtsIAAB08FMlJO9hyaZ6kYBUAsoZCp11uBgfeSbcrs43qQZHLK5kxZH4M0BVqFPERQ8guflVegpBv7qLxI5R4pdY3CZc6pmeIpCkDLw6cT62KtKeDz0WoHldVMG7yOGWoQnCseFAysZFTqosH6tsZc5wDueW7AxpLrx_yK0jJJBWEzcjmShrOxhremvjop3smL6WUXC6u6J1YH-3Kl8OrU_-xGxeGPLwZFgDqVTcdmvZlthPgsjMfhk9mVhuYxhNq69xaN_0yGOrBMY4DpenI7wgH5CAmOEz5QttjAEDw=w1365-h880",
    },
    {
      id: "6",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDy8SPxxMJaexVLBO2yrduFhiS-Q2o79raDnWuprJYSsbKiP_7dFPeflwV0tI125LR_EqXK7tO2Dd4Cj3bXisUCWbgg0P5VpUjD6PXXqwwOHzHTzrwocYKTuFmdusnTg6bDxgUT3ZJVrW7Oj7n7EI8POyYkU1LVthtDoorBy6ztrL61SCD99lBKYriVYg0oDF_LSN_Idu32YtKmfZyZkNTvB--c7JY8wqa7VDuiHKiXU7-bjVomeaDqVhjs8f3yc8bunB6lb-R4BGgfX-xsp_CZjlH3SH5Js6Lo3ZhU5foDxGEioojpx_KwcihejeEESpbSOo7RrvWiofR9rS8-wZA2hwEy-240stScUOYsrjCUkQ7PdbeIOIOtzieESzkZULKlOJz8MOPzdE4Kx3RTg-Hwo_A3Hi8mADIQ1kMJcB2NIbEOyV1cPXsmQPJK6xva6pC-h13PEUeXp9yM2BiDFJ_J640AsRq5G3THWPQAC9J1TLblBMuVkOM2Cci8haeoGTY-a7EIxGziBQvCYQZcp_mcDQLQWv1hWWMH0oOPEdqLM2mw0KsS3kCnkAarizXmmpXGOOXKeowYwRqnPxm772GDMmNzuHM2yHMxrbuYba1_xa9YQt0I0v_mW7J6vnvWX9PebYzBegIqsLYeG7ZvCcc29eG6mxNKExUpB27LL6vb_RjmGsSN_kmUKkecX4GQ9eTn1l_R2mI2RdLW96xu5qe7b2CR5xyp6Dhlua3Ub8oa-d9YNuMS14iyAS6Iw7tqFkeOejJ-kHu2s4gYHh2C59UPrWVDv6i7o-wM-C92GLeYCUB502_4D8tzlqDr8fc9lmK1xk-kDzWUoNdVAwTyvFXHO-F-h4ChEqDzFknzh-x_q6gBKuBwR20ui5eJjHdIEGXz1oZ_TbR7yZ--P_JDCGVMYBMX3THR_llnDN34y7yMffCXVN8Dlj3xOfgjOLK95JE9UfE_SZOYW1liid7fktFxE465ooDafesvvwYgh48WQOW6_4lfIzEkeNa68NvqaiqzjJ6uBgLpm_9tCpG1FTqT_zE0RDfXc0lC-oSdEuNYJFZ2f0cj1weP8zTebyES-1lIO-XPPkEKiMf6nO7BBhSjyA_nd3DC0Rp1FvtbjP7MR4wuDcVKiL4hb_y4KCN_oevR2Iu3lDO7PUuZvV-mYXKtraZmblkv0gJ8W-PxWF-G1mW1RLWydNXV59WYb-pP8gSNs8HJhzf8lM3o7UqMi51KeGnwSrAhHtcLXhgzM6gKCIMhGrEWz_HWpYNYm3F2A7IKcpdujrGBykikvvdVYjl1uFZFsY-2TyjfRuYlKgaaqwA1VL7IgMbSAnxkwOioTBGx9QhAsFLUBxL4aiq6FAAXQJcP3wnyjqyTZ2kOnPcTBZuxhxfMPQbMmSNgv6J1JFtzNLN9ovYhR6_WeFbRa5TzZ_pVbgChBRZ79asfoCuMv_AiGMxvulUg3wxC9O01O0Um9y3lrrHhz80c1LjCFlz50loST3iQj682nwa_7VCfsRTKuuqIwsqyJ--lrM5b6Uas06FAUCkyo4S336NJW7LBwoTS1At8iu_CaSmtiDlRvFuT1fa0RScB2IA=w1365-h880",
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
        <h2>Pousaadas Shalom</h2>
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
        <h3>Telefone: (49) 98889-2528</h3>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114512.03167196561!2d-53.63402!3d-26.245399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b545a87a039%3A0x70c5115e6a41d91e!2sHotel%20pousada%20Shalom!5e0!3m2!1spt-BR!2sus!4v1696703737973!5m2!1spt-BR!2su" />
      </div>
    </>
  );
}
