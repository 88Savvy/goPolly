import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmallPollCard from "../components/SmallPollCard";

export default function OpenPollsPage() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    async function fetchPolls() {
      try {
        const response = await axios.get("");
        setPolls(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPolls();
  }, []);

  return (
    <div>
      <Navbar />
      <section style={{ height: "600px" }}>
        <div className="bg-white pt-24 pb-12 sm:pt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Rock your Vote!
              </h2>
              <article className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Here are our open polls, let's get to it
              </article>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                While voting plays a crucial role in collective decisions,
                getting votes on personal matters allows us to incorporate
                diverse perspectives, opinions, and interests in our individual
                decision-making process.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Click on a Poll Card to see details and Vote!{" "}
            <Link to="/" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true"></span>Learn
              more
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      <section>
        {polls.map((poll) => {
          <SmallPollCard key={poll._id} poll={poll} />;
        })}
      </section>
      <Footer />
    </div>
  );
}
