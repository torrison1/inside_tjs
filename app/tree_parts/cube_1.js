let cube_1 = {};

cube_1.init = function(THREE, cubeMat) {
	const boxGeometry = new THREE.BoxGeometry( 0.25, 0.25, 0.25 );
	let boxMesh = new THREE.Mesh( boxGeometry, cubeMat );
	boxMesh.position.set( 0, 0.125, 0 );
	boxMesh.castShadow = true;
	scene.add( boxMesh );
	return boxMesh;
};
