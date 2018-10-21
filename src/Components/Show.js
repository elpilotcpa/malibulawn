import React, { Component } from 'react'
import Slide from './Slide'

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pictures: [
				'./img/angieslist2014.png',
				'./img/pic1.JPG',
				'./img/pic2.jpg',
				'./img/pic3.jpg',
				'./img/pic4.png',
				'./img/special.png'
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
	componentDidMount() {
		window.addEventListener('resize', this.updateScreen)
		this.slideShow = setInterval(this.nextPicture, 5000)
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
			<div className="slider">
				<div
					className="slide-frame"
					style={{
						transform: `translateX(${this.state.transValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}
				>
					{this.state.pictures.map(pic => (
						<Slide key={pic} pic={pic} width={this.slideWidth} />
					))}
				</div>
			</div>
		)
	}
}

export default Show
