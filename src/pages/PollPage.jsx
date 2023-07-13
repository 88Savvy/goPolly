import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function PollPage() {
  const params = useParams();

  const [poll, setPoll] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function fetchPoll() {
      try {
        const response = await axios.get(
          `https://webdev103.cyclic.app/GoPolly/${params.id}`
        );
        setPoll(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPoll();
  }, [params.id]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitVote = async () => {
    if (!selectedOption) {
      return;
    }

    setIsLoading(true);

    try {
      const updatedPoll = {
        ...poll,
        votes: {
          ...poll.votes,
          [selectedOption]: {
            ...poll.votes[selectedOption],
            voteCount: poll.votes[selectedOption].voteCount + 1,
          },
        },
      };

      await axios.put(
        `https://webdev103.cyclic.app/GoPolly/${params.id}`,
        updatedPoll
      );

      setPoll(updatedPoll);
      setSelectedOption("");
      setHasVoted(true);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const handleDeletePoll = async () => {
    setIsDeleting(true);

    try {
      await axios.delete(`https://webdev103.cyclic.app/GoPolly/${params.id}`);
      navigate("/open-polls");
    } catch (error) {
      console.log(error);
    }

    setIsDeleting(false);
  };

  return (
    <div>
      <Navbar />
      <section style={{ height: "250px" }}>
        <div className="bg-white pt-24 pb-12 sm:pt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <article className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to {poll.user}'s Poll!
              </article>
              <div className="mt-6 text-lg leading-8 text-gray-600">
                <div className="relative rounded-full px-3 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <p>created on: {poll.createdAt}</p>
                  <p>
                    Topic: <b>{poll.topics}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white pt-24 pb-12 sm:pt-12">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {poll.question}
            </h2>
            <p className="mt-6 text-1xl">{poll.description}</p>
            <div className="mt-12">
              {hasVoted ? (
                <div>
                  {Object.entries(poll.votes || {}).map(
                    ([optionKey, option]) => (
                      <div key={optionKey} className="flex items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-lg">{option.option}</span>
                          <span className="text-gray-600">
                            Votes: {poll.votes[optionKey].voteCount}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                  <p className="mt-4 font-semibold text-gray-700">
                    Thank you for voting!
                  </p>
                </div>
              ) : (
                <form>
                  {Object.entries(poll.votes || {}).map(
                    ([optionKey, option]) => (
                      <div key={optionKey} className="flex items-center mb-4">
                        <input
                          type="radio"
                          id={optionKey}
                          name="pollOptions"
                          value={optionKey}
                          checked={selectedOption === optionKey}
                          onChange={handleOptionChange}
                          className="mr-2"
                        />
                        <label htmlFor={optionKey} className="text-lg">
                          {option.option}
                        </label>
                      </div>
                    )
                  )}
                  <button
                    type="button"
                    className="px-4 py-2 mt-4 font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleSubmitVote}
                    disabled={!selectedOption || isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Vote"}
                  </button>
                </form>
              )}
              {!hasVoted && (
                    <button
                      type="button"
                      className="px-4 py-2 mt-2 font-semibold text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                      onClick={handleDeletePoll}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete Poll"}
                    </button>
                  )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
