import React, { Component } from 'react'
import styled from 'styled-components'
import { images } from '../../Assets/Images/images';

const ShowDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 17px;
	.img-frame {
		display: flex;
		justify-content: center;
    align-items: center;
		position: relative;
		height: calc(80vw / 1.2);
    width: 80vw;
    max-height: calc(700px / 1.2);
    max-width: 700px;
		img {
			transition: all 0.4s linear;
      border-radius: 10px;
		}
    .portrait {
		  height: 100%;
    }
    .landscape {
      width: 100%;
    }
		.prev {
			position: absolute;
			background-color: rgba(0, 0, 0, 0.2);
			color: #ffffff;
			font-size: 20px;
			width: 25px;
			height: 40px;
			top: 50%;
			left: 0;
			text-align: center;
			padding: 0;
			transition: all 0.5s linear;
			border: none;
			&:hover {
				background-color: rgba(0, 0, 0, 0.4);
			}
		}
		.next {
			padding: 0;
			position: absolute;
			background-color: rgba(0, 0, 0, 0.2);
			color: #ffffff;
			font-size: 20px;
			text-align: center;
			width: 25px;
			height: 40px;
			top: 50%;
			right: 0;
			transition: all 0.5s linear;
			border: none;
			&:hover {
				background-color: rgba(0, 0, 0, 0.4);
			}
		}
		.play {
			padding: 0;
			position: absolute;
			background-color: rgba(0, 0, 0, 0.2);
			color: #ffffff;
			font-size: 20px;
			text-align: center;
			width: 35px;
			height: 35px;
			bottom: -10px;
			transition: all 0.5s linear;
			border: none;
			&:hover {
				background-color: rgba(0, 0, 0, 0.4);
			}
		}
		.in {
			/* Fade in & out */
			opacity: 1;
			/* grow & shrink */
			/* transform: scale(1); */
			/* flip side to side */
			/* transform: rotateY(0deg); */
			/* flip top to bottom */
			/* transform: rotateX(0deg) */
			/* transform-style: preserve-3d; */
		}
		.out {
			/* Fade in & out */
			opacity: 0;
			/* grow & shrink */
			/* transform: scale(0); */
			/* flip side to side */
			/* transform: rotateY(90deg); */
			/* flip top to bottom */
			/* transform: rotateX(90deg) */
			transform-style: preserve-3d;
		}
	}
	.slider-frame {
		position: relative;
		margin: 20px 0 0;
		width: 100%;
		height: 75px;
		max-width: 760px;
		overflow: hidden;
		.slider {
			position: absolute;
			display: flex;
			button {
				border: none;
				padding: 0;
				margin: 0;
			}
			.thumb-nail {
				padding: 0;
				margin: 0;
				opacity: 0.5;
				width: auto;
				height: 75px;
				transition: all 0.4s linear;
			}
			.current {
				opacity: 1;
			}
		}
	}
	h2 {
		width: 100%;
		width: 100%;
		letter-spacing: 0.06em;
		font-size: 28px;
		color: #1d1d1d;
		text-align: center;
		max-width: 720px;
	}
	p {
		width: 100%;
		letter-spacing: 0.06em;
		font-size: 18px;
		color: rgba(29, 29, 29, 0.7);
		text-align: center;
		line-height: 1.8em;
		max-width: 720px;
	}
`

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImg: true,
      img: 0,
      imgs: this.shuffleArray(images),
      intervalId: null
    }
  }
  componentDidMount() {
    this._play();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }
  _play = () => {
    var autoplay = setInterval(this._imgChange, 5000)
    this.setState(() => ({
      intervalId: autoplay
    }))
  }
  shuffleArray = array => {
    let clone = [...array];
    let i = clone.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = clone[i];
      clone[i] = clone[j];
      clone[j] = temp;
    }
    return clone;
  }
  _imgChange = () => {
    this.setState(() => ({
      showImg: false
    }), () => setTimeout(this._next, 500));
  }

  _next = () => {
    const { img, imgs } = this.state
    if (img === imgs.length - 1) {
      this.setState(
        () => ({
          img: 0,
        }), () => {
          setTimeout(this.setState({ showImg: true }), 100)
        });
      return
    }
    this.setState(
      prevState => ({
        img: prevState.img + 1,
      }), () => {
        setTimeout(this.setState({ showImg: true }), 100)
      });
  }


  render() {
    const { showImg, img, imgs } = this.state
    return (
      <ShowDiv>
        <div className="img-frame">
          <img
            className={`${showImg ? 'in' : 'out'} ${imgs[img].isLandscape ? 'landscape' : 'portrait'}`}
            src={imgs[img].src}
            alt=""
          />
        </div>
      </ShowDiv>
    )
  }
}

export default Show
