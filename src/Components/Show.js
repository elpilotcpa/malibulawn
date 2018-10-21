import React, { Component } from 'react'
import Slide from './Slide'

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pictures: [
				'./img/angieslist2014.png',
				'./img/pic19.jpg',
				'./img/pic28.jpg',
				'./img/pic13.jpg',
				'./img/pic26.jpg',
				'./img/TN02.png'
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
	componentWillMount() {
		this.setState(() => ({
			pictures: [
				'./img/angieslist2014.png',
				'./img/pic19.jpg',
				'./img/pic28.jpg',
				'./img/pic13.jpg',
				'./img/pic26.jpg',
				'./img/TN02.png'
			],
			index: 0,
			transValue: 0
		}))
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
			<div className="slider">
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
			</div>
		)
	}
}

export default Show
