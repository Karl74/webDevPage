import React from "react"
import Project from "./Project"

const projectsContainer = {
	display:"flex",
	flexDirection:"column",
	flexWrap:"wrap",
	justifyContent:"flex-start",
	margin:"50px 0px 10px 0px",
	position:"relative",
	width:"65%",
	height:"90%"
}

const btnStyle = {
	width:"150px",
	height:"45px",
	background:"#006496",
	color:"#FEFEFE",
	fontSize:"1.7em",
	fontWeight:"bolder",
	borderRadius:"10px",
	border:"1px solid"
}

const ProjectsMenu = () =>
	<div className="projectsContainer" style={projectsContainer}>
		<button className="projectsBtn" style={btnStyle}>Portfolio > </button>
		<Project/>
	</div>

export default ProjectsMenu
	