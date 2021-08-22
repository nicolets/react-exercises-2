import React, { useState } from 'react';

const CeateTask = props => {

    const [value, setValue] = useState('');

	function onSubmit(event) {
		event.preventDefault();
		if(value.trim().length === 0) {
			return;
		}
        props.onAdd(value);
        setValue('');
	}

    return (
        <div>
            <form onSubmit={onSubmit}>
				<input placeholder="Your task..." value={value} onChange={e => setValue(e.target.value)} /> 
				<button>Add task</button>
			</form>
        </div>
    );
};

export default CeateTask;