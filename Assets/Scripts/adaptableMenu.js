#pragma strict

var MoonText : GUIStyle;
var MarsText : GUIStyle;
var venusText : GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI(){
	if(GUI.Button(Rect(Screen.width/4,Screen.height/12, Screen.width/2, Screen.height/6), "MOON", MoonText)){
		Application.LoadLevel("Moon");
	}
	if(GUI.Button(Rect(Screen.width/4,Screen.height/3, Screen.width/2, Screen.height/6), "MARS", MarsText)){
		Application.LoadLevel("Mars");
	}
	if(GUI.Button(Rect(Screen.width/4,Screen.height/1.75, Screen.width/2, Screen.height/6), "VENUS", venusText)){
		Application.LoadLevel("Venus");
	}
}