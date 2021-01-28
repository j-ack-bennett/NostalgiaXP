import React from 'react'
import SoundFile from './Sounds'
import dialup from '../../server/public/aol.mp3'


const Images = () => {
    let audio = new Audio(dialup)
	console.log('audio', audio)

  const start = () => {
    audio.play()
  }

    return (
        <>
        <div onClick={start} className='object'>
            <img className='taskbar' src='/taskbar.png'/>
        </div>
        </>
    )
}

export default Images