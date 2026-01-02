export default function Hero() {
  return (
    <section id="hero-header" className="section_header">
					<div className="content">
						<div className="left_hero_header">
							<div className="circle">
								<div className="bg_img" data-bg-img="src/assets/img/header/photo.jpg"></div>
								<img src="src/assets/img/thumb/square.jpg" alt="" />
								<div className="circle_holder_blue"><span></span></div>
								<div className="circle_holder_orange"><span></span></div>
								<div className="lines">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
						<div className="right_hero_header">
							<div className="my_self">
								<h4>Hello! I'm a</h4>
								<h2>
									<span className="cd-headline clip">
										<span className="cd-words-wrapper">
										  <b className="is-visible">Designer</b>
										  <b>Developer</b>
										  <b>Freelancer</b>
										</span>
									</span>
								</h2>
							</div>
						</div>
					</div>
				</section>
  );
}
