import React from "react";
import HeroLogo from "../../components/HeroLogo/HeroLogo";
import FrontPage from "../../components/FrontPage/FrontPage";
import SlidingButton from '../../components/buttons/SlidingButton/SlidingButton'

const pagesArray = [
	{name: "Articles", path: "/articles"},
	{name: "Web Developer's path", path:"/developer-path"},
	// {name: "Learn HTML", path: "/learn-html"},
	{name: "My Gallery", path:"/gallery"},
	{name: "Book Case", path:"/book-case"},
	// {name: "Games", path:"/games"},
];

const renderButtons = () =>{	
  const buttons =  pagesArray.map((i)=>{
      return(
          <SlidingButton
          	key={i.name.toString()}
            name={i.name}
            path={i.path}
          />
        )
    })
	return buttons		       
}


const Home = props => {
	const index = true;
	return (
		<div className={` `}>
			<HeroLogo pages={index} />
			<FrontPage right={renderButtons()} />
		</div>
	);
};

export default Home;
