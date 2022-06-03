let demo_panel = {};

demo_panel.cube_right_x = 0.5;
demo_panel.cube_left_x = -0.5;

demo_panel.add_cube_right = function() {

	let boxMesh2 = boxMesh.clone();
	boxMesh2.position.set( demo_panel.cube_right_x, 0.125, 0 );
	demo_panel.cube_right_x += 0.5;
	boxMesh2.castShadow = true;
	scene.add( boxMesh2 );

};

demo_panel.add_cube_left = function() {

	let boxMesh2 = boxMesh.clone();
	boxMesh2.position.set( demo_panel.cube_left_x, 0.125, 0 );
	demo_panel.cube_left_x -= 0.5;
	boxMesh2.castShadow = true;
	scene.add( boxMesh2 );

};
