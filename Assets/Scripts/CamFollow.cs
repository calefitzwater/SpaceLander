using UnityEngine;
using System.Collections;

public class CamFollow : MonoBehaviour {

	public Transform SpaceShip;
	public GUIStyle style;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(gameObject != null){
			transform.position = new Vector3 (SpaceShip.position.x, SpaceShip.position.y, -500f);
		}
	}
	void OnGUI(){
		GUI.Label (new Rect (Screen.width - 120, 20, 100, 40), "SCORE  ", style);
		GUI.Label (new Rect (Screen.width - 120, 50, 100, 40), ""+ Points.Score, style);
	}
}
