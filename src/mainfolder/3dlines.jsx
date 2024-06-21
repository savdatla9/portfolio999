import React from 'react';

import * as THREE from 'three';

import { useLoader } from '@react-three/fiber';
import { Text3D, MeshReflectorMaterial, MeshPortalMaterial, MeshRefractionMaterial } from '@react-three/drei';

export default function Texts(){
    // const Header = '/fonts/Dancing_Scripts_regular.json';

    // const para = '/fonts/Playwhite_FR_Moderne_Regular.json';

    // const headerOpts = {
    //     font: Header,
    //     size: 5,
    //     height: 1,
        
    // };

    // const paraOpts = {
    //     font: para,
    //     size: 5,
    //     height: 1,
    // };

    const matrixMap = useLoader(THREE.TextureLoader, '/textures/matrix_texture.jpg');

    return(
        <group>
            <Text3D
                castShadow
                font={'/fonts/Inter_Medium_Regular.json'}
                size={0.5}
                height={0.05}
                curveSegments={100}
                bevelEnabled
                bevelThickness={0.075}
                bevelSize={0.02}
                bevelOffset={0.01}
                bevelSegments={15}
                letterSpacing={0.05}
                scale={0.85}
                position={[-3, 1.5, 0]}
            >
                Sai Akhil Varma Datla
                <MeshReflectorMaterial color={'lightblue'} />
            </Text3D>

            <Text3D
                castShadow
                font={'/fonts/Inter_Medium_Regular.json'}
                size={0.5}
                height={0.05}
                curveSegments={100}
                bevelEnabled
                bevelThickness={0.075}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={1}
                scale={0.5}
                position={[2, 0.75, 0]}
            >
                React JS
                <MeshReflectorMaterial color={'dodgerblue'} emissive={'deepskyblue'} />
            </Text3D>

            <Text3D
                castShadow
                font={'/fonts/Inter_Medium_Regular.json'}
                size={0.5}
                height={0.05}
                curveSegments={100}
                bevelEnabled
                bevelThickness={0.075}
                bevelSize={0.02}
                bevelOffset={0.01}
                bevelSegments={15}
                scale={0.5}
                position={[2, 0.25, 0]}
            >
                Three JS
                <MeshReflectorMaterial color={'grey'} emissive={'black'} />
            </Text3D>

            <Text3D
                castShadow
                font={'/fonts/Inter_Medium_Regular.json'}
                size={0.5}
                height={0.05}
                curveSegments={100}
                bevelEnabled
                bevelThickness={0.075}
                bevelSize={0.02}
                bevelOffset={0.01}
                bevelSegments={15}
                scale={0.5}
                position={[2, -0.25, 0]}
            >
                Web XR
                <MeshReflectorMaterial color={'red'} emissive={'darkred'} />
            </Text3D>

            <Text3D
                castShadow
                font={'/fonts/Inter_Medium_Regular.json'}
                size={0.5}
                height={0.05}
                curveSegments={100}
                bevelEnabled
                bevelThickness={0.075}
                bevelSize={0.02}
                bevelOffset={0.01}
                bevelSegments={15}
                letterSpacing={0.02}
                scale={0.5}
                position={[-3.5, 0.75, 0]}
            >
                5+ Years in
                <MeshReflectorMaterial color={'white'} emissive={'beige'} emissiveIntensity={0.15} map={matrixMap} />
            </Text3D>

            <Text3D
                castShadow
                font={'/fonts/Inter_Medium_Regular.json'}
                size={0.5}
                height={0.05}
                curveSegments={100}
                bevelEnabled
                bevelThickness={0.075}
                bevelSize={0.02}
                bevelOffset={0.01}
                bevelSegments={15}
                letterSpacing={0.02}
                scale={0.5}
                position={[-3.25, 0.2, 0]}
            >
                Front End
                <MeshReflectorMaterial emissive={'beige'} emissiveIntensity={0.15} map={matrixMap} />
            </Text3D>
            
            <Text3D
                castShadow
                font={'/fonts/Inter_Medium_Regular.json'}
                size={0.5}
                height={0.05}
                curveSegments={100}
                bevelEnabled
                bevelThickness={0.075}
                bevelSize={0.02}
                bevelOffset={0.01}
                bevelSegments={15}
                letterSpacing={0.02}
                scale={0.5}
                position={[-3.35, -0.25, 0]}
            >
                Developer
                <MeshReflectorMaterial emissive={'beige'} emissiveIntensity={0.15} map={matrixMap} />
            </Text3D>
        </group>
    );
};