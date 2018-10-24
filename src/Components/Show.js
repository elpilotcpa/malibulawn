import React, { Component } from 'react'
import Slide from './Slide'
import styled from 'styled-components'
const ShowFrame = styled.div`
	position: relative;
	max-width: 500px;
	max-height: 500px;
	margin: 0 2rem;
	overflow: hidden;
	white-space: nowrap;
	border-radius: 5%;
	border: .1rem solid rgb(2, 60, 64);
	@media (min-width: 700px) {
	border: .1rem solid rgb(2, 60, 64);
	border-radius: 5%;
	}
`

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pictures: [
				'./img/pic19.jpg',
				'./img/pic20.jpg',
				'./img/pic28.jpg',
				'./img/pic13.jpg',
				'./img/pic26.jpg'
			],
			index: 0,
			transValue: 0
		}
	}
	updateScreen = () => {
		this.setState(() => ({
			transValue: -this.slideWidth() * this.state.index
		}))
	}
	componentWillUnmount() {
		clearInterval(this.slideShow)
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateScreen)
		this.slideShow = setInterval(this.nextPicture, 4000)
	}
	nextPicture = () => {
		if (this.state.index === this.state.pictures.length - 1) {
			this.setState(() => ({
				index: 0,
				transValue: 0
			}))
		} else {
			this.setState(prevState => ({
				index: prevState.index + 1,
				transValue: prevState.transValue - this.slideWidth()
			}))
		}
	}
	slideWidth = () => {
		return document.querySelector('.slide').clientWidth
	}

	render() {
		return (
			<ShowFrame>
				<div
					className="slide-frame"
					style={{
						transform: `translateX(${this.state.transValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}
				>
					{this.state.pictures.map(pic => (
						<Slide key={pic} pic={pic} />
					))}
				</div>
			</ShowFrame>
		)
	}
}

export default Show
