import React from "react"

const proyectBtn ={
	width:"165px",
	height:"45px",
	margin:"5px",
	background:"#fefefe",
	color:"#006496",
	fontSize:"1.7em",
	fontWeight:"bolder",
	borderRadius:"10px",
	border:"2px solid #006496",
	cursor:"pointer"

}

const Project = ({name, viewProject, id})=>{

const call = (e)=>{
	e.preventDefault()
	viewProject(e.target.id)
}

	
	return (
		<div>
			<button style={proyectBtn} id={id} onClick={call}>{name}</button>
	</div>
	)
}	

export default Project	