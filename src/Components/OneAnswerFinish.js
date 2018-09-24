import React from 'react';
import Picture from './Picture';
import answers from '../fixtures';


const OneAnswerFinish = (props) =>{
console.log(answers[props.number].sorce);
	return(
    <section>
  			<h1></h1>
  			<div className='stro'>
    				<div className='stro__i'>{props.number+1}</div>
    				<div className='stro__foto'><Picture src={answers[props.number].sorce} alt='virna' /></div>
    				<div className='stro__Answer'>{answers[props.number].explanation}</div>  		
  			</div>
    </section>
  	)
  	}
	export default OneAnswerFinish;