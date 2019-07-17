import React from "react";
import {connect} from 'react-redux'
import {fetchArticles} from '../../actions'

class byTheAlphabet extends React.Component {
	componentDidMount(){
		this.props.fetchArticles()
	}
	render() {
		return <div className={` `}>byTheAlphabet</div>;
	}
}

export default connect(null, {fetchArticles})(byTheAlphabet)