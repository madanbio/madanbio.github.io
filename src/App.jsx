import Header from "./components/Header";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="deebo_fn_main">
        <div className="right_bar_overlay"></div>
          <div className="deebo_fn_modalbox">
          <a className="extra_closer" href="#"></a>
          <div className="box_inner">
            <a className="closer" href="#"><span></span></a>
            <div className="modal_content">

              <div className="modal_in"></div>

              <div className="fn__nav" data-from="" data-index="">
                <a href="#" className="prev">
                  <span className="text">Prev</span>
                  <span className="arrow_wrapper"><span className="arrow"></span></span>
                </a>
                <a href="#" className="next">
                  <span className="text">Next</span>
                  <span className="arrow_wrapper"><span className="arrow"></span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right_bar_overlay"></div>
        <div className="deebo_fn_modalbox">
        <a className="extra_closer" href="#"></a>
        <div className="box_inner">
          <a className="closer" href="#"><span></span></a>
          <div className="modal_content">

            <div className="modal_in"> 
            </div>

            <div className="fn__nav" data-from="" data-index="">
              <a href="#" className="prev">
                <span className="text">Prev</span>
                <span className="arrow_wrapper"><span className="arrow"></span></span>
              </a>
              <a href="#" className="next">
                <span className="text">Next</span>
                <span className="arrow_wrapper"><span className="arrow"></span></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="deebo_fn__cv">
      <div className="deebo_fn__cv">
			<div className="cv__bg"></div>
			<div className="cv__bg2"></div>

      <div className="cv__header">
        <Header />
      </div>

      <div className="cv__content">
        <Hero />
        <Biography />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
    </div>
    </div>
  );
}
