import React, { useState } from 'react';
import logo from './logo.svg';
import './Toggle.css';

function Toggle() {

	const [shown, setShown] = useState(true);

	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={() => setShown(!shown)}>Show / Hide</button>
			<div className="Toggle__logo-wrapper">
				{shown && <img src={logo} alt="logo" />}
			</div>
		</div>
	)
}

export default Toggle;
