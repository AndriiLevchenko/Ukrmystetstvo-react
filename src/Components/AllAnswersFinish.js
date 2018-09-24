import React, {Component} from 'react';
import OneAnswerFinish from './OneAnswerFinish';



class AllAnswersFinish extends Component {
constructor(props) {
    super(props);
    this.state = {answersArray: this.props.statenew};
    console.log('не запускается  запущена хендлчейндж');
          console.log(this.state);		
  }
	render(){
		      console.log(this.state.answersArray);
		        console.log(this.props.statenew);
		return (		
			<div className='ending'>
	  			<h1>Українське образотворче мистецтво. Вірні відповіді.</h1>
	  			<div>
	  				{
	  					this.state.answersArray.map(function(item, i){
	  						return( <OneAnswerFinish key={i} number={item} ></OneAnswerFinish> );	
						}
						)
					}		
				</div>		
					 	
		 	<button type='button' onClick={this.props.click}><span>ПРОЙТИ ТЕСТ ЩЕ РАЗ</span></button>
	 		</div>
				
			)
		}
			
	

}

export default AllAnswersFinish;