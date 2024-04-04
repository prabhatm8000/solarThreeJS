const bgMusicAudioComponent = new Audio("./src/assets/audios/mainBg.mp3");
bgMusicAudioComponent.volume = 0.01;
bgMusicAudioComponent.loop = true;

export function playBgMusic() {
    bgMusicAudioComponent.play();
    bgMusicAudioComponent.autoplay = true;
}

const audioFileName = ["sun", "mercury", "venus", "earth", "mars", "astroideBelt", "jupiter", "saturn", "uranus", "neptune", "pluto"];
const textAudio = new Audio();
export const loadTextAudio = (index) => {
    textAudio.src = `./src/assets/audios/${audioFileName[index]}.wav`;
    textAudio.volume = 0.7;
}

export const textAudioPlaying = () => {
    return !textAudio.paused;
}

export const playTextAudio = () => {
    textAudio.play();
}

export const stopTextAudio = () => {
    textAudio.pause();
    textAudio.currentTime = 0;
}