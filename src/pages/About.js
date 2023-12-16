import React from "react"
import { Parallax } from "react-parallax"
import about from "../images/about.jpg"
import photo from "../images/profilfoto.jpg"
import Function from "../images ce/Functions.jpg"
import HTML from "../images ce/HTML.jpg"
import Array from "../images ce/JS-Array.jpg"
import OOP from "../images ce/JS-OOP.jpg"
import JS from "../images ce/JS.jpg"
import Node from "../images ce/Node-JS.jpg"
import PHP from "../images ce/PHP.jpg"
import ReactJS from "../images ce/ReactJS.jpg"
import SGD from "../images ce/sgd.jpg"
import IHK from "../images ce/ihk.jpg"


export default function About () {
	return (
		<Parallax className="image_3" bgImage={about} strength={700}>
              <div className="title_about">
                <h1>What am I ?</h1>
                </div>   
                 <div className="container mb-5">
        <div className="row cv">
            <div className="col-lg-3 col-md-4 cv-left">
                <div className="row">
                    <div className="photo-block col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <img src={photo} alt="myphoto" className="img-thumbnail rounded-circle mt-3 mb-3"/>
                        <ul className="contacts-block text-center">
                            <li><a href="mailto:example@email.el">ukrudefr@gmail.com</a></li>
                        </ul>     
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6">
                        <hr className="bg-white d-sm-none d-md-block"/>
                        <section className="mt-3">
                            <h2>Skills</h2>
                            <ul>
                                <li>Front-end: HTML, CSS, SASS, JavaScript</li>
                                <li>Program Frameworks: Bootstrap, React</li>
                                <li>GitHub</li>
                                <li>Responsive Design</li>
                                <li>Gulp</li>
										  <li>Back-end: PHP, MySQL</li>
                                <li>UX and UI Design</li>
										  <li>Photoshop</li>
                                <li>Problem Solving</li>
                                <li>Attention to Detail</li>
                                <li>Process Improvement</li>
                                <li>Strong Communication Skills</li>
                                <li>Creativity</li>
                                <li>Economics</li>
                                <li>Business and Corporate management</li>
										  <li>Leadership and cooperation</li>
                                <li>Fluent in German, French, Russian, Ukrainian</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-8 cv-right">
                <article>
                    <header>
                        <h1 className="text-center cv-header mt-4 mb-4">Tatiana <span className="color-grey">Schmitt</span>
                        </h1>
                        <h2 className="job-title text-center lines color-grey mb-4">FRONT-END WEB DEVELOPER</h2>
                    </header>
                    <h3 className="mb-3 profile color-grey">Profile</h3>
                    <p className="mb-5">As a beginner in front-end development, I have mastered many of the tools needed for website development. I started with simple HTML and then learned CSS, JavaScript, ReactJs and PHP step by step.</p>
                    <h3 className="mb-3 expirience color-grey">Experience</h3>
                    <section className="mb-5">
                        <h4 className="company-name mb-2">HELLA-GUTMANN-SOLUTION GMBH - BREISACH GERMANY, <i>NY 2023 - Present</i></h4>
                        <h5>Call-Center-Agent</h5>
                        <p>As an agent in the call center, I create the tickets in German and French. Fast writing, analytical thinking and strong communication in multiple languages are my strengths.</p>
                    </section>
                    <h3 className="mb-3 profile color-grey">Education</h3>
                    <ul>
							<li>2017-2019, Distance learning programme approved by the National Agency for Distance Education SGD Darmstadt Germany for IHK examination Bachelor Professional (CCI) of Business
							</li>
							<li>Courses Front-end: HTML for JS dev, JavaScript, Array, OOP JavaScript, React.js, Function JS</li>
							<li>Courses Back-end: PHP, Node.js</li>
					  </ul>
                </article>
            
<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={HTML}>
      <img src={HTML} alt="HTML"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={JS}>
      <img src={JS} alt="JS"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={Function}>
      <img src={Function} alt="Function"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={Array}>
      <img src={Array} alt="Array"/>
    </a>
  </div>
</div>
<div className="clearfix"></div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={OOP}>
      <img src={OOP} alt="OOP"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={ReactJS}>
      <img src={ReactJS} alt="ReactJS"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={PHP}>
      <img src={PHP} alt="PHP"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={Node}>
      <img src={Node} alt="Node"/>
    </a>
  </div>
</div>

<div className="clearfix"></div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={IHK}>
      <img src={IHK} alt="Function"/>
    </a>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" rel="noopener noreferrer" href={SGD}>
      <img src={SGD} alt="Array"/>
    </a>
  </div>
</div>
<div className="clearfix"></div>
        </div>
    </div>	
</div>  
		</Parallax>
	)
}