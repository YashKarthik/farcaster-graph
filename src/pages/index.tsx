import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Farcaster Graph</title>
        <meta name="description" content="A visual social graph of the Farcaster network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="
        flex flex-col min-h-screen
        items-center
        bg-gray-900 text-gray-300
      ">

        <div className="text-center mt-14">
          <h1 className="
            text-5xl font-extrabold tracking-tight
            items-end
          ">
            <span className="
              bg-clip-text text-transparent bg-gradient-to-r
              from-violet-500 to-indigo-600
            ">
              Farcaster Graph
            </span>
          </h1>
          <p>A visual social graph of the Farcaster network</p>
        </div>

        <article className="mt-7">
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="dwr" 
              className="
                m-3 p-2
                bg-inherit 
                border-solid border-2 border-gray-800  rounded-lg
              "
            />
            <button className="
              m-3 p-2 bg-inherit
              border-solid border-2 rounded-lg
              border-gray-800 hover:border-violet-500
              hover:text-violet-400
            ">
              Go
            </button>

          </form>
        </article>

      </main>
    </>
  );
};

export default Home;
