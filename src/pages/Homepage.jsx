import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Herosection />
      </main>
      <Footer />
    </div>
  );
}
