import React, { Component } from 'react'
import { HashRouter as Router, NavLink } from 'react-router-dom'
class Heading extends Component {
	state = {
		popMenu: 'hidden nav-menu'
	}

	_toggleMenu = () => {
		this.setState(() => {
			if (this.state.popMenu === 'hidden nav-menu') {
				return {
					popMenu: 'shown nav-menu'
				}
			} else {
				return {
					popMenu: 'hidden nav-menu'
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
								<button className="toggle-button" onClick={this._toggleMenu}>{this.state.popMenu === 'hidden nav-menu' ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
								</button>
							</div>
							<div className="title-full">
								<h2 className="header-text">Malibu Landscaping & Lawn Service</h2>
							</div>
							<div className="mobile-spacer" />
						</div>
						<nav className="full-nav">
							<NavLink exact to="/" className="header-text" activeClassName="current-page">Home</NavLink>
							<NavLink to="/gallery" className="header-text" activeClassName="current-page">Photo Gallery</NavLink>
							<NavLink to="/about" className="header-text" activeClassName="current-page">About Us</NavLink>
							<NavLink to="/services" className="header-text" activeClassName="current-page">Services</NavLink>
						</nav>
					</header>
					<nav className={this.state.popMenu}>
						<NavLink exact to="/" className="mobile-link" activeClassName="mobile-current-page" onClick={this._toggleMenu}>
							Home
						</NavLink>
						<NavLink to="/gallery" className="mobile-link" activeClassName="mobile-current-page" onClick={this._toggleMenu}>
							Photo Gallery
						</NavLink>
						<NavLink to="/about" className="mobile-link" activeClassName="mobile-current-page" onClick={this._toggleMenu}>
							About Us
						</NavLink>
						<NavLink to="/services" className="mobile-link" activeClassName="mobile-current-page" onClick={this._toggleMenu}>
							Services
						</NavLink>
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
