import React, { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {

	const [time, setTime] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(time => time + 1)
		}, 1000)

		return () => clearInterval(timer);
	}, [])

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{time}</div>
		</div>
	)
}

export default Timer;
