#pragma strict

var moveX:float;
private var myCamera : Camera;
private var isCameraMove:int = 0;

function Awake() {
}

function Start () {

}

function Update () {
	this.gameObject.transform.position.z = 0; 
}

function OnCollisionEnter(collision : Collision) {
	isCameraMove = 1;
}
