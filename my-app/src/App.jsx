import React from "react"
import NavBar from "./NavBar"
import Home from "./Home"
import data from "./appData2"
import ProjectPage from "./ProjectPage"



class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {language:"english",
					  project:"",
					  menuClose: true
						}
		this.changeLanguage = this.changeLanguage.bind(this)
		this.renderHome = this.rederHome.bind(this)
		this.renderProjectsBtns = this.renderProjectsBtns.bind(this)
		this.callAProject = this.callAProject.bind(this)
}

	changeLanguage(key) {
		const language =(key === "0") ? "english" :
						(key === "1") ? "spanish" :
						"french"
		this.setState({language})
	}

	rederHome(){
		const project = ""
		this.setState({project})
	}

	callAProject(projectName){
		const project = projectName
		this.setState({project})
		this.setState({menuClose:true})	
	}

	renderProjectsBtns(){
		console.log("hey")
		const menuClose = (this.state.menuClose) ? this.setState({menuClose:false}): this.setState({menuClose:true})
	}

	render(){
		const {english, spanish, french}= data 
		const appData = (this.state.language === "french") ? french:
		                (this.state.language === "spanish")? spanish: english  

		const{changeLanguage, renderHome, renderProjectsBtns, callAProject} = this

		const projectData = appData.home.portfolio.filter(prt=> prt.id === this.state.project)
		return (
				<div>
					<NavBar navData={appData.navBar} change={changeLanguage} home={()=>renderHome}/>
					{(!this.state.project) ? 
						<Home homeData={appData.home}
						 displayPts={renderProjectsBtns}
						 menuStatus={this.state.menuClose}
						 viewProject={callAProject}
						 /> :
						<ProjectPage projectData={projectData}/>
					}

				</div>
			)
	}

}
export default App