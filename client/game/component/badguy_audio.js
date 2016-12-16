export default function badGuyAudioComponent(spec) {

	var badGuyDeathAudio = document.getElementById("enemy_death")
	//badGuyAudio.src = spec.badGuyDeathAudio;

	function playAudio() {
		badGuyDeathAudio.play();
	}

	return Object.freeze ({
		playAudio: playAudio,
	})
}