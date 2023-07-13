import { Link } from "react-router-dom";

export default function PollCard({ poll }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {poll.question}
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {poll.user}.
      </p>
      <Link
        to={`/poll-page/${poll._id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Let's vote!
      </Link>
      <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
        Last updated at: {poll.updatedAt}
      </p>
    </div>
  );
}
