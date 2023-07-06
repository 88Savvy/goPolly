import { Link } from "react-router-dom";

export default function SmallPollCard({ poll }) {
  return (
    <div class="card">
      <div class="card-details">
        <p class="text-title">{poll.title}</p>
        <p class="text-body">{poll.statement}</p>
      </div>
      <button class="card-button">
        <Link to="/poll-page/:id">Open Poll</Link>
      </button>
    </div>
  );
}
