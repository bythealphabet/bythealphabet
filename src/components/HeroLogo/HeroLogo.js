import React from 'react'
import styles from './HeroLogo.module.css'
import Aux from '../../hoc/_Aux'
import logo from '../../assets/img/logo.png'
import Tilt from 'react-tilt'
import {Link} from 'react-router-dom'


const heroLogo =({pages})=>{
	
	let hero
	if(pages){
		
		hero = (
			<div className={`  ${styles.Center}`}>
				<div className={`center  ${styles.Container}`}>
					<Link to={"/"} >
						<figure className="image center">
						  <img src={logo} alt="bythealphabet.com logo img"/>
						</figure>
					</Link>
				   
				</div>
			</div>
			
		)
		
	}else{
		hero = (
			<div className={`  ${styles.ContainerPages}`}> 
			  <Tilt className="Tilt" options={{ max : 50 }} >
			   <div className="Tilt-inner">
			  <Link to={"/"} >
			   	<figure className="image center">
			   		   <img src={logo} alt="bythealphabet.com logo img"/>
			   		 </figure>
			   </Link>
			   		 
			   </div>
			  </Tilt>
			</div>
		)
	}

	return(
		<Aux>
			{hero}
		</Aux>
		    
	)
}


export default heroLogo


