import React, { Component } from 'react'

import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import styled from 'styled-components'
const SliderFrame = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;

	.thumb-gallery{
		display: none;
	}
	@media (min-width: 1100px) {
		.thumb-gallery{
			display: flex;
			flex-wrap: wrap;
			width: 500px;
			justify-content: center;
			margin: 1rem;
			border-radius: 5%;
			border: .1rem solid rgb(2, 60, 64);
			background-color: rgb(93, 253, 203);
			padding: 1rem 0;

		}
		.thumb-print {
			margin: .2rem;
			width: 60px;
			height: 60px;



		}
		.thumb-print img{
			width: 60px;
			height: 60px;
			border-radius: 5%;
			border: .1rem solid rgb(2, 60, 64);

		}
		.not {
			transition: opacity ease-in-out .4s, transform ease-in-out .7s;
			cursor: pointer;
		}
		.selected {
			opacity:.2;
			transform: scale(.5);
			transition: opacity ease-in-out .4s, transform ease-in-out .7s;


		}
}

`

class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pictures: this.shuffleArray([
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
			]),
			index: 0,
			transValue: 0
		}
	}
	jumpTo = index => {
		this.setState({
			index,
			transValue: -this.slideWidth() * index
		})
	}
	updateScreen = () => {
		this.setState(() => ({
			transValue: -this.slideWidth() * this.state.index
		}))
	}
	componentDidMount() {
		window.addEventListener('resize', this.updateScreen)

	}
	prevSlide = () => {
		if (this.state.index === 0) {
			this.setState(() => ({
				index: this.state.pictures.length - 1,
				transValue: -this.slideWidth() * (this.state.pictures.length - 1)
			}))
		}
		if (this.state.index !== 0) {
			this.setState(prevState => ({
				index: prevState.index - 1,
				transValue: prevState.transValue + this.slideWidth()
			}))
		}
	}
	nextSlide = () => {
		if (this.state.index === this.state.pictures.length - 1) {
			this.setState(() => ({
				index: 0,
				transValue: 0
			}))
		}
		if (this.state.index !== this.state.pictures.length - 1) {
			this.setState(prevState => ({
				index: prevState.index + 1,
				transValue: prevState.transValue - this.slideWidth()
			}))
		}
	}
	slideWidth = () => {
		return document.querySelector('.slide-frame').clientWidth
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
			<SliderFrame>
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
					<LeftArrow prevSlide={this.prevSlide} />
					<RightArrow nextSlide={this.nextSlide} />
				</div>
				<div className="thumb-gallery">
					{this.state.pictures.map((pic, index) => (

						<button key={index} className="thumb-print" onClick={() => this.jumpTo(index)} disabled={this.index}>
							<img className={this.state.index === index ? "selected" : "not"} src={pic} alt={pic} />
						</button>
					))}
				</div>
			</SliderFrame>

		)
	}
}

export default Slider