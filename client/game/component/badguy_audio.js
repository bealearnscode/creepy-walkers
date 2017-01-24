export default function badGuyAudioComponent(spec) {
	var badGuyDeathAudio = document.getElementById("enemy_death");

	function playAudio() {
		badGuyDeathAudio.volume = 0.5;
		badGuyDeathAudio.play();
	}

	return Object.freeze ({
		playAudio: playAudio,
	});
}