import React from 'react'
import styles from './ArticleImg.module.css'


const articleImg =(props)=>{
	return(
		<div className={` section ${styles.Main} `}>
			<div className={`  ${styles.Container} `}>
				<img src={props.children} alt={props.alt}/>	
			</div>
		</div>
		
	)
}


export default articleImg