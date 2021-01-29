import React from 'react'
import dialup from '../../server/public/dialup.mp3'
import startup from '../../server/public/xpstartup.mp3'
import bin from '../../server/public/recycle.mp3'
import tada from '../../server/public/tada.mp3'
import ding from '../../server/public/ding.mp3'
import hardware from '../../server/public/hardwareinsert.mp3'
import bing from '../../server/public/bing.mp3'
import critical from '../../server/public/critical.mp3'
import msn from '../../server/public/msn.mp3'
import windows95 from '../../server/public/windows95.mp3'
import chord from '../../server/public/chord.mp3'
import exclamation from '../../server/public/exclamation.mp3'
import chimes from '../../server/public/chimes.mp3'
import aol from '../../server/public/aol.mp3'

const Images = () => {

	let audio1 = new Audio(dialup)
	let audio2 = new Audio(startup)
	let audio3 = new Audio(tada)
	let audio4 = new Audio(bin)
	let audio5 = new Audio(ding)
	let audio6 = new Audio(hardware)
	let audio7 = new Audio(bing)
	let audio8 = new Audio(critical)
	let audio9 = new Audio(msn)
	let audio10 = new Audio(windows95)
	let audio11 = new Audio(chord)
	let audio12 = new Audio(exclamation)
	let audio13 = new Audio(chimes)
	let audio14 = new Audio(aol)

	//note that audio1 etc. must be in numerical order (inside return) to work
	return (
		<>
      <img className='taskbar' src='/taskbar.png' />
			<div className='dialup' onClick={() => audio1.play()}></div>
			<div className='startup' onClick={() => audio2.play()}></div>
			<div className='msn' onClick={() => audio9.play()}></div>
			<div className='nineFive' onClick={() => audio10.play()}></div>
			<div className='chord' onClick={() => audio11.play()}></div>
			<div className='exclamation' onClick={() => audio12.play()}></div>
			<div className='chimes' onClick={() => audio13.play()}></div>
			<div className='aol' onClick={() => audio14.play()}></div>
			<img className='clippy' onClick={() => audio3.play()} src='/clippy.png' />
			<div className='iconsFlexbox'>
				<img className='bin' onClick={() => audio4.play()} src='/bin.png' />
				<img className='notepad' onClick={() => audio5.play()} src='/notepad1.png' />
				<img className='search' onClick={() => audio6.play()} src='/search.png' />
				<img className='settings' onClick={() => audio7.play()} src='/settings.png' />
			</div>
		<div className='link'>
		  <a href='https://geekprank.com/xp-simulator.php'>O</a> 
		</div>
            <img className='errorBox' onClick={() => audio8.play()} src='/error.png' />
		</>
	)
}

export default Images