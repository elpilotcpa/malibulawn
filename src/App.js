import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Heading from './Components/Heading'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Services from './Components/Services'
import Foot from './Components/Foot'
class App extends Component {
	render() {
		return (
			<>
				<Heading />
				<Router>
					<main className="content">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/gallery" component={Gallery} />
							<Route path="/about" component={About} />
							<Route path="/services" component={Services} />
						</Switch>
					</main>
				</Router>
				<Foot />
			</>
		)
	}
}

export default App
