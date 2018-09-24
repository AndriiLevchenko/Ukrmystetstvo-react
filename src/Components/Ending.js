import React from 'react';

const Ending = (props) =>{
	return(
		<div id='finishWide'>
	<div id='finish'>
	 	<h4>Український живопис</h4>
	 	<img id='pictureFinish' src='images\/Divchyna.png' alt=' '/>
	 	<p>Результат проходження тесту на знання українського образотворчого мистецтва становить<span> {props.result} </span> %. </p>
	 	<p>Бажаємо вам бути ще ближче до художньої справи і взагалі до мистецтва.</p>
	 	<button type='button' onClick={props.click}><span>ВІДПОВІДІ</span></button>
	 </div>
	 </div>
  		)
  	}
	export default Ending;