import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
class Heading extends Component {
	state = {
		popMenu: 'hide'
	}
	_toggleMenu = () => {
		this.setState(() => {
			if (this.state.popMenu === 'hide') {
				return {
					popMenu: 'show'
				}
			} else {
				return {
					popMenu: 'hide'
				}
			}
		})
	}

	render() {
		return (
			<Router>
				<>
					<header>
						<div className="title">
							<div className="mobile-nav">
								<button className="toggle-button" onClick={this._toggleMenu}>
									<i className="fas fa-bars" />
								</button>
							</div>
							<div class="title-full">
								<h1>Malibu</h1> <h3>Landscaping & Lawn Service</h3>
							</div>
						</div>
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
						<ul className="contact-list">
							Contact Us
							<li>
								<a href="tel://170491063">
									<i className="fas fa-phone-square" />
								</a>
							</li>
							<li>
								<a href="tel://9045358034">
									<i className="fas fa-mobile" />
								</a>
							</li>
							<li>
								<a href="mailto:elpilotcpa@msn.com">
									<i className="fas fa-envelope" />
								</a>
							</li>
						</ul>
					</nav>
				</>
			</Router>
		)
	}
}

export default Heading
