import React, { Component } from 'react'
import Show from './Show'

class Home extends Component {
	render() {
		return (
			<>
				<section>
					<Show />
					<p>
						At Malibu Landscaping & Lawn Service, we take care to provide our
						customers high quality Landscaping services personalized for their
						unique needs. We are available for estimates that will fit your
						budget.
					</p>
					<p>Contact Us</p>
					<p>
						<a href="tel://170491063">
							<i className="fas fa-phone-square" /> (704) 910-6379
						</a>
					</p>
					<p>
						<a href="tel://9045358034">
							<i className="fas fa-mobile" /> (904) 535-8034
						</a>
					</p>
					<p>
						<a href="mailto:elpilotcpa@msn.com">
							<i className="fas fa-envelope" /> elpilotcpa@msn.com
						</a>
					</p>
				</section>
			</>
		)
	}
}

export default Home
