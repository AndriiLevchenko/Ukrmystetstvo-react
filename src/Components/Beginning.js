import React from 'react';

const Beginning = (props) =>{
	return(
		<div>
<h1> Українське образотворче мистецтво  </h1>
  	<div className='beginning'>
  		<h1>Українське образотворче мистецтво</h1>
  		<p>Розвиток образотворчого мистецтва в Україні веде відлік із прадавніх часів. Знахідки археологів, зокрема, періоду трипільської та скіфської культур, вирізняються майстерною технікою виконання і засвідчують високий мистецький рівень витворів тодішніх жителів сучасної території України. </p>
  		<p>Звідти і дотепер українська традиція подарувала ціле гроно талановитих майстрів живопису, які у своїй творчості розвивають барвисті й фантастичні образи, породжені уявою та реалізовані за законами стилістики народного малярства, українського декоративного розпису, сучасних образотворчіх законів.</p>
  		<p>Ви маєте змогу пройти тест на знання Українського образосворчого мистецтва, який дозволить перевірити свої знання по згаданій темі та підвищити свою обізнаність в неповторному барвистому світі образотворчого мистецтва. Загальна кількість питань: 25.</p>
      

  		<button type='button' onClick={props.click}>Тест</button>
  	</div>
  	</div>
  	)
  }
  export default Beginning;