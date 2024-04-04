import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getGlow } from "./effects/glow";

// textures
const textureLoader = new THREE.TextureLoader();
const starTexture = textureLoader.load("./src/assets/textures/8k_stars.jpg");
const sunTexture = textureLoader.load("./src/assets/textures/8k_sun.jpg");
const mercuryTexture = textureLoader.load("./src/assets/textures/mercurymap.jpg");
const venusTexture = textureLoader.load("./src/assets/textures/8k_venus.jpg");
const earthTexture = textureLoader.load("./src/assets/textures/8k_earth_daymap.jpg");
const earthCloudTexture = textureLoader.load("./src/assets/textures/8k_earth_clouds.jpg");
const earthLightTexture = textureLoader.load("./src/assets/textures/8k_earth_nightmap.jpg");
const moonTexture = textureLoader.load("./src/assets/textures/moonmap1k.jpg");
const marsTexture = textureLoader.load("./src/assets/textures/8k_mars.jpg");
const jupiterTexture = textureLoader.load("./src/assets/textures/8k_jupiter.jpg");
const saturnTexture = textureLoader.load("./src/assets/textures/8k_saturn.jpg");
const uranusTexture = textureLoader.load("./src/assets/textures/2k_uranus.jpg");
const neptuneTexture = textureLoader.load("./src/assets/textures/2k_neptune.jpg");
const plutoTexture = textureLoader.load("./src/assets/textures/plutomap1k.jpg");

// models
const loader = new GLTFLoader();

export const Stars = () => {
    const geometry = new THREE.SphereGeometry(600);
    const material = new THREE.MeshStandardMaterial({
        map: starTexture,
        side: THREE.BackSide,
    });

    const starsMesh = new THREE.Mesh(geometry, material);
    return starsMesh;
}

export const SunGroup = () => {
    const sunGroup = new THREE.Group();
    sunGroup.position.set(0, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(10, 10);

    const material = new THREE.MeshPhongMaterial({
        map: sunTexture,
        emissive: 0xcccccc,
        emissiveIntensity: 2,
        emissiveMap: sunTexture
    });

    const sunMesh = new THREE.Mesh(geometry, material);
    sunGroup.add(sunMesh);

    const light = new THREE.PointLight(0xffffff, 10000, 10000);
    light.position.set(0, 0, 0);
    sunGroup.add(light);

    const glowMaterial = getGlow();
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    sunGroup.add(glowMesh);

    return sunGroup;
}

export const MercuryGroup = () => {
    const mercuryGroup = new THREE.Group();
    mercuryGroup.position.set(-20, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(0.8, 10);

    const material = new THREE.MeshPhongMaterial({
        map: mercuryTexture,
    });

    const mercuryMesh = new THREE.Mesh(geometry, material);
    mercuryGroup.add(mercuryMesh);

    return mercuryGroup;
}

export const VenusGroup = () => {
    const venusGroup = new THREE.Group();
    venusGroup.position.set(-40, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(1.2, 10);

    const material = new THREE.MeshPhongMaterial({
        map: venusTexture,
    });

    const venusMesh = new THREE.Mesh(geometry, material);
    venusGroup.add(venusMesh);

    const glowMaterial = getGlow({ facingHex: 0xD2A05E, scale: 5.5 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    venusGroup.add(glowMesh);

    return venusGroup;
}

export const EarthGroup = () => {
    const earthGroup = new THREE.Group();
    earthGroup.position.set(-60, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(1.4, 10);

    const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        opacity: 0.75
    });

    const earthMesh = new THREE.Mesh(geometry, material);
    earthGroup.add(earthMesh);

    const earthLightMaterial = new THREE.MeshPhongMaterial({
        map: earthLightTexture,
        // blending: THREE.AdditiveBlending,
        blendAlpha: THREE.AdditiveBlending,
        opacity: 1
    });

    const earthLightMesh = new THREE.Mesh(geometry, earthLightMaterial);
    earthLightMesh.scale.set(1, 1, 1);
    earthGroup.add(earthLightMesh);

    const cloudsMaterial = new THREE.MeshPhongMaterial({
        map: earthCloudTexture,
        blending: THREE.AdditiveBlending,
        opacity: 0.4,
    });

    const cloudsMesh = new THREE.Mesh(geometry, cloudsMaterial);
    cloudsMesh.scale.set(1.01, 1.01, 1.01);
    earthGroup.add(cloudsMesh);

    const glowMaterial = getGlow({ rimHex: 0x222222, facingHex: 0x5676B4, scale: 5.6 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    earthGroup.add(glowMesh);

    const moonGeometry = new THREE.IcosahedronGeometry(1.4, 10);
    const moonMaterial = new THREE.MeshPhongMaterial({
        map: moonTexture,
        opacity: 0.75
    });
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);

    moonMesh.position.set(4, 0, 10);
    moonMesh.scale.set(0.6, 0.6, 0.6);

    earthGroup.add(moonMesh);

    return earthGroup;
}

export const MarsGroup = () => {
    const marsGroup = new THREE.Group();
    marsGroup.position.set(-80, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(1.1, 10);

    const material = new THREE.MeshPhongMaterial({
        map: marsTexture,
    });

    const marsMesh = new THREE.Mesh(geometry, material);
    marsGroup.add(marsMesh);

    const glowMaterial = getGlow({ facingHex: 0xdb8254, scale: 5.5 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    marsGroup.add(glowMesh);

    return marsGroup;
}

export const AstroBelt = async () => {
    const astroGroup = new THREE.Group();
    astroGroup.position.set(0, -1, 0);

    const numberOfRings = 25;
    const radius = 90;

    const astroideModel = await loader.loadAsync(
        "./src/assets/models/astroide/scene.gltf",
    );
    // Iterate over each sphere
    for (let n = 0; n < numberOfRings; n += 1) {
        const numberOfSpheres = 100 + Math.round(Math.random() * 100);
        for (let i = 0; i < numberOfSpheres; i++) {
            const angle = (i / numberOfSpheres) * Math.PI * 2;

            const x = Math.cos(angle) * (radius + n * Math.random());
            const y = Math.random() * 2;
            const z = Math.sin(angle) * (radius + n * Math.random());

            const astroModel = new THREE.Group();
            astroModel.position.set(x, y, z)
            astroModel.scale.set(0.01, 0.01, 0.01);
            astroModel.add(astroideModel.scene.clone());
            astroGroup.add(astroModel);
        }
    }

    return astroGroup;
}

export const JupiterGroup = () => {
    const jupiterGroup = new THREE.Group();
    jupiterGroup.position.set(-120, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(4, 10);

    const material = new THREE.MeshPhongMaterial({
        map: jupiterTexture,
    });

    const jupiterMesh = new THREE.Mesh(geometry, material);
    jupiterGroup.add(jupiterMesh);

    const glowMaterial = getGlow({ facingHex: 0x9F9083, scale: 4.0 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    jupiterGroup.add(glowMesh);

    return jupiterGroup;
}

export const SaturnGroup = async() => {
    const saturnGroup = new THREE.Group();
    saturnGroup.position.set(-140, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(2.8, 10);

    const material = new THREE.MeshPhongMaterial({
        map: saturnTexture,
    });

    const saturnMesh = new THREE.Mesh(geometry, material);
    saturnGroup.add(saturnMesh);

    const glowMaterial = getGlow({ facingHex: 0x9F9083, scale: 5.0 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    saturnGroup.add(glowMesh);

    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, -0.1, 0);

    const astroideModel = await loader.loadAsync(
        "./src/assets/models/astroide/scene.gltf",
    );

    const radius = 5; // Radius of the ring
    // Iterate over each sphere
    for (let n = 1; n <= 6; n++) {
        const numberOfSpheres = 500 + Math.round(Math.random() * 100);
        for (let i = 0; i < numberOfSpheres; i++) {
            const angle = (i / numberOfSpheres) * Math.PI * 2;

            const x = Math.cos(angle) * (radius + n * Math.random());
            const y = Math.random() * 0.2;

            const z = Math.sin(angle) * (radius + n * Math.random());
            const astroModel = new THREE.Group();
            astroModel.position.set(x, y, z)
            astroModel.scale.set(0.003, 0.003, 0.003);
            astroModel.add(astroideModel.scene.clone());
            ringGroup.add(astroModel);
        }
    }

    saturnGroup.add(ringGroup);
    return saturnGroup;
}

export const UranusGroup = () => {
    const uranusGroup = new THREE.Group();
    uranusGroup.position.set(-160, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(2.2, 10);

    const material = new THREE.MeshPhongMaterial({
        map: uranusTexture,
    });

    const uranusMesh = new THREE.Mesh(geometry, material);

    uranusGroup.add(uranusMesh);

    const glowMaterial = getGlow({ facingHex: 0xB1E4EB, scale: 4.0 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    uranusGroup.add(glowMesh);


    return uranusGroup;
}

export const NeptuneGroup = () => {
    const neptuneGroup = new THREE.Group();
    neptuneGroup.position.set(-180, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(2.3, 10);

    const material = new THREE.MeshPhongMaterial({
        map: neptuneTexture,
    });

    const neptuneMesh = new THREE.Mesh(geometry, material);

    neptuneGroup.add(neptuneMesh);

    const glowMaterial = getGlow({ facingHex: 0x3F76CE, scale: 4.0 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(1.5);
    neptuneGroup.add(glowMesh);


    return neptuneGroup;
}

export const PlutoGroup = () => {
    const plutoGroup = new THREE.Group();
    plutoGroup.position.set(-200, 0, 0);

    const geometry = new THREE.IcosahedronGeometry(0.8, 10);

    const material = new THREE.MeshPhongMaterial({
        map: plutoTexture,
    });

    const plutoMesh = new THREE.Mesh(geometry, material);
    plutoGroup.add(plutoMesh);

    const glowMaterial = getGlow({ facingHex: 0x403B35, scale: 4.0 });
    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.setScalar(2);
    plutoGroup.add(glowMesh);

    return plutoGroup;
}