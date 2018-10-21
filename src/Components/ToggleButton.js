import React from 'react'

const ToggleButton = props => (
	<button className="toggle-button" onClick={props.click}>
		<i className="fas fa-caret-square-down" />
	</button>
)
export default ToggleButton
