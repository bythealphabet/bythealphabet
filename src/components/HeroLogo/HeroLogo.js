import React from 'react'
import styles from './HeroLogo.module.css'
import threedlogo from '../../assets/img/3dlogo.png'
import twodlogo from '../../assets/img/2dlogo.png'
import Tilt from 'react-tilt'
import {Link} from 'react-router-dom'


const heroLogo =({pages})=>{
	
	let hero
	if(pages){
		
		hero = (
			<div className={`hero-body  ${styles.Center}`}>
				<div className={`center  ${styles.Container}`}>
				   <figure className="image center">
				     <img src={threedlogo} alt="bythealphabet.com logo img"/>
				   </figure>
				</div>
			</div>
			
		)
		
	}else{
		hero = (
			<div className={`  ${styles.ContainerPages}`}> 
			  <Tilt className="Tilt" options={{ max : 50 }} >
			   <div className="Tilt-inner">
			   		 <figure className="image center">
			   		   <img src={twodlogo} alt="bythealphabet.com logo img"/>
			   		 </figure>
			   </div>
			  </Tilt>
			</div>
		)
	}

	return(
		<Link to={"/"} >
		    {hero}
	  	</Link>
	)
}


export default heroLogo

