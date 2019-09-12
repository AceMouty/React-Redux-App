import React, { useState } from 'react';
// Connection to the Redux store
import { connect } from 'react-redux';
// Action Creator
import { getAmiibo } from '../store/actions';

function Search({getAmiibo}) {
	const [amiiboText, setAmiiboText] = useState("");

	const changeHandler = e => {
		console.log(e.target.value)
		setAmiiboText(e.target.value);
	}
	
	const submitHandler = e => {
		e.preventDefault()
		// Call dispatcher here to search for an amiibo and pass in amiiboText state to the dispatcher
		console.log(amiiboText.toLocaleLowerCase())
		getAmiibo(amiiboText.toLocaleLowerCase())
	}

	return (
		<form onSubmit={submitHandler}>
			<input 
				type="text"
				placeholder="Search an Amiibo"
				value={amiiboText}
				onChange={changeHandler}
				/>
			<button>Search!</button>
		</form>
	)
}

export default connect(null, {getAmiibo})(Search);