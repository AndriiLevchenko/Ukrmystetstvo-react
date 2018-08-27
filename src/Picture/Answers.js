import React  from 'react';

var answers = (props) => {
	return 		<li><label type='button' id='ans0' onClick={props.click}>{props.answer}</label></li>
}

export default answers;