import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OpenPollsPage from "./pages/OpenPollsPage";
import CreatePollPage from "./pages/CreatePollPage";
import Footer from "./components/Footer";
import PollPage from "./pages/PollPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/open-polls" element={<OpenPollsPage />} />
        <Route path="/create-a-poll" element={<CreatePollPage />} />
        <Route path="/poll-page/:id" element={<PollPage />} />
      </Routes>
    </div>
  );
}

export default App;
