import React from 'react';

// import * as THREE from 'three';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Loader } from '@react-three/drei';

import Avatar from './model.jsx';

import Texts from './3dlines.jsx';

// import Scene from './homefolder';

// import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';

// const config = {
//     clearCache: true,
//     bodyType: 'fullbody',
//     quickStart: false,
//     language: 'en', #043353, #E44652, #FAF8F0, #E4DFCF
// };

// const style = { width: '100%', height: '100vh', border: 'none' };

{/* <AvatarCreator subdomain="Demo" config={config} style={style} onAvatarExported={handleOnAvatarExported} /> */}

const Home = () =>  {

    const Pet = (props) => {
        const gltf = useGLTF('/models/shiba.glb');

        return <primitive object={gltf.scene} {...props} />
    };

    return(
        <React.Fragment>
            <div style={{height: '85vh', width: '100%'}}>
                <Canvas dpr={[1.5, 2]} linear shadows>
                    <directionalLight
                        position={[3.3, 1.0, 4.4]}
                        castShadow
                        intensity={Math.PI * 2}
                    />

                    <fog attach="fog" args={['#272730', 16, 30]} />

                    <ambientLight intensity={0.65} />

                    <PerspectiveCamera makeDefault position={[0, 1.5, 3.5]} fov={75}>
                        <pointLight 
                            intensity={1} 
                            castShadow
                            position={[100, 100, 100]} 
                        />

                        <spotLight 
                            castShadow 
                            intensity={2.25} 
                            angle={0.2} 
                            enumbra={1} 
                            position={[-25, 20, -15]} 
                            shadow-mapSize={[1024, 1024]} 
                            shadow-bias={-0.0001} 
                        />
                    </PerspectiveCamera>

                    <React.Suspense fallback={null}>
                        <Texts />
                        
                        <Avatar position={[0, 0.1, 0]} />

                        <Pet scale={[0.25, 0.25, 0.25]} position={[0.57, 0.26, 0.8]} />
                    </React.Suspense>
                        
                    <OrbitControls target={[0, 0, 0]} />
                </Canvas>

                <Loader />
            </div>
            <div style={{height: '65vh', width: '100%'}}>
                <Canvas dpr={[1.5, 2]} linear shadows>
                    <directionalLight
                        position={[3.3, 1.0, 4.4]}
                        castShadow
                        intensity={Math.PI * 2}
                    />

                    <fog attach="fog" args={['#272730', 16, 30]} />

                    <ambientLight intensity={0.65} />

                    <PerspectiveCamera makeDefault position={[0, 1.5, 3.5]} fov={75}>
                        <pointLight 
                            intensity={1} 
                            castShadow
                            position={[100, 100, 100]} 
                        />

                        <spotLight 
                            castShadow 
                            intensity={2.25} 
                            angle={0.2} 
                            enumbra={1} 
                            position={[-25, 20, -15]} 
                            shadow-mapSize={[1024, 1024]} 
                            shadow-bias={-0.0001} 
                        />
                    </PerspectiveCamera>

                    <React.Suspense fallback={null}>
                        <Texts />
                        
                        <Avatar position={[0, 0.1, 0]} />

                        <Pet scale={[0.25, 0.25, 0.25]} position={[0.57, 0.26, 0.8]} />
                    </React.Suspense>
                        
                    <OrbitControls target={[0, 0, 0]} />
                </Canvas>

                <Loader />
            </div>
        </React.Fragment>
    );
};

useGLTF.preload('/models/shiba.glb');

export default Home;