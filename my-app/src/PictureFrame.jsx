import React from "react"

const frameStyle = {
	margin:"50px 0px 10px 70px",
	position:"relative",
	width:"35%",
	height:"90%",
}


const laptopCont = {
	display:"flex",
	flexDirection:"column",
	justifyContent:"center",
	width:"273px"
}
const screen = {
	width:"240px",
	height:"153px",
	background:"#030303",
	border:"4px solid #030303",
	borderRadius:"5px",
	margin:"auto"

}

const keyboard = {
	textAlign:"center",
	width:"273px",
	height:"10px",
	background:"#030303",
	border:".5px solid #eee",
	borderRadius:"3px"	
}


const lock = {
	width:"40px",
	height:"3px",
	background:"white",
	margin:"auto"

}

const phoneCont= {
	position:"relative",
	top:'-95px',
	right:'-230px',
	width:"60px",
	height:"115px"
}

const phone = {
	display:"flex",
	flexDirection:"column",
	alignItems:"center",
	background:"#030303",
	borderRadius:"9px",
	width: "100%",
	height:"100%"
}

const bar = {
	marginTop:"4px",
	marginBottom:"4px",
	width:"18px",
	height:"3px",
	borderRadius:"4px",
	background:"#fff"
}

const circle = {
	marginTop:"4px",
	width:"8px",
	height:"8px",
	borderRadius:"100%",
	background:"#fff"
}

const PictureFrame = () =>
	<div className="PictureFrame"style={frameStyle}>
		<div className="laptopCont" style={laptopCont}>
			<div style={screen}>
				<img src="./churchpagefit.png" style={{width:"228px", margin:"2px"}}alt="computer screen"/>
			</div>
			
			<div style={keyboard}>
				<div className="lock" style={lock}></div>
			</div>					
		</div>

		<div className="phoneCont" style={phoneCont}>
			<div className="phone" style={phone}>
				<div className="bar" style={bar}></div>
				<img width="50px" src="./churchInPhone.png" alt="phone screen"/>
				<div style={circle}></div>

			</div>
		</div>
		
		
	</div>

export default PictureFrame	