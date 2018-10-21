import React from 'react'

const Slide = ({ pic }) => {
	return (
		<div className="slide">
			<img src={pic} alt={pic} style={{ width: '100%', padding: '0 auto' }} />
		</div>
	)
}
export default Slide
