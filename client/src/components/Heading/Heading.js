import React from 'react'
import styles from './Heading.module.css'


const heading =(props)=>{
	return(
		<div className={`section ${styles.MainH} `}>
			<h1>
				{props.children}
			</h1>	
		</div>
	)
}


export default heading