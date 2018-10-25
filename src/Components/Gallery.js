import React, { Component } from 'react'
import Slider from './Slider'
import styled from 'styled-components'

const GalleryDiv = styled.div`
	margin: 5rem .5rem 0 .5rem;
	text-align: center;

	h2 {
		font-size: .9rem;
		text-align: center;
		margin-bottom: 1rem;
		
		
	}
	.angiesdiv{
		padding-top: 1rem;
		.angieslogo {
			background-color: rgb(41, 160, 54);
			width: 110px;
			padding: 5px;
			border-radius: 5px;
		}
	}
	@media (min-width: 700px) {
		margin-top: 5.5rem;
		h2{
			font-size: 1.3rem;
		}
		.angiesdiv {
			// display: flex;
			padding: 0;
			h2 {
				margin-bottom: 0.1rem;
			}
		}
		.angieslogo {
			width: 120px;
		}
		.angieslogo:hover {
			box-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174),
			-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),
			-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),
			0.1rem 0.1rem 0.1rem rgb(56, 228, 174);
		}
	}
`
class Gallery extends Component {
	render() {
		return (
			<>
				<GalleryDiv>
					<h2>Some examples of our latest work</h2>

					<Slider />
					<div className="angiesdiv">
						<h2>See More On</h2>
						<a href="https://member.angieslist.com/member/store/10667294/about"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="./img/angieslogo.png" className="angieslogo" alt="angies list logo" />
						</a>
					</div>
				</GalleryDiv>
			</>
		)
	}
}

export default Gallery
