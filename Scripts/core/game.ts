/// <reference path="_reference.ts"/>
//Author: Karl Eisen Yabut (300699795)
//Date modified: March 2, 2016
//Program description: Tapered Tower (Midterm)
// first commit: Initial commit
// second commit: finished
//  

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var gui: GUI;
    var stats: Stats;
    var cubeGeometry: CubeGeometry;
    var sphereGeometry: SphereGeometry;
    var planeGeometry: PlaneGeometry;
    var axes: AxisHelper;
    var ambientLight: AmbientLight;
    var cubeMaterial: LambertMaterial;
    var planeMaterial: LambertMaterial;
    //what made up the tower
    var cubeTower1;
    var cubeTower2;
    var cubeTower3;
    var cubeTower4;
    var cubeTower5;
    var sphereTower;
    var plane: Mesh;
    var spotLight: SpotLight;
    // textures
    var texture;

    function init() {
        // Instantiate a new Scene object
        scene = new Scene();

        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* ENTER CODE HERE */
        axes = new AxisHelper(20);
        scene.add(axes);
        
        //ambient light added to the sceene
        ambientLight = new AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        planeGeometry = new PlaneGeometry(60, 60);
        planeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture('images/notbad.png') });
        plane = new Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 5;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);
        console.log('added plane');

        cubeGeometry = new CubeGeometry(14, 5, 14);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture('images/lol.png') });
        cubeTower1 = new Mesh(cubeGeometry, cubeMaterial);
        cubeTower1.castShadow = true;

        cubeTower1.position.x = 0;
        cubeTower1.position.y = 2;
        cubeTower1.position.z = 0;
        scene.add(cubeTower1);

        cubeGeometry = new CubeGeometry(12, 5, 12);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture('images/lol.png') });
        cubeTower2 = new Mesh(cubeGeometry, cubeMaterial);
        cubeTower2.castShadow = true;

        cubeTower2.position.x = 0;
        cubeTower2.position.y = 8;
        cubeTower2.position.z = 0;
        scene.add(cubeTower2);

        cubeGeometry = new CubeGeometry(10, 15, 10);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture('images/lol.png') });
        cubeTower3 = new Mesh(cubeGeometry, cubeMaterial);
        cubeTower3.castShadow = true;

        cubeTower3.position.x = 0;
        cubeTower3.position.y = 17;
        cubeTower3.position.z = 0;
        scene.add(cubeTower3);

        cubeGeometry = new CubeGeometry(8, 10, 8);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture('images/lol.png') });
        cubeTower4 = new Mesh(cubeGeometry, cubeMaterial);
        cubeTower4.castShadow = true;

        cubeTower4.position.x = 0;
        cubeTower4.position.y = 27;
        cubeTower4.position.z = 0;
        scene.add(cubeTower4);

        cubeGeometry = new CubeGeometry(6, 10, 6);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture('images/lol.png') });
        cubeTower5 = new Mesh(cubeGeometry, cubeMaterial);
        cubeTower5.castShadow = true;

        cubeTower5.position.x = 0;
        cubeTower5.position.y = 37;
        cubeTower5.position.z = 0;
        scene.add(cubeTower5);

        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);
        // add controls
        gui = new GUI();
        control = new Control(0, 0, 0, 0, 0);
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */
        gui.add(controlObject, 'rotation1', 0, 0.5);
        gui.add(controlObject, 'rotation2', 0, 0.5);
        gui.add(controlObject, 'rotation3', 0, 0.5);
        gui.add(controlObject, 'rotation4', 0, 0.5);
        gui.add(controlObject, 'rotation5', 0, 0.5);
    }

    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }

    // Setup main game loop
    function gameLoop(): void {
        stats.update();

        scene.traverse(function(threeObject: THREE.Object3D) {
            if (threeObject == cubeTower1 ||
                threeObject == cubeTower2 ||
                threeObject == cubeTower3 ||
                threeObject == cubeTower4 ||
                threeObject == cubeTower5) {

                cubeTower1.rotation.y += control.rotation1;
                cubeTower2.rotation.y += control.rotation2;
                cubeTower3.rotation.y += control.rotation3;
                cubeTower4.rotation.y += control.rotation4;
                cubeTower5.rotation.y += control.rotation5;
            }
        });
        
       
        
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0xEEEEEE, 1.0);
        //renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
        camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.x = -75;
        camera.position.y = 75;
        camera.position.z = 75;
        //camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(scene.position);
        console.log("Finished setting up Camera...");
    }

    window.onload = init;

    return {
        scene: scene
    }

})();

