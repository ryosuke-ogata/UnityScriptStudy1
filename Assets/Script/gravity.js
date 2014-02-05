#pragma strict

var gravity:float = 0;

function Awake() {
	// Validate Input parameters
	if (gravity <= 0) {
		gravity = 1;
	}
} 

function Start () {
	//
}

function Update () {
	this.gameObject.transform.Translate(0, -gravity * Time.deltaTime, 0);
}