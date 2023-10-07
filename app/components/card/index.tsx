import Link from "next/link";
import Image from "next/image";
import Maps from "../maps";
export default function Card(props) {
  return (
    <>
      <Link
        style={{ marginTop: 10, marginBottom: 10 }}
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-100 md:w-45 md:rounded-none md:rounded-l-lg"
          src={props.src}
          alt={props.alt}
          width={0}
          height={0}
          sizes="100%"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.nome}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
            <Maps url={props.maps} />
          </p>
        </div>
      </Link>
    </>
  );
}
