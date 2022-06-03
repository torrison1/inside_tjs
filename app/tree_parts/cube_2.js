let cube_2 = {};

cube_2.init = function(THREE, cubeMat) {
	const boxGeometry = new THREE.BoxGeometry( 2, 1, 0.1 );
	let boxMesh = new THREE.Mesh( boxGeometry, cubeMat );
	boxMesh.position.set( 0, 0.5, -1.5 );
	boxMesh.castShadow = true;
	scene.add( boxMesh );
	return boxMesh;
};
