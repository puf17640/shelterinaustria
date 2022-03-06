import Head from "next/head";
import Link from "next/link";

export default () => (
  <>
    <Head>
      <title>About | Shelter in Austria</title>
    </Head>
    <div className="max-w-lg px-2 mx-auto my-16 text-center sm:px-0">
      <div className="mb-8">
        <h2 className="text-base leading-loose uppercase">
          Help people in Ukraine
        </h2>
        <h1 className="my-4 text-5xl font-light uppercase">
          <Link href="/">Shelter in Austria</Link>
        </h1>
      </div>
      <div className="flex flex-col mb-8">
        <p className="font-bold uppercase">You live in Austria?</p>
        <p className="mb-2 font-bold uppercase">
          You can provide a room or assistance?
        </p>
        <p className="mb-4">
          Then add your possible assistance to the list using the contact form.
          We just need your <strong>name, e-mail, state and district</strong>.
        </p>
        <h2 className="text-base font-bold leading-loose uppercase">
          Important:
        </h2>
        <p className="mb-8">
          Let us know if your room is taken or you cannot provide a certain
          assistance anymore, so we can remove you from the list.
        </p>
        <p className="mb-2 font-bold uppercase">You need help?</p>
        <p className="">
          Open the list of offers on the home page and contact the people that
          offer assistance that fit your needs. Make sure to always be polite
          with people. Good luck!
        </p>
      </div>
      <div className="inline-flex flex-col gap-4">
        <div className="cursor-pointer">
          <Link href="/">
            <div className="px-8 py-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl">
              Home
            </div>
          </Link>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://shelterinberlin.info"
          className="px-8 py-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl"
        >
          Shelter In Berlin
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://shelterinbavaria.site"
          className="px-8 py-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl"
        >
          Shelter In Bavaria
        </a>
      </div>
    </div>
  </>
);
