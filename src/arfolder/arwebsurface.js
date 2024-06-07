import React from 'react';
import '@google/model-viewer';

import './index.css';

const ARSurface = () => {
    return (
        <div className='view-surface'>
            <model-viewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                alt="A 3D model of an astronaut"
                ar
                ar-modes="scene-viewer quick-look"
                environment-image="neutral"
                auto-rotate
                camera-controls
                style={{width: '100%', height: '100%'}}
            ></model-viewer>
        </div>
    );
};

export default ARSurface;