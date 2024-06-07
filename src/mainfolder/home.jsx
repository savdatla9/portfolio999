import React from 'react';

// import * as THREE from 'three';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Avatar from './model.jsx';

// import Scene from './homefolder';

// import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';

// const config = {
//     clearCache: true,
//     bodyType: 'fullbody',
//     quickStart: false,
//     language: 'en',
// };

// const style = { width: '100%', height: '100vh', border: 'none' };

 {/* <AvatarCreator subdomain="Demo" config={config} style={style} onAvatarExported={handleOnAvatarExported} /> */}

const Home = () =>  {

    return(
        <React.Fragment>
            <div style={{height: '65vh', width: '100%'}}>
                <Canvas camera={{ position: [0.5, 1, 2] }} shadows>
                    <directionalLight
                        position={[3.3, 1.0, 4.4]}
                        castShadow
                        intensity={Math.PI * 2}
                    />

                    {/* <ambientLight 
                        castShadow
                        intensity={0.2} 
                    /> */}
                    
                    <Avatar />
                        
                    <OrbitControls target={[0, 0, 0]} />
                </Canvas>
            </div>
        </React.Fragment>
    );
};

export default Home;