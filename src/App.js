import React, { Component } from 'react'
import Head from './Components/Head'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Services from './Components/Services'

class App extends Component {
	render() {
		return (
			<>
				<Head />
				<main>
					<Home />
					<Gallery />
					<About />
					<Services />
				</main>
			</>
		)
	}
}

export default App
