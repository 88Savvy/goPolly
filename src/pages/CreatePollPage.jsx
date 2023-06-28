import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CreatePollPage() {
  const [form, setForm] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <form>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={""}
            onChange={handleChange}
            className=""
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={""}
            onChange={handleChange}
            className=""
          ></textarea>
          <label>Topic</label>
          <select
            type="text"
            name=""
            value={""}
            onChange={handleChange}
            className=""
          ></select>
          <label>Statement</label>
          <input
            type="text"
            name=""
            value={""}
            onChange={handleChange}
            className=""
          ></input>
        </form>
      </section>
    </div>
  );
}
