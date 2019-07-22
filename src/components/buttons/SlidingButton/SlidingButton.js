import React from 'react'
import styles from './SlidingButton.module.css'
import {Link} from 'react-router-dom'


const slidingButton =(props)=>{
	return(
		<Link 
			to={props.path}
			className={styles.Container}
			onClick={props.click} 
		>
		  <p>
		  <span className={styles.Open}>
				
		    </span>
		    <span className={` ${styles.Close}`}>
		    	{props.name}
		    </span>
		    
		  </p>
		</Link>
	)
}


export default slidingButton