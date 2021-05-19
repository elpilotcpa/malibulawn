import React, { Component } from 'react'
import styled from 'styled-components'
import { images } from '../../Assets/Images/images';

const SliderDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 17px;
	min-height: 65vh;
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
			top: calc(50% - 20px);
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
			top: calc(50% - 20px);
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
	/* @media (min-width: 500px) {
		.img-frame {
			height: 300px;
      width: 300px;
		}
	}
	@media (min-width: 700px) {
		.img-frame {
			height: 400px;
      width: 500px;
		}
	}
	@media (min-width: 1000px) {
		.img-frame {
			height: 70vh;
      width: calc(1.2 * 70vh);
		}
	} */
`

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImg: true,
      img: 0,
      imgs: images,
      // [
      //   './img/pic42.jpeg',
      //   './img/pic43.jpeg',
      //   './img/pic44.jpeg',
      //   './img/pic45.jpeg',
      //   './img/pic46.jpeg',
      //   './img/pic01.jpg',
      //   './img/pic02.jpg',
      //   './img/pic03.jpg',
      //   './img/pic04.jpg',
      //   './img/pic05.jpg',
      //   './img/pic06.jpg',
      //   './img/pic07.jpg',
      //   './img/pic08.jpg',
      //   './img/pic09.jpg',
      //   './img/pic10.jpg',
      //   './img/pic11.jpg',
      //   './img/pic12.jpg',
      //   './img/pic13.jpg',
      //   './img/pic14.jpg',
      //   './img/pic15.jpg',
      //   './img/pic16.jpg',
      //   './img/pic17.jpg',
      //   './img/pic18.jpg',
      //   './img/pic19.jpg',
      //   './img/pic20.jpg',
      //   './img/pic21.jpg',
      //   './img/pic22.jpg',
      //   './img/pic23.jpg',
      //   './img/pic24.jpg',
      //   './img/pic25.jpg',
      //   './img/pic26.jpg',
      //   './img/pic27.jpg',
      //   './img/pic28.jpg',
      //   './img/pic29.jpg',
      //   './img/pic30.jpg',
      //   './img/pic31.jpg',
      //   './img/pic35.jpg',
      //   './img/pic36.jpg',
      //   './img/pic37.jpg',
      //   './img/pic38.jpg',
      //   './img/pic39.jpg',
      //   './img/pic40.jpg',
      //   './img/pic41.jpg',
      //   './img/TN03.png',
      //   './img/TN04.png',
      //   './img/TN05.png',
      //   './img/TN06.png'
      // ],
      transValue: 0,
      transTime: 0.4,
      autoPlay: true,
      intervalId: null
    }
  }
  componentDidMount() {
    var autoplay = setInterval(this._imgChange, 5000)
    this.setState(() => ({
      intervalId: autoplay
    }))
    window.addEventListener('resize', this._transValue)
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }
  _play = () => {
    var autoplay = setInterval(this._imgChange, 5000)
    this.setState(() => ({
      autoPlay: true,
      intervalId: autoplay
    }))
  }
  _pause = () => {
    if (this.state.autoPlay) {
      this.setState(() => ({
        autoPlay: false,
        intervalId: clearInterval(this.state.intervalId)
      }))
    }
  }
  _imgChange = target => {
    this.setState(() => ({
      showImg: false
    }))
    if (target) {
      setTimeout(this._prev, 500)
    } else {
      setTimeout(this._next, 500)
    }
  }

  _showImg = () => {
    this.setState({ showImg: true });
  }
  _prev = () => {
    const { img, imgs } = this.state
    if (img === 0) {
      this.setState(
        () => ({
          img: imgs.length - 1,
          transTime: 0.1 * imgs.length - 1
        }),
        () => {
          this._transValue();
          setTimeout(this._showImg, 100)
        }
      )
      return
    }
    this.setState(
      prevState => ({
        img: prevState.img - 1,
        transTime: 0.4
      }),
      () => {
        this._transValue();
        setTimeout(this._showImg, 100)
      }
    )
  }
  _next = () => {
    const { img, imgs } = this.state
    if (img === imgs.length - 1) {
      this.setState(
        () => ({
          img: 0,
          transTime: 0.1 * imgs.length - 1
        }),
        () => {
          this._transValue();
          setTimeout(this._showImg, 100)
        }
      )
      return
    }
    this.setState(
      prevState => ({
        img: prevState.img + 1,
        transTime: 0.4
      }),
      () => {
        this._transValue();
        setTimeout(this._showImg, 100)
      }
    )
  }
  _jumpChange = target => {
    this.setState(() => ({
      showImg: false
    }))
    setTimeout(() => this._jump(target), 500)
  }
  _jump = target => {
    const { img } = this.state
    let transTime = 0.4
    if (img < target) {
      transTime = (target - img) * 0.4
    }
    if (img > target) {
      transTime = (img - target) * 0.4
    }
    this.setState(
      () => ({
        transTime: transTime,
        img: target,
      }),
      () => {
        this._transValue();
        setTimeout(this._showImg, 100);
      }
    )
  }
  _getTargetWidth = target => {
    let imgPath = document.querySelector('.img'.concat(target))
    if (!imgPath) {
      return
    }
    return imgPath.clientWidth
  }
  _transValue = () => {
    const { imgs, img } = this.state
    let slider = document.querySelector('.slider-frame')
    if (!slider) {
      return
    }
    let sliderWidth = slider.clientWidth
    let slideCount = imgs.length - 1
    let slidesWidth = 0
    while (slideCount >= 0) {
      slidesWidth += this._getTargetWidth(slideCount)
      slideCount--
    }
    let currentSlideWidth = this._getTargetWidth(img)
    let currentTransValue = -sliderWidth / 2 + currentSlideWidth / 2
    let target = img - 1
    while (target >= 0) {
      currentTransValue += this._getTargetWidth(target)
      target--
    }
    // why is it 38
    let start = 38
    let end = slidesWidth - sliderWidth
    if (currentTransValue < start) {
      this.setState(() => ({
        transValue: 0
      }))
      return
    }
    if (currentTransValue > end) {
      this.setState(() => ({
        transValue: -end
      }))
      return
    }
    this.setState(() => ({
      transValue: -currentTransValue
    }))
  }

  render() {
    const { showImg, img, imgs, transValue, transTime, autoPlay } = this.state
    return (
      <SliderDiv>
        <div className="img-frame">
          <img
            className={`${showImg ? 'in' : 'out'} ${imgs[img].isLandscape ? 'landscape' : 'portrait'}`}
            src={imgs[img].src}
            alt=""
          />

          <button className="prev" onClick={() => this._imgChange(true)}>
            <i className="fas fa-chevron-left" />
          </button>
          <button className="next" onClick={() => this._imgChange(false)}>
            <i className="fas fa-chevron-right" />
          </button>
          {autoPlay ? (
            <button className="play" onClick={this._pause}>
              <i className="fas fa-pause" />
            </button>
          ) : (
            <button className="play" onClick={this._play}>
              <i className="fas fa-play" />
            </button>
          )}
        </div>
        <div className="slider-frame">
          <div
            className="slider"
            style={{
              transform: `translateX(${transValue}px)`,
              transition: `transform ease-out ${transTime}s`
            }}
          >
            {imgs.map((obj, i) => {
              return (
                <button
                  key={i}
                  onClick={() => this._jumpChange(i)}
                  className={`img${i}`}
                >
                  <img
                    className={`thumb-nail ${i === img ? 'current' : ''}`}
                    src={obj.src}
                    alt=""
                  />
                </button>
              )
            })}
          </div>
        </div>
      </SliderDiv>
    )
  }
}

export default Slider
