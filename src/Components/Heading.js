import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import ToggleButton from './ToggleButton'
class Heading extends Component {
	state = {
		popMenuOpen: false,
		popMenu: 'hide'
	}
	_toggleMenu = () => {
		this.setState(prevState => {
			if (this.state.popMenuOpen === false) {
				return {
					popMenuOpen: !prevState.popMenuOpen,
					popMenu: 'show'
				}
			}
			if (this.state.popMenuOpen) {
				return {
					popMenuOpen: !prevState.popMenuOpen,
					popMenu: 'hide'
				}
			}
		})
	}

	render() {
		if (this.state.popMenuOpen) {
			// popMenu = 'show'
		}
		if (this.state.popMenuOpen === false) {
			// popMenu = 'hide'
		}
		return (
			<Router>
				<>
					<header>
						<h1>Malibu Landscaping & Lawn Service</h1>
						<h2>Charlotte, NC</h2>
						<ToggleButton click={this._toggleMenu} />
						<nav className="full-nav">
							<span>
								<Link to="/">Home</Link>
							</span>
							<span>
								<Link to="/gallery">Photo Gallery</Link>
							</span>
							<span>
								<Link to="/about">About Us</Link>
							</span>
							<span>
								<Link to="/services">Services</Link>
							</span>
						</nav>
					</header>
					<nav className={this.state.popMenu}>
						<ul>
							<li>
								<Link to="/" onClick={this._toggleMenu}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/gallery" onClick={this._toggleMenu}>
									Photo Gallery
								</Link>
							</li>
							<li>
								<Link to="/about" onClick={this._toggleMenu}>
									About Us
								</Link>
							</li>
							<li>
								<Link to="/services" onClick={this._toggleMenu}>
									Services
								</Link>
							</li>
						</ul>
					</nav>
				</>
			</Router>
		)
	}
}

export default Heading
