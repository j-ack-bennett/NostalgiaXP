import React from 'react'
import Sound from 'react-sound'
import dialup from '../../server/public/aol.mp3'

// class Sounds extends Component {
// 	render() {
// 		return (
// 			<Sound
// 				url={dialup}
// 				playStatus={Sound.status.PLAYING}
// 				onLoading={this.handleSongLoading}
// 				onPlaying={this.handleSongPlaying}
// 				onFinishedPlaying={this.handleSongFinishedPlaying}
// 			/>
// 		)
// 	}
// }

// const SoundFile = () => {
// 		return (
// 			<>
// 			<Sound
// 				url={dialup}
// 				playStatus={Sound.status.PLAYING}
// 				// onLoading={this.handleSongLoading}
// 				// onPlaying={this.handleSongPlaying}
// 				// onFinishedPlaying={this.handleSongFinishedPlaying}
// 			/>
// 			</>
// 		)
// 	}

function SoundFile() {
	let audio = new Audio(dialup)
	console.log('audio', audio)

  const start = () => {
    audio.play()
  }

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}

export default SoundFile