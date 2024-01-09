import React, { useState } from "react"
import { Parallax } from "react-parallax"
import about from "../images/about.jpg"
import photo from "../images/profilfoto.jpg"
import certificate from '../images ce/certificate.png'
import { usePDF } from 'react-to-pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Certificates from "../components/Certificates"


export default function About () {
  const { toPDF, targetRef } = usePDF({filename: 'CV.pdf'});
	const [show, setShow] = useState(false);

	return (
		<Parallax className="image_3" bgImage={about} strength={700}>
    <div ref={targetRef}>
              <div className="title_about">
                <h1>Über mich</h1>
                </div>   
                 <div className="container mb-5">
                 <div>
        <button className="pdf" onClick={() => toPDF()}>Als PDF Herunterladen</button>
        </div>
        <div className="row cv">
            <div className="col-lg-3 col-md-4 cv-left">
                <div className="row">
                    <div className="photo-block col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <img src={photo} alt="myphoto" className="img-thumbnail rounded-circle mt-3 mb-3"/>
                        <ul className="contacts-block text-center">
												<li>+33(0)6 51 39 82 22</li>
                            <li><a href="mailto:example@email.el">ukrudefr@gmail.com</a></li>
														<li>Algolsheim, Frankreich</li>
                        </ul>     
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6">
                        <hr className="bg-white d-sm-none d-md-block"/>
                        <section className="mt-3">
                            <h2>Hard Skills</h2>
                            <ul>
                                <li>Front-end: HTML, CSS, SASS, JavaScript</li>
                                <li>Frameworks: Bootstrap, React</li>
                                <li>GitHub</li>
                                <li>Responsive Design</li>
                                <li>Gulp</li>
										            <li>Back-end: PHP, MySQL</li>
                                <li>UX and UI Design</li>
										            <li>Photoshop</li>
                              </ul>
                            <h2>Soft Skills</h2>
                              <ul>
                                <li>Problemlösung</li>
                                <li>Belastbarkeit</li>
                                <li>Entscheidungskompetenz</li>
                                <li>Zielorientierung</li>
                                <li>Umgang mit digitaler Technologie</li>
                                </ul>
                                <h2>Sprachen</h2>
                                <ul>
                                <li>Deutsch (verhandlungssicher)</li>
                                <li>Französisch (fließend)</li>
                                <li>Englisch (konversationssicher)</li>
                                <li>Ukrainisch, Russisch (Muttersprachen)</li>
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
                        <h2 className="job-title text-center lines color-grey mb-4">JUNIOR FRONT-END WEB DEVELOPER</h2>
                    </header>
                    <h3 className="mb-3 profile color-grey">Berufliche Zusammenfassung:</h3>
                    <p className="mb-5">Als leidenschaftliche Frontend-Entwicklerin verbinde ich fundierte Kenntnisse in HTML, 
                    CSS und JavaScript mit einem kreativen Auge für ansprechendes Design. 
                    Meine Erfahrung reicht von der Gestaltung responsiver Benutzeroberflächen bis zur Implementierung interaktiver Funktionen. 
                    Mit einem tiefen Verständnis für UX/UI-Prinzipien strebe ich danach, nutzerfreundliche und ästhetisch ansprechende 
                    Webanwendungen zu schaffen. Mein Interesse an neuen Technologien und Trends in der Frontend-Entwicklung 
                    treibt mich dazu an, ständig dazuzulernen und mich weiterzuentwickeln. Ich bin stets auf der Suche nach innovativen Lösungen, 
                    um die Benutzererfahrung zu verbessern und die Leistung von Webanwendungen zu optimieren.<br/>
										<br/>
                    Ich stehe am Anfang meiner beruflichen Laufbahn als Front-End Entwicklerin . Meine Zielsetzung ist es, 
                    qualitativ hochwertige und benutzerzentrierte Softwarelösungen zu entwickeln, die nicht nur den Anforderungen entsprechen, 
                    sondern auch die Erwartungen der Benutzer übertreffen.</p>
                    <h3 className="mb-3 profile color-grey">Ausbildung:</h3>
                    <ul>
							<li>01.12.2017 - 30.12.2019, Fernlehrgang "Geprüfte Wirtschaftsfachwirtin" bei SGD Darmstadt
							</li>
              <li>23.10.2020 IHK Prüfung "Geprüfte Wirtschaftsfachwirtin"</li>
							<li>2021 Responsive Web Design bei freeCodeCamp.org</li>
							<li>2022 - 2023 Online Weiterbildung als Frontend-Entwicklerin bei ItGid Education Platform</li>
							<li>2023 - 2024 Online-Kurse "TypeScript"</li>
					  </ul>
            <h3 className="mb-3 expirience color-grey">Projekten:</h3>
                    <section className="mb-5">
                     <ul>
                      <li><a href="https://charmeetbeaute68.fr">charmeetbeaute68.fr</a></li>
                      <li><a href="https://tatianas-garden.netlify.app">tatianas-garden.netlify.app</a></li>
                     </ul>
                    </section>
            <h3 className="mb-3 expirience color-grey">Berufliche Situation:</h3>
                    <section className="mb-5">
                        <h4 className="company-name mb-2">HELLA-GUTMANN-SOLUTION GMBH - BREISACH DEUTSCHLAND</h4>
                        <h5>Call-Center-Agent</h5>
												<button className="certificate" onClick={() => setShow(!show)}><h5>Zertifikate</h5>
													{show === false ? <img src={certificate} 
												width={'40px'}
												height={'40px'}
												alt="certificate"
												/> : <FontAwesomeIcon icon={faXmark} size="1x"/>}
												</button>
												{show && <Certificates/>}
									</section>
                </article>
        </div>
    </div>	
</div>  
</div>
		</Parallax>
	)
}