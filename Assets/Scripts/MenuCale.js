#pragma strict

var spawn : GameObject;
var spawn2 : GameObject;
var spaceShip : GameObject;
var moon : GameObject;

var MAINTEXT : GUIStyle;
var Cale : GUIStyle;

function Start () {
	SpawnShip();
	SpawnMoon();
}

function Update () {

}


function SpawnShip(){
	yield WaitForSeconds(5);
	var ship = Instantiate(spaceShip, spawn.transform.position, spawn.transform.rotation);
	ship.rigidbody.AddForce(Vector3.up * 500);
	ship.rigidbody.AddForce(Vector3.right*-600);
	ship.rigidbody.AddTorque(Vector3.forward * 10);
}

function SpawnMoon(){
	yield WaitForSeconds(15);
	var moon = Instantiate(moon, spawn2.transform.position, spawn2.transform.rotation);
	moon.rigidbody.AddForce(Vector3.up * -200);
	moon.rigidbody.AddForce(Vector3.right*-400);
}
	