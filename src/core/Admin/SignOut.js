import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../../actions'




const byTheAlphabet =(props)=>{
	const handleSignOut = () =>{
		return props.signOut()
	}

	return(
		<button className="button" onClick={handleSignOut}>Sign Out</button>
	)
}


export default connect(null,{signOut})(byTheAlphabet)