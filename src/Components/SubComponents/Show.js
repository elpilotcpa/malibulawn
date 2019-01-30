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
	div {
		position: relative;

	}
`

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pictures: [
				'./img/pic01.jpg',
				'./img/pic02.jpg',
				'./img/pic03.jpg',
				'./img/pic04.jpg',
				'./img/pic05.jpg',
				'./img/pic06.jpg',
				'./img/pic07.jpg',
				'./img/pic08.jpg',
				'./img/pic09.jpg',
				'./img/pic10.jpg',
				'./img/pic11.jpg',
				'./img/pic12.jpg',
				'./img/pic13.jpg',
				'./img/pic14.jpg',
				'./img/pic15.jpg',
				'./img/pic16.jpg',
				'./img/pic17.jpg',
				'./img/pic18.jpg',
				'./img/pic19.jpg',
				'./img/pic20.jpg',
				'./img/pic21.jpg',
				'./img/pic22.jpg',
				'./img/pic23.jpg',
				'./img/pic24.jpg',
				'./img/pic25.jpg',
				'./img/pic26.jpg',
				'./img/pic27.jpg',
				'./img/pic28.jpg',
				'./img/pic29.jpg',
				'./img/pic30.jpg',
				'./img/pic31.jpg',
				'./img/pic35.jpg',
				'./img/pic36.jpg',
				'./img/pic37.jpg',
				'./img/pic38.jpg',
				'./img/pic39.jpg',
				'./img/pic40.jpg',
				'./img/pic41.jpg',
				'./img/TN03.png',
				'./img/TN04.png',
				'./img/TN05.png',
				'./img/TN06.png'
			],
			index: 0,
			transValue: 0,
			shuffledPics: null
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
	componentWillMount() {
		let shuffledPics = this.shuffleArray(this.state.pictures)
		this.setState(() => ({
			shuffledPics: shuffledPics
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
	shuffleArray = array => {
		let i = array.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
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
					{this.state.shuffledPics.map(pic => (
						<Slide key={pic} pic={pic} />
					))}
				</div>
			</ShowFrame>
		)
	}
}

export default Show
