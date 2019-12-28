import React from "react"
import ProjectsMenu from "./ProjectsMenu"
import PictureFrame from "./PictureFrame"

const S = {
	 myPicture: {
		float:"left",
		padding:"10px",
		clipPath:"circle()",
		shapeOutside:"circle()"
	},

	textBox: {
		borderTop: "solid 3px",
		borderBottom:"solid 3px",
	},

	statement:{
		margin:"0px",
		paddingLeft:"35px",
		width:"70%",
	}
}
///////////////////////////////////////////////////////////////////////////////
const Home = ({homeData, displayPts, menuStatus, viewProject}) =>

	<div className="home">
		<article className="sideBar">
	
			<p style={{textAlign:"justify", padding:" 0px 25px"}}>
				<img style={S.myPicture} height="75x" width="74.5px" src="./rndPict.png" alt="Carlos Castro"/>
				<span style={{fontWeight:"bold", fontSize:"1.2em"}}>Carlos Castro<br/> 
				</span>{homeData.article}
			 </p>

		</article>
		

		<div className="homeContainer">
			<div className="statement" style={S.statement}>
				<h1 style={{margin:"0px"}}>{homeData.title}</h1>
				<p style={S.textBox}>{homeData.statement}</p>
			</div>

			<div className="homeContent">
				
				<PictureFrame/>
				
				<ProjectsMenu labelbtn={homeData.buttonText}
				 			  portfolio={homeData.portfolio}
				 			  menuStatus={menuStatus}
				 			  onProjects={()=>displayPts}
				 			  viewProject={viewProject}
				 			  />
			</div>
		
		</div>	

	</div>

export default Home	