import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {

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

        <footer className="
          text-xs mt-14 mb-1
          flex flex-col
          self-center justify-self-end text-center
          lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 max-w-none
        ">
          <hr className="border border-solid border-gray-800 mb-5" />
          <section className="
            flex flex-row justify-center gap-2
            text-sm mb-5
          ">
            {[
              ["Twitter", "https://twitter.com/_yashkarthik"],
              ["Github", "https://github.com/yashkarthik/farcaster-graph"],
              ["Farcaster", "https://www.discove.xyz/@yashkarthik?q=%28from%3Ayashkarthik%29&username=yashkarthik"],
            ].map((linkObj) => (
              <div className="flex flex-row gap-2">
                <a href={linkObj[1]}
                  target="_blank"
                  className="
                  underline underline-offset-2 decoration-2 decoration-dotted
                  decoration-zinc-400 dark:decoration-zinc-500
                  hover:decoration-indigo-400
                ">{linkObj[0]}</a>
                <p className="text-gray-600">//</p>
              </div>
            ))}
          </section>
        </footer>
      </main>

    </>
  );
};

export default Home;
