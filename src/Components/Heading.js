import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
class Heading extends Component {
	state = {
		popMenu: 'hidden'
	}
	_toggleMenu = () => {
		this.setState(() => {
			if (this.state.popMenu === 'hidden') {
				return {
					popMenu: 'shown'
				}
			} else {
				return {
					popMenu: 'hidden'
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
								<button className="toggle-button" onClick={this._toggleMenu}>{this.state.popMenu === 'hidden' ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
								</button>
							</div>
							<div className="title-full">
								<h2 className="header-text">Malibu Landscaping & Lawn Service</h2>
							</div>
							<div className="mobile-spacer" />
						</div>
						<nav className="full-nav">
							<span>
								<Link to="/" className="header-text">Home</Link>
							</span>
							<span>
								<Link to="/gallery" className="header-text">Photo Gallery</Link>
							</span>
							<span>
								<Link to="/about" className="header-text">About Us</Link>
							</span>
							<span>
								<Link to="/services" className="header-text">Services</Link>
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
								<a href="tel://17049106379">
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
