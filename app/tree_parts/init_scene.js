let init_scene = {};
let init_camera = {};
let init_light = {};
let init_floor = {};

init_scene.init = function(THREE) {
	// Not use now!
	return true;
};

init_camera.init = function(THREE) {
	let camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
	camera.position.x = 0;
	camera.position.y = 0.5;
	camera.position.z = 1.5;
	return camera;
};

init_light.init = function(THREE, scene) {

	const bulbGeometry = new THREE.SphereGeometry( 0.01, 16, 8 );
	bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 );

	bulbMat = new THREE.MeshStandardMaterial( {
		emissive: 0xffffee,
		emissiveIntensity: 1,
		color: 0x000000
	} );
	bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
	bulbLight.position.set( 0, 1, 1 );
	bulbLight.castShadow = true;
	scene.add( bulbLight );
	return bulbLight;
};

init_floor.init = function(THREE, scene, textureLoader) {

	floorMat = new THREE.MeshStandardMaterial( {
		roughness: 0.8,
		color: 0xffffff,
		metalness: 0.2,
		bumpScale: 0.0005
	} );
	textureLoader.load( "assets/textures/hardwood2_diffuse.jpg", function ( map ) {

		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		map.encoding = THREE.sRGBEncoding;
		floorMat.map = map;
		floorMat.needsUpdate = true;

	} );
	textureLoader.load( "assets/textures/hardwood2_bump.jpg", function ( map ) {

		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		floorMat.bumpMap = map;
		floorMat.needsUpdate = true;

	} );
	textureLoader.load( "assets/textures/hardwood2_roughness.jpg", function ( map ) {

		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		floorMat.roughnessMap = map;
		floorMat.needsUpdate = true;

	} );

	const floorGeometry = new THREE.PlaneGeometry( 20, 20 );
	const floorMesh = new THREE.Mesh( floorGeometry, floorMat );
	floorMesh.receiveShadow = true;
	floorMesh.rotation.x = - Math.PI / 2.0;
	scene.add( floorMesh );

	return floorMat;
};

init_scene.finish_scene = function(THREE, container) {
	let renderer = new THREE.WebGLRenderer();
	// renderer.physicallyCorrectLights = true;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	// renderer.toneMapping = THREE.ReinhardToneMapping;
	// renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	return renderer;
};
