import React, { Component } from 'react'
import Slider from './Slider'
class Gallery extends Component {
	render() {
		return (
			<>
				<section className="gallery">
					<h2>Here are some examples of our latest work</h2>

					<Slider />
				</section>
			</>
		)
	}
}

export default Gallery
