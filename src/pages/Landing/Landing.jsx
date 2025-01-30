import "./Landing.css";
import Navbar from "../../MyComponents/Navbar/Navbar";
import Sections from "../../MyComponents/Sections/Sections";
import Footer from "../../MyComponents/Footer/Footer";
import Home from "../Home/Home";

const Landing = () => {
  return (
    <div className="Landing_main">
      <Navbar />
      <Sections />
      <Home />
      <Footer />
    </div>
  );
};

export default Landing;
