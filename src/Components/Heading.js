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
								<button className="toggle-button" onClick={this._toggleMenu}>{this.state.popMenu === 'hide' ? <i className="fas fa-bars" /> : <i class="fas fa-times"></i>
								}
								</button>
							</div>
							<div className="title-full">
								<h1 className="nav-text">Malibu</h1> <h3 className="nav-text">Landscaping & Lawn Service</h3>
							</div>
						</div>
						<nav className="full-nav">
							<span>
								<Link to="/" className="nav-text">Home</Link>
							</span>
							<span>
								<Link to="/gallery" className="nav-text">Photo Gallery</Link>
							</span>
							<span>
								<Link to="/about" className="nav-text">About Us</Link>
							</span>
							<span>
								<Link to="/services" className="nav-text">Services</Link>
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
