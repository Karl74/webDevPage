import React from "react"

const S = {
	frameStyle: {
		padding:"50px 0px 0px 35px",
		position:"relative",
		width:"35%",
		height:"85%",
	},

	laptopCont: {
		display:"flex",
		flexDirection:"column",
		justifyContent:"center",
		width:"273px"
	},

	screen: {
		width:"240px",
		height:"153px",
		background:"#030303",
		border:"4px solid #030303",
		borderRadius:"5px",
		margin:"auto"
	},

	keyboard: {
		textAlign:"center",
		width:"273px",
		height:"10px",
		background:"#030303",
		border:".5px solid #eee",
		borderRadius:"3px"	
	},

	lock: {
		width:"40px",
		height:"3px",
		background:"white",
		margin:"auto"
	},

	phoneCont: {
		position:"relative",
		top:'-95px',
		right:'-230px',
		width:"60px",
		height:"115px"
	},

	phone: {
		display:"flex",
		flexDirection:"column",
		alignItems:"center",
		background:"#030303",
		borderRadius:"9px",
		width: "100%",
		height:"100%"
	},

	bar: {
		marginTop:"4px",
		marginBottom:"4px",
		width:"18px",
		height:"3px",
		borderRadius:"4px",
		background:"#fff"
	},

	circle: {
		marginTop:"4px",
		width:"8px",
		height:"8px",
		borderRadius:"100%",
		background:"#fff"
	},
}

const PictureFrame = () =>
	<div className="PictureFrame"style={S.frameStyle}>
		<div className="laptopCont" style={S.laptopCont}>
			<div style={S.screen}>
				<img src="./churchpagefit.png" style={{width:"228px", margin:"2px"}}alt="computer screen"/>
			</div>
			
			<div style={S.keyboard}>
				<div className="lock" style={S.lock}></div>
			</div>					
		</div>

		<div className="phoneCont" style={S.phoneCont}>
			<div className="phone" style={S.phone}>
				<div className="bar" style={S.bar}></div>
				<img width="50px" src="./churchInPhone.png" alt="phone screen"/>
				<div style={S.circle}></div>

			</div>
		</div>
	</div>

export default PictureFrame	