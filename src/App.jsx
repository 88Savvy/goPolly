import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OpenPollsPage from "./pages/OpenPollsPage";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/open-polls" element={<OpenPollsPage />} />
        <Route path="/create-a-poll" element={<CreatePollPage />} />
        <Route path="/poll-page/:id" element={<PollPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
