import React, { useState } from 'react';

function Search() {
	const [amiiboText, setAmiiboText] = useState("");

	const changeHandler = e => {
		console.log(e.target.value)
		setAmiiboText(e.target.value);
	}
	
	const submitHandler = e => {
		e.preventDefault()
		// Call dispatcher here to search for an amiibo and pass in amiiboText state to the dispatcher
		console.log(amiiboText.toLocaleLowerCase())
	}

	return (
		<form onSubmit={submitHandler}>
			<input 
				type="text"
				value={amiiboText}
				onChange={changeHandler}
				/>
			<button>Search!</button>
		</form>
	)
}

export default Search;