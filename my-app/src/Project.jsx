import React from "react"

const proyectBtn ={
	width:"150px",
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

const Project = ({name})=>
	<div>
		<button style={proyectBtn}>{name}</button>
	</div>

export default Project	