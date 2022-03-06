import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <>
      <Head>
        <title>Thank you | Shelter in Austria</title>
      </Head>
      <div className="max-w-lg px-2 mx-auto my-16 text-center sm:px-0">
        <div className="mb-8">
          <h2 className="text-base leading-loose uppercase">
            Help people from Ukraine
          </h2>
          <a href="/">
            <h1 className="my-4 text-5xl font-light uppercase">
              Shelter in Austria
            </h1>
          </a>
          <h2 className="my-8 text-xl leading-loose uppercase">
            Thank you very much for participating!
          </h2>
          <h3 className="px-4 text-sm leading-loose">
            <strong>
              Please note that this website is only for connecting people. The
              owner of the website is not reliable for the correctness of any
              information displayed and will not actively contact you regarding
              your assistance.
            </strong>
            <br />
            <br />
            It is upon the people that need your help to contact you using your
            email so please be sure to check your mails more frequently than
            every few days.
            <br />
            <br />
            If you need help, have any questions or want your data removed,
            please contact{" "}
            <a
              className="underline underline-offset-1"
              href="mailto:julian@pufler.dev?subject='Shelter In Austria'"
            >
              me
            </a>{" "}
            with your request.
          </h3>
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
};
