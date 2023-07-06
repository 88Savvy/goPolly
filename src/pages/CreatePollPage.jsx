import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreatePollPage() {
  const navigate = useNavigate();
  const [poll, setPoll] = useState(null);

  const [form, setForm] = useState({
    user: "",
    topics: [],
    question: "",
    description: "",
    votes: {
      type: "",
      option1: {},
      option2: {},
    },
    expiresOn: "",
  });

  const [optionCount, setOptionCount] = useState(2);

  function handleAddOption() {
    setOptionCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    async function fetchPolls() {
      const response = await axios.get("https://webdev103.cyclic.app/GoPolly");
      const pollData = response.data[0];
      setPoll(pollData);
      setForm((prevForm) => ({
        ...prevForm,
        topics: pollData.topics,
      }));
    }
    fetchPolls();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "votes.type") {
      let options = {
        option1: { option: "" },
        option2: { option: "" },
      };
      if (value === "Multiple Choice") {
        options = {
          ...options,
          option3: { option: "" },
        };
      }
      setForm((prevForm) => ({
        ...prevForm,
        votes: {
          ...prevForm.votes,
          type: [value],
          ...options,
        },
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://webdev103.cyclic.app/GoPolly",
        form
      );
      setForm({
        user: "",
        topics: [],
        question: "",
        description: "",
        votes: {
          type: "",
          option1: {},
          option2: {},
        },
        expiresOn: "",
      });
      toast.success("Poll submitted!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  if (!poll) {
    return <p>Loading poll data...</p>;
  }

  return (
    <div>
      <Navbar />
      <section>
        <div className="bg-white pt-24 pb-12 sm:pt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <article className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to create your poll? Just follow the instructions and
                fill-out the form below.
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
      </section>
      <section>
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="border m-4 p-5 rounded w-full shadow-md"
          >
            <div className="flex flex-col mb-4">
              <label className="mb-1">Created by</label>
              <input
                type="text"
                name="user"
                value={form.user}
                onChange={handleChange}
                placeholder="Please insert your username ..."
                className="p-2 border focus:outline-none resize-none"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1">Topic</label>
              {poll.topics && poll.topics.length > 0 ? (
                <select
                  name="topics"
                  value={form.topics}
                  onChange={handleChange}
                  className="p-2 border focus:outline-none resize-none"
                >
                  {poll.topics.map((topic, index) => (
                    <option key={index} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              ) : (
                <p>No topics available</p>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1">Question</label>
              <input
                type="text"
                name="question"
                value={form.question}
                onChange={handleChange}
                placeholder="What would you like to poll?"
                className="p-2 border focus:outline-none resize-none"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1">Description</label>
              <textarea
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Give your voters some context ..."
                className="border w-full p-2 focus:outline-none resize-none"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1">Voting type</label>
              <select
                name="votes.type"
                value={form.votes.type}
                onChange={handleChange}
                className="p-2 border focus:outline-none resize-none"
              >
                <option value="Binary">Binary</option>
                <option value="Multiple Choice">Multiple Choice</option>
              </select>
            </div>
            {form.votes.type.length > 0 && form.votes.type[0] === "Binary" && (
              <div className="flex flex-col mb-4">
                <label className="mb-1">Option 1</label>
                <input
                  type="text"
                  name="option1"
                  value={form.votes.option1.option || ""}
                  onChange={handleChange}
                  className="p-2 border focus:outline-none resize-none"
                />
                <label className="mb-1">Option 2</label>
                <input
                  type="text"
                  name="option2"
                  value={form.votes.option2.option || ""}
                  onChange={handleChange}
                  className="p-2 border focus:outline-none resize-none"
                />
              </div>
            )}

            {form.votes.type[0] === "Multiple Choice" && (
              <div>
                {Array.from({ length: optionCount }, (_, index) => {
                  const optionKey = `option${index + 1}`;
                  return (
                    <div className="flex flex-col mb-4" key={index}>
                      <label className="mb-1">{`Option ${index + 1}`}</label>
                      <input
                        type="text"
                        name={`votes.${optionKey}.option`}
                        value={form.votes[optionKey]?.option || ""}
                        onChange={handleChange}
                        className="p-2 border-none focus:outline-none resize-none"
                      />
                    </div>
                  );
                })}
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Add Option
                </button>
              </div>
            )}

            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
