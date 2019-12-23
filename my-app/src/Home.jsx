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
const Home = ({homeData}) =>
	<div className="home">
		<article className="sideBar" style={sideBar}>
	
			<p style={{textAlign:"justify", padding:"25px"}}>
				<img style={myPicture} height="90px" width="88px" src="./rndPict.png" alt="Carlos Castro"/>
				<span style={{fontWeight:"bold", fontSize:"1.2em"}}>Carlos Castro<br/> 
				</span>{homeData.article}
			 </p>

		</article>
		

		<div className="homeContainer">
			<div className="statement" style={{margin:"5px 0px 5px 40px", width:"70%"}}>
				<h1 style={{margin:"0px"}}>{homeData.title}</h1>
				<p style={textBox}>{homeData.statement}</p>
			</div>

			<div className="homeContent">
				
				<PictureFrame/>
				
				<ProjectsMenu labelbtn={homeData.buttonText} projects={homeData.portfolio}/>
			</div>
		
		</div>	

	</div>

export default Home	