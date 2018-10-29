import React, { Component } from 'react'
import styled from 'styled-components'

const ServicesDiv = styled.div`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 400px;
	}
	.special {
		width: 300px;
		border: .1rem solid rgb(2, 60, 64);
	}
	ul {
		margin: 0	
	}
	h2 {
		font-size: 1rem;
		text-align: center;
	}
	ul {
		list-style: square;
	}
	li {
		padding: .3rem 0 0 0;
	}
	p{
		padding: 0 1rem;
		max-width:300px;
	}
	.logo {
		width: 150px;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 700px) {
		margin-top: 9rem;
		font-size: 1.3rem;
		height: 100%;
		.top-sec {
			display: flex;
			flex-direction: row-reverse;
			justify-content: center;
			max-width: 900px;
			div {
				width: 40%
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.special {
				margin-left: 1rem;
				width: 400px;
			}
		}
		.bottom-sec {
			max-width: 900px;
			margin-top: 2rem;
			div {
				width: 80%;			
			}
			.logo {
				width: 200px;
			}
		}
		p {
			max-width: 800px;
		}
	}
`
class Services extends Component {
	render() {
		return (
			<>
				<ServicesDiv>
					<section className="top-sec">
						<img src="./img/special.PNG" alt="ask about our lighting special" className="special" />
						<div>
							<h2>Full-Service Landscaper specializing in</h2>

							<ul>

								<li>New Landscaping</li>
								<li>Replacement Landscaping​</li>
								<li>Landscape Lighting</li>
								<li>Landscape Design</li>
								<li>Mulching</li>
								<li>Fertilizing</li>
								<li>French Drains</li>
								<li>Aluminum Fencing</li>
								<li>Outdoor Lighting</li>
								<li>Security Lighting</li>
								<li>Pavers</li>
								<li>Outdoor Fire Pits</li>
								<li>Outdoor Patios</li>
								<li>Outdoor Kitchens</li>
							</ul>
						</div>
					</section>
					<section className="bottom-sec">
						<div>
							<p>
								We take pride in our wide selection of quality products. All of the
								products we offer are from trusted brands with a Lifetime
								transferrable manufacturer's warranty.
							</p>
							<p>
								We utilize only premium products for our outdoor lighting, landscape
								lighting, architectural lighting, security lighting, outdoor
								hardscapes, paver patios, outdoor kitchens, outdoor fireplaces and
								fire pits including:
							</p>
							<a href="https://www.belgard.com"
								target="_balnk"
								rel="noopener noreferrer">
								<img src="./img/belgard.png" alt="belgard logo" className="logo" />
							</a>
							<p>
								Belgard Lifetime Paver and Materials. We only use the best! You
								can't go wrong with a lifetime manufacturer's warranty!
							</p>
							<a href="https://www.voltlighting.com"
								target="_balnk"
								rel="noopener noreferrer">
								<img src="./img/volt-logo.png" alt="volt logo" className="logo" />
							</a>
							<p>
								Volt Lifetime Lighting Products: heavy, durable, waterproof,
								beautiful, life-long-lasting and impressive fixtures. Have us design
								and install your beautiful lights and never, ever have to worry
								about them again.
							</p>
						</div>
						<div>
							<a href="https://www.icpi.org/"
								target="_balnk"
								rel="noopener noreferrer">
								<img src="./img/ICPI-logo.png" alt="I C P I logo" className="logo" />
							</a>
							<p>
								ICPI Paver certification note: Compaction of the soil subgrade and
								aggregate base materials are essential to the long-term performance
								of interlocking concrete pavements.
							</p>
							<p>
								Installation steps typically include job planning, layout,
								excavating and compacting the soil subgrade, applying geotextiles
								(optional), spreading and compacting the sub-base and/or base
								aggregates, constructing edge, restraints, placing and screeding the
								bedding sand, placing concrete pavers, compacting concrete pavers,
								sweeping in jointing sand and final compaction. It is imperative
								that your installer is fully ICPI certified.
							</p>
						</div>
					</section>
				</ServicesDiv >
			</>
		)
	}
}

export default Services
