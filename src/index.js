import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class FoodItem extends React.Component{
	componentDidUpdate(){
		console.log("TEST");
		var element = document.getElementById("foodItem");
		console.log(element.classList);
		element.classList.add("fade");
	}
	render(){
		const food = this.props.food;
		return(
			<div className='foodItem' id='foodItem'>
				<div className = 'imgContainer'>
					<img src = {require("./images/"+food.image)}/>
				</div>
				<div className = 'lbl'>{food.label}</div>
				<div className = 'des'>{food.description}</div>
			</div>
			);
	}
}


class Navigation extends React.Component{
	render(){
		return(
			<li className={""+this.props.classes} onClick={this.props.onClick}>
		    </li>
		)
	}
}

class Comparison extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      navPos: 0,
	    };
	}

    handleNavClick(i){
	    this.setState({
	      navPos: i,
	  	});
	  	// var element = document.getElementsByClassName("foodItem");
  		// element.classList.remove("fade");
	  }
	renderNavDot(i) {
		const classes = (i == this.state.navPos) ? "dot name-active" : "dot";
	    return (<Navigation 
		    onClick={()=>this.handleNavClick(i)}
		    classes = {classes}
	    />
    );
  }

	render() {
		const navPos = this.state.navPos;
		if(navPos > 0){
			const usRows = <FoodItem
							food = {this.props.foods[(navPos-1)*2]}
						/>;
			const chinaRows = <FoodItem
								food = {this.props.foods[(navPos-1)*2+1]}
							   />;
			return(
				<div className='body'>
					<div className="sidebar">
			            <nav>
			                <ul>
			                    {this.renderNavDot(0)}
			                    {this.renderNavDot(1)}
			                    {this.renderNavDot(2)}
			                    {this.renderNavDot(3)}
			                    {this.renderNavDot(4)}
			                    {this.renderNavDot(5)}
			                    {this.renderNavDot(6)}
			                    {this.renderNavDot(7)}
			                </ul>
			            </nav>
			        </div>
					<span className = 'US'>
						{usRows}
					</span>
					<span className = 'China'>
						{chinaRows}
					</span>
					<div id="wiki">
						<a href = "http://creative.colorado.edu/~kewu0950/Wiki/"><img src = {require("./images/wiki.png")} alt="wiki"/></a>
					</div>
				</div>
			);
		}else{
			return(
				<div className='body'>
					<div className="sidebar">
			            <nav>
			                <ul>
			                    {this.renderNavDot(0)}
			                    {this.renderNavDot(1)}
			                    {this.renderNavDot(2)}
			                    {this.renderNavDot(3)}
			                    {this.renderNavDot(4)}
			                    {this.renderNavDot(5)}
			                    {this.renderNavDot(6)}
			                    {this.renderNavDot(7)}
			                </ul>
			            </nav>
			        </div>
					<div className = 'titlePage'>
						<div className='rightDecal'>
							<img id='right' src = {require("./images/right.png")}/>
						</div>
						<div className='title'>
							<img id='title' src = {require("./images/intro.png")}/>
						</div>
						<div className='leftDecal'>
							<img id='left' src = {require("./images/left.png")}/>
						</div>
					</div>
				</div>
			);
		}
	}
}

const FOODS = [
	{fromUS: true, image: "coffee.png", label: 'Coffee', description: 'Surveys from 2018 show that 64% of Americans drink coffee, but it only gained popularity among British colonists as a result of the Boston Tea Party in 1773.'},
	{fromUS: false, image: "tea.png", label: 'Tea', description: 'Tea originated in Southwest China, where it was used for medicinal purposes. It became popular as a recreational drink during the Chinese Tang Dynasty.'},
	{fromUS: true, image: "waffle.png", label: 'Waffles', description: 'Dutch colonists brought Waffle making to America in the early 1600s but the word "waffle" did not appear until the 18th century.'},
	{fromUS: false, image: "crepe.png", label: 'Jianbing', description: 'Jianbing is native to Northeast China and is one of the most popular street breakfasts in China. It is similar to crepes and literally translates to "fried pancake".'},
	{fromUS: true, image: "burger.png", label: 'Hamburger', description: 'The word "hamburger" was derived from German Hamburg steaks and has since become a well-known symbol of American cuisine. Americans consume about 13 billion hamburgers each year.'},
	{fromUS: false, image: "dumpling.png", label: 'Dumplings', description: 'Legend has it that Chinese stuffed dumplings were first invented by Zhang Zhongjian, during the Han Dynasty. He cooked them with healing herbs in an effort to relieve the people of his village from frostbite.'},
	{fromUS: true, image: "salad.png", label: 'Salad', description: 'The word "salad" is derived from the Latin "sal", which means salt, since raw vegitables were dressed with salt in ancient times. In the 1920s, salad became popular enough to devote entire recipe books to it.'},
	{fromUS: false, image: "noodles.png", label: 'Hot Dry Noodles', description: 'Hot dry noodles is a traditional dish in Central China. It only has a history in China of about 80 years and is unique because the noodles are not in soup, like most Asian noodle dishes.'},
	{fromUS: true, image: "pizza.png", label: 'Pizza', description: 'The word "pizza" was first used in Italy in 997 AD and was brought to the U.S. by Italian immigrants in the 19th century. Pizza was mostly consumed by immigrants until WWII when American troops started advertising a greater appreciation for it.'},
	{fromUS: false, image: "duck.png", label: 'Peking Duck', description: 'Peking duck dates back to the Yuan Dynasty and was one of the main dishes on the imperial court menus. As the duck became more popular among the upper class, it began inspiring poets and scholars.'},
	{fromUS: true, image: "steak.png", label: 'Steak', description: 'Beef is consumed around the world, but it is cut and cooked differently in each place. The most popular cut in America is the Tomahawk Steak, followed closely by Filet Mignon.'},
	{fromUS: false, image: "hotpot.png", label: 'Huo Guo', description: 'The English translation of Huo Guo is Hot Pot, which is a way of eating that people enjoy together. Folklore states that Emperor Qianlong loved it during the Qing Dynasty and often provided it at banquets.'},
	{fromUS: true, image: "brownie.png", label: 'Brownies', description: 'The first use of the word "brownie" to describe a desert was in 1896 for a molasses cake recipe. Since then, it has been given to the baked chocolate desert, and has even appeared in calendars for National Brownie Day on December 8th.'},
	{fromUS: false, image: "ricedumpling.png", label: 'Zongzi', description: 'Zongzi are rice dumplings that were created to commemorate a famous Chinese poet Qu Yuan. Legend has it that packs of rice were thrown into the river after Qu Yuan drowned himself in it, to prevent fish from eating his body.'}
];

ReactDOM.render(
	<Comparison foods = {FOODS} />,
	document.getElementById('root')
	);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
