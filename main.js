import './style.css';
import './src/effects/audios';

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// mesh
import { Stars, SunGroup, MercuryGroup, VenusGroup, EarthGroup, MarsGroup, JupiterGroup, SaturnGroup, UranusGroup, NeptuneGroup, PlutoGroup, AstroBelt } from "./src/Planets";

// controls
import { Controls } from './src/Controls';

// Scene
const scene = new THREE.Scene();

const stars = Stars();
scene.add(stars);

const planets = new THREE.Group();

const sunGroup = SunGroup();
planets.add(sunGroup);

const mercuryGroup = MercuryGroup();
planets.add(mercuryGroup);

const venusGroup = VenusGroup();
planets.add(venusGroup);

const earthGroup = EarthGroup();
planets.add(earthGroup);

const marsGroup = MarsGroup();
planets.add(marsGroup);

const astroGroup = await AstroBelt();
planets.add(astroGroup);

const jupiterGroup = JupiterGroup();
planets.add(jupiterGroup);

const saturnGroup = SaturnGroup();
planets.add(saturnGroup);

const uranusGroup = UranusGroup();
planets.add(uranusGroup);

const neptuneGroup = NeptuneGroup();
planets.add(neptuneGroup);

const plutoGroup = PlutoGroup();
planets.add(plutoGroup);

planets.position.set(0, -100, 0);
scene.add(planets);

const light = new THREE.AmbientLight(0xffbf00, 0.1);
light.position.set(0, 0, 10);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.position.set(1000, 200, 10);
// added the camera to scene
scene.add(camera);

Controls(planets, camera);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(2);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
// for restrain against motion (makes it look smooth)
controls.enableDamping = true;
controls.enablePan = true;
controls.maxZoom = 600;

// autoresize when window is resized
window.addEventListener("resize", () => {
    // Updating camera and renderer size
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

const loadingScreen = document.getElementById('loadingScreen');
// actual rendering is done here
const render = () => {
    // can relate this to game loop
    controls.update();
    // console.log(camera.position);
    sunGroup.rotation.y += 0.001;
    mercuryGroup.rotation.y += 0.001;
    venusGroup.rotation.y += 0.001;
    earthGroup.rotation.y += 0.001;
    marsGroup.rotation.y += 0.001;
    astroGroup.rotation.y -= 0.0001;
    jupiterGroup.rotation.y += 0.001;
    saturnGroup.rotation.y += 0.001;
    uranusGroup.rotation.y += 0.001;
    neptuneGroup.rotation.y += 0.001;
    plutoGroup.rotation.y += 0.001;

    loadingScreen.style.display = 'none';
    renderer.render(scene, camera);
}

function animate() {
    render();
    window.requestAnimationFrame(animate);
}

animate();