#pragma strict

function Start () {

}

function Update () {
		var X = Input.mousePosition.x;
		var Y = Input.mousePosition.y;
		
		if(X < Screen.width/2 && Y > Screen.height/4 && Input.GetMouseButton(0)){
			transform.Rotate(0f,0f,1.5f);
		}
		if(X >= Screen.width/2 && Y > Screen.height/4 &&  Input.GetMouseButton(0)){
			transform.Rotate(0f,0f,-1.5f);
		}
		
	
}

function OnGUI(){
	
}