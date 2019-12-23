import React from "react"
import Project from "./Project"

const projectsContainer = {
	display:"flex",
	margin:"50px 0px 5px 0px",
	width:"65%",
	height:"90%"

}

const buttonBoxStyle = {
	position:"relative",
	width:"165px"
}

const btnStyle = {
	width:"165px",
	height:"45px",
	background:"#006496",
	color:"#FEFEFE",
	fontSize:"1.7em",
	fontWeight:"bolder",
	borderRadius:"10px",
	border:"1px solid",
	cursor:"pointer",
	position:"absolute",
	left:"0px",
	bottom:"120px"
}

const showCaseStyle = {
	display:"flex",
	flexDirection:"column",
	flexWrap:"wrap",
	justifyContent:"flex-start",
	margin:"0px 0px 100px 0px"
}

const ProjectsMenu = ({labelbtn, projects}) =>
	<div className="projectsContainer" style={projectsContainer}>
		<div className="buttonBox" style={buttonBoxStyle}>
			<button className="projectsBtn" style={btnStyle}>{labelbtn}</button>
		</div>
		
		<div className="showCase" style={showCaseStyle}>
			{projects.map((project, i)=>
				<Project key={i} name={project}/>
				)}
		</div>	
	</div>
export default ProjectsMenu
	