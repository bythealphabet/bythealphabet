import React from "react";
import {Link} from 'react-router-dom'
import styles from './ArticleCard.module.css'

const articleCard = props => {
	return (
		<div className={`card ${styles.Card}`} >
			<div className="card-image">
			<Link to={props.path}>
				<figure className="image is-4by3">
					<img src={props.image} alt={props.title} />
				</figure>
			</Link>
				
			</div>

			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<h5 className="title is-5">{props.title}</h5>
					</div>
				</div>
				<div className="">
					{props.intro}
					<br />
					<time>{props.created }</time>

				</div>
				{props.children}
			</div>
		</div>
	);
};

export default articleCard;
