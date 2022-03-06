import Head from "next/head";
import Link from "next/link";

export default () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const action = e.target.action;
    await fetch(action, {
      method: "POST",
      body: data,
    });
    window.location.href = "/thank-you";
  };

  return (
    <>
      <Head>
        <title>Shelter in Austria | Help people from Ukraine</title>
      </Head>
      <div className="max-w-lg px-2 py-16 mx-auto text-center sm:px-0">
        <div className="mb-8">
          <h2 className="text-base leading-loose uppercase">
            Help people from Ukraine
          </h2>
          <h1 className="my-4 text-5xl font-light uppercase">
            <Link href="/">Shelter in Austria</Link>
          </h1>
          <h2 className="text-base leading-loose uppercase">
            People who can provide shelters or any other help in Austria
          </h2>
          <h2 className="text-base leading-loose uppercase">Please contact!</h2>
        </div>
        <div className="flex flex-col">
          <div className="mb-12">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/spreadsheets/d/1PU9cJz1DFg_cGtADUfE8Nlmajo2x9oSQVcx9POqvczk"
              className="px-8 py-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl"
            >
              List of offers
            </a>
          </div>
          <form
            className="flex flex-col items-center justify-center gap-4"
            method="POST"
            onSubmit={submitForm}
            action="https://script.google.com/macros/s/AKfycbzbNzbcwg9pv5ZlcbC_X9pHqOm4injMuczQ51wVG9UNG6Ut474OrQMyru-gJLHWeMPC/exec"
          >
            <input
              style={{ minWidth: "220px" }}
              className="px-4 py-1 transition-colors border-2 rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
              type="text"
              placeholder="Name*"
              name="Name"
              required
            ></input>
            <input
              style={{ minWidth: "220px" }}
              className="px-4 py-1 transition-colors border-2 rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
              type="email"
              placeholder="E-Mail*"
              name="E-Mail"
              required
            ></input>
            <input
              style={{ minWidth: "220px" }}
              className="px-4 py-1 transition-colors border-2 rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
              type="text"
              placeholder="State/Bundesland*"
              name="State"
              required
            ></input>
            <input
              style={{ minWidth: "220px" }}
              className="px-4 py-1 transition-colors border-2 rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
              type="text"
              placeholder="Town/Ort*"
              name="Town"
              required
            ></input>
            <textarea
              style={{ minWidth: "220px" }}
              className="px-4 py-1 transition-colors border-2 resize-none rounded-3xl focus:outline-none border-peach-200 focus:border-peach-300"
              placeholder="Possible assistance offered"
              name="Possible Assistance"
              required
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="px-8 py-1 mt-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col gap-4 my-8 text-sm">
            <p>
              *Mit der Teilnahme willige ich ein, dass meine E-Mail sowie Bezirk
              und angebotene Hilfeleistung auf dieser Seite veröffentlicht wird.
              (Art. 6 Abs. 1 lit. a DSGVO)
            </p>
            <p>
              *By participating, I agree that my email, district and assistance
              offered will be published on this page. (Art. 6 Abs. 1 lit. a
              DSGVO)
            </p>
          </div>
          <div className="mb-8">
            <h2 className="font-bold uppercase">
              Resources for ukrainian refugees and supporters
            </h2>
            <a
              className="underline underline-offset-1"
              href="https://docs.google.com/document/d/1OlZIz-72A2xI2uUOFE07L5ObQGP4JDcXZ2vdIs2P9BQ/"
            >
              https://docs.google.com/document/d/1OlZIz-72A2xI2uUOFE07L5ObQGP4JDcXZ2vdIs2P9BQ/
            </a>
          </div>
          <div className="flex flex-col gap-4 mx-auto">
            <div className="cursor-pointer">
              <Link href="/about">
                <div className="px-8 py-2 uppercase transition-colors bg-peach-400 hover:bg-peach-500 rounded-3xl">
                  About
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
      </div>
    </>
  );
};
