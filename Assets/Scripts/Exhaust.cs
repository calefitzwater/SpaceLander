using UnityEngine;
using System.Collections;

public class Exhaust : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		var Y = Input.mousePosition.y;
		if (Input.anyKey && Movement.FUEL>0 && Y <= Screen.height/4) {
			if(transform.localScale.y < 6){
				transform.localScale += new Vector3(0f, .2f,0f);
			}
		}
		if (!Input.anyKey || Y >= Screen.height/4 || Movement.FUEL == 0) {
			
			if(transform.localScale.y >0){
				transform.localScale -= new Vector3(0f, .3f,0f);
			}
		}
	}
}
