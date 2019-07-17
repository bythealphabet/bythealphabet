import React from 'react'
import styles from './Footer.module.css'


const footer =(props)=>{
	return(
		
			<div className={`footer ${styles.Footer}`}>			
				<div className={`content ${styles.Content} `}>
					<p>BytheAlphabet NV. All rights reserved. BytheAlphabet,</p> 
					<p>BytheAlphabet logo, and bythealphabet.com are trademarks of</p> 
					<p>BytheAlphabet NV.</p>
				</div>	
			</div>
	
	)
}


export default footer