import { useState } from "react";

const projects = [
  { title: "Social Justice", type: "web" },
  { title: "PM-AJAY", type: "web" },
  { title: "Graphic Work", type: "graphic" }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  return (
    
				<section id="cv_portfolio">
					<div className="section_title">
						<h3>Recent Project</h3>
					</div> 
					<div className="fn_cs_portfolio"> 
						<div className="portfolio_filter">
							<ul>
								<li><a href="#" className="current" data-filter="*">All</a></li>
								<li><a href="#" data-filter=".web">Web</a></li>
								<li><a href="#" data-filter=".graphic">Graphic</a></li>
							</ul>
						</div> 
						<div className="portfolio_list">
							<ul className="gallery_zoom grid">
								<li className="web grid-item">
									<div className="inner">
										<div className="entry">
											<a className="" href="https://socialjustice.gov.in/" target="_blank">
												<img src="assets/img/thumb/42-56.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project1.jpg"></div>
												<div className="mobile_title">
													<h6>Ministry of Social Justice & Empowerment</h6>
													<span>Government of India</span>
												</div>
											</a>
										</div>
									</div>
								</li>
								<li className="web grid-item">
									<div className="inner">
										<div className="entry">
											<a className="" href="https://pmajay.dosje.gov.in/" target="_blank">
												<img src="assets/img/thumb/42-34.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project2.jpg"></div>
												<div className="mobile_title">
													<h6>Pradhan Mantri Anusuchit Jaati Abhyuday Yojna</h6>
													<span>PM-AJAY</span>
												</div>
											</a>
										</div>
									</div>
								</li>
								<li className="web grid-item">
									<div className="inner">
										<div className="entry">
											<a className="" href="https://pmagy.gov.in/" target="_blank">
												<img src="assets/img/thumb/42-34.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project3.jpg"></div>
												<div className="mobile_title">
													<h6>Pradhan Mantri Adarsh Gram Yojna</h6>
													<span>PMAGY</span>
												</div>
											</a>
										</div>
									</div>
								</li>
								<li className="web grid-item">
									<div className="inner">
										<div className="entry">
											<a className="" href="https://cloud.goskribe.com/" target="_blank">
												<img src="assets/img/thumb/42-56.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project4.jpg"></div>
												<div className="mobile_title">
													<h6>Janga Media Pvt. Ltd.</h6>
													<span>Goskribe</span>
												</div>
											</a>
										</div>
									</div>
								</li>
								<li className="web grid-item">
									<div className="inner">
										<div className="entry">
											<a className="" href="https://www.tuitionindia.in/" target="_blank">
												<img src="assets/img/thumb/42-56.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project5.jpg"></div>
												<div className="mobile_title">
													<h6>Gyanet Education Pvt. Ltd.</h6>
													<span>Tuition India</span>
												</div>
											</a>
										</div>
									</div>
								</li>
								<li className="graphic grid-item">
									<div className="inner">
										<div className="entry">
											<a className="zoom" href="src/assets/img/portfolio/project6.jpg">
												<img src="assets/img/thumb/42-34.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project6.jpg"></div>
											</a>
										</div>
									</div>
								</li>
								<li className="graphic grid-item">
									<div className="inner">
										<div className="entry">
											<a className="soundcloude_link mfp-iframe audio" href="src/assets/img/portfolio/project7.jpg">
												<img src="assets/img/thumb/42-34.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project7.jpg"></div>
											</a>
										</div>
									</div>
								</li>
								<li className="graphic grid-item">
									<div className="inner">
										<div className="entry">
											<a className="zoom" href="src/assets/img/portfolio/project8.jpg">
												<img src="assets/img/thumb/42-34.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/project8.jpg"></div>
											</a>
										</div>
									</div>
								</li>
								<li className="graphic grid-item">
									<div className="inner">
										<div className="entry">
											<a className="popup-youtube" href="https://www.youtube.com/watch?v=jZJd0FYKk3Y">
												<img src="assets/img/thumb/42-34.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/video1.jpg"></div>
											</a>
										</div>
									</div>
								</li>
								<li className="graphic grid-item">
									<div className="inner">
										<div className="entry">
											<a className="popup-youtube" href="https://www.youtube.com/watch?v=OJ3VPbqRpxw">
												<img src="assets/img/thumb/42-34.jpg" alt="" />
												<div className="main" data-bg-img="src/assets/img/portfolio/video2.jpg"></div>
											</a>
										</div>
									</div>
								</li>
							</ul>
						</div> 						
					</div> 					
				</section>
				
  );
}
