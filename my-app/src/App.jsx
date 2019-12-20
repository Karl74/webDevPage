import React from "react"
import NavBar from "./NavBar"
import Home from "./Home"
import data from "./appData"



class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {language:"french"}
		this.changeLanguage = this.changeLanguage.bind(this)

}

	changeLanguage(key) {
		console.log(key)
		console.log(typeof key)
		const language =(key === "0") ? "english" :
						(key === "1") ? "spanish" :
						"french"

		this.setState({language})
	}

	render(){
		const {english, spanish, french}= data 
		const appData = (this.state.language === "french") ? french:
		                (this.state.language === "spanish")? spanish:
		                english  

		const{changeLanguage} = this

		return (
				<div>
					<NavBar navData={appData.navBar} change={changeLanguage}/>
					<Home homeData={appData.home}/>
				</div>
			)
	}

}
export default App