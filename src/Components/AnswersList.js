import React, {Component} from 'react';
import Beginning from './Beginning';
import Picture from './Picture';
import Ending from './Ending';
import AllAnswersFinish from './AllAnswersFinish';


class AnswersList extends Component {
    state = {count: 0,
    		rightAnswers: 0, 
    		isOpenBeginning: true,
    		isOpenEnding: false,
    		isOpenFinish: false,
    		answersArray: []
    	}

    changeStateHandler = (e) => {
      	this.setState({count: this.state.count + 1});
      	//alert(e.target.id);

        if(e.target.id == this.props.answers[this.state.count].verity){
        		const arr = this.state.answersArray;
        		arr[arr.length]=this.state.count;
        		this.setState({answersArray: arr});

        	console.log(arr);
      		this.setState({rightAnswers: this.state.rightAnswers + 1});}
      	if(this.state.count == 24){
			this.setState({isOpenEnding:  !this.state.isOpenEnding});}
        }
     
	
	hideBeginning = () => {
		this.setState({isOpenBeginning:  !this.state.isOpenBeginning});
	}
	Finishing = () =>{
			this.setState({isOpenEnding:  !this.state.isOpenEnding,
			               isOpenFinish:  !this.state.isOpenFinish});
	}
	againBeginning = () => {
		this.setState({	count: 0,
    					rightAnswers: 0, 
    					isOpenBeginning: true,
    					isOpenEnding: false,
    					isOpenFinish: false,
    					answersArray: []});
	}




	changeStateChilren(){
    this.refs.chilren.setValue(this.state.answersArray)
}


	render(){
	const {answers} = this.props;
	console.log(this.state.rightAnswers);
		console.log(this.state.count);

		return (	
			
			<div>	
				{this.state.isOpenBeginning && <section><Beginning click={this.hideBeginning}/></section>}
				<h1> Українське образотворче мистецтво  </h1>
			<div className='picture'>		
				<div className='picture__Picture'><Picture src={answers[this.state.count].sorce} alt='virna' /></div>
				<div className='picture__Name'>{answers[this.state.count].denotation}</div>
			</div>
			 <div className='questions'>
    			<h4 id='question'>{answers[this.state.count].question}</h4>
			<ul>
		
				<li ><label type='button' id='0' onClick={this.changeStateHandler}>{answers[this.state.count].answer0} </label></li>
				<li ><label type='button' id='1' onClick={this.changeStateHandler}>{answers[this.state.count].answer1} </label></li>
				<li ><label type='button' id='2' onClick={this.changeStateHandler}>{answers[this.state.count].answer2} </label></li>
				<li ><label type='button' id='3' onClick={this.changeStateHandler}>{answers[this.state.count].answer3} </label></li>
				<li ><label type='button' id='4' onClick={this.changeStateHandler}>{answers[this.state.count].answer4} </label></li>
				<li ><label type='button' id='5' onClick={this.changeStateHandler}>{answers[this.state.count].answer5} </label></li>
			</ul>
			</div>
				{this.state.isOpenEnding && <section><Ending result={this.state.rightAnswers*4} click={this.Finishing}/></section>}
				{this.state.isOpenFinish && <section><AllAnswersFinish  ref="chilren" statenew={this.state.answersArray}  click={this.againBeginning} explain={answers[this.state.count].explanation} /></section>}
			</div>		
			)
		}
			
	

}

export default AnswersList;