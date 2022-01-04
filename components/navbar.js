import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-white shadow-md shadow-slate-300 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="text-2xl uppercase font-semibold tracking-normal">
            <Link href="/">
              <a className="block bg-gradient-to-br text-transparent bg-clip-text from-red-600 via-pink-600 to-purple-600">
                {process.env.appName}
              </a>
            </Link>
          </div>

          <div>
            <Link href="/">
              <a
                className={
                  router.pathname == "/"
                    ? "text-red-500 font-semibold border-b-2 border-dashed border-red-600"
                    : "text-slate-700"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about"
                    ? "text-red-500 font-semibold border-b-2 border-dashed border-red-500 ml-5"
                    : "text-slate-700 ml-5"
                }
              >
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
