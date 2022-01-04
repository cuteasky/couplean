import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    "https://viko-api.herokuapp.com/api/random/couple?apikey=rxking"
  );
  const data = await res.json();

  return {
    props: {
      ppcp: data,
    },
  };
}

export default function Home({ ppcp }) {
  const fc = ppcp;
  const fcwe = fc.result.ppcwe;
  const fcwo = fc.result.ppcwo;

  return (
    <Layout title="Couplean &#10084;">
      <div className="text-center font-semibold text-3xl mb-6">
        Get any{" "}
        <span className="bg-gradient-to-br text-transparent bg-clip-text from-red-600 via-pink-600 to-purple-600">
          Random Couple.
        </span>
        <p className="text-lg font-normal text-slate-600">
          Random Couple adalah sebuah website untuk mendapatkan foto Couple
          secara Random.
        </p>
      </div>
      <div className="flex justify-center pb-8">
        <div className="md:w-8/12 container bg-white rounded-2xl drop-shadow-md p-5">
          <div className="md:grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <Image
                className="rounded-lg ring-2 ring-pink-500"
                src={fcwo}
                width={1000}
                height={1000}
                alt="left"
              ></Image>
            </div>
            <div className="col-span-1">
              <Image
                className="rounded-lg ring-2 ring-pink-500"
                src={fcwe}
                width={1000}
                height={1000}
                alt="left"
              ></Image>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <Link href="/">
              <a className="bg-pink-500 w-fit font-semibold text-lg py-2 px-5 rounded-full text-white cursor-pointer">
                Refresh
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        Developed with &#10084; by <strong>Rizki Maulana</strong>
      </div>
    </Layout>
  );
}
