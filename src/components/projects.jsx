import React, { Component } from 'react'



export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Personal Website</a></h3>
											<span>My personal site built with React and Bootstrap. You are here!</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Ian-McCleary/wire-validation-tool">PACCAR Wiring Validation Tool</a></h3>
											<span>My senior project built for PACCAR employees to more efficiently troubleshoot wiring diagrams. I was on a team of 4 students, and we built this application in python.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Ian-McCleary/paint-by-numbers">Paint by Numbers</a></h3>
											<span>In this personal project, I created a tool which allows users to upload any photo and generate a color by numbers sketch with a color pallet. This project was built using Processing 3, a language built on Java.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Ian-McCleary/ImageProcessing">Image Processing in C</a></h3>
											<span>After creating color by numbers, I explored edge detection using a laplacian filter in C. While the result was not ideal for paint by numbers, it was much more efficient than my own algorithm.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Ian-McCleary/logosnet-chatroom">Online Chatroom in C</a></h3>
											<span>In this project, I implemented socket.io into a C application for a chatroom application. This application follows the server client model where the clients must connect to the server to start chatting.</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
