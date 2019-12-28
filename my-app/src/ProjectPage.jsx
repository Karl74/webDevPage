import React from "react"

const S = {
	headerStyle: {
		background:"#006496",
		color:"#FEFEFE",
		margin:"0px"
	}, 
	
	sectionStyle: {
		display:"flex",
		flexDirection:"row",
		width:"100%",
		margin:"0px",
	},

	contentBox: {
		display:"flex",
		flexDirection:"column",
		width:"80%",
		alignItems:"center"
	},

	deskPicture: {
		float:"left",
		padding:"10px",
		width:"60%",
		margin:"0px 15px 10px 5px"
	},

	btnStyle: {
		width:"220px",
		height:"45px",
		background:"#006496",
		color:"#FEFEFE",
		fontSize:"1.7em",
		fontWeight:"bolder",
		borderRadius:"10px",
		border:"1px solid",
		cursor:"pointer",
	},

	phoneBox : {
		width:"20%",
		margin:"10px 20px 0px 35px"
	}
}

const ProjectPage = ({projectData})=>{
	
	const data = projectData[0]

	return(
	<div>
		<header style={S.headerStyle}>
			<h1 style={{margin:"0px 0px 0px 15px"}}>{data.title} </h1>
		</header>
		<section style={S.sectionStyle}>
			<div style={S.contentBox}>
		
				<p>
					<img src={data.pictures[0]} style={S.deskPicture} alt="desktop app"/>
					{data.description}
				</p>
			
				<button style={S.btnStyle}>{data.buttonText}</button>
			</div>

			<div style={S.phoneBox}>
				<img src={data.pictures[1]}  alt="mobilapp" width="100%"/>
			</div>

		</section>
			


			

		
		
	</div>
)}
export default ProjectPage	