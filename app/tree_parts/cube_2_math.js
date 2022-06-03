let cube_2_math = {};

cube_2_math.init = function(THREE, textureLoader) {

	let cubeMat = new THREE.MeshStandardMaterial( {
		roughness: 0.7,
		color: 0xffffff,
		bumpScale: 0.002,
		metalness: 0.2
	} );
	textureLoader.load( "assets/textures/hardwood2_diffuse.jpg", function ( map ) {

		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 1, 1 );
		map.encoding = THREE.sRGBEncoding;
		cubeMat.map = map;
		cubeMat.needsUpdate = true;

	} );
	textureLoader.load( "assets/textures/hardwood2_bump.jpg", function ( map ) {

		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 1, 1 );
		cubeMat.bumpMap = map;
		cubeMat.needsUpdate = true;
	} );

	return cubeMat;
};

