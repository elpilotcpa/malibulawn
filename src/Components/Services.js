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
		list-style: url();
	}
	li {
		padding: .3rem 0 0 0;
	}
	p{
		padding: 0 1rem;

	}
	.logo {
		width: 150px;
	}
	@media (min-width: 700px) {
		margin-top: 6rem;
		display: flex;
		flex-direction: row;
		// flex-wrap: wrap;
		aside {
			display: flex;
		}
	}
`
class Services extends Component {
	render() {
		return (
			<ServicesDiv>
				<aside>
					<img src="./img/special.PNG" alt="ask about our lighting special" className="special" />
					<section>
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
					</section>
				</aside>
				<aside>
					<section>
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
						<p>
							Installation steps typically include job planning, layout,
							excavating and compacting the soil subgrade, applying geotextiles
							(optional), spreading and compacting the sub-base and/or base
							aggregates, constructing edge, restraints, placing and screeding the
							bedding sand, placing concrete pavers, compacting concrete pavers,
							sweeping in jointing sand and final compaction. It is imperative
							that your installer is fully ICPI certified.
					</p>

					</section>
					<section>
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
						<a href="https://www.belgard.com"
							target="_balnk"
							rel="noopener noreferrer">
							<img src="./img/belgard.png" alt="belgard logo" className="logo" />
						</a>
						<p>
							BELGARD LIFETIME PAVERS and materials. We only use the best! You
							can't go wrong with a lifetime manufacturer's warranty!
					</p>
						<a href="https://www.voltlighting.com"
							target="_balnk"
							rel="noopener noreferrer">
							<img src="./img/volt-logo.png" alt="volt logo" className="logo" />
						</a>
						<p>
							Volt Lifetime Lighting Products: Heavy, durable, waterproof,
							beautiful, life-long-lasting and impressive fixtures. Have us design
							and install your beautiful lights and never, ever have to worry
							about them again.
					</p>
					</section>
				</aside>
			</ServicesDiv >
		)
	}
}

export default Services
