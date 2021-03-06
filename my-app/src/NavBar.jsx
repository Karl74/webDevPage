import React from "react"

const S = {

tabStyle: {
	margin:"0px 4px 0px 6px",
	height:"1.5em",
	padding:"2px",
	border:"solid 1px",
	borderColor: "#fefefe", //was at 85
	borderRadius:"6px 6px 0px 0px",
	boxShadow:"-2px -3px 6px #bbbbcf",
	cursor:"pointer"
	},

linkStyle: {
	color: "#bbbbcf",
	textDecoration:"underline",
	cursor:"pointer"
	}
}


const NavBar = ({navData, change, home})=>{
const {languages} = navData
const {links} = navData

const getIt = (e)=>{
	e.preventDefault()
	change(e.target.dataset.label)
}


return (
	<div className="navBar">
		<nav className="languages">
			{languages.map((language, i)=>
				<p key={i} style={S.tabStyle} data-label={i} onClick={getIt}>{language}</p>)}

		</nav>
		<nav className="navCenter">
			{links.map((link,i)=>
				<p key={i} style={S.linkStyle}
					onClick={(link === "Home" || link === "Inicio" || link ==="Accueil")? home(): f=>f}

				>{link}</p> )
			}

			
		</nav>


		<nav className="navRight">
			<div style={{marginLeft:"10px"}}>
				<a href="https://github.com/Karl74" target="blank">
				<img height="20px" width="20px" src="./githubico3.png" alt="github"/>
				</a>
			</div>
			<div style={{marginLeft:"10px"}}>
				<a href="https://www.linkedin.com/in/carlos-castro-134724132/" target="blank">
				<img height="20px" width="20px" src="./linkinico.png" alt="linkedin"/>
				</a>
			</div>

			<div style={{marginLeft:"10px"}}>
				 <a href="mailto:carlos.castro@gmail.com?Subject=Contact20to" target="_top">
				 <img height="20px" width="20px" src="./mailicon.png" alt="contact"/>
				 </a>


			</div>	

		</nav>
	</div>
)
}
export default NavBar