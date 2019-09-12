import React, { useEffect } from 'react';
// Component
import Amobii from './Amobii';
// Bring in connect to connect to the store
import { connect } from 'react-redux'
// Pull in the action creator
import { getAmiibo } from '../store/actions'

function AmiiboList({getAmiibo}) {
	// Run a request when the component mounts
	// useEffect(() => {
	// 	getAmiibo()
	// }, [getAmiibo])

	return(
		<React.Fragment>
			<Amobii />
		</React.Fragment>
	)
}

const mapStateToProps = state => {
	return {
		amobiiData: state.amobiiData,
		isFetching: state.isFetching,
		error: state.error
	}
}
export default connect(null, {getAmiibo})(AmiiboList);