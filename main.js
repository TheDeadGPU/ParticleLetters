import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { ParticleHelper } from './ParticleHelper.js';
import { ParticleEngine } from './ParticleEngine.js';

if ( WebGL.isWebGL2Available() ) {

	// Base Component Initialization Here
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //const camera = new THREE.OrthographicCamera(1,1,1,1,1,1000);
    const engine = new ParticleEngine(scene, window);
    var mouseX = 1;
    var mouseY = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    // Add Particles Here
    //engine.Add(ParticleHelper.CreateParticle(1,1,0,0,1,0x00ff00));
    engine.Add(ParticleHelper.CreateParticle(0,0,0,0,1,0x00ff00));

    camera.position.z = 500;

    // Animation Loop
	function animate() {
        engine.Animate(mouseX,mouseY);
        renderer.render( scene, camera );   
    }

    // Set Function for Animation Loop
    renderer.setAnimationLoop( animate );

    // Compute Mouse Position (Not 100% Yet)
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    document.addEventListener('mousemove', onMouseMove, false);

    function onMouseMove(event) {
        // Calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        this.mouseX = mouse.x;
        this.mouseY = mouse.y;
    }

} else {

	const warning = WebGL.getWebGL2ErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}



