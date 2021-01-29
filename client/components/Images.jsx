import React from 'react'
import dialup from '../../server/public/dialup.mp3'
import startup from '../../server/public/xpstartup.mp3'
import bin from '../../server/public/recycle.mp3'
import tada from '../../server/public/tada.mp3'
import ding from '../../server/public/ding.mp3'
// import bin from '../../server/public/recycle.mp3'
// import tada from '../../server/public/tada.mp3'

const Images = () => {

	let audio1 = new Audio(dialup)
	let audio2 = new Audio(startup)
	let audio3 = new Audio(tada)
	let audio4 = new Audio(bin)
	let audio5 = new Audio(ding)
	// let audio6 = new Audio(search)
	// let audio7 = new Audio(settings)


	//note that audio1 etc. must be in numerical order (inside return) to work
	return (
		<>
            <img className='taskbar' src='/taskbar.png' />
			<div className='dialup' onClick={() => audio1.play()}></div>
			<div className='startup' onClick={() => audio2.play()}></div>
			<img className='clippy' onClick={() => audio3.play()} src='/clippy.png' />
			<div className='iconsFlexbox'>
				{/* <img className='bin' src='/bin.png' />
				<img className='notepad' src='/notepad1.png' />
				<img className='search' src='/search.png' />
            <img className='settings' src='/settings.png' /> */}
				<img className='bin' onClick={() => audio4.play()} src='/bin.png' />
				<img className='notepad' onClick={() => audio5.play()} src='/notepad1.png' />
				<img className='search' onClick={() => audio6.play()} src='/search.png' />
				<img className='settings' onClick={() => audio7.play()} src='/settings.png' />
			</div>
            <img className='errorBox' src='/error.png' />
		</>
	)
}

export default Images