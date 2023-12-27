import React from "react";
import { Container } from "react-bootstrap"; 
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

export default function Certificates () {

	return(
		<Container>
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
</Container>
	)
}