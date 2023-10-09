import Banner from "./components/banner";
import Maps from "./components/maps";
import Card from "./components/card";
export default function Home() {
  return (
    <>
      <Banner />
      <div className="conteudo">
        <h2>Guia turístico Barracão</h2>
        <p>
          Se você está visitando Barracão uma das primeiras coisas a se fazer é
          encontrar algum lugar para ficar, neste guia iremos lhe mostrar
          algumas opções de hospedagem e pontos turisticos e receptivos do nosso
          municipio.
        </p>
        <Maps url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.2881473403963!2d-53.63732782458313!3d-26.252309977047062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a34679f895d%3A0xd99cfe554f595799!2sPrefeitura%20Municipal%20de%20Barrac%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1696619216833!5m2!1spt-BR!2sbr" />
        <h3>Hotel LF</h3>
        <p>
          O Hotel LF, disponibiliza café da manha entre outros serviços, também
          possuem mais de 400 comentários no Google Maps com uma avaliação de
          4/5.
        </p>
        <Card
          src="/hotellf"
          img="https://lh3.googleusercontent.com/fife/AK0iWDwxYy7oI1Albjxel6abJx5IILq3T3kYa_zYdhNWux9aRlvggbpjX5Fn79MkPG0s8SLL0X57vk9BEQuLRh_jMc99lCF7_jTpSDnBJ6cg5wQZExY9SCiRc6gEhdwqxetSS7RJxj2M6ElrIcsXKhneSw60ODhSUHpLt_etCiNIEP5mWNutRC-4vRXfTdqVgnkMY40J_tBu0EdcCJ6uk_NbGcJxsascFsSe6Wbh-EY8PAIn9B5uLUT6QhG31WEt2Y2hGsywdKUsyCqX1FhSY_XFSW-lZ3D7j736XCB4Hjzo-vT-yDYg66jhuaiUdG_1iX1n-cnnrs2mxnFmsrdkYbJ0Gg2_Scz9FIwwmL9brwKU082siULjl5qtQBWXRFtkwJ29s7Jxd6ysi9Sjcq4TOYhw7zuCApkZrvnAdiXD3k4KcWNgD-shydoglH-PgwCA5KQ8YBcVFs6vQQXZIFEPp9odePASNY2n_cRA4KzDPtnqgboJ1GTE-bjqPauEsoM4tZ8A6kVS9v6hTHpOcn_jv-e3dVfExP3K0fMCtZJuZVVQ8rP8fOBuyvT65_syNe6E2VxFz2dbXYMqKWwsPlr0o0rOZPBKTkfPo3a2IuUuS3BNsins57B2oGCGPYKKr_41QchDi0TjKmrbA_f3PvhupoiNYZbKhTkXQHIasDI2x9XlvCawUC7gApL5F6zHpiuaoiYcNeoYhiw-QNB17k0rp3soHhwJzH8CVrv4IHzPMJK1xDT9I5KoX0eDbH73uiUY3liCqGOtYk76aSoAitDDyzySBExKS2OUCcbyx9gEPOYiTi1HC4EWEwT8lV-m75YZdMc5qf1a0R26PLXLzwqoJvH9r7euVUFFgo5jPsHdME-6_a0V6wuzG1HEGOya24hbvoDCFuJ9afP-lJVWVM7dcViQ1_GVmn1oZXRRv6AwGb3eoxxXxCdMQ0lYdTVpMwgLoCBEJYaQicrZ9tvsU59tOHDvPFysCN0ItgxmoAGu2qjh7U_CD3yjgJXKdEvcI12JqkEeP2y-mhII3wmco24Y9y8w7kf-3CveHZMp-oB23ZMHG45GHod_e6Bs5CWqVkrZn9nVDM3iCKLSBgNqx-lBFQugRnwAatfKImUvUuAzk-WyRY1dBjEsaVNVPtKqAqxz-wSF2O14WsAGDNH2mr7RTunwuj-3FKgpAvAW5a3Dut40E1hrEK8y2lp9UEPbJS6ZiquXnqJgB2sW8GAzo4yI99T1KbuG3lDa4UyB1JE8t1XggMXR3dJDQoZjvOraHr5CDEMRRTxEGAH2iJmcptapMDVWc3ZAbgl9lSvMt4ddzWiYo6Vk7uE1aeqKxDqozAxrrTVGCoNrhUEvgES60gtcTnh9BA4HwCs_wXtyBANqqlt8j5k_OhSrF-dQgZTJMqqB99Q-p-5nlq7uCxYtOreB3_cwNktg_HZUuRlnAN88BwHNYAkBE6RY3ApmUvpLJB-6IYzy-x5WmKGgwZnmjc6p5O2OETem4Bwqq5oTSiaaQRWfODbasm4FAExvMJ2sY0HmsNr7k-ADsP-ETC3z3PFC4Gbu=w1366-h619"
          nome="Hotel LF"
          desc="R. São Paulo, 411 - Centro, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114504.32669527014!2d-53.63402!3d-26.253217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a33bd0e1f09%3A0x47544b3811cc1312!2sHotel%20LF!5e0!3m2!1spt-BR!2sbr!4v1696703558456!5m2!1spt-BR!2sbr"
        />
        <h3>Pousadas Shalom</h3>
        <p>
          O hotel Pousada Shalom foi construida em 2020 e vem se fixando no ramo
          de hospedarias desde então.
        </p>
        <Card
          src="/pousadas_shalom"
          img="https://lh3.googleusercontent.com/fife/AK0iWDyjgFm0db40Ul8nGFYlEEf8oXvRnHmMdD8JQ5pzJJFuEa8hRGQ-UOX3pbl_lYnavoxOUp5XmADlzREykVR_zVpZwAd214MozfG9P-NDrP2BLRNvSWzIcG2HBuPtYaafnFavabBp_y0X5r1hEvEa1rA4r4acMg0dtV_P5aiiQx-PZdZ8XkQe81SgipIuY_6-5DqOtyNUeXXEVIBB-fVYpt6e4Ne9-HuYddHcxrKerznIQM6vfu-T_XvS6_4UG-kVZ8PEaE0V_NF0tICgY0TCaokBiqBk010NQ2rR_kPPQpteW6yJI06sORBiJz2eK8WRkiZxXEzDb01bikUmkEgaXq0Cdy3iW7d0HAuk2mr7WotPz4I44D156GorCVtz24MO9yvo6Md0tvK7CnlSBrOfqcH2OLY7wX_a-hpOZPhim9jtTuxgBmFFG-Y3WkcaK3e4SsBsfpVkD_iz99wfxPsqxmZsxY7cj0XM7ETsIYmOt9MIQz87ch59PqEVwR-pLuAF8PcFSEpqRpY_f52XT5o0Gwk_XwS6M_tkJFSv_D79kROM9p1fQ0A7D1ObHz9AwA1UeXd929wBI0yLLOpIwxnW7srutakFwqH0SFUbPOAUnHoZkiPQmO7FeXafZEHp7EkJjurAi6E1MME59LlnSlgMgf63aLYS2rQHC7ClQk419h_sxDuPIw-r3z29YFRExjPNlaJVpDl7FLh2DsHPhW6qn8bMwxaebFIqKyWngHXgGoprbgI7Lrv86VNSbXCR0OXdLcx4LeF6i6Y3UPl7rx1PVeB533GtTamKNKRJQOrwgen_WnQZ5Ce8KtoQCNwBgYIqB1eOwBwNRs9h6wU0J4Rs48n-a4FI9uemC5H9O9Wkg5osbD7umgXqfjvUS1pxdkYZRiE4FFGD95fGJWW9jMztderIH5xV691KzVmyOFYGY590tThxUNkP2b9ENlwuShhuDnXvid87WPgB0G9iUrF0lAzDmcR2ydrL7zWo7Goy72uzCaDTGAdrmKF1B7GbNXCQKIt9UuOrbTyZnVUbiE0InOS-xxhGFAt5Usi9JKyeCgyBlLfZ1NGioPMPRk-bPy4v0mB8lIOuQTP4TVXD9aheOgz9A_GZL35y_QawfH6RHezoDIIdKhFQ9zaz_G_57-BVn3UjLIFbawFBIKeCxYdzu48xgLV8lDBbFGzaJ1173vqCQ-Og48oruGNF7csD2BdzzFvbNDVeab3iiC_WuidwojYKTJbnUX-ZrHuqW44PrYeVyfF5gi4uLyhSSd0dot9vhvALvJViDQOGBJKEZeDZr5SqmFIPMeBWGiqRGZrRgCYk98CotRcRTp8KXvgGYXhkZhM5AXfhXxZRMWh7ZSgsxQAz37p7GPM5oKTSXw5tcZ7PEqFZiFouh_xsrABnLepdP1YWVCewwA9Cqtt9GahuLnKiDXar-jyRAJJem3wpqVCgCPNns2NKn5cpARPeMch09rJLi3-moTGwA6FRe1IR6NcvbjlRNFBWYVXzXnemoU1fHuqI0Atk6jYP-H5xcV5OtcuuOTVdFZO1rZABWxi6=w1366-h619"
          nome="Pousadas Shalom"
          desc="Avenida Brasília 691 - Centro, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114512.03167196561!2d-53.63402!3d-26.245399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b545a87a039%3A0x70c5115e6a41d91e!2sHotel%20pousada%20Shalom!5e0!3m2!1spt-BR!2sus!4v1696703737973!5m2!1spt-BR!2su"
        />
        <h2>2 - Comércio</h2>
        <p>
          Após escolher a hospedagem, é importante saber onde fica as principais
          lojas de conveniencia e restaurantes da região, te mostraremos alguns
          e suas vantagens.
        </p>
        <h3>Liberty Duty Free</h3>
        <p>
          O Liberty Duty Free, mais conhecido como “Shopping Duty Free”, como
          gostamos de dizer aqui na nossa cidade, é um mercado cuja localização
          de fácil aceso, ao lado da Prefeitura, o qual vem crescendo e
          conquistando o mercado, principalmente por ter produtos importados sem
          cobrar impostos o que deixa os preços bem acessíveis.
        </p>
        <Card
          src="/liberty_duty_free"
          img="https://lh3.googleusercontent.com/fife/AK0iWDwv3hO6T3zTkS_TClLuHTwGV4u-LCFKXBjyxkeUG-k5UgYvjqdDNYlz_lzb_2FKPvntL3YJFcPG-oDbZ50uDUO3W3zbQQ_xhlOftCiuVN5STPJAT2ZCp_5ME8WEuFRSNUTqoyS0eNxg-OihYvPKEbcLSCFP-u1lOHqk9a6h1cnT5ASk1CNTPFeRAtZKkuE1PDMQJ3Ze94-1AyfT4qpud7INEtJrpXq9pmbO7NJwmDVTCmB06ol5n2PQvPuFcrXQlyEsdqDt75FA_rSJdK0zYHJVGvjwqEX6I8K8tR_Say6yKJ8bnkZYljMjg9sXUvc1wUc5a3DDACF7KdfdcolJjb3sIapQWgSPtVZWp6yu5-9afq8Mo_sYyCeOfWuR13t5fH1C4fWlhCN-CbCwVNS-jcQ23NpvA_Akf0ujqRckEW3H0kNV_jeiUFJWZTrHx1ZiuKccYJfWoTt3iCCWt_iyqTINDFJcuCwfJCFEXVHJtWGXNcfDPc1L-sI-C5wAMrZHg9Q-eGSEYKA9S1t-UFTXl7Ib2oidZpCtNkvuNGsdIZ_4RAkwCY3qV4WI2sXZLKVQhJSDuM5B5jmYTG0LW-jckHhEXSkn794tUB0eoxbjHDrpORj3HdXIhMisAQ_4JB42NFmQXvoF3mQPcnQpVVMoBh1f7napMK1zzLGaiQ2GcxmEtMDUaYBlbbdypTLLSkirmHDAfnxJR3_JA3n6gz2puU7qSLwnI2Mdpg7J7ovX1kCyKAcPHdvsbVHSFFBXm1r0l7W1aVI9j2yMZrF6xuISMP706oIh4fjQXgQLLl_F9L-4OgsbYITL2XLp2ck1B12pBOhzEC-uiw7YrneTgVF5S8kLNcG3w4G4iBLnT-OkzWQ7_c5zom-D27CKjSL2Qy7HpGTJCX8C4F0me1w3ZTc-uiji-stfor1kOdJswrrPoUnhHEFD81t7BIYW5jWL85oruZ1f3QOl2ALD4JbzZoKMuWj5F5TiwPnv3vwppprKsb1_FjFt1P92H-7ezUXDtFnNiGve5VTTKMhxfbfvhhRumgJBCO7Mmf65kt_cxnF7Qj2dZO9H8sq1AuSUnhALhCW1_w_63R0-FmIdGjpnzAL44ttdJD_YwkMUUjFe2G_72aKkqITAjY8gB8e58WLQ7OhSC5oXMYCCCNtK5FD8ZzqsQdZGAvttcLUi7kYbtq7-WfI2eSmMsKYKv_2FNrC7XWL5PkgegzRjxPbpPmZTax2NnUCmUOfnyJ3TH3RHyqlae2tZv1Dsr-T9Caj6vp1eHIE3vX0cYqZA5iU-s2IU8HAyc0uqNDQa6B87U9HKXPmWeAsqj0Mu-oj81qkmmpIy3jeZPifIBvwLzu5zMDLftWc-VawGJ441v6o4gs0WBHY1P6cT3B4KdIgottleFfclY9Kn8XbYaJ6_5mTgWUI1x18t3bdPPGajgH4u3-CJwLrUvkDTV-DT5vNvAG15euAgPoozveludVBzTXjs7GHHPXzldoRy5fm8wJIiwGqUVjDlggBSwi0MTv6D-pCXZDTDwjj616ILejk0kbXjrjc8dSSL=w1366-h619"
          nome="Liberty Duty Free"
          desc="R. São Paulo, 199 - Centro, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.29793018361!2d-53.63774232548743!3d-26.251992365920355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b0983358eb5%3A0x98d6e1d4be5a525!2sLiberty%20Duty%20Free!5e0!3m2!1spt-BR!2sbr!4v1696710114490!5m2!1spt-BR!2sbr"
        />
        <h3>Mercado Tri Zerohora</h3>
        <p>
          O mercado começou no começo de 2023, com atendimento até meia noite e
          localiza-se no centro, perto da Prefeitura, sem duvida uma excelente
          opção caso esteja buscando um mercado que esteja aberto grande parte
          do tempo.
        </p>
        <Card
          src="/mercado_tri_zerohora"
          img="https://lh3.googleusercontent.com/fife/AK0iWDxmpdV7UVctHGLuNqxOuYNx6od-3xW2yD1FcNkIRKMB6NNPyTvLvwhSX2nGK659kofTXIa5dVgzCdyv80kg1A708tu85bbVP07qivbmy-2jhqbLBBy1ALQfAqYukHwVp6RFAV1JWApDWZnFO_1nT77WNyCD4k4RVzlixR5WgBAPK1fD_3CcQcyjjtd9uZsU2s1LWwtkWOKA2OuTFtzopVZcqWeKfjNSlRehyUSw4JuUhzpCWt9U26LoCfCgMwKFgMhaqmufyg4S2hQmfF1KhrizgJV-m-xbWeCz861J_lC2TpglswdHiTksDtdwVTULsVSAJBhKnUFQZr-4VLxjITBD--7-JHjbQxVgjAiNTt1skR2xCojff2K1_lrBPBSB2wzpNgFIav3dYlQrJO8vFd1t3NRm5rcsjeZ4Pf7KvFjxkXvU3zO6duJvIXORzPol4I4zAbz0rEQMLWWu2ruarhuL2F7Azo_ZIvOENmuBH7u9H5qho6P4KJyyKW_KXY32f4hDZ_ovyfJ8peV97ekteVtgvvou9TsaQt1V4oNZywe2sSXoIhb8A7oZfGQM5qV8xb2K9i5jB9EnnEFLONL8p1r5cvq0u45G-rcZjmpAYP2lYXzw8YmC-SiIN5DHPdP7TXmHwg1_QMdYxn39YLR9f-fg9N69CTcT2Fg49Umn91TFvJMeiyO2WUd_3RZkx_MP9CWQDGsG9axBCeoVr6TjAyFriE4ykVPkI-krd3suOww8UYbHkf9SsrW2ZL1SElcQAT9CPcxs_Z15eBXgBIMcsdEFTM347q49J4bI1q6KZQ2rGRiAsFJ5VV1k8d-I0z0_-M4Qctv-yHMbhhloWnlnsi6VQcAVrGsucCkAp0qlbsuEg3WgfL22eFrp27tcNqSs332oKXJKdFRrnXnoM9MBHvPPYl5Gx94Ru5JgjQ6tU4kyESWXWyBj-3-Ce7oQOAuntySCR5r6J2SKRYn5dK1lfqppNaBOynNl4-EO431rmRzg5Gd_wgKl2FNa1LVEMvjz36EUVgq-Q4cucCrQZ_N_gne-WGdo5rfqvvjDDsjviBot_VwRNktS81XcA7i47nkmzCict-UNUSoRpXCv5TItD-mU-dCMijzsA2N11iNjugZaTOX89vQzpw_b-4wLKfYajQpMVtw7VeSNumgDcjJv0RUuInaoR1HUCeKiYTnOr8nU8StPRmUKN0rlSx-WNYhb3ogPS1bpVolIeXAeiaZRT3TBc2NO4JRXfr99OEM4oSds6tKMAsGhLVmDLMERaVDuRLurWP6gbKmXA7UDA1op9nIQ4ZvV3kDkcvOa3SH0TX7BPfeIGgxqxGzYHuYyOF00DAIk8fI_P74ydBL0baQG9Q4hm5l6GXzsr1onMNHaCF56SVN2J_23XT7KXh-ngeQg5VogEQ5z91x49LntwsEyBVXxuPMN4GR7QWi7KQdjB_Erw4CC_RU7pqUsCRw68biFtXgh4fNSrTDVKOmenTemQq8SCGlIns4jV1wPTpzQTdIWJ_tBhcIJ0aOVvFWmAifZIw4bJPr-3c0eEsfo1gnk=w1366-h619"
          nome="Mercado Tri Zerohora"
          desc="R. São Paulo, 148 - Centro, Barracão, PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114505.72928194582!2d-53.635909!3d-26.251794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a3163395261%3A0x59464fdb29b6eb90!2sR.%20S%C3%A3o%20Paulo%2C%20148%20-%20Barrac%C3%A3o%2C%20PR%2C%2085700-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1696710725361!5m2!1spt-BR!2su"
        />
        <h3>Restaurante Casa Deodoro´s</h3>
        <p>
          O restaurante vem se fixando no mercado, com um cardapio amplo,
          ganhando inclusive certificados de qualidade no serviço e atendimento
          ao cliente.
        </p>
        <Card
          src="/restaurante_casa_deodoros"
          img="https://lh3.googleusercontent.com/fife/AK0iWDwtfObs1qgzTgy7czR9yrQkEGrEsNdsk60utwQ_28JlYWTVBFiOYmXBk3QShtsUCZur22NFFFAv3xW6g3DkkWG3B3bcTvGOqlrAo8ZQUUJ69sR34NeEpcs-OQnukqQ6ojYmSSJ0WdbUZpmgFEqXFZyAiycaLJ6VJP0KwViqhJZI-N1jR-Xsy_uErM2X-NnUEh9WCN_nSafsYJMdzzB15P-cPwhDy1VoduyxhfTpcSCBTXRkoUO29rIe0reRe9f_8NzI64Rsjez7QRJ1V_M5FcOD9ansvEk2qzwy2tbkKSXTl1MwZY1loGvgzdVZW8jO0i3YZzlYEVaiaVbC9mxI3AWtqDTa-xWk4RIQABkRd2WJ3CZ1Wn9Urhy9BiABt2QYJRw1dMqT72sTVhitxAG1zL5XchwMSvmAQSevcFrtY4J7A74De1P6VtTMEVrdpvGsrRU1Gv6pP_oZ6--24TcZT7Xb-T7AX2S61LYMgN1bWVk5UAFCsZLnARhynAEYH0HUNKrNYkd5GtW7YePinBru2l7StjmePtdOHrSrudh0GHrtYI3lFo6o1CLvvs7wx5vzb4AlvHchtR4okRdhFAbKcUIcjPZ_SvYu3-0Bt8bj7GtqGYQWt6M9a9OUUBags00h5p31yMSK4KgjDUS5qs2h-G9o5tzp0Vj0oCzYp2FQH4DsKNjyyjbyydWYrzbp9OjoH72FfaqNVXomttGUo_mHcJsIlwTW7L_ZBUy0Ds69WF4hrH6Hlh_2d4y9NdtHVhrY8kf3rv7Emrpaa6bI6U3BD0QR0EG1SmP9lOaYiGLW9Ii6f24hMeQEBSUgdV1UHUoKgS0xmebbbzPZEq9-muxKHFEj1DiznJ9U4iQBzmL-7GqtSH-9l_Z0fyT6YDHsB2EmwBmPJmSsYt0sIBrmV_18K_jie-NtSRl57Wy2QV6u8yTomEHa8R0CzXpw4Virw78xsUu492_WhGCzZmPgQ8VrXkhTThDYOu8yK5o8xE0Nt1XmAua6NGDYT86v-ZiwTeI1wJj4Zg6p1v3nZJ05FN9-eEInpAWu3KfSenAT1t8sdQ7h4gCyOGGjuQgbDlKxknXQDnp9GhRPBSK8DyRq2WlBwwd40WpX9TagN4ppCUQMDJWBL4KQkU5aR5iSQm5idJPXBk6LpZXxurCpmNR8ZIl9pCP5DVCilv8lrEEGp-Hvy-aQAP3muRWhP-4epQen6eT7CDTTogEdnQF4HEwjVmfeFg8hxGa09tl1puk2gv_DP3ymo1ceRx7eGqUAhSNsCJCfqNJEiEyDqi4QiRIIlbzfUbYvynHnJtohVdgURF2GioAkCAwdVCbowX4hN8388HVHxbcfy_aaTZrl6dPPiUe19p7VP-JhaBGKXubFdOur56fOydaMKJ3dHWuZfE_9WlgVjyBgc5Ap4NwWrRBot3OYX_tSPDEGc6iRsn8KGmXRNy31WamlwaFqlibxeKqEX6rcrqp0RnxHGW3q3OI3NIHkp2FdcWyXEZER55hMV-qodo9p0RQmAl1Pg9NGUYSmNjjR3FgmPkbHkSCyBp04h1IX=w1366-h619"
          nome="Restaurante Casa Deodoro´s"
          desc="R. Nereu Ramos, 108 - Centro, Dionísio Cerqueira - SC"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114505.77264962805!2d-53.639782!3d-26.25175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b06c537c55f%3A0x259b8998d5aba9dd!2sRestaurante%20Casa%20Deodoro%C2%B4s!5e0!3m2!1spt-BR!2sus!4v1696718276091!5m2!1spt-BR!2sus"
        />
        <h3>Los paleteros</h3>
        <p>
          O delivery de paletas mexicanas é uma opção prática para quem deseja
          desfrutar dessas delícias sem sair de casa.
        </p>
        <Card
          src="/los_paleteros"
          img="https://lh3.googleusercontent.com/fife/AK0iWDy_0uKwRvyx9v5U-kttwKFanDAPIWvXYOYlq-bJDrx-qBCZqIf7HC6rx5j_RVGgWS7vhHO5mT5ncFDrzoJHfbs-2IqrpgtYIgCoQacUmUkduUtSYvft_CUp6-pAa4BgkxR2ynAiZM3ZlF8WgL9FSibxlztjwjHM-7UmT8euwkTCClnebHoNMcs01QkbDaNWWeQ0xWHel1eSu3YXm8ZRzOlIhjcYVfT9WMrrfAjlNGtQL6Tqm0NFpZtyDDGtu4wkD_oJ-3TTZLOY0IsMgkxPRhhbChm9tRV5UeqbXMYeyLiplvfTQqbt_1Xr7NdfwIY0V2wNBgYyBWdKC3_yJusTC0Bp0qSajs6Vzu5_8UIxTXRz5Y1eecMx9HMrGLAcVhmZ6B3KfXnwXgtKeTGOpokB0DsDfGxerBpSy_K5ZH6BZToJ6xKo3vXAQK3_zbuzAEp3HOoxa52macECafCMsEV8tpg4D-p2tQWxqSZ7B2lAQTiYau7-xmueAsvum53VNKtwm5DRNGYKdhjIRBkFIFXKgMXXZXvKtO36qTkWcNCAF4JlYBVbxL5qu4UMm_da2lvvDl-FZpU3LmtnWZCPQT-kUyjuOcpqSloMnb3xZD-lOsSraIu1tcEjHIhpa_I_wE6QALXC1wjhJXB1j_PLIN9ggQ6K3r4_BB52VA0KJiqoK9ZapgX8qIrgzetb73_oTdNLjzQLrul8SnN-uocY1z2TTuXcDXBaQXrOR2W9fqknYFbrzxJc23da2N5p1DPfA6HEABnvOpKWUOXME0D4q2bgEse79izkVSEHPsCOkAI0CYsdbAqoTpdYXEkVC-ANOGp-OsCrrGeCQkhXOLnRFbH1XvwRDkPyebqY5qdjT-_WTpVxM1D9MxgEf0DKuFi9iX3GSVdJ7U5LP641VV6FJAtR2kpYkWs7vUgDrq4sqYPUGnk55oAMH-yj9b6f-V1npKr_HrCvcgaybWyZ0OgjJewTTsc4N_lxOZWNNDEKs1cOEdBrOG5Pnf9ZO_CxaPvBq_h0xn_Mpp5C9cONRwGh7lwKTzVHbA3PQc5jYP0TF0WGjpcW3wPQjdXvsbCKn9EFot9IO8vD6OrrIW33j2EaDOi8HEPHTc_ftwHrcceIQ35hQCwZ4s-w4ags2RMeLQsGIV5bx7rIGDNE_YEE-jT17W-SiQyTOUAdGmYQ8AfVFwIhJGWaaeGarixaCpC2aIfYyQXtHc7kArIfzaJBeP_f-R10Yw_yqInTIyIJmD-S3jEulbdbYcjmmZ4MiyZZ4M_A4RAhOHcP_uQiuFBzeyWwsJCOPPduYdurYjknEC8jXkiyO4gWdJL1eEioqxRM1MwzYgfALs178gcaYDQiJLXhATLVHBR4fbWoPKkWMvTzg-cpJnK3et8prgH_wmgOuzlaB5D6D6GtWkTk8bZu8kx-lUqXfh8-fnb4UGfgmXyafDsbhwPHATfattpN1F9kHhGm_IdZez-fPySxPvSUgYHK4GZGzPnnXE00XG60fjTILjh_8x9GKXmB_eqrCeBvWZgKiX6CNpv43E6L436hGb4c0GPI=w1366-h619"
          nome="Los paleteros"
          desc="R. do Divisor, 337 - Área Industrial, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114499.91543006981!2d-53.60970700000001!3d-26.257692000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09bca742287b5%3A0xcfd952b7ce5dcff7!2sLos%20Paleteros!5e0!3m2!1spt-BR!2sus!4v1696719027468!5m2!1spt-BR!2sus"
        />
        <h2>3 - Pontos turísticos</h2>
        <p>
          Nesta cesão veremos os principais pontos turisticos da nossa cidade.
        </p>
        <h3>Marco da Tri-Fronteira</h3>
        <Card
          src="/marco_da_tri_fronteira"
          img="https://lh3.googleusercontent.com/fife/AK0iWDw85lJG3AF3wi5rIif6-Qbnry66zV5TNnWknS9hPsDI1o7wvd6rqah_Hgcf4XpP9XhlKT_Fo9fqp-mY53bcIwb4y9tP9Rgf6zUEXn_wod4fw8kHl-JOuhARG2QWLyYa9NW4EQss0Onb4-14KsFwONRvsAWfWMZi6WgH3XjMJ-llWG5HaATVvkbhtRTIP_lLf5a1xae_vf8tm_Ymmh5Fv_D-YST1VlVcevKo4hG6Rek-mJN5BsDEIy4-h7dxUuUqPb8Zbml-Vc50LNbSzzJIggW7eVxVRgyWwq2-dWA26tFMpMPYRbzi57XCzzXB1BzKNJsAF0yPVdFgnVu48h4RrXjxxKksSQlvaFl7rCegtYDb3wWXlMZxBcnQL9HpVldLMohtIKSkhV0jeETT7mnST1-_C2AjmJSuYd8MKJHNO_nMFHM8IY7bZAxI7Ahdq3XZ2ZISJ_DqUQc6PclIfX8UR7S69aGuPvSnfBMfSfNrt7JooK72nQVJDPohJjETdcSULBNULMcD7HFjEqNJ65Gvk8XkRx-YFFJtviI3LTj5_wYsJ32k8k3plVCMc3vnDvHsw25yQuTdesoqsjsiGJJc1WuBwgv_3B1WNkFuAgTibA52Sk6aivRdmrWSd9y2tDGbWBQbm8wgZae9Cg26jOpvYIyGPXvkWfPycUI0TYdkY3oEhh-zCiepb9xpXPF3JiOud7M2Uf0iHk_ueOrHZ9Y9gAvceIwWrWjvjYARVAk9XgNQOmhBmQVdubxpUGwYEXGD2K7HpO9083bI9uyGqSmcwQ-hmzedNwMSsTgWE7rb_UQNzgfx5Qtb9NrSYoIM52yfIhY8wcD4oZ9HbP5EPF0ouZ0vPj4OhNHmj99-oNtLihsMtkXgWpk1jK9cfds4X5lJnfpinNUI3MxqgD3P-j9ued7GdOn87l3dvFzZ3mz8wTK2TTmH29N-hn_ahOqtaH7r7n19dxejKEam3z_wlB6Tk59-CqHNlsQ6YoL5bbOdge5Laa07ZRCAS48lCtEYuwZLz1A5GjBoY5J508-QqOBAZpcekYBH5xJ8eqlmBfpXh3Um40Fmibonsp0LP6de3L_EjhN_OfwS-ytXn8UyMZ6SZa7myIP4jBabR4iUJZqaQH4_bP87Dd7DDyo4cnPRh4mVWznbz9egrx_UdC87syuJ10xIjUdmzjyCe1AFk9mBC6SVsOYZs3AfcBwCRNxrFPWzD17VQBz6jXaDP1nMIYUrRR28DlbFVxzO4337Cfkq84iUzgwto2js59fDzxDOwOY1EH5m0rAHTAbYxuPV5KdEplY84uqNpVxvc16WsAapgBSoQrkdd2U-pQins-eOBHzzrxRtKCPnAJ7ZYYxKrqq7vZSsbANM-52oXuxqeWrCVEHL5t7MylJk7FE0NxNEbdI8Cu5QWLi0xaxsP24ckGl1v2E99JGpTE2qsY6QMutCovduyRQHvTzzFpwldpe3JISMvx9CyweoW7sOLnFiMIcEwSgZfzIXFXn2WcUeWQX0ffkwl9vuDrDXHX-gSq3CSXifahkFE5KG39Dx6lpQuP2y=w811-h619"
          nome="Marco da Tri-Fronteira"
          desc="Barracão - PR / Dionísio Cerqueira - SC/ Bernado de Irigoyen Argentina Misiones"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d223.645863490695!2d-53.63912317317146!3d-26.25082726636046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09bb403ef1f07%3A0x2a2974f6e1ac1a17!2sMarco%20da%20Tri-Fronteira!5e0!3m2!1spt-BR!2sus!4v1696719712626!5m2!1spt-BR!2sus"
        />
        <h3>Capela São José</h3>
        <p>
          BREVE HISTÓRICO DA LINHA SÃO JOSÉ Com grande alegria voltamos ao
          passado através da “biografia” da comunidade lavrada no livro
          histórico. Caso algum acontecimento, feito ou data, que não foram
          mencionados, é devido à falta de documentos que comprovem tais fatos,
          pois só foram encontrados na comunidade documentos datados a partir de
          1982. História da comunidade católica de Pessegueiral, hoje chamada
          Linha São José, município de Barracão, Paraná. A comunidade da Linha
          São José iniciou sua formação a partir da chegada dos migrantes, na
          sua grande maioria de cultura italiana, alemã e cabocla, oriundos de
          cidades do Rio Grande do Sul que buscavam novas terras para suas
          famílias se desenvolverem. Junto a sua mudança o migrante sempre leva
          sua fé, por isso se tornou necessário, na nova terra, a edificação de
          um local para as famílias rezarem. Segundo relatos não escritos, antes
          da atual estrutura da igreja da comunidade, houve a construção de uma
          pequena estrutura feita com costaneiras de pinheiro que as famílias se
          encontravam no final de semana para a oração do terço. Mas, o espaço
          precisou ser aumentado, pois não acomodava todos os membros da
          sociedade que ali se iniciava e por isso se fez necessário a
          construção de um templo maior. A estrutura atual da Capela São José
          começou a ser construída na década de 1950 pela família Bruschi, sendo
          que a partir do terreno doado por José Florêncio em conjunto com o
          senhor Severino Bruschi foi possível ser construída a capela da
          comunidade pelo carpinteiro Alcides Binato, com a ajuda das famílias
          Bruschi, Silva, Duarte, Demark, Lioto, Roquenbak, Tesori, Lazzarin,
          Radim, Spezzia, Clainabingui, Hahm, Colle, Staxachi, Tozatti,
          Barrichello, Dombrosk, Peres, Limani, Vargas, Peretti e Palosc. No ano
          de 1962 foi inaugurado na comunidade o cino, com sua estrutura feita
          em madeira. Também nesse mesmo ano foram celebradas as primeiras
          crismas, com a ilustre presença do primeiro bispo da diocese de
          Palmas-Fco. Beltrão, Dom Carlos Eduardo Sabóia Bandeira de Melo. No
          ano de 1966 foi construído o primeiro salão comunitário. Em 1978
          aconteceu a primeira reforma na capela, na qual foram trocadas as
          tábuas brutas de pinheiro por tábuas beneficiadas, onde trabalharam os
          senhores Henrique Lazzarin e Juvelino Radim e também nesse ano foi
          construído o pavilhão de alvenaria, que foi sendo melhorado
          constantemente ao longo dos anos. Em 2003 foi construída a nova
          estrutura do cino, sendo esta de ferro. E em 2005 foi realizada a
          última reforma na capela, que retomou a cor externa, de azul marinho
          para cor de laranja, cor esta de sua fundação. No ano de 2018, nos
          dias de festejo de seu padroeiro São José, a comunidade comemorou com
          grande festa os 60 anos da construção da capela, que para o município
          de Barracão é tombada como Patrimônio Histórico desde a publicação da
          Lei nº 009/92, de autoria na época do presidente em exercício, o
          senhor Itamar de Souza, publicada no dia 30 de junho de 1992. Na
          localidade da Linha São José, residem aproximadamente 60 famílias, das
          quais 35% trabalham na cidade do município de Barracão em diversas
          atividades do setor público e privado, e as demais desenvolvem
          produtos e atividades que registram-se na Linha São José, como a
          Fábrica de Massas e Bolachas da família Slaviero, a Agroindústria de
          Melado e Derivados de Cana de Açúcar administrada pela família
          Camargo, o Confinamento do Frigorífico São José da família Valiati,
          além de inúmeros produtos das famílias de hortifrutigranjeiros e
          avicultores, das famílias que trabalham com produção de leite e afins.
          A comunidade ainda possuí um moinho de propriedade da família do
          senhor Otávio Lazzarin, a marcenaria da família do senhor Vitório
          Silva Dias Filho (vulgo Quito), o Bar e Mercearia da família do senhor
          Alceu Silva Dias (vulgo Gaúcho), e a empresa de coleta de leite da
          família do senhor Moacir L. Lazzarin (vulgo Pelé). Na localidade ainda
          possuímos o Assentamento do Projeto Colméia, a Escola Municipal
          Severino Bruschi, a Escola Estadual Padre Anchieta, o Posto de Saúde,
          o Esporte Clube Aliança e o Grupo de Idosos. Por fim, com imensa
          alegria digo que a comunidade da São José sempre está de portas
          abertas para acolher a todos, sem distinção, e como foi por meio da fé
          que se iniciou está história que todos nós aqui somos participantes, a
          comunidade católica se reúne todos os domingos, às 9h da manhã, para a
          Celebração da Palavra e atualmente sempre às 14h no primeiro sábado do
          mês para a celebração da Santa Missa. REDAÇÃO: Flavio Junior Peretti
          FONTE: livro histórico da comunidade.
        </p>
        <Card
          src="/capela_sao_jose"
          img="https://lh3.googleusercontent.com/fife/AK0iWDwfNTLeGbYw6Pny_oyf4gjSLhhQ5N2R25wZhn2ah-qRGFvknHDUfl_nYS3g8vZicSfS5gLoiTSAPznCJVa_X7UP3Xtoqcj38sMtFi9RhgbGlEcNFmzg4TTfNF8hdjH7GokEPzIZIRkP3tuicuNCfeRzvyVBgnUDKQ3BHS2OZXj9_zAR0PyDJv8MtC5JP0wpWHNF4kAc2YYuhlLWCzP5YH_PPJiNxacRLUCZHvO_qGUDlzyS_GN1sqJVHkwTbRv-6JSMIG3z8BFDjlej82-jGs_2HALHeibhbTAxWJbt84ZlU1TQ0Lsx_Fsad1CSPKoYnY1ebCWrgGaWDCeYEXliI6GAnDVPVwxAbPclmRiE24c5LyU8skpO6tjQf5yh--2skgvF6GV4l9sIVvVvTZQJGWhmZCT-OeVbMhP8ZB_57hlnsy8EL89H9_W4NBrS6fJQ1aAoPGEAvf1c--fuQNMtI4fDUC7zZdNrWs8gqf-69LKhGiH8nxYNtrQ9G9kSCf6NsGEysIhyXwOwLmma96LV7R2DKJQS6DhdWeWRYrhJMxpsttmQiPQzITgnyuiJ7PakUB9M-2U0Y3vlE-MQqcgQvH_I8-4AqqEhJDJJ36q-Ki7P5l5d1Gb1SDU-tkhemyhsFBX48hhWuXej0yiniHB82cSbd3Xk4ez-u9XernBrpQpO0zqj8f0yyb6zJhukkgD6gnhO9Jlik12hPheP4BY5ejJyS9Zw7w3v_spJw6rS2w4H1nqbKmQeDUBpeWMJ_SyFJ6T8c7N4-B3_E4azaA61yQP-aFe75f077YqYQlHDhYVqP3xLgiA3ZYmD8JF4k76zczz-IQDxzqudrrEZLpguY59ersobPsB7upOh_qs2LQDCK4uh-30BH2jlGwuD_aOIssMPr0pOQ5w1VFxFJjAeu7Y9lUfhlKmm0qx14mOVaSMpiWxTIto2XWQeVcEd9B5uGdqkxIKBqKWeYa17kg8OEeiM0l99pFl_SLL-4K4KzAtSbHWydf2KKedRTSUnz_Xa2V-65bKVuiUp_aKynOqFn_2W8j8tc7BXdNtNGTTrd85eIrBDul43Zb9HpS7HPq-5jzXSc34R22kNkErPg_6f7wI8gUyZJFZ3dzYWCp8n1XjPiq7L_jSTbzzhg3xXhTzinOJZzw3y5h7qtiz2EzKS8R90VfUYpUm2KXWKCLW0FGTmMaltMkzU7hCV-eajqv_hro7y1XUcny1OUOkB3RYFGLj4H2jS-gnCUCMp5u3cWKYJ0iFvEV5DbbBNuRn-_LZJ3sL-4oSUWr0PPVhbAli89Bs9OOD8aMGs2vU1iM1lfkTgHSbKdwgrK8MWuWb3fYqo2JZmoNn_LrdGNrN2cTucn1hAhLpAmiliEV4MvzghDKm3sLENhPv6tMMoVqgLwEJKOXHxqQ7YVSb6yV_7AaT3hEEkIxnjXY6XO-fygZ1cQTEJyKw4HrXqKrjAh1ofFU-lkq4zyJRjIBnQWnxS5-EZGsF9XHTJrBRTuhSTF_ycCo7veWQ1gYbR1UhkXRj-v8hG6uUZK5A3Y1kLSkNIye2U758G_4yQabXS3Gvud7ERuds1r0TSmwk_g7l8rg=w1920-h937"
          nome="Capela São José"
          desc="Capela São José Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114526.61088786623!2d-53.582276!3d-26.2306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09ac32626bb8b%3A0xcaf4b5110ebe5589!2zQ2FwZWxhIFPDo28gSm9zw6k!5e0!3m2!1spt-BR!2sus!4v1696720141749!5m2!1spt-BR!2sus"
        />
        <h3>Gruta de Santa Emília de Rodat</h3>
        <p>
          Rodeada de belezas naturais, a Gruta de Santa Emília de Rodat convida
          para um banho de cachoeira em águas cristalinas, mas não só isso. O
          local também inspira a religiosidade e representa um templo de oração,
          tanto que devotos costumam deixar pertences em uma sala especial, como
          forma de bênção. A infraestrutura, que oferece quiosques e
          churrasqueiras, permite ainda fazer piqueniques em família.
        </p>
        <Card
          src="/gruta_de_santa_emilia_rodat"
          img="https://lh3.googleusercontent.com/fife/AK0iWDw232ihdujfsIFfY3aNTAr6E4atUTnPxSFkrbd_JjkLECOBFiHDwsuw0womna_H1QHP9aRiDgZRoxIVudOSwnYIlH-hyj30jIYA-issEafjZC8WKN-pCL1HwZ6twnkfFXzNMWMDgXM7B9vFpx0zd1aA5gZwtO0mrFiVqge1xommA8aCeLxMufQH6rWJ9QESiUBzTPPejVSDnI8zyqGGxdMmdFNcgGqvNvKRYajx7iIzSCIh2rQvSGuctDqWAgkyYniYNqG8SSo56bYzXtH_1WKce-Ev_ty3V3qNBhGmWEOzzrSp2naxfBCO6Uu1ifkoBN6NFibjBfV6eBLHEtAmxQxzrkNypmc4NCVjil7ZyO7VuCfgtrc9x12sPWYObk-vJbjP06vq9xL4bQJy4c4v9HauBg9fTqDjs6RumMmnMbZ6G-2bfJuBPrWN4RWduKRHQFvVju590qUqe970T20e-n8orUvQSEOE3pQr_6ftvnW21ShZ8wMufrhHcX22L1UU-YRu0YUfjimV1Ip9x8jZ069clFsNnEDaxCyyWgetywGRnkOHoQUCVLtOCHbskB7YtYPxWdnwiBm_cSEIed0C0mzrfbn4cmJNQGA_m73Owgp_3_R-y6ZITe_d0gtmAGBMXgaJ8qH5kx8x440mH1nVtlabZ3aUvRbov15YaiEoCg7I5quc2QCC6HHceYp4aMJQiYrmzYnsZmzefpZ9LQ5W-3uBzw1yXYvt6y-2AX01uK1ki6XSaNa4mbJTENTkfrK_GCVrh0WOd8kabT2BNdIDags9TNRFkW5Enzu3qw4kw0SPcAQvRocLBkQ1f9Qh2V22SaNK0X1fE7qaGWAairu7pkpkt6ZNUkXypcjkLUPkBKtqwTqyUWvWFWLUO6BmymWSqLTN1-82uRIBuiTSRUy-EUvMo9n9tJfecZDrGjRcLlElka_WLDvnt09RG0j0zb8I6hCsfAycQQ6Ur684shAnSKluYoKnGSqYMLXc0NKaVn5ZjOrLvNpJhEUydxBquCv4ymi1tGAPLXJvNX6lQCyzeWN9XSnh3XYkRw42UzEwB_cqGIHzgN1EcdSOWT702qENSNxHWs9ec6IpOmX6MLEjD8fqa0oA524btXu5gRpJCEAh4QZgtN31GfYkjMlburwQrT25TJKdyZVcy6vigZNvLRg2AV9_7RwUENliFjbzZK2ggKxwUNOGLh1E-jQytSiAxty192ft5Bd9wjx-ch8fMOOCkTq9o7bVll8yZmsiEVuIAoIM-2QYbA68JB7PqnTL_V04vNHgj6tx1ZeX3K2QDAkGx9n8hxjD2dO6Ei4mvletgjPBkVcl4tEKt0BR__TcJj_hJayS7XYh1YOJfgfKj-q5FDl0LPVRH5MUE7U575cM2ZjfLLCN-wGX45EjkCNdrCfHCwHvNrsg0SDyeNSW3WBAYqndF6UB64f8dbp0LImFcp8PR9odjbtpXonUcWHkOaPWghsQUOZWvpn2oP-2Wec8Dy28GTnjc7XEvfNX6YhCPVi25RRBA6iq0y2oJACsfBjbvO7Q5y9SrNmNgOhq=w1366-h619"
          nome="Gruta de Santa Emília de Rodat"
          desc="R. Quarenta e Seis, 124-256 - Siqueira Belo, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114523.63241922419!2d-53.451993!3d-26.233624000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f086c627c2e563%3A0xb4abed4b9d81f6c1!2sGruta%20de%20Santa%20Em%C3%ADlia%20de%20Rodat!5e0!3m2!1spt-BR!2sus!4v1696721104004!5m2!1spt-BR!2sus"
        />
        <h3>Recanto dos amigos</h3>
        <Card
          src="/gruta_de_santa_emilia_rodat"
          img="https://lh3.googleusercontent.com/fife/AK0iWDwkhTOq64AjJlUw1VPXoaguf5eBbYnpZrjDKL1B8pNs7w82MC2mvJPOHCdn4b8dRBeexJ7CvH9i8k1088Y6UJXjy9_3l1PrlqzDv2Jamtj1FO7rFVAdHK2u695z9A4DthbVtlaMlqh78PqMc2l1kbUyYBs5dod4av7YChrkSGAnESzo575cBTWD0XxO6wBQUcbVIVKzvqsSqlFeiTFIcnxwZESklLGLsGOeHgZpeRI35USQchAwqmxeb6SpjlLCV32jOnJJvSSRz3VXsJXMYtRPb1Qxf3HyWz53hRoB8JbLfsqu4dHeIchCrZ9dgi2UR_fE8xJxZLyQORpgH3eCf5CqSfbdncP3GX9uRPMJwHuvmG52VB7XdzrOJNEbHf04ktW7DMTc3nuL4d4x22MnoB1uB2IsBUhq2HIuW8dK8jHd99YasB2hpgTwJuHTkdXO7JN2aYscY-d2BmDwY7hLxupJcOy9rjsj_XYxk1tcTWe8FZyA5p5uw0QInS0eywhLxBB2kktc_6Q-JHX4g931TUlz0hGf9qR9_W3qYeXN5Iy1XF0a_h5X9ndg7kFUuEDPQEYrncL4diN5okDkMvRit64AdUmez_rcTPfWaBWeZxjYY5LScXo7OW7GawtKCkscqQmGeMM7TlhrLCvFf_QQ0jW0v4M2JU0bUwOd89J4CFSmQ-fjAp9Eg2FB_6E6gHB684xEHfPymk5YLvFTN0JATNXFR43l9gQooYV_qOGIkOhBmUpi9OZXSpKvf-oAb3rQYut8_jGayBLfFb5z2oxTaVDTb5pMjO8EEbo21-DCMLkTViXsbiJJhsAB2XiT1hIexjSl5Lg0emXKqzW9Wnx31GSg5VQn-ED68aNdZu-l9YtPcQdjn6KfaJeLAr2v0P8_uCOhnhD6TICN-xoQPW7twA6StjIKCshPNk8_zKG9d2HTiBf5Q3QlPn4ba5yt95gGprhaKrD1iuT4oUNsQXI5eJjWVROIf1fDv0gyblZOhNX5y0ApAkmp6XYFM7UED4HUW1Nh_Se7OklAOr3fxivMFCh8XaxEV-SOUy_P9d78Xw49urxAhv5UknTbBLqoJcB0VtvvddnkKWp3_VDmSXcE8FnL7jOzF8p5WJ_X6AI3gPAfCZB8odiipzslLB5aKIdnKW_TteHCV3BMn49D9mDBMfDoX2C8W41dl2hpHcmZhOn008_kaStAAUCO7-W_pDsvY6iOAxESKdQf4ujJ7EyGrJyo4PlGoI3srulSuCCPV_tB5komjN3x3SZoZt_H5ff0PNd7xLKvFmhRpivGR9XIuLB5Hxg3cuT3lB8fwkaUfa5w9KjQWVPti4APK-aPxaHiA4VRZMrpCLD3amMTbSxdL6SuLoHfoo0QiNZJtIBwjh7h7kmFf4oH-zn2tVYt-AInZUCENElo3QcbhIZh9KFr3Fcpoi7PrQTIvT0i_1FAIKZFnFfWxn2v__zI7W5N6gZYah_mcYdbM0bYEoeheTZgXPg9Nz1Ipuvs6VJO5PBYxQ0Totqv6LYiajBUk49cJCYgB_5Qj1lko6jEWzRTgb0L=w811-h619"
          nome="Recanto dos amigos"
          desc="R. Quinze, 357 - Barracão, PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114518.97595299575!2d-53.631444!3d-26.238351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a3efc00d4d1%3A0xa2639fd77d18404c!2sR.%20Quinze%2C%20357%20-%20Barrac%C3%A3o%2C%20PR%2C%2085700-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1696721969200!5m2!1spt-BR!2sus"
        />
      </div>
    </>
  );
}
