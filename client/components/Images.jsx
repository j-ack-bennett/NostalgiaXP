import React from 'react'
import dialup from '../../server/public/dialup.mp3'
import startup from '../../server/public/xpstartup.mp3'

const Images = () => {

	let audio1 = new Audio(dialup)
	let audio2 = new Audio(startup)

	// const start1 = () => {
	// 	audio1.play()
	// }

	// const start2 = () => (
	// 	audio2.play()
	// )

	return (
		<>
			<div className='dialup' onClick={() => audio1.play()}>
				<img className='taskbar' src='/taskbar.png' />
			</div>
		<div className='startup' onClick={() => audio2.play()}></div>
			<img className='clippy' src='/clippy.png' />
			<div className='iconsFlexbox'>
				<img className='bin' src='/bin.png' />
				<img className='notepad' src='/notepad1.png' />
				{/* <img className='phone' src='/phone.png' /> */}
				<img className='search' src='/search.png' />
				<img className='settings' src='/settings.png' />
			</div>
		</>
	)
}

export default Images