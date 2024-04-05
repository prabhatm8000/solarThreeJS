import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { planetNames, planetsData, units } from "./data/planetsData";
import { loadTextAudio, playBgMusic, playTextAudio, stopTextAudio } from "./effects/audios";

gsap.registerPlugin(MotionPathPlugin);
const tl = gsap.timeline({ defaults: { duration: 1.5 } });
let animationFlag = false;
const maxIndex = 10;
let index = 0;

export function Controls(group, camera) {
    async function cameraAnimation(index) {
        switch (index) {
            case 0:
                // sun
                await tl.to(camera.position, { x: 50, y: 50, z: 50 });
                break;
            case 1:
                // mercury
                await tl.to(camera.position, { x: 5, y: 5, z: 20 });
                break;
            case 2:
                // venus
                await tl.to(camera.position, { x: 20, y: 20, z: 20 });
                break;
            case 3:
                // earth
                await tl.to(camera.position, { x: 15, y: 15, z: 15 });
                break;
            case 4:
                // mars
                await tl.to(camera.position, { x: 10, y: 10, z: 10 });
                break;
            case 5:
                // astrobelt
                await tl.to(camera.position, { x: 30, y: 10, z: 60 });
                break;
            case 6:
                // jupiter
                await tl.to(camera.position, { x: 15, y: 3, z: -24 });
                break;
            case 7:
                // saturn
                await tl.to(camera.position, { x: 18, y: 18, z: 36 });
                break;
            case 8:
                // uranus
                await tl.to(camera.position, { x: 20, y: 20, z: 20 });
                break;
            case 9:
                // neptune
                await tl.to(camera.position, { x: 20, y: 20, z: 20 });
                break;
            case 10:
                // pluto
                await tl.to(camera.position, { x: 4, y: 2, z: -8 });
                break;
            default:
                await tl.to(camera.position, { x: 30, y: 30, z: 30 });
        }
    }

    const planetBtns = document.getElementById("planetBtns");
    const gotoBtn = document.getElementById('gotoBtn');

    let autohideTimeoutId;
    gotoBtn.onclick = () => {
        if (planetBtns.classList.contains("show")) {
            // planetBtns.style.display = "flex";
            planetBtns.classList.remove('show');
            clearTimeout(autohideTimeoutId);
            autohideTimeoutId = undefined;
        } else {
            // planetBtns.style.display = "none";
            planetBtns.classList.add('show');

            // autohide after 10s
            autohideTimeoutId = setTimeout(() => {
                planetBtns.classList.remove('show');
            }, 10000);
        }
    };

    // planets btns
    // #region
    const sun = document.getElementById('sun');
    sun.onclick = moveByIndex;
    const mercury = document.getElementById('mercury');
    mercury.onclick = moveByIndex;
    const venus = document.getElementById('venus');
    venus.onclick = moveByIndex;
    const earth = document.getElementById('earth');
    earth.onclick = moveByIndex;
    const mars = document.getElementById('mars');
    mars.onclick = moveByIndex;
    const astroideBelt = document.getElementById('astroideBelt');
    astroideBelt.onclick = moveByIndex;
    const jupiter = document.getElementById('jupiter');
    jupiter.onclick = moveByIndex;
    const saturn = document.getElementById('saturn');
    saturn.onclick = moveByIndex;
    const uranus = document.getElementById('uranus');
    uranus.onclick = moveByIndex;
    const neptune = document.getElementById('neptune');
    neptune.onclick = moveByIndex;
    const pluto = document.getElementById('pluto');
    pluto.onclick = moveByIndex;
    // #endregion

    const changeNavTitle = (index) => {
        const navTitle = document.getElementById("navTitle")
        navTitle.innerText = planetNames[index];
    }

    const changeDetail = (index) => {
        const desc = document.getElementById("desc");
        const planet = planetsData[index];
        desc.innerText = planet.desc;
        const props = document.getElementById("props");
        if (index === 0) {
            // sun
            props.innerHTML = `
            <div class="prop">
                <span>Density:</span>
                <span>${planet.density}</span>
            </div>
            <div class="prop">
                <span>Diameter:</span>
                <span>${planet.diameter}</span>
            </div>
            <div class="prop">
                <span>Escape Velocity:</span>
                <span>${planet.escapeVelocity}</span>
            </div>
            <div class="prop">
                <span>Gravity:</span>
                <span>${planet.gravity}</span>
            </div>
            <div class="prop">
                <span>Length of Day:</span>
                <span>${planet.lengthOfDay}</span>
            </div>
            <div class="prop">
                <span>Mass:</span>
                <span>${planet.mass}</span>
            </div>
            <div class="prop">
                <span>Mean Temperature:</span>
                <span>${planet.meanTemperature}</span>
            </div>
            <div class="prop">
                <span>Surface Pressure:</span>
                <span>${planet.surfacePressure}</span>
            </div>
            `;
        } else if (index === 5) {
            props.innerHTML = "";
        } else {
            props.innerHTML = `
            <div class="prop">
                <span>Aphelion:</span>
                <span>${planet.aphelion} ${units.aphelion}</span>
            </div>
            <div class="prop">
                <span>Density:</span>
                <span>${planet.density} ${units.density}</span>
            </div>
            <div class="prop">
                <span>Diameter:</span>
                <span>${planet.diameter} ${units.diameter}</span>
            </div>
            <div class="prop">
                <span>Distance From Sun:</span>
                <span>${planet.distanceFromSun} ${units.distanceFromSun}</span>
            </div>
            <div class="prop">
                <span>Escape Velocity:</span>
                <span>${planet.escapeVelocity} ${units.escapeVelocity}</span>
            </div>
            <div class="prop">
                <span>Gravity:</span>
                <span>${planet.gravity} ${units.gravity}</span>
            </div>
            <div class="prop">
                <span>Has Global Magnetic Field:</span>
                <span>${planet.hasGlobalMagneticField} ${units.hasGlobalMagneticField}</span>
            </div>
            <div class="prop">
                <span>Length of Day:</span>
                <span>${planet.lengthOfDay} ${units.lengthOfDay}</span>
            </div>
            <div class="prop">
                <span>Mass:</span>
                <span>${planet.mass} ${units.mass}</span>
            </div>
            <div class="prop">
                <span>Mean Temperature:</span>
                <span>${planet.meanTemperature} ${units.meanTemperature}</span>
            </div>
            <div class="prop">
                <span>Number of Moons:</span>
                <span>${planet.numberOfMoons} ${units.numberOfMoons}</span>
            </div>
            <div class="prop">
                <span>Orbital Period:</span>
                <span>${planet.orbitalPeriod} ${units.orbitalPeriod}</span>
            </div>
            <div class="prop">
                <span>Orbital Velocity:</span>
                <span>${planet.orbitalVelocity} ${units.orbitalVelocity}</span>
            </div>
            <div class="prop">
                <span>Surface Pressure:</span>
                <span>${planet.surfacePressure} ${units.surfacePressure}</span>
            </div>
            `;
        }
    }

    async function moveByIndex(e) {
        if (typeof e !== "number") {
            e = Number(e.target.value)
        }

        if (e > maxIndex || e < 0) {
            return;
        }

        planetBtns.classList.remove('show');
        animationFlag = true;
        index = e;
        loadTextAudio(index);
        await tl.to(group.position, { x: (20 * index), y: 0, z: 0 });
        playTextAudio();
        changeNavTitle(index);
        changeDetail(index);
        await cameraAnimation(index);
        animationFlag = false;
    }

    const handleExploreBtn = async () => {
        playBgMusic();
        tl.to("#exploreBtn", { opacity: 0 });
        tl.to("#controls", { opacity: 1 });
        tl.to("nav", { transform: "translateX(0%)" });
        moveByIndex(0);
        exploreBtn.style.display = "none";
    }

    async function next() {
        moveByIndex(++index);
    }

    async function prev() {
        moveByIndex(--index);
    }

    async function reset() {
        planetBtns.classList.remove('show');
        animationFlag = true;
        index = 0;
        await cameraAnimation(index);
        await tl.to(group.position, { x: 0, y: 0, z: 0 });
        animationFlag = false;
    }

    const exploreBtn = document.getElementById("exploreBtn");
    exploreBtn.onclick = handleExploreBtn;

    const prevBtn = document.getElementById("prevBtn")
    prevBtn.onclick = prev;

    const nextBtn = document.getElementById("nextBtn")
    nextBtn.onclick = next;

    window.addEventListener("keydown", async (e) => {
        const key = e.key;

        if (animationFlag) {
            return;
        }

        switch (key) {
            case "ArrowUp":
                next();
                break;
            case "ArrowDown":
                prev();
                break;
        }
    })
}

const detail = document.getElementById("detail");
const handleShowDetailBtn = (e) => {
    if (detail.classList.contains("show")) {
        detail.classList.remove('show');
        e.target.innerText = "Show Details";
        // stopTextAudio();
    } else {
        detail.classList.add('show');
        e.target.innerText = "Hide Details";
    }
};
const detailsBtn = document.getElementById("detailsBtn");
detailsBtn.onclick = handleShowDetailBtn;