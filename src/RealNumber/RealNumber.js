import React, { useEffect, useState } from 'react';
import './RealNumber.css';

function RealNumber() {

	const [value, setValue] = useState('');
	const [isNum, setIsNum] = useState(true);

	useEffect(() => {
		if(/^\d+$/.test(value)) {
			setIsNum(true)
		} else {
			setIsNum(false)
		}
	}, [value])


	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" value={value} onChange={e => setValue(e.target.value)} />
			{isNum && <button>Submit</button>}
		</div>
	)
}

export default RealNumber;
