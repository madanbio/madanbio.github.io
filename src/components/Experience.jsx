const experience = [
  {
    org: "Prasar Bharati Secretariat",
    role: "Sr. UI/UX Designer & Developer",
    period: "Feb 2025 – Present"
  },
  {
    org: "Ministry of Social Justice",
    role: "Sr. UI/UX Designer & Developer",
    period: "Mar 2022 – Jan 2025"
  }
];

export default function Experience() {
  return (    
				<section id="cv_experience">
					<div className="section_title">
						<h3>Experience</h3>
					</div>
					<div className="fn_cs_boxed_list">
						<ul>
							<li>
								<div className="item">
									<div className="item_top">
										<h5>Prasar Bharati Secretariat</h5>
										<span>( Feb 2025 — Today )</span>
									</div>
									<h3>Sr. UI/UX Designer & Developer</h3>
									<p>It manages all the projects under the Prasar Bharati Secretariat. <a href="https://prasarbharati.gov.in">(www.prasarbharati.gov.in)</a></p>
								</div>
							</li>
							<li>
								<div className="item">
									<div className="item_top">
										<h5>Ministry Of Social Justice & Empowerment</h5>
										<span>( Mar 2022 — Jan 2025 )</span>
									</div>
									<h3>Sr. UI/UX Designer & Developer</h3>
									<p>It manages all the projects under the Ministry of Social Justice and Empowerment. <a href="https://socialjustice.gov.in">(www.socialjustice.gov.in)</a></p>
								</div>
							</li>
							<li>
								<div className="item">
									<div className="item_top">
										<h5>Janga Media Pvt. Ltd.</h5>
										<span>( Nov 2018 – Feb 2022 )</span>
									</div>
									<h3>UI/UX Designer & Developer</h3>
									<p>This is US-based media company that provides journalists. <a href="https://cloud.goskribe.com">(www.goskribe.com)</a></p>
								</div>
							</li>
							<li>
								<div className="item">
									<div className="item_top">
										<h5>Gyanet Education Pvt. Ltd.</h5>
										<span>( Sep 2017 - Oct 2018 )</span>
									</div>
									<h3>UI/UX Designer & Developer</h3>
									<p>This is Indian based e-learning company that provides tutors from Delhi / NCR for Nur to Graduation students. <a href="https://www.tuitionindia.in">(www.tuitionindia.in)</a></p>
								</div>
							</li>
							<li>
								<div className="item">
									<div className="item_top">
										<h5>Misostudy India Education Pvt. Ltd.</h5>
										<span>( Sep 2016 - Aug 2017 )</span>
									</div>
									<h3>UI/UX Designer & Developer</h3>
									<p>This is South Korea-based e-learning company that provides video-based lectures. <a href="https://www.misostudy.com">(www.misostudy.com)</a></p>
								</div>
							</li>
						</ul>
					</div>
				</section>
  );
}
