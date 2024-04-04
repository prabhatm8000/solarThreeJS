import * as THREE from "three";

export function getGlow({ rimHex = 0x000000, facingHex = 0xFDB50E, scale = 2.0 } = {}) {
    const uniforms = {
        color1: { value: new THREE.Color(rimHex) },
        color2: { value: new THREE.Color(facingHex) },
        fresnelBias: { value: 0 },
        fresnelScale: { value: scale },
        fresnelPower: { value: 1 },
    };

    const vertexShader = `
        uniform float fresnelBias;
        uniform float fresnelScale;
        uniform float fresnelPower;
        
        varying float vReflectionFactor;
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4( position, 0.8 );
            vec4 worldPosition = modelMatrix * vec4( position, 0.8 );
        
            vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
        
            vec3 I = worldPosition.xyz - cameraPosition;
        
            vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
        
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    // Fragment shader code for glow effect
    const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;

    varying float vReflectionFactor;

    void main() {
        float f = clamp( vReflectionFactor, 0.0, 1.0 );
        gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
    }
    `;

    // Create custom material with glow shader
    const glowMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true, // Enable transparency for blending
        blending: THREE.AdditiveBlending, // Use additive blending for glow effect
    });

    return glowMaterial;
}