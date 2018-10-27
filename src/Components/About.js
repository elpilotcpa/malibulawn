import React, { Component } from 'react'
import styled from 'styled-components'

const AboutDiv = styled.div`
	margin-top: 4rem;
	p{
		padding: 0 .5rem;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	aside {
		width:300px;
		padding: 10px 0 4px 10px;
		border-radius: 10px;
		border: .1rem solid rgb(2, 60, 64);
		background-color: rgb(93, 253, 203);
		img {
			width: 290px;
			border-radius: 5px;
		}
	}
	h2 {
		text-align: center;
	}
	@media (min-width: 700px) {
		margin: 8rem 0 4rem 0;
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		.about-title{
			display: none;
		}
		section{
			max-width: 500px;
			margin: 1rem;
		}
		aside {
			margin: 1rem 0;
			width: 500px;
			img {
				width: 490px;
			}
		}
	}
`

class About extends Component {
	render() {
		return (
			<>
				<AboutDiv>
					<h2 className="about-title">About Us</h2>
					<section>
						<p>
							Malibu Landscaping & Lawn Service is family-owned and operated in
							Charlotte, NC. Since opening in 2010, we’ve treated every customer
							like they were a part of our family. Other companies may offer
							similar services, but our services come with a personal touch.
					</p>
						<aside>
							<img src="./img/header.jpg" alt="home sweet home" />
						</aside>
					</section>
					<section>
						<p>
							We use only the best quality products across the board. For example,
							our Volt Outdoor, Architectural and Security lights
							all come with a Lifetime transferable Warranty. Three factors that make VOLT® LED landscape
							and garden lighting so popular are luminosity, light quality and
							durability. VOLT® uses industry leading photometric techniques to
							ensure the maximum light output per watt consumed for each of our
							LED landscape lighting fixtures. VOLT® also makes use of the highest
							quality Light Emitting Diodes and driver technology to ensure each
							and every one of our LED landscape lighting fixtures produce
							consistent and natural light, making our LED fixtures
							indistinguishable from standard high quality halogen fixtures. Our
							super-efficient designs allow our all-in-one integrated LED
							landscape lighting fixtures to outlast the competition and for this
							reason be covered by our Lifetime transferrable manufacturer's
							warranty. LED Flood Lighting, Pathway Lights, In-Grade Lights
							, Deck & Patio Lighting, Outdoor Step Lighting, Hardscape
							Lighting are just a few of the many lighting options. As for our
							Belgard Hardscape products, they also come with a Lifetime Warranty. And finally, our
							seed and fertilizers are the absolute best available.
					</p>
					</section>
				</AboutDiv>
			</>
		)
	}
}

export default About
