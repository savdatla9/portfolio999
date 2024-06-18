import React from 'react';

import { Text3D } from '@react-three/drei';

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
                lineSpacing={2}
                scale={0.85}
                position={[-2.5, 1.5, 0]}
            >
                Sai Akhil Varma Datla
                <meshPhongMaterial />
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
                position={[2, 0.75, 0]}
            >
                React JS
                <meshPhongMaterial color={'dodgerblue'} />
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
                <meshPhongMaterial color={'darkgrey'} />
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
                Web AR
                <meshPhongMaterial color={'red'} />
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
                position={[-3.5, 0.75, 0]}
            >
                5+ Years in
                <meshPhongMaterial />
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
                position={[-3.25, 0.2, 0]}
            >
                Front End
                <meshPhongMaterial />
            </Text3D>
        </group>
    );
};