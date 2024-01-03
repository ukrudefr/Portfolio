import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Function from "../images ce/Functions.jpg"
import HTML from "../images ce/HTML.jpg"
import Array from "../images ce/JS-Array.jpg"
import OOP from "../images ce/JS-OOP.jpg"
import JS from "../images ce/JS.jpg"
import Node from "../images ce/Node-JS.jpg"
import PHP from "../images ce/PHP.jpg"
import ReactJS from "../images ce/ReactJS.jpg"
import { Row, Card, Col, Container } from "react-bootstrap"


const Gallery = () => {
	let images = [
		{
			id: 1,
			imgSrc: HTML,
		},
		{
			id: 2,
			imgSrc: JS,
		},
		{
			id: 3,
			imgSrc: Function,
		},
		{
			id: 4,
			imgSrc: OOP,
		},
		{
			id: 5,
			imgSrc: Array,
		},
		{
			id: 6,
			imgSrc: ReactJS,
		},
		{
			id: 7,
			imgSrc: PHP,
		},
		{
			id: 8,
			imgSrc: Node,
		}
	]

const [model, setModel] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState('');
	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setModel(true);
	}

	return (
		<>
	<Container fluid className="wrapper">
			<div className={model ? "model open" : "model"}>
			<img src={tempImgSrc} alt="" />
			<FontAwesomeIcon icon={faXmark} size="2x"  onClick={() => setModel(false)}/> 
		</div>
			<Row className="row-cols-xl-3 justify-content-md-center">
				{images.map((item, index)=> {
					return (
						<Col className="col">
						<Card className="card" xs={12} sm={4} md={4} 
						style={{width: '25rem', border: '2px solid #a69587'}} 
						key={index} onClick={() => getImg(item.imgSrc)}>
							<img src={item.imgSrc} alt=""/>
							</Card>
							</Col>
					)
				})}
			</Row>
			</Container>
		</>
	)
}

export default Gallery