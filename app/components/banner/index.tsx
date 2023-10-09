import Image from "next/image";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Prefeitura de Barracão
            </h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
              Secretaria de industria comercio e turismo <br />
              Whats: (49)36442024
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
          </div>
        </section>
      </div>
    </>
  );
}
