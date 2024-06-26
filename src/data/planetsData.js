export const planetNames = [
    "Sun",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "AstroideBelt",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
]

export const units = {
    mass: " (10^24kg)",
    diameter: " (km)",
    density: " (kg/m^3)",
    gravity: " (m/s^2)",
    escapeVelocity: " (km/s)",
    rotationPeriod: " (hours)",
    lengthOfDay: " (hours)",
    distanceFromSun: " (10^6 km)",
    perihelion: " (10^6 km)",
    aphelion: " (10^6 km)",
    orbitalPeriod: " (days)",
    orbitalVelocity: " (km/s)",
    orbitalInclination: " (degrees)",
    orbitalEccentricity: " ",
    obliquityToOrbit: " (degrees)",
    meanTemperature: " (C)",
    surfacePressure: " (bars)",
    numberOfMoons: " ",
    hasRingSystem: " (true/false)",
    hasGlobalMagneticField: " (true/false)",
}

export const planetsData = [
    {
        name: "Sun",
        mass: "1.989 x 10^30 kg",
        diameter: "1.391 x 10^6 km",
        density: "1.408 g/cm^3",
        gravity: "274 m/s^2",
        escapeVelocity: "617.7 km/s",
        rotationPeriod: "25.38 days",
        lengthOfDay: "25.38 days",
        obliquityToOrbit: "7.25 degrees",
        meanTemperature: "5,500 °C",
        surfacePressure: "0.006 atm",
        desc: "The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by energy produced by nuclear fusion reactions at its core. Part of this energy is emitted from its surface as light, ultraviolet, and infrared radiation, providing most of the energy for life on Earth.",
    },
    {
        name: "Mercury",
        mass: 0.33,
        diameter: 4879.0,
        density: 5427.0,
        gravity: 3.7,
        escapeVelocity: 4.3,
        rotationPeriod: 1407.6,
        lengthOfDay: 4222.6,
        distanceFromSun: 57.9,
        perihelion: 46.0,
        aphelion: 69.8,
        orbitalPeriod: 88.0,
        orbitalVelocity: 47.4,
        orbitalInclination: 7.0,
        orbitalEccentricity: 0.205,
        obliquityToOrbit: 0.034,
        meanTemperature: 167.0,
        surfacePressure: 0.0,
        numberOfMoons: 0,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Mercury is the first planet from the Sun and the smallest in the Solar System. In English, it is named after the Roman god Mercurius, god of commerce and communication, and the messenger of the gods. Mercury is classified as a terrestrial planet, with roughly the same surface gravity as Mars.",
    },
    {
        name: "Venus",
        mass: 4.87,
        diameter: 12104.0,
        density: 5243.0,
        gravity: 8.9,
        escapeVelocity: 10.4,
        rotationPeriod: -5832.5,
        lengthOfDay: 2802.0,
        distanceFromSun: 108.2,
        perihelion: 107.5,
        aphelion: 108.9,
        orbitalPeriod: 224.7,
        orbitalVelocity: 35.0,
        orbitalInclination: 3.4,
        orbitalEccentricity: 0.007,
        obliquityToOrbit: 177.4,
        meanTemperature: 464.0,
        surfacePressure: 92.0,
        numberOfMoons: 0,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Venus is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth. Venus is notable for having the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick, global sulfuric acid cloud cover.",
    },
    {
        name: "Earth",
        mass: 5.97,
        diameter: 12756.0,
        density: 5514.0,
        gravity: 9.8,
        escapeVelocity: 11.2,
        rotationPeriod: 23.9,
        lengthOfDay: 24.0,
        distanceFromSun: 149.6,
        perihelion: 147.1,
        aphelion: 152.1,
        orbitalPeriod: 365.2,
        orbitalVelocity: 29.8,
        orbitalInclination: 0.0,
        orbitalEccentricity: 0.017,
        obliquityToOrbit: 23.4,
        meanTemperature: 15.0,
        surfacePressure: 1.0,
        numberOfMoons: 1,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust.",
    },
    {
        name: "Mars",
        mass: 0.642,
        diameter: 6792.0,
        density: 3933.0,
        gravity: 3.7,
        escapeVelocity: 5.0,
        rotationPeriod: 24.6,
        lengthOfDay: 24.7,
        distanceFromSun: 227.9,
        perihelion: 206.6,
        aphelion: 249.2,
        orbitalPeriod: 687.0,
        orbitalVelocity: 24.1,
        orbitalInclination: 1.9,
        orbitalEccentricity: 0.094,
        obliquityToOrbit: 25.2,
        meanTemperature: -65.0,
        surfacePressure: 0.01,
        numberOfMoons: 2,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: `Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname "the Red Planet". Mars is among the brightest objects in Earth's sky and its high-contrast albedo features have made it a common subject for telescope viewing.`,
    },
    {
        name: "AsteroidBelt",
        desc: "The asteroid belt is a torus-shaped region in the Solar System, centered on the Sun and roughly spanning the space between the orbits of the planets Jupiter and Mars. It contains a great many solid, irregularly shaped bodies called asteroids or minor planets."
    },
    {
        name: "Jupiter",
        mass: 1898.0,
        diameter: 142984.0,
        density: 1326.0,
        gravity: 23.1,
        escapeVelocity: 59.5,
        rotationPeriod: 9.9,
        lengthOfDay: 9.9,
        distanceFromSun: 778.6,
        perihelion: 740.5,
        aphelion: 816.6,
        orbitalPeriod: 4331.0,
        orbitalVelocity: 13.1,
        orbitalInclination: 1.3,
        orbitalEccentricity: 0.049,
        obliquityToOrbit: 3.1,
        meanTemperature: -110.0,
        surfacePressure: null,
        numberOfMoons: 79,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun",
    },
    {
        name: "Saturn",
        mass: 568.0,
        diameter: 120536.0,
        density: 687.0,
        gravity: 9.0,
        escapeVelocity: 35.5,
        rotationPeriod: 10.7,
        lengthOfDay: 10.7,
        distanceFromSun: 1433.5,
        perihelion: 1352.6,
        aphelion: 1514.5,
        orbitalPeriod: 10747.0,
        orbitalVelocity: 9.7,
        orbitalInclination: 2.5,
        orbitalEccentricity: 0.057,
        obliquityToOrbit: 26.7,
        meanTemperature: -140.0,
        surfacePressure: null,
        numberOfMoons: 62,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive."
    },
    {
        name: "Uranus",
        mass: 86.8,
        diameter: 51118.0,
        density: 1271.0,
        gravity: 8.7,
        escapeVelocity: 21.3,
        rotationPeriod: -17.2,
        lengthOfDay: 17.2,
        distanceFromSun: 2872.5,
        perihelion: 2741.3,
        aphelion: 3003.6,
        orbitalPeriod: 30589.0,
        orbitalVelocity: 6.8,
        orbitalInclination: 0.8,
        orbitalEccentricity: 0.046,
        obliquityToOrbit: 97.8,
        meanTemperature: -195.0,
        surfacePressure: null,
        numberOfMoons: 27,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles."
    },
    {
        name: "Neptune",
        mass: 102.0,
        diameter: 49528.0,
        density: 1638.0,
        gravity: 11.0,
        escapeVelocity: 23.5,
        rotationPeriod: 16.1,
        lengthOfDay: 16.1,
        distanceFromSun: 4495.1,
        perihelion: 4444.5,
        aphelion: 4545.7,
        orbitalPeriod: 59800.0,
        orbitalVelocity: 5.4,
        orbitalInclination: 1.8,
        orbitalEccentricity: 0.011,
        obliquityToOrbit: 28.3,
        meanTemperature: -200.0,
        surfacePressure: null,
        numberOfMoons: 14,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than fellow ice giant Uranus. "
    },
    {
        name: "Pluto",
        mass: 0.0146,
        diameter: 2370.0,
        density: 2095.0,
        gravity: 0.7,
        escapeVelocity: 1.3,
        rotationPeriod: -153.3,
        lengthOfDay: 153.3,
        distanceFromSun: 5906.4,
        perihelion: 4436.8,
        aphelion: 7375.9,
        orbitalPeriod: 90560.0,
        orbitalVelocity: 4.7,
        orbitalInclination: 17.2,
        orbitalEccentricity: 0.244,
        obliquityToOrbit: 122.5,
        meanTemperature: -225.0,
        surfacePressure: 1.0E-5,
        numberOfMoons: 5,
        hasRingSystem: false,
        hasGlobalMagneticField: false,
        desc: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is less massive than Eris."
    }
];