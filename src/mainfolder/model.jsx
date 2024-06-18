import React, { useRef, useEffect } from 'react';

import * as THREE from 'three';
import { 
    useGLTF, useAnimations, useTexture, 
    MeshReflectorMaterial, MeshWobbleMaterial,
} from '@react-three/drei';
import { useLoader } from '@react-three/fiber';

export function Avatar(props) {
    const { nodes, materials } = useGLTF('/character1.glb');

    const { animations } = useGLTF('/animations.glb');

    const [gmap, gdMap, gnMap, grMap, gaoMap] = useTexture([
        '/textures/grass_texture/aerial_grass_rock_diff_4k.jpg',
        '/textures/grass_texture/aerial_grass_rock_disp_4k.jpg',
        '/textures/grass_texture/aerial_grass_rock_nor_gl_4k.jpg',
        '/textures/grass_texture/aerial_grass_rock_rough_4k.jpg',
        '/textures/grass_texture/aerial_grass_rock_ao_4k.jpg',
    ]);

    const colorMap = useLoader(THREE.TextureLoader, '/textures/waternormals.jpeg');

    const groupRef = useRef();

    const { actions, mixer } = useAnimations(animations, groupRef);

    const length = 0.01, width = 0.005;

    const shape = new THREE.Shape();
    shape.moveTo( 0,0 );
    shape.lineTo( 0, width );
    shape.lineTo( length, width );
    shape.lineTo( length, 0 );
    shape.lineTo( 0, 0 );

    const extrudeSettings = {
        steps: 1,
        depth: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1
    };

    useEffect(() => {
        actions[animations[0].name]
            .reset()
            .fadeIn(mixer.stats.actions.inUse === 0 ? 0 : 0.5) 
            .play();
        return () => actions[animations[0].name].fadeOut(0.5);
    }, [animations[0].name]);

    return (
        <>
            <group {...props} ref={groupRef} dispose={null} castShadow receiveShadow>
                <primitive object={nodes.Hips} />
                <skinnedMesh
                    name="EyeLeft"
                    geometry={nodes.EyeLeft.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeLeft.skeleton}
                    morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                />
                <skinnedMesh
                    name="EyeRight"
                    geometry={nodes.EyeRight.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeRight.skeleton}
                    morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                />
                <skinnedMesh
                    name="Wolf3D_Head"
                    geometry={nodes.Wolf3D_Head.geometry}
                    material={materials.Wolf3D_Skin}
                    skeleton={nodes.Wolf3D_Head.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                />
                <skinnedMesh
                    name="Wolf3D_Teeth"
                    geometry={nodes.Wolf3D_Teeth.geometry}
                    material={materials.Wolf3D_Teeth}
                    skeleton={nodes.Wolf3D_Teeth.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Hair.geometry}
                    material={materials.Wolf3D_Hair}
                    skeleton={nodes.Wolf3D_Hair.skeleton}
                />
                <skinnedMesh
                    name="Wolf3D_Beard"
                    geometry={nodes.Wolf3D_Beard.geometry}
                    material={materials.Wolf3D_Beard}
                    skeleton={nodes.Wolf3D_Beard.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Top.geometry}
                    material={materials.Wolf3D_Outfit_Top}
                    skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                    material={materials.Wolf3D_Outfit_Bottom}
                    skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                    material={materials.Wolf3D_Outfit_Footwear}
                    skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Body.geometry}
                    material={materials.Wolf3D_Body}
                    skeleton={nodes.Wolf3D_Body.skeleton}
                />
            </group>

            <mesh position={[0.5, 0, 0.2]} rotation={[Math.PI/2, 0, 0]} scale={[0.05, 0.05, 0.035]} castShadow receiveShadow>
                <extrudeGeometry args={[shape, extrudeSettings]} />
                <MeshReflectorMaterial 
                    color="#FFD700" 
                />
            </mesh>

            <mesh position={[-0.5, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <MeshWobbleMaterial 
                    speed={0.5} factor={4} normalScale={3}
                    color={'dodgerblue'} normalMap={colorMap}
                />
            </mesh>
            
            <mesh position={[0, -0.13, 0]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 0.05, 32]} />
                <meshStandardMaterial 
                    side={THREE.DoubleSide} map={gmap} 
                    normalMap={gnMap} roughnessMap={grMap}
                    normalScale={2} roughness={7}
                />
            </mesh>
        </>
    );
};

export default Avatar;

useGLTF.preload('/character1.glb');