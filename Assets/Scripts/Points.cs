using UnityEngine;
using System.Collections;

public class Points : MonoBehaviour {
	public int Point;
	static public int Score;
	public bool once;
	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerStay2D(Collider2D other){
				if (other.tag == "Lander") {
						if (Movement.Landed && !once) {
								once = true;
								Score = Score + Point;
						}
				}
		}

}
