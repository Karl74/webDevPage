import React from "react"
import Project from "./Project"

const S = { 
	projectsContainer: {
		display:"flex",
		padding:"50px 5px 0px 20px",
		width:"65%",
		height:"85%"
	},

	buttonBoxStyle: {
		position:"relative",
		width:"165px",
		height:"100%"
	},

	btnStyle: {
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
	  top:"150px"
	},

	showCaseStyle: {
		display:"flex",
		flexDirection:"column",
		flexWrap:"wrap",
		justifyContent:"flex-start",
		margin:"0px 0px 100px 0px",
		width:"420px"
	},
}

const ProjectsMenu = ({labelbtn, portfolio, onProjects, menuStatus, viewProject}) =>


	<div className="projectsContainer" style={S.projectsContainer}>
		<div className="buttonBox" style={S.buttonBoxStyle}>
			<button className="projectsBtn" style={S.btnStyle} onClick={onProjects()}>{labelbtn}</button>
		</div>
		
		<div className="showCase" style={S.showCaseStyle}>
			{(!menuStatus) ? portfolio.map((project, i)=>
						<Project key={i} 
								 id={project.id}
								 name={project.title}
								 viewProject={viewProject}/>) : 
						<div> </div>}
		</div>	
	</div>


export default ProjectsMenu
	