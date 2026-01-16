import Header from "./Header";
import Hero from "./Hero";
import Biography from "./Biography";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="deebo_fn_main">
      <div className="right_bar_overlay"></div>

      {/* modal code stays here */}
      <div className="deebo_fn_modalbox">
        <a className="extra_closer" href="#"></a>
        <div className="box_inner">
          <a className="closer" href="#"><span></span></a>
          <div className="modal_content">
            <div className="modal_in"></div>
          </div>
        </div>
      </div>

      <div className="deebo_fn__cv">
        <div className="cv__bg"></div>
        <div className="cv__bg2"></div>

        <div className="cv__header">
          <Header />
        </div>

        <div className="cv__content">
          <Hero />
          {/* <Link to="success">ContactSuccess</Link> */}
          <Biography />
          <Education />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </div>

    </div>
  );
}
