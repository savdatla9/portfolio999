import React, { Suspense } from "react";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

function ExportButton(scene) {
    // const handleDownload = () => {
    //     const exporter = new GLTFExporter();

    //     let filename = 'scene';

    //     let options = {
    //         trs: true,
    //         onlyvisible: false,
    //         binary: true,
    //         mapTextureSize: 4096,
    //     }

    //     // exporter.parse(
    //     //     scene,
    //     //     function (result) {
    //     //       console.log(result); SaveArrayBuffer(result, "Scene.glb");
    //     //     }, { binary: true }
    //     // );

    //     exporter.parse(
    //         scene, 
    //         (result) => {
    //             console.log(result, scene);

    //             if(result instanceof ArrayBuffer){
    //                 Save(
    //                     new Blob([result], { type: "application/octet-stream" }),
    //                     filename + ".glb"
    //                 );
    //             }else{
    //                 let op = JSON.stringify(result); console.log(op);

    //                 Save(
    //                     new Blob([op], { type: "text/plain" }),
    //                     filename + ".gltf"
    //                 );
    //             }
    //         }, 
    //         (err) => {
    //             console.log(err);
    //         }, 
    //         options
    //     );  
    // };

    // async function Save(blob, filename) {
    //     console.log(blob);
        
    //     const link = document.createElement("a");

    //     link.style.display = "none"; // u/ts-ignore

    //     document.body.appendChild(link); // Firefox workaround, see #6594

    //     link.href = URL.createObjectURL(blob);

    //     link.download = filename;

    //     link.click(); // URL.revokeObjectURL( url ); breaks Firefox... // Just downloading, not uploading
    // };
        
    // function SaveArrayBuffer(buffer, fileName) {
    //     SaveBlob(new Blob([buffer]), fileName);
    // }
    
    // const link = document.createElement("a");
    // document.body.appendChild(link);
        
    // function SaveBlob(blob) {
    //     link.href = URL.createObjectURL(blob);
    //     console.log(blob);
    //     //Uncomment below to download otherwise inspect Blob in the console
    //     // link.download = fileName;
    //     link.click();
    // }

    const handleDownload = () => {
        const gltfExporter = new GLTFExporter();

        const options = {
            trs: true,
            onlyVisible: true,
            binary: true,
            maxTextureSize: 4096,
        };

        gltfExporter.parse(
            scene,

            function ( result ) {
                if ( result instanceof ArrayBuffer ) {
                    saveArrayBuffer( result, 'scene.glb' );
                } else {

                    const output = JSON.stringify( result, null, 2 );
                    console.log( output );
                    saveString( output, 'scene.gltf' );
                }
            },

            function ( error ) {
                console.log( 'An error happened during parsing', error );
            },

            options
        );
    };

    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link); // Firefox workaround, see #6594

    function save(blob, filename) {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        // URL.revokeObjectURL( url ); breaks Firefox...
    };

    function saveString( text, filename ) {
        save(new Blob( [ text ], { type: 'text/plain' } ), filename);
    };

    function saveArrayBuffer( buffer, filename ) {
        save(new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename);
    };

    return (
        <Suspense fallback={<p>loading...</p>}>
            <button onClick={handleDownload}>Download</button>
        </Suspense>
    );
};

export default ExportButton;