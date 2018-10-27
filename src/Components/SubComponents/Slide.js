import React from 'react'

const Slide = ({ pic }) => {
	return (
		<div className="slide">
			<img className="slide-pic" src={pic} alt={pic} />
		</div>
	)
}
export default Slide
