/// <reference path="_reference.ts"/>

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

    var cubeTower1;
    var cubeTower2;
    var cubeTower3;
    var cubeTower4;
    var cubeTower5;
    var sphereTower;
    var plane: Mesh;

    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        
        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* ENTER CODE HERE */
        axes = new AxisHelper(20);
        scene.add(axes);
        
        planeGeometry = new PlaneGeometry(60, 60);        
        plane = new Mesh(planeGeometry);
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 5;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);
 
        // add controls
        gui = new GUI();
        control = new Control(0);
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */
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
        camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        //camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(scene.position);
        console.log("Finished setting up Camera...");
    }

    window.onload = init;

    return {
        scene: scene
    }

})();

