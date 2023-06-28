import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <Herosection />
      </body>
      <Footer />
    </div>
  );
}
