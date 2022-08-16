import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"in the year"}</title>
        <meta
          name="description"
          content="Get information about events, births, and deaths in any year
            according to Wikipedia."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 gap-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-pink-600">
          {"in the {year}"}
        </h1>
        <div className="flex flex-row p-4 bg-slate-100 rounded-md gap-4 text-sm md:text-lg">
          <h2 className="">
            <b>GET</b>
          </h2>
          <h2 className="font-medium ">
            https://www.in-the-year.vercel.app/api/
            <b className="text-pink-600">{"{year}"}</b>/
          </h2>
        </div>
        <a
          className="flex flex-row gap-2 items-center font-medium absolute bottom-16 hover:text-pink-600"
          href={"https://github.com/charliertm/in-the-year"}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width={18}
            height={18}
            alt={"github icon"}
          />
          Source Code
        </a>
      </main>
    </>
  );
};

export default Home;
