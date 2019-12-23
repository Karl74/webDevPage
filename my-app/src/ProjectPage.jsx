import React from "react"

const headerStyle={
	background:"#006496",
	color:"#FEFEFE",
	margin:"0px"
} 

const sectionStyle= {
	display:"flex",
	flexDirection:"row",
	width:"100%",
	margin:"0px",
}

const contentBox = {
	display:"flex",
	flexDirection:"column",
	width:"80%",
	alignItems:"center"
}

	
const deskPicture = {
	float:"left",
	padding:"10px",
	width:"60%",
	margin:"0px 15px 10px 5px"
}

const btnStyle ={
	width:"220px",
	height:"45px",
	background:"#006496",
	color:"#FEFEFE",
	fontSize:"1.7em",
	fontWeight:"bolder",
	borderRadius:"10px",
	border:"1px solid",
	cursor:"pointer",
}

const phoneBox = {
	width:"20%",
	margin:"10px 20px 0px 35px"
}

const ProjectPage = ({projectData})=>{
	console.log(projectData)
	const data = projectData[0]

	return(
	<div>
		<header style={headerStyle}>
			<h1 style={{margin:"0px 0px 0px 15px"}}>{data.title} </h1>
		</header>
		<section style={sectionStyle}>
			<div style={contentBox}>
		
				<p>

						<img src={data.pictures[0]} style={deskPicture} alt="desktop app"/>
						{data.description}
				</p>
			
				<button style={btnStyle}>{data.buttonText}</button>
			</div>

			<div style={phoneBox}>
				<img src={data.pictures[1]}  alt="mobilapp" width="100%"/>
			</div>

		</section>
			


			

		
		
	</div>
)}
export default ProjectPage	