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
        "https://lh3.googleusercontent.com/fife/AK0iWDzjs81VnIDeUTjTIs4Y6WF1hgQDD7IZ2AzBCX6eWDXFgld1Vz5hsBuJDL9jenynMBHjwPh9EH7J9v62R8ioHmCfpr7b9D0oAWYQC6DTABVSQKDo9BoWeYEHosKeeUKGOhZkplHd7ti6ZbeC5dBVTmKM66y3wEsfbtsaRwvi5BKo8UDAslMaLMAscW40J3IcxFl1w4uuH5ahp2AWWSvZkAm89nEjlqPZ8ka-RtH4zgCLVXCbpJBSRljUir8pZzYKmnNiun6-ao2fzucFT5zbUnQvFvTbHVcd3FYLXdyQP5WuoWNgrACjblX3hoIx2jzbN0nHfzwVMXZNXnGwc0YdY1MvP1V5cz_zlQVntEhm28zBkSg7m8NuBDSuVl0bVOkA87itfMXVKegFHuUYhyZMuXwxib_xrdji84TX769yuD8Mob2ihyQB3d-asz2TzJPGCRHs3avkZOcLibZiSk3zBFIh6_fC8clPmIiY0tb3mvMN6OgBFNyVkxTGKPEm16HFz1wOe0GS4EQCvzgxQq8JE2CPBYAjIgsgmE_OhTOWyFQSVseWNP7xFNpTry8d-FJTt-MvEF7xLx2xYHUFWV7KEKA-qudu0P7TFXDKk6VudssYtO6NPW1CHvpSnAaWcVwH5KBs79WoTWqsuAOaFm2dyf3SQAvn-Az7tcRbRXpPmEK4uXk1O81_vqmA-8s-HdKgSZzyN5s4nrPBJqtsWW2_5fQZ26Ul0CjsGp2PGKrVh3-cn4LALxTSXDgginFZkp8T88lCHd2XuyenkGNMffgyzAr8rvlupxik7a97tpIFy2BqTDhEIl2SawVhLG65KcxcZz2D575hL5ogOlj4UPL6aUJsQ4S8PmfRohmCbFbI7DasEru3ENvL1mXQQ4SdctecSrViD9P__UCzAiY3PcdMuYrFQANXwtUBtDaH4y8Ofnry1hbk8o2jpCuHX-Nfr_8OpsYYzZ5FmvZZcFzmV36OCEC4kR-aFlu-aOtQPHoQQu6YUBCvPUYZNkfdZfMPwxF7rBh1tnx5PVQ9TeqTDhKgNygmkwPcd2mDJHvFIPIfhrHgvxYCQDDIAWTmaanIyCksCsY_8LFwycY-LxViCQuvTp-3_By3fmccnGl2R4_rD3xEm3lNKrrJen38RQuJdYP4-19W-wU9eBvFK5WKa78Lh7p4aSWtRt5Hu2bpnAjaJn2myG6KztPZcXYIO4Zjaa1UbYYgifSdKCdgB1wxWQSuKhr8l1EMi_CWEXabwmCK2jXT6EH-_rmhYBZ4cVLTW01LFicOjSOYjTsbkNQW4BgCpChKodhiQdPLufe-Aek-3qFNWO0CSwt8a3QT1THHt7mmyn6-D8SYbtgN6BmZhhR3K6vra6UbXajMTa4wa8dC6jJecWfJIt7v6V9k9AMMcEM3N3O2jp4-wE9B4-d3qme_fnGKTIjAvtV6k682g6mD2R4wSUSPxRyN57Ci8vyxIfU7GtPXy9poYJE8k80y4C5ZeVlSZdZkkroWtWW0cUnhALei5TojS-LeOZkcu5-S0RHzIir4LOCUCsJbS5VkJDiDvpZ80-Dc5SAXkdaADbAn4qKapcjtWzOC8nABKw=w1365-h937",
    },
    {
      id: "2",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzrUXk65jPY9xjoE0maRXRRXeZ0FWa-oNYKTsbJ5zzyW-Cs53n071CsvJ-gG0DMuVpxtl2bKnmRyHFt44R93W0xffMVK6SUgpuxLOF8I3kMorvRSYgXeUX2CdpYNLPpRp9fKvjuxPu-ymf0ZolvO--DXM0dlyoUCiySJFmOC2NZdPMpTm7kz5dr1iXaVKVsJsP76NnZxaY5MBJIl0RNmU4y3f85yioB7MrUPwx933zDNgBx5tCcHdvqF8FCD-rgf5yVNxVh2nPkmgW8Bv9i4M-NRlWWEJqm4jNkPR7WeUbeXHP7gTTv6RVlXkOcf7bR2WebyEiSigY-5FD_ZZeoV8TwAIkUXX3OMs23WIdiGxxTtp1fd6Q3jgmzLtu9qrmqwxWiG5PugLT-v25n-4gfQ7Z4Dv2TiHO6OTWyjMzbmh4_QZlrF8X0mCdt1jM0l7vKuF8a3rtuEpBf5CuZWsgB8yiO93KXlnbdlA7Pl3ReQ4B_lGhZlWWdSPDoqCd9ESvbkmuzsCx86D0XxgVGX25ftINjvHmQXz3o-Zmzm0WajX_FG5TdCKqedN-JjbJTNPQhjT6k5Rg79zeJ5AGlH5Oum7FAT3xo9NX5IA3JkqCFJg0frWtTBrgwSeLTBQk_egJ7dx4ep7UfkH2TENAuba-Ur3IO7vHtsjUTm2w35bEQRz_Gknl4HytdYSkII7aBmLM-n03eaJ7U-1ScOKzngaumhiZkq6dJiPz4Y2qYsWOkPU1JucyeyJVz1icvKHOEBOIgS1O_zm1dhBU_HZyWElvGX5QS8To9iBqAp7OYTFTpD_rz0728GRmU_22bQKyFKEc_sey9Tedq4vI2Qn1hHOPjbrbd53DxfzJIUpSByrWj1eUun7tTI3tBqbdLu5pbZ5jWCCZSTAHGcF818dAX_nFOYvJFG2p6qXO2b3CyhcodOZFRoacX-OsCpiLTFUCiKINkR1WTNNnW_Soeu_s1VDxXOqOC5F1YHrhfwH5eRqANjkWg0OpanD_gQ2jDO8PuTz6aOrs2SVD3HxlFW7cSCLaig4H-iJjSipdQhTltdn8b954FtHLdx07epOUgCjghMpuUSEvTn9tnn13zZN7kIjf3_tymf0wcY8Ke5jTUsnktCi0sOdViX0W_NGTK5dpJA3_QyHWe5-yCVUGJnZuW71TUCVtL1b0AiphsjhWCNcRU0A9vsNKpjLDhh_MFZbkcb_r4mr49bRwN9Thyq3EA4TRXjr9bePQQaE5DPsIjlqG1afUhE6tKPrc-gWZ-wwMvPF8YUCoE5VAbC5NA76WClKyGqUaIKsYfZ616S8RPAKqXF91p3YvmuOuJF-NcrumKdtFVsNtKnPa-itgaBkwFuLrWMknQsVTfddLckjlYMfk6Ny4u7Aax6X1Ir_GgXhSHYbYg1l2wYrBrcMZHGZIyLAy1fAqQbhSA7omdDG574P1u9wGckK_udDXC9xU08OcSGSuomI1py8vO23-a18uYrD90ecNuM_ITI51YNG0QQatNxTZWELTylwNQ85bWn5uk_RCEaR97iRmeGIdphN9ggSa1ZBXeNs4N40075-RCUlEPil-VmJgYbVQ2GbXf1g=w1365-h880",
    },
    {
      id: "3",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDyknfhQbuOv4ZwvBEzh8Y4T6OeFbZLTVZN1AtSSOeI77UJnv8nGPchESbus7hfH9_hVioD0PK2B10o8pkKHZFNfUU6foWMnxo3-WbSiqCP34Pqxe8ofyswxjmklh5OJ-8Cg5tUG_PbeVeGgQpKkezbH1np6ieqsF58WSA_mBVtekjGajBRDqnEsRS24BeBHgv-gAePOVSHKhch0lNXYQjYZPVTuWcIFkaQrr5FsTEyOGRyuaGbpXpC0K2U4RO0Dokpl39eKUZbkKFgR8auTiIx1N3wiXW_RcYqAdbV14rYIgSzSbKkHiZ39w8Dkwivrqbk7UaQ4DLvl1bUcoPUopyoN_yzTys7pTbZv3Ox76bRSSTAtODcvHUA_145_vukaMmhdoF8VOw3M3bm0kwYAeHDP_b4rQARYj2SZUmk07T4teiqLNnx7mXIYmx7crIdDnYTTHuvdty7X0tGVp63Hxsw5btNJ2tWLBll2p3MtEWnwD1SXn9P3NxtN1XQvqPOm2JXuQjGjzfsFMpeqT0dna_5rNx47a_pU3V3L6ZNwEse1NYw9bnFLuTqP2ZO_gwUIRcql2rFIQJrxF70_fiu9i0NCQtshzmBwN9K-vssPIQMTizt99T1TfkZfnzuyG6bJ3kCK98PBEaFLjkOEg8sqaWLFznUF3ZhNb9Rt13B6AyqgL5pD52V3TdsYHe5kVk3gv0IXvKClZl2K8n6zNwt_l0E8sCGFPonGVAukzPUTOvy3IRsr6pYQvRAVg62UIjJLWjXZfDadhWivFXAAl6gdP758uCnsQNJ336_bpXwPo8st3WsAuTjdlu_cXsiFW0k_PVLHZ5NEsJiWoJqlo2gbxt-EYh0fzSfeK_hFreVpN9yAgFrySDB7d-ELpVFQnx2JXA5c80-h9DCcVN_7P3uhWz6orHT0mLziwLT5qw9UBJrChRLkyxaHq8V5MRmhs7mWy2sAQedwqA9EL0cPTQl350vGXvJVO5qfHDxwvBTs9RrOfm1rFum9pDhfB6KOZMn6lQy-Zdg86z3xBB6I3fn0WYBWrnTyZSHJBNhDlogNT5X6l0jsQ7mGpGSaHKJHVsZ7cXJgaCwM-V0Uxa1AXUezNYH9gCS9cUWr65sRAEp00FgJhw2g8REsFbMntTSc6n12S5TpqUcPMpzMKnikC8oZslQcWPBpBGWFTdBx9te3ivciiRbt5Ct8hIPPDmJ0xtFWEFSCfPWl9HPnlvFiI78251oqW9TQBpdV98n2piN2dEfAN66jlX602cPVoUlopmUcg_qIuq7qSSVVYUpuTHUm6mKgKo2oUTgpTAjjInQ2p4C0jAcNK8F-Axk1ZUKvmZyrKkB2CJrT2v4UM9G678k1pvIviDxBN-5kfvhvLZGAbWJXIZYpDqZj4jvlJEebaqmVXnnMqhvQITsUde9C89-5hHSCf6S07qbg4YqIiwgU28DcZbxojzkDGJ1Gw3ooFktKMdDG0rZdq8IeDKOAvSF_MK9awLytjIVUGJ4XJkkWrtBwo4Ch6MNjNFa9_WN3h7UFyF4b50Ov4E9pPqzJCKeLucozpYBrGoLIS3sgrGrTmYHCbXIOCQMPj47p3w=w1365-h880",
    },
    {
      id: "4",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDxWar56v0hSq4pyibvw56Y9yGlwHwUGekaU1qf2cDEwpfUU3fr42GRrHcYXh9QRkqVl6hpcwb2or15CyAJNgnGdl9ORbcWGjG1peQfHUltMrebqyG-3mEEPdpxcafvV92t4PWn8fGS4wJS8DTnWAgNO4CJjrhTqHD3BNvVW1n_afYGib9wi0It3qlaF2TfhyQcQvDpYb-3blCBhfyLzy4gGG1TkKj5z_chGaRppYOpe4CJ0G3bJqlQcW5G47-XgC2nA3qHrxIJXQFbBPUo-R1rZiKHDQOFCGhki2g9TWq1lvPxjXDGaSsj9LV00oeZo5DJgVDVHbkocAi4HEgHAcSL5Uc9L3ukJM-3ta4gXcFINHjpOfxyvd1WdhBVqV43BKq75N7GePkOCERkwLbXgAdBGpi9yC9q4f7tMyyiBYCT53ak_wFyp40F8dfkLSBYZQIQgL3_nGLC3hk57Rwrnu-BaYniFE_i7GfxeArQr9QrzZ-mx-q_bKcxyB7dD-NabMme86PRJD6iHXNUeipAJ00r4M0C64d-sdC7ZOIUVC4MdCRXNa1O_J9bcj-Pb_P9bc_Hnozm_EhBzeqN-Id9chfV6fPm41cK-Zv5i3AQWrOnIsNDtsrigXhggABQvhJ9QvcfU9JsBwROTBXXYbLpihFpbyrwd9ZDhnc2teXyARvNYkNYMHHjN_9LDbS06P96L01m-WdYqf_uGQzqOoGxBz--LYibluJGGl6nfCL81MTIZibRo4Q4Gcq2nEpCrjvqAducEm8OhOjzt_5HZUOdftlqVgkILpTuOfEdijyopA1q47wMBmqpkrF9Ners0VqzSCvhQt8yMP_rPs62Yo6sfNJdWUNsj-RLLSwgQdlIlhD9Gm9ITd0qv_EHvTAUz073erP9sqR5SQJX1g8dmh25xPNAiZ0A9PHZNY3l1OGT5DRyZ4d5QPITGniXzth6HeFsz3ExQRTH_eu8xJTilDX8n93zhP1jWUX09ewbgGDqtzkDC6K2Py1kh6fc4JPwxGgGtqZOfIB8WuSpwTVXzm386lLQpx9WH0KOnetGyY4Ms8VgOCb2ocUHroos2YRfjRu8aE_-mGdLtXwYFhh_QWtunqye27IM4yipno8xkrLXQW-bqmI-AtQxfhtR_0VdDJnEdbaQkUilxtIkC7zDn0MIwa7kSpiLwPD6xpIVPr6xaW2aAcZ0ljPq1So5nGB91ypXd7IlT8WB-FmSAiww2OvqHEyqPN7o8rZaPM7lQJcezvCq6v5n8mVzavrLrQaZ4gbG9OWklWDRmgVxLT1kM7mlYHwBaTDuzGTWLsSnSPgDd0ag8WlA6_HTqlttR1LIiJwj9bSETy6r4pGnQTEPlgoFO7l2YiA69IWZFPDW_tbj3k_txAeIDiiLn71VPYXPQoBTfiwl1J-cBOJ5hZjBg8JWxjeaxpHtoZOYk_UtCKGZhrOOPcR2rboFp6tLZtYzZ2xwSKNABSL7Z6vRi3r4-bIV8FKvUU9xNOTZUclmccZo4_ErTtINS5FLrnHuZI9OyTQmPrT-EfuDrWUW9Q42KljfNr7s5wTYOAs-yiM_VkCtg25ANKPjDGvn6FjYdUA=w1365-h880",
    },
    {
      id: "5",
      image:
        "https://lh3.googleusercontent.com/fife/AK0iWDzlysiuI2b_c0e1jlTOeHPs5aa_ZsBEriLkUINl8uOtmDxJrTXBXgeeNbxM9c6s6ExD5kMgQsGAXZtdmNE_Q-m_EegnUVhQRv0GA8vjfAEu6dQpAlJ9X7Onxs7mxSny2dcAlKbUsW5qzWV88zkKnlgSzG_Y6fvmSwUKVAS591qvJvppADvetoFXL6y6pvTAs2MM4rcuuyTXIZl_cw9CPxApZM1rGPH9c9BWuaNB7Xz17w1rP_0Nov2qhhhGfo1o-OjZzG7xdIrtXhHjXusxjp4Y0dKoqD1tJxmxL3dP-nux5Z6bsVvyYiRHlf3dsAvx-82ZeyySwsvs3yHms_BR6nksjDJTTLz2uZkx0HrzQdQoXSwtHQdES3jm9ENIaP76Y80PCtlvBIe51nnMvDaO1GzZUfQvaFuUvmLgbLCARq7EFb9GfEOFJh-bhYXXJeOjyQF_AfAwxxmIo3TU-IQDNGmWKmek5bpJfP10CpV5KKMxU6dn3PkfzBgYmYfccEDOD-_Rd6qE-QfETdx2dCR6pQpCRBwl2oFqHgWg_l_SdIQnDcUgwM1skP5E3s-5ndZzfrpGuonPHMADcS3INPthtfWBIo4DLRexc50WCFC8xS16Bl_iV4_NzH03MOjFF4cZu156swQb_c366tR1mjQz8V1HHnyKor2E087X0pxdTj6g0oEaF-GG5bbn7LOzqkNB7Ir-1ERbxmNR-fyFu9S12TtI-HCmR8MbLoDFD-h6xq_4PYVWTnyseWww6kGphC-IT8gitQnPZu2faE-McVX6uCQu0-2uxeYo0dkheenvkqiKKPyYNqwnFgUhQhzwxfoglvpqkQib_BIn2wnB_f1ZPn2gWe9LK19NMIPrSygLfVUz3Ail3HGlIK0Df0JF5Hte2j9Iv0VQbJzyloC33ICmIkTbnCnuBopqZcm4I2UHgGRZzMkUFw0fMBZ88JhayWXpCMPYPw4zCsfMzMdm4ebhLIoQ1-wO82DroJDMDqENBonpOVhgG8rijrV6iNFLNftJueo6Xd5JP_V9imSzKZqq8LbpyJIoHQdbTh1k0cHPGQtSEWaJ2X9XLhwq8HM1aWMHWc2doX2qGFcStbxusCve_mumuIsY71GMxUs741pK3RT-rQD0W6aUvQ7Q6jzXxQCKDVcRt3RlVs1hqcSNMorF8JELB2zzk4bs12v1FkBGRdlBExskiUnwcsR319KcyyxM7GcKzg2HXmPcCgiRSx2sjmBSKMl402NbGVw9d4uhyRVt8qp3fF22SBHec5Q6kchOGqhYjzn1Nk7VOoSr4a3iHcNQS2x4QC4mBVv9HuqHQPNDNohdAyv4vt84cqnzLi2_yP3RkoVyVFhs6vGanW2RRFiUkkn8XCNi2WQuF5dq6SybE_PXk11GIcvj6GZ5pfW559pfNyo7XNEOLaPOwX2G_xIvR4foO7lVGP6_nt35nL9Adx3OGqbeuvMkcUqVEhUfFhv_h34_PgzZty2DbYZj9gwhRAY3zkG85XP9sibfZs798cYEgPCZfh3--k1Los87_Jb_ZOnBxklstasRYQ6jHrhWynJLK_7544dVQSRUIZFfRQTRAez-bBJrKw=w1365-h880",
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
        <h2>Hotel LF</h2>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Hotel LF" className="slide-item" />
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>Telefone: (49) 99953-6683</h3>
        <Maps url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114504.32669527014!2d-53.63402!3d-26.253217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a33bd0e1f09%3A0x47544b3811cc1312!2sHotel%20LF!5e0!3m2!1spt-BR!2sbr!4v1696703558456!5m2!1spt-BR!2sbr" />
      </div>
    </>
  );
}
