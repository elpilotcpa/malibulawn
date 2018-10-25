import React, { Component } from 'react'
import styled from 'styled-components'

const FootDiv = styled.div`
width: 100%;

	
footer{
	display:flex;
	justify-content: center;
	margin-top: 1rem;
	p {
		text-indent: 0;
		margin-right: .5rem;
	}
}
.reactdiv {
	display:none;
}
.justindiv {
	display: flex;
	align-content: center;
	font-size: 1rem;
}
	@media (min-width: 1100px) {
		position: fixed;
		bottom: 0;
		font-size: 1rem;
		footer {
		
		justify-content: space-between;
		align-items: center;
		}
		.reactdiv {
			display: flex;
			justify-content: center;
			height: 50px;
			margin-left: .5rem;

		}
		.justindiv {
			display: flex;
			justify-content: center;
			height: 50px;
			margin-right: .5rem;

		}
		img {
				width: 30px;
				height: 30px;
				animation: rotate 10s infinite linear;
		}
		.imgdiv {
			display: flex;
			align-self: center;
		}
	@keyframes rotate {
		from {
			transform: rotate(0deg)
		}
		to {
			transform: rotate(360deg)
		}
	}
`
class Foot extends Component {
	render() {
		return (
			<FootDiv>
				<footer>
					<div className="reactdiv">
						<p>Powered by <a
							href="https://reactjs.org/"
							target="_balnk"
							rel="noopener noreferrer">React</a></p>
						<div className="imgdiv">
							<img src="./img/reactlogo.png" alt="react logo" />
						</div>
					</div>
					<div className="justindiv">
						<p>Built by <a
							href="https://www.justin-oliver.com"
							target="_balnk"
							rel="noopener noreferrer">
							Justin Lee
					</a>
						</p>
					</div>
				</footer>
			</FootDiv>
		)
	}
}

export default Foot
