import React, { Component } from 'react'
import Show from './SubComponents/Show'
import styled from 'styled-components'

const HomeDiv = styled.div`
	margin: 5.5rem .5rem 0 .5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	.angieslogo {
		background-color: rgb(41, 160, 54);
		width: 110px;
		padding: 5px;
		border-radius: 5px;
		margin-top: .5rem
	}
	.contact-home {
		display: none;
	}
	p {
		max-width: 300px;
		margin: 0;
	}
	.angiesdiv {
		text-align center;
	}
	.home-info {
		padding-top: .5rem;
	}
	@media (min-width: 700px) {
		margin: 6.5rem .5rem 10.4rem .5rem;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		font-size: 1.3rem;
		line-height: 3rem;
		.angieslogo {
			width: 120px;
		}
		.angieslogo:hover {
			box-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174),
			-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),
			-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),
			0.1rem 0.1rem 0.1rem rgb(56, 228, 174);
		}
		.contact-home {
			display: flex;
		}
		.contact-home img {
			height: 13rem;
			padding-left: 4rem;
		}
		.contact-home a {
			text-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174);
		}
		.contact-home a:hover {
			text-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174),
				-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),
				-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),
				0.1rem 0.1rem 0.1rem rgb(56, 228, 174);
		}
		.contact-links {
			display: flex;
			flex-direction: column;
			padding: 0 0 0 1rem;
		}
		p {
			max-width: 600px;
		}
		.home-info {
			padding: 0 0 0 2rem;
		}		
	}
`
class Home extends Component {
	render() {
		return (
			<>
				<HomeDiv>
					<Show />
					<div className="home-info">
						<p>
							At Malibu Landscaping & Lawn Service, we take care to provide our
							customers high quality Landscaping services personalized for their
							unique needs. We are available for estimates that will fit your
							budget. Serving Mint Hill, Matthews and Charlotte since 2010.
					</p>
						<div className="angiesdiv">
							<p>Check Out Our <strong>A</strong> Rating On</p>
							<a href="https://member.angieslist.com/member/store/10667294/reviews"
								target="_blank"
								rel="noopener noreferrer">
								<img src="./img/angieslogo.png" className="angieslogo" alt="angies list logo" />
							</a>
						</div>
						<div className="contact-home">
							<div className="contact-links">
								Contact Us
								<a href="tel://9045358034">
									<i className="fas fa-phone-square" /> (904) 535-8034
								</a>
								<a href="mailto:elpilotcpa@msn.com">
									<i className="fas fa-envelope" /> elpilotcpa@msn.com
								</a>
							</div>
							<img src="./img/angieslist2014.png" alt="angie list 2104" />
						</div>
					</div>
				</HomeDiv>
			</>
		)
	}
}
export default Home
