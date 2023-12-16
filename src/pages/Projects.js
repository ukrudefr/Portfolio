import { Parallax } from "react-parallax"
import project from "../images/projects.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImg from "react-bootstrap/esm/CardImg";
import {Button} from "react-bootstrap"
import mygarten from "../images/MyGarten.png"
import charmeetbeaute from "../images/CharmeetBeaute.png"


let tribute = "https://codepen.io/ukrudefr/pen/BaZvMaG/image/small.png"
let survey = "https://codepen.io/ukrudefr/pen/NWgERWL/image/small.pmg"
let product = "https://codepen.io/ukrudefr/pen/XWgEjYw/image/small.png"
let tecdoc = "https://codepen.io/ukrudefr/pen/MWozjKN/image/small.png"

const projectDate = [
	{
		id: 1,
		image: survey,
		title: "Survey Form",
		description: "bla-bla-bla",
		link: 'https://codepen.io/ukrudefr/full/NWgERWL'
	},
	{
		id: 2,
		image: product,
		title: "Product Landing Page",
		description: "bla-bla-bla",
		link: 'https://codepen.io/ukrudefr/full/XWgEjYw'
	},
	{
		id: 3,
		image: tribute,
		title: "Tribute Page",
		description: "bla-bla-bla",
		link: 'https://codepen.io/ukrudefr/full/BaZvMaG'
	},
	{
		id: 4,
		image: tecdoc,
		title: "Technical Documentation",
		description: "bla-bla-bla",
		link: 'https://codepen.io/ukrudefr/full/MWozjKN'
	},
	{
		id: 5,
		image: mygarten,
		title: "Tatiana's Garten",
		description: "bla-bla-bla",
		link: 'https://tatianas-garden.netlify.app'
	},
	{
		id: 6,
		image: charmeetbeaute,
		title: "Charme et Beauté",
		description: "bla-bla-bla",
		link: 'https://charmeetbeaute68.fr'
	},
]


const Projects = () => {
	
	
	return (
		<Parallax className="image_2" bgImage={project} strength={100}>
			<div className="title_project">
					<h2>Here are some of my Projects</h2>
				</div>
			{projectDate && projectDate.length && (
			<Container>
      		<Row className="row">
					<Col className="col-12 col-xs-4 col-sm-12 col-md-12 col-lg-8 col-xl-5">
						<CardImg className="img" variant="top" src={projectDate[5].image}></CardImg>
						<Button className="btn" href={projectDate[5].link} target="blank">{projectDate[5].title}</Button>
					</Col>

					<Col className="col-12 col-xs-4 col-sm-12 col-md-12 col-lg-8 col-xl-5">
						<CardImg className="img" variant="top" src={projectDate[4].image}></CardImg>
						<Button className="btn" href={projectDate[4].link} target="blank">{projectDate[4].title}</Button>
					</Col>
					</Row>

					<Row className="row">
					<Col className="col-12 col-xs-4 col-sm-12 col-md-12 col-lg-8 col-xl-5">
						<CardImg className="img" variant="top" src={projectDate[2].image}></CardImg>
						<Button className="btn" href={projectDate[2].link} target="blank">{projectDate[2].title}</Button>
					</Col>

					<Col className="col-12 col-xs-4 col-sm-12 col-md-12 col-lg-8 col-xl-5">
						<CardImg className="img" variant="top" src={projectDate[1].image}></CardImg>
						<Button className="btn" href={projectDate[1].link} target="blank">{projectDate[1].title}</Button>
					</Col>
					</Row>

					<Row>
					<Col className="col-12 col-xs-4 col-sm-12 col-md-12 col-lg-8 col-xl-5">
						<CardImg className="img" variant="top" src={projectDate[3].image}></CardImg>
						<Button className="btn" href={projectDate[3].link} target="blank">{projectDate[3].title}</Button>
					</Col>

					<Col className="col-12 col-xs-4 col-sm-12 col-md-12 col-lg-8 col-xl-5">
						<CardImg className="img" variant="top" src={projectDate[0].image}></CardImg>
						<Button className="btn" href={projectDate[0].link} target="blank">{projectDate[0].title}</Button>
					</Col>
					</Row>
    		</Container>
			 )}

		</Parallax>
	)
}
export default Projects