import React from "react"

const tabStyle = {
	margin:"10px 4px 0px 4px",
	height:"1.5em",
	padding:"2px",
	border:"solid 1px",
	borderColor: "#fefefe", //was at 85
	borderRadius:"6px 6px 0px 0px",
	boxShadow:"-2px -3px 6px #ecd9c6",
	cursor:"pointer"
}


const linkStyle = {
	color: "#ecd9c6",
	textDecoration:"underline",
	cursor:"pointer"
}

const NavBar = ()=>
	<div className="navBar">
		<nav className="navLeft">
			<p style={tabStyle}>English</p> 
			<p style={tabStyle}>Spanish</p>
			<p style={tabStyle}>French</p>

		</nav>
		<nav className="navCenter">
			<p style={linkStyle}> {"\u2302"} Home</p> 
			<p style={linkStyle}> Projects</p>
			<p style={linkStyle}> Contact</p>
		</nav>
		<nav className="navRight">
			<div style={{marginLeft:"10px"}}>
				<a href="https://github.com/Karl74" target="blank">
				<img height="20px" width="20px" src="./githubico3.png"/>
				</a>
			</div>
			<div style={{marginLeft:"10px"}}>
				<a href="https://www.linkedin.com/in/carlos-castro-134724132/" target="blank">
				<img height="20px" width="20px" src="./linkinico.png"/>
				</a>
			</div>

			<div style={{marginLeft:"10px"}}>
				 <a href="mailto:carlos.castro@gmail.com?Subject=Contact20to" target="_top">
				 <img height="20px" width="20px" src="./mailicon.png"/>
				 </a>


			</div>	

		</nav>
	</div>

export default NavBar