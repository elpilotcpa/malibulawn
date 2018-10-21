import React, { Component } from 'react'
import Show from './Show'

class Home extends Component {
	render() {
		return (
			<>
				<section className="home-sec">
					<Show />
					<div>
						<p>
							At Malibu Landscaping & Lawn Service, we take care to provide our
							customers high quality Landscaping services personalized for their
							unique needs. We are available for estimates that will fit your
							budget. Serving Mint Hill, Matthews and S. Charlotte
						</p>
						<div className="contact-home">
							Contact Us
							<a href="tel://170491063">
								<i className="fas fa-phone-square" /> (704) 910-6379
							</a>
							<a href="tel://9045358034">
								<i className="fas fa-mobile" /> (904) 535-8034
							</a>
							<a href="mailto:elpilotcpa@msn.com">
								<i className="fas fa-envelope" /> elpilotcpa@msn.com
							</a>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default Home
