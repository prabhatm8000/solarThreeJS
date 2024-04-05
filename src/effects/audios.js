import bgMusic from "../assets/audios/mainBg.mp3";
const bgMusicAudioComponent = new Audio(bgMusic);
bgMusicAudioComponent.volume = 0.01;
bgMusicAudioComponent.loop = true;

export function playBgMusic() {
    bgMusicAudioComponent.play();
    bgMusicAudioComponent.autoplay = true;
}

import sunAudio from "../assets/audios/sun.wav";
import mercuryAudio from "../assets/audios/mercury.wav";
import venusAudio from "../assets/audios/venus.wav";
import earthAudio from "../assets/audios/earth.wav";
import marsAudio from "../assets/audios/mars.wav";
import astroideBeltAudio from "../assets/audios/astroideBelt.wav";
import jupiterAudio from "../assets/audios/jupiter.wav";
import saturnAudio from "../assets/audios/saturn.wav";
import uranusAudio from "../assets/audios/uranus.wav";
import neptuneAudio from "../assets/audios/neptune.wav";
import plutoAudio from "../assets/audios/pluto.wav";
const audioFile = [
    sunAudio,
    mercuryAudio,
    venusAudio,
    earthAudio,
    marsAudio,
    astroideBeltAudio,
    jupiterAudio,
    saturnAudio,
    uranusAudio,
    neptuneAudio,
    plutoAudio,
];
const textAudio = new Audio();
export const loadTextAudio = (index) => {
    textAudio.src = audioFile[index];
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