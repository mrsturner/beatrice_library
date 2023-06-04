import React from "react";
import Navbar from "../../NavBar/NavBar";
import "./About.css";

const About = () => {
	return (
		<>
			<div className="container">
				{/*<!-- top navigation -->*/}
				<Navbar />
				{/*<!-- About The Library--> */}
		
				<section className="about">
					<div className="about">
						<img src="/images/BPL_logo.png" alt="Beatrice Public Library Logo" />
						<div className="about_home_box">
							<h1 id="BPL">The Beatrice Public Library</h1>
							<div className="about_info">
								<h4>Mission:</h4>
								<p>The Beatrice Public Library is a nurturing environment that strives to provide unfettered access to necessary resources for self-improvement, cultural awareness and pure enjoyment for patrons. We encourage life-long learning for all.</p>

								<h4>Vision:</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, velit! Placeat illum aliquid, perspiciatis consectetur error sed distinctio adipisci. Minima eos pariatur aut non enim assumenda ratione vero, ut tempora.</p>
							</div>
							<button className="search">Search Catalog</button>
						</div>
					</div>
				</section>
			</div>
			<footer>
				<a href="">Follow Us</a>
				<div className="footer_img">
					<img src="/images/fb_icon.png" alt="facebook icons" />
					<img src="/images/IG_icon.png" alt="instagram icons" />
					<img src="/images/Tw_icon.png" alt="twitter icons" />
					<img src="/images/tb_icon.png" alt="tumblr badge icons" />
					<img src="/images/YT_icon.png" alt="youtube icons" />
				</div>
			</footer>
		</>
	);
};

export default About;