import { Parallax } from "react-parallax"
import start from "../images/main.jpg"
import Typewriter from "typewriter-effect"
import Contacts from '../components/Contacts'


export default function Start() {
	return (
		<Parallax className="image" bgImage={start} strength={700}>
		<Contacts/>
			<div className="typewriter">
			<Typewriter
			onInit={(typewriter) => {
				typewriter
				.typeString("My name is Tatiana Schmitt")
				.pauseFor(2000)
				.deleteAll()
				.typeString("Welcome to my Portfolio")
				.start();
			}}
			/>
			</div>
			</Parallax>
	)
}