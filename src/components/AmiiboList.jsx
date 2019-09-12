import React, { useEffect } from 'react';
import uuid from 'uuid/v1';
// Component
import Amiibo from './Amiibo';
// Bring in connect to connect to the store
import { connect } from 'react-redux'
// Pull in the action creator
import { getAmiibo } from '../store/actions'

function AmiiboList({getAmiibo, amiiboData, isFetching, error}) {
	// Run a request when the component mounts
	// useEffect(() => {
	// 	getAmiibo()
	// }, [getAmiibo])

	return(
		<React.Fragment>
			{amiiboData.map(character =>  <Amiibo key={uuid()} character={character}/>)}
		</React.Fragment>
	)
}

const mapStateToProps = state => {
	return {
		amiiboData: state.amiiboData,
		isFetching: state.isFetching,
		error: state.error
	}
}

export default connect(mapStateToProps, {getAmiibo})(AmiiboList);