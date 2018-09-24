import React from 'react';

const Answer = (props) =>{
	const answer = props.answer;
	
			console.log(props);

	return(
		<label type='button' >{answer}</label>
		)
}


export default Answer
