import { Link } from "react-router-dom";

export default function ErrorPage() {
  const imgURL =
    "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

  return (
    <div>
      <div className="bg-white pt-24 pb-12 sm:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <article className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Oh oh, seems like the page you're trying to view doesn't exist!
            </article>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let's go back to the Home Page safe and sound. Just click below.
            </p>
            <Link to="/">
              <button
                type="button"
                className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Yes please!
              </button>
            </Link>
            <img src={imgURL} alt="404 error gif" className="page-img " />
          </div>
        </div>
      </div>
    </div>
  );
}
