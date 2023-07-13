import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreatePollPage() {
  const navigate = useNavigate();
  const topics = [
    "Arts",
    "Business",
    "Education",
    "Entertainment",
    "Food",
    "Health",
    "Lifestyle",
    "Personal",
    "Politics",
    "Science",
    "Social",
    "Sports",
    "Technology",
    "Travel",
    "Other",
  ];

  const [form, setForm] = useState({
    user: "",
    topics: [],
    question: "",
    description: "",
    votes: {
      option1: {},
      option2: {},
    },
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          option1: {},
          option2: {},
        },
      });
    } catch (error) {
      console.log(error);
    }
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
        <div className="flex flex-col items-center mx-auto max-w-5xl py-24 sm:px-6 sm:py-12 lg:px-8 shadow-2xl sm:rounded-3xl">
          <h2 className= "mx-auto max-w-7xl px-6 lg:px-8 text-lg leading-8 text-gray-900 lg:text-center">
            Please fill out the form below and click on "submit" when you're
            ready to submit your poll. For now, only binary voting polls are
            available, but new voting styles will be incorporated soon!
          </h2>
          <form
            onSubmit={handleSubmit}
            className="border m-4 p-5 rounded w-full shadow-md bg-gray-900"
          >
            <div className="flex flex-col mb-4">
              <label className="mb-1 mb-2 text-gray-100">Created by</label>
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
              <label className="mb-2 text-gray-100">Topic</label>
              {topics.length > 0 ? (
                <select
                  name="topics"
                  value={form.topics}
                  onChange={handleChange}
                  className="p-2 border focus:outline-none resize-none"
                >
                  {topics.map((topic, index) => (
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
              <label className="mb-1 mb-2 text-gray-100">Question</label>
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
              <label className="mb-1 mb-2 text-gray-100">Description</label>
              <textarea
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Give your voters some context ..."
                className="border w-full p-2 focus:outline-none resize-vertical"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1 mb-2 text-gray-100">Option 1</label>
              <input
                type="text"
                name="votes.option1.option"
                value={form.votes.option1.option}
                onChange={handleChange}
                placeholder="Enter Option 1"
                className="p-2 border focus:outline-none resize-none"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1 mb-2 text-gray-100">Option 2</label>
              <input
                type="text"
                name="votes.option2.option"
                value={form.votes.option2.option}
                onChange={handleChange}
                placeholder="Enter Option 2"
                className="p-2 border focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="mt-40">
        <Footer />
      </section>
    </div>
  );
}
