import React from 'react'
import styles from './Para.module.css'


const para =(props)=>{
	return(
		<section className={` ${styles.Section} `}>
			<div className={` ${styles.Container} `}>
				<div className="content">
					<h3>
						{props.children}
					</h3>
				</div>
			</div>
		</section>
	)
}


export default para