import React from 'react';

function Amobii({character}){
	return(
		<div className="card">
			{/* Card Image */}
			<div className="amobiiImage-container">
				<img src={character.image} alt="Amobii Character"/>
			</div>
			{/* Card Info */}
			<h1>Name: {character.name}</h1>
			<h2>Amiibo Series: {character.amiiboSeries}</h2>
			<h2>Game Series: {character.gameSeries}</h2>
				
		</div>
	)
}

export default Amobii;