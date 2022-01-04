import Layout from "../components/layout";

export default function About() {
  return (
    <Layout title="About">
      <div className="pb-10 flex justify-center">
        <div className="container bg-white rounded-3xl md:w-7/12 shadow-md p-5">
          <div className="text-center font-semibold border-b-2">
            About this Web
          </div>
          <div className="mt-2">
            <span className="font-semibold">Author</span> : Rizki Maulana <br />
            <span className="font-semibold">Developed at</span> : January 2,
            2022 <br />
            <span className="font-semibold">Descriptions</span> : Buat para
            stalker, sini Bosqu..!!
          </div>
        </div>
      </div>
    </Layout>
  );
}
