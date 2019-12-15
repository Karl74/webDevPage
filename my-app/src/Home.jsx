import React from "react"
import ProjectsMenu from "./ProjectsMenu"
import PictureFrame from "./PictureFrame"

const Home = () =>
	<div className="home">
		<article className="sideBar">
		<img height="80px" width="80px" alt="my picture"/>
		<h2>Carlos Castro</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

		</article>
		<div className="homeContainer">
			<div className="statement">Web</div>
			<div className="homeContent">
				<PictureFrame/>
				<ProjectsMenu/>
			</div>
		
		</div>	
	</div>

export default Home	