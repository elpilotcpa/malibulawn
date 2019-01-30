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
	.blog {
		width: 100%;
		a {
			width: 100%;
		}
		h2, h1{
			width: 100%;
			text-align: left;
			padding: 0 1rem;
			max-width:300px;
			margin: .5rem 0;
		}
		h1 {
			font-size: 1.5rem;
			font-style: normal;
		}
		p {
			width: 100%;
			margin: .5rem 0;

		}
		ul {
			width: 90%;
			padding: 0 1rem 0 3rem;
			max-width:300px;
			list-style: square;

		}
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
		.blog {
			h1 {
				width: 100%;
				max-width: 800px;
				font-size: 1.6rem;
				font-weight: bolder;

			}
			h2 {
				font-size: 1.3rem;
				max-width: 800px;
			}
			ul {
				max-width: 800px;
			}
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
						<div>
							<a href="https://www.houselogic.com/"
								target="_balnk"
								rel="noopener noreferrer">
								<img src="./img/houselogic-logo.png" alt="House Logic logo" className="logo" />
							</a>
						</div>
						<div className="blog">

							<a href="https://www.houselogic.com/organize-maintain/home-maintenance-tips/french-drains-when-you-need-them/"
								target="_balnk"
								rel="noopener noreferrer"><h1>French Drain Systems: When You Need Them</h1></a>
							<p>by Jeanne Huber</p>
							<p>If you have a soggy yard or a wet basement, then a French drain is your cure. Here’s how they work, when to use them, the different types and cost.</p>
							<p>Water always flows downhill, and by the easiest route possible. That’s the basic concept behind a French drain, a slightly sloped trench filled with round gravel and a pipe that diverts water away from your house.</p>
							<p>By the way, the name doesn’t come from the country. It’s from Henry French, a judge and farmer in Concord, Massachusetts, who promoted the idea in an 1859 book about farm drainage.</p>
							<h2>How a French Drain Works</h2>
							<p>French drains provide an easy channel for water to flow through. Water runs into a gravel-filled trench, then into perforated pipe at the bottom of the trench.</p>
							<p>Water travels freely through the pipe, which empties a safe distance from the house.</p>
							<p>The trench bottom should be sloped about 1 inch for every 8 feet in the direction you want water to flow. Depending on your situation, the water can be diverted to:</p>
							<ul>
								<li>A low-lying area of your property</li>
								<li>A drainage ditch</li>
								<li>A dry well</li>
								<li>The street</li>
							</ul>
							<h2>When You Need a French Drain</h2>
							<ul>
								<li>When you have a problem with surface water, such as a soggy lawn or a driveway that washes out</li>
								<li>If water is getting into your basement</li>
								<li>If you’re building a retaining wall on a hillside</li>
							</ul>
							<h2>If Your Problem is Surface Water</h2>
							<p><strong>Install a shallow French drain.</strong> Also called a curtain drain, it extends horizontally across your property, directly uphill of the area you want to dry out. It intercepts water and channels it around the soggy spot.</p>
							<p>This type of drain doesn’t have to be very deep — a common size is 2 feet deep and 1.5 feet across. Where the drain passes through areas with trees or shrubs, switch to solid pipe (not perforated) to reduce the risk of roots growing into the piping and clogging it.</p>
							<p>Cost: $10 to $16 per linear foot.</p>
							<h2>If Water is Getting Into Your Basement</h2>
							<p>Install a deep French drain. Also called a footing drain, it runs around the perimeter of the house at the footing level and intercepts water before it can enter your basement.</p>
							<p>It’s easy to install during house construction, but much more difficult and expensive to add later. If you have tall basement walls, you may have to dig down quite a ways to access your foundation footing. Also,  there are probably landscaping, decks, and walkways that will have to be ripped out in order to install the drain, adding to the cost.</p>
							<p>If there’s not enough slope for your drain system to work, you may need to pipe the collected water to a basin in the basement, where a sump pump can lift it and send it to the storm drain system.</p>
							<p>Cost: $12,000 for a 1,500-square-foot basement 6 feet deep.</p>
							<p><strong>Install an interior French drain.</strong> An interior French drain intercepts water as it enters your basement — it’s the surest method of keeping your basement dry and a better option than a footing drain.</p>
							<p>However, if you have a finished basement, you’ll have to remove interior walls in order to install the system. That shouldn’t be a problem if water is ruining your basement anyway.</p>
							<p>Crews cut a channel around the perimeter of your basement floor, chip out the concrete, and install perforated pipe all the way around. The water flows to a collection tank sunk into the floor, and a sump pump sends it out to the yard or a storm drain.</p>
							<p>The channel is patched with a thin layer of concrete, except for a small gap at the edge to catch any water that dribbles down the wall.</p>
							<p>Cost: About $3,000.</p>
							<h2>If You’re Building a Retaining Wall on a Hillside</h2>
							<p>If you’re building a retaining wall, add a French drain behind the first course of stones or blocks.</p>
							<p>Otherwise, water moving down the hill will build up behind the wall and undermine it. The pipe should rest on the same compacted gravel base or concrete footing that supports the wall.</p>
							<p>To protect the drain from clogging with silt, drape landscape cloth across the base or footing and up the slope before adding the pipe and drain gravel. Near the top of the wall, fold the cloth over the top of the gravel, and top with several inches of soil.</p>
							<p>Cost: The added cost to do this while building is very little — just the price of drain gravel ($25 per cubic yard) and pipe (50 cents to $1 per linear foot).</p>

							<p>See the full article <a href="https://www.houselogic.com/organize-maintain/home-maintenance-tips/french-drains-when-you-need-them/"
								target="_balnk"
								rel="noopener noreferrer"
							>here</a>.</p>
						</div>
					</section>
				</ServicesDiv >
			</>
		)
	}
}

export default Services
