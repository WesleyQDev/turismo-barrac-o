import Image from "next/image";
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
        <h3>1 – Pousadas Shalom</h3>
        <p>
          O hotel Pousada Shalom foi construida em 2020 e vem se fixando no ramo
          de hospedarias desde então.
        </p>
        <Card
          alt="Pousadas shalom"
          src="/pousadas-shalom"
          img="https://lh3.googleusercontent.com/fife/AK0iWDyjgFm0db40Ul8nGFYlEEf8oXvRnHmMdD8JQ5pzJJFuEa8hRGQ-UOX3pbl_lYnavoxOUp5XmADlzREykVR_zVpZwAd214MozfG9P-NDrP2BLRNvSWzIcG2HBuPtYaafnFavabBp_y0X5r1hEvEa1rA4r4acMg0dtV_P5aiiQx-PZdZ8XkQe81SgipIuY_6-5DqOtyNUeXXEVIBB-fVYpt6e4Ne9-HuYddHcxrKerznIQM6vfu-T_XvS6_4UG-kVZ8PEaE0V_NF0tICgY0TCaokBiqBk010NQ2rR_kPPQpteW6yJI06sORBiJz2eK8WRkiZxXEzDb01bikUmkEgaXq0Cdy3iW7d0HAuk2mr7WotPz4I44D156GorCVtz24MO9yvo6Md0tvK7CnlSBrOfqcH2OLY7wX_a-hpOZPhim9jtTuxgBmFFG-Y3WkcaK3e4SsBsfpVkD_iz99wfxPsqxmZsxY7cj0XM7ETsIYmOt9MIQz87ch59PqEVwR-pLuAF8PcFSEpqRpY_f52XT5o0Gwk_XwS6M_tkJFSv_D79kROM9p1fQ0A7D1ObHz9AwA1UeXd929wBI0yLLOpIwxnW7srutakFwqH0SFUbPOAUnHoZkiPQmO7FeXafZEHp7EkJjurAi6E1MME59LlnSlgMgf63aLYS2rQHC7ClQk419h_sxDuPIw-r3z29YFRExjPNlaJVpDl7FLh2DsHPhW6qn8bMwxaebFIqKyWngHXgGoprbgI7Lrv86VNSbXCR0OXdLcx4LeF6i6Y3UPl7rx1PVeB533GtTamKNKRJQOrwgen_WnQZ5Ce8KtoQCNwBgYIqB1eOwBwNRs9h6wU0J4Rs48n-a4FI9uemC5H9O9Wkg5osbD7umgXqfjvUS1pxdkYZRiE4FFGD95fGJWW9jMztderIH5xV691KzVmyOFYGY590tThxUNkP2b9ENlwuShhuDnXvid87WPgB0G9iUrF0lAzDmcR2ydrL7zWo7Goy72uzCaDTGAdrmKF1B7GbNXCQKIt9UuOrbTyZnVUbiE0InOS-xxhGFAt5Usi9JKyeCgyBlLfZ1NGioPMPRk-bPy4v0mB8lIOuQTP4TVXD9aheOgz9A_GZL35y_QawfH6RHezoDIIdKhFQ9zaz_G_57-BVn3UjLIFbawFBIKeCxYdzu48xgLV8lDBbFGzaJ1173vqCQ-Og48oruGNF7csD2BdzzFvbNDVeab3iiC_WuidwojYKTJbnUX-ZrHuqW44PrYeVyfF5gi4uLyhSSd0dot9vhvALvJViDQOGBJKEZeDZr5SqmFIPMeBWGiqRGZrRgCYk98CotRcRTp8KXvgGYXhkZhM5AXfhXxZRMWh7ZSgsxQAz37p7GPM5oKTSXw5tcZ7PEqFZiFouh_xsrABnLepdP1YWVCewwA9Cqtt9GahuLnKiDXar-jyRAJJem3wpqVCgCPNns2NKn5cpARPeMch09rJLi3-moTGwA6FRe1IR6NcvbjlRNFBWYVXzXnemoU1fHuqI0Atk6jYP-H5xcV5OtcuuOTVdFZO1rZABWxi6=w1366-h619"
          nome="Pousadas Shalom"
          desc="Avenida Brasília 691 - Centro, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114512.03167196561!2d-53.63402!3d-26.245399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b545a87a039%3A0x70c5115e6a41d91e!2sHotel%20pousada%20Shalom!5e0!3m2!1spt-BR!2sus!4v1696703737973!5m2!1spt-BR!2su"
        />
        <h3>2 – Hotel LF</h3>
        <p>
          O Hotel LF também é outra boa opção, eles disponibilizam café da manha
          entre outros serviços ademais que possui mais de 400 comentários no
          google com uma avaliação de 4/5 pontos.
        </p>
        <Card
          alt="Hotel LF"
          src="/hotellf"
          img="https://lh3.googleusercontent.com/fife/AK0iWDwxYy7oI1Albjxel6abJx5IILq3T3kYa_zYdhNWux9aRlvggbpjX5Fn79MkPG0s8SLL0X57vk9BEQuLRh_jMc99lCF7_jTpSDnBJ6cg5wQZExY9SCiRc6gEhdwqxetSS7RJxj2M6ElrIcsXKhneSw60ODhSUHpLt_etCiNIEP5mWNutRC-4vRXfTdqVgnkMY40J_tBu0EdcCJ6uk_NbGcJxsascFsSe6Wbh-EY8PAIn9B5uLUT6QhG31WEt2Y2hGsywdKUsyCqX1FhSY_XFSW-lZ3D7j736XCB4Hjzo-vT-yDYg66jhuaiUdG_1iX1n-cnnrs2mxnFmsrdkYbJ0Gg2_Scz9FIwwmL9brwKU082siULjl5qtQBWXRFtkwJ29s7Jxd6ysi9Sjcq4TOYhw7zuCApkZrvnAdiXD3k4KcWNgD-shydoglH-PgwCA5KQ8YBcVFs6vQQXZIFEPp9odePASNY2n_cRA4KzDPtnqgboJ1GTE-bjqPauEsoM4tZ8A6kVS9v6hTHpOcn_jv-e3dVfExP3K0fMCtZJuZVVQ8rP8fOBuyvT65_syNe6E2VxFz2dbXYMqKWwsPlr0o0rOZPBKTkfPo3a2IuUuS3BNsins57B2oGCGPYKKr_41QchDi0TjKmrbA_f3PvhupoiNYZbKhTkXQHIasDI2x9XlvCawUC7gApL5F6zHpiuaoiYcNeoYhiw-QNB17k0rp3soHhwJzH8CVrv4IHzPMJK1xDT9I5KoX0eDbH73uiUY3liCqGOtYk76aSoAitDDyzySBExKS2OUCcbyx9gEPOYiTi1HC4EWEwT8lV-m75YZdMc5qf1a0R26PLXLzwqoJvH9r7euVUFFgo5jPsHdME-6_a0V6wuzG1HEGOya24hbvoDCFuJ9afP-lJVWVM7dcViQ1_GVmn1oZXRRv6AwGb3eoxxXxCdMQ0lYdTVpMwgLoCBEJYaQicrZ9tvsU59tOHDvPFysCN0ItgxmoAGu2qjh7U_CD3yjgJXKdEvcI12JqkEeP2y-mhII3wmco24Y9y8w7kf-3CveHZMp-oB23ZMHG45GHod_e6Bs5CWqVkrZn9nVDM3iCKLSBgNqx-lBFQugRnwAatfKImUvUuAzk-WyRY1dBjEsaVNVPtKqAqxz-wSF2O14WsAGDNH2mr7RTunwuj-3FKgpAvAW5a3Dut40E1hrEK8y2lp9UEPbJS6ZiquXnqJgB2sW8GAzo4yI99T1KbuG3lDa4UyB1JE8t1XggMXR3dJDQoZjvOraHr5CDEMRRTxEGAH2iJmcptapMDVWc3ZAbgl9lSvMt4ddzWiYo6Vk7uE1aeqKxDqozAxrrTVGCoNrhUEvgES60gtcTnh9BA4HwCs_wXtyBANqqlt8j5k_OhSrF-dQgZTJMqqB99Q-p-5nlq7uCxYtOreB3_cwNktg_HZUuRlnAN88BwHNYAkBE6RY3ApmUvpLJB-6IYzy-x5WmKGgwZnmjc6p5O2OETem4Bwqq5oTSiaaQRWfODbasm4FAExvMJ2sY0HmsNr7k-ADsP-ETC3z3PFC4Gbu=w1366-h619"
          nome="Hotel LF"
          desc="R. São Paulo, 411 - Centro, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114504.32669527014!2d-53.63402!3d-26.253217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a33bd0e1f09%3A0x47544b3811cc1312!2sHotel%20LF!5e0!3m2!1spt-BR!2sbr!4v1696703558456!5m2!1spt-BR!2sbr"
        />
        <h2>Lojas de conveniência</h2>
        <p>
          Bom agora que você já escolheu a sua hospedaria, é bom saber em que
          lugar comprar os seus produtos, neste caso escolhemos o “Liberty Duty
          Free” e o “MERCADO TRI ZEROHORA”
        </p>
        <h3>1 – Liberty Duty Free</h3>
        <p>
          O Liberty Duty Free, mais conhecido como “Shopping Duty Free”, como
          gostamos de dizer aqui na nossa cidade, é um mercado cuja localização
          de fácil aceso, ao lado da Prefeitura, para a qual vem crescendo e
          conquistando o mercado, principalmente por ter produtos importados sem
          cobrar impostos o que deixa os preços bem acessíveis.
        </p>
        <Card
          alt="Hotel LF"
          src="/hotellf"
          img="https://lh3.googleusercontent.com/fife/AK0iWDwxYy7oI1Albjxel6abJx5IILq3T3kYa_zYdhNWux9aRlvggbpjX5Fn79MkPG0s8SLL0X57vk9BEQuLRh_jMc99lCF7_jTpSDnBJ6cg5wQZExY9SCiRc6gEhdwqxetSS7RJxj2M6ElrIcsXKhneSw60ODhSUHpLt_etCiNIEP5mWNutRC-4vRXfTdqVgnkMY40J_tBu0EdcCJ6uk_NbGcJxsascFsSe6Wbh-EY8PAIn9B5uLUT6QhG31WEt2Y2hGsywdKUsyCqX1FhSY_XFSW-lZ3D7j736XCB4Hjzo-vT-yDYg66jhuaiUdG_1iX1n-cnnrs2mxnFmsrdkYbJ0Gg2_Scz9FIwwmL9brwKU082siULjl5qtQBWXRFtkwJ29s7Jxd6ysi9Sjcq4TOYhw7zuCApkZrvnAdiXD3k4KcWNgD-shydoglH-PgwCA5KQ8YBcVFs6vQQXZIFEPp9odePASNY2n_cRA4KzDPtnqgboJ1GTE-bjqPauEsoM4tZ8A6kVS9v6hTHpOcn_jv-e3dVfExP3K0fMCtZJuZVVQ8rP8fOBuyvT65_syNe6E2VxFz2dbXYMqKWwsPlr0o0rOZPBKTkfPo3a2IuUuS3BNsins57B2oGCGPYKKr_41QchDi0TjKmrbA_f3PvhupoiNYZbKhTkXQHIasDI2x9XlvCawUC7gApL5F6zHpiuaoiYcNeoYhiw-QNB17k0rp3soHhwJzH8CVrv4IHzPMJK1xDT9I5KoX0eDbH73uiUY3liCqGOtYk76aSoAitDDyzySBExKS2OUCcbyx9gEPOYiTi1HC4EWEwT8lV-m75YZdMc5qf1a0R26PLXLzwqoJvH9r7euVUFFgo5jPsHdME-6_a0V6wuzG1HEGOya24hbvoDCFuJ9afP-lJVWVM7dcViQ1_GVmn1oZXRRv6AwGb3eoxxXxCdMQ0lYdTVpMwgLoCBEJYaQicrZ9tvsU59tOHDvPFysCN0ItgxmoAGu2qjh7U_CD3yjgJXKdEvcI12JqkEeP2y-mhII3wmco24Y9y8w7kf-3CveHZMp-oB23ZMHG45GHod_e6Bs5CWqVkrZn9nVDM3iCKLSBgNqx-lBFQugRnwAatfKImUvUuAzk-WyRY1dBjEsaVNVPtKqAqxz-wSF2O14WsAGDNH2mr7RTunwuj-3FKgpAvAW5a3Dut40E1hrEK8y2lp9UEPbJS6ZiquXnqJgB2sW8GAzo4yI99T1KbuG3lDa4UyB1JE8t1XggMXR3dJDQoZjvOraHr5CDEMRRTxEGAH2iJmcptapMDVWc3ZAbgl9lSvMt4ddzWiYo6Vk7uE1aeqKxDqozAxrrTVGCoNrhUEvgES60gtcTnh9BA4HwCs_wXtyBANqqlt8j5k_OhSrF-dQgZTJMqqB99Q-p-5nlq7uCxYtOreB3_cwNktg_HZUuRlnAN88BwHNYAkBE6RY3ApmUvpLJB-6IYzy-x5WmKGgwZnmjc6p5O2OETem4Bwqq5oTSiaaQRWfODbasm4FAExvMJ2sY0HmsNr7k-ADsP-ETC3z3PFC4Gbu=w1366-h619"
          nome="Hotel LF"
          desc="R. São Paulo, 411 - Centro, Barracão - PR"
          maps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114504.32669527014!2d-53.63402!3d-26.253217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09a33bd0e1f09%3A0x47544b3811cc1312!2sHotel%20LF!5e0!3m2!1spt-BR!2sbr!4v1696703558456!5m2!1spt-BR!2sbr"
        />
      </div>
    </>
  );
}
