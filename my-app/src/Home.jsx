import React from "react"
import ProjectsMenu from "./ProjectsMenu"
import PictureFrame from "./PictureFrame"

const myPicture = {
	float:"left",
	padding:"10px",
	clipPath:"circle()",
	shapeOutside:"circle()"
}


const sideBar = {
	margin:"5px"
}

const textBox = {
	borderTop: "solid 3px",
	borderBottom:"solid 3px",
	margin:'0px' 
}
const Home = () =>
	<div className="home">
		<article className="sideBar" style={sideBar}>
	
			<p>
				<img style={myPicture} height="90px" width="88px" src="./rndPict.png" alt="Carlos Castro"/>
				<span style={{fontWeight:"bold", fontSize:"1.2em"}}>Carlos Castro<br/> </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			   	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			  	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			 </p>

		</article>
		

		<div className="homeContainer">
			<div className="statement" style={{margin:"5px 0px 5px 40px", width:"70%"}}>
				<h1 style={{margin:"0px"}}>WEB DEVELOPER</h1>
				<p style={textBox}>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				</p>
			</div>

			<div className="homeContent">
				
				<PictureFrame/>
				
				<ProjectsMenu/>
			</div>
		
		</div>	

	</div>

export default Home	