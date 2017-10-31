using UnityEngine;
using System.Collections;

public class Died : MonoBehaviour {
	public Font f;
	public GUIStyle SurvivalFont;
	public GUIStyle Fuelstyle;
	public GUIStyle Menu;
	public GameObject Body;
	public GameObject Leg;
	public GameObject Capsule;
	GameObject bod;
	GameObject leg;
	GameObject cap;
	GameObject leg2;
	bool once;
	void Start () {
		once = true;
	}
	
	// Update is called once per frame
	void Update () {
		if (Movement.died) {
			if(once){
				once = false;
				bod = (GameObject)Instantiate(Body, new Vector3(Movement.DeathSpot.x , Movement.DeathSpot.y,Movement.DeathSpot.z), transform.rotation);
				bod.rigidbody2D.AddForce(Vector2.up * 3000);
				bod.rigidbody2D.AddForce(Vector2.right * -1000);
				bod.rigidbody2D.AddTorque(500);

				leg = (GameObject)Instantiate(Leg, new Vector3(Movement.DeathSpot.x  - 7, Movement.DeathSpot.y,Movement.DeathSpot.z), transform.rotation);
				leg.rigidbody2D.AddForce(Vector2.up * 3000);
				leg.rigidbody2D.AddForce(Vector2.right * -3000);
				leg.rigidbody2D.AddTorque(-500);

				leg2 = (GameObject)Instantiate(Leg, new Vector3(Movement.DeathSpot.x + 10, Movement.DeathSpot.y+5,Movement.DeathSpot.z), transform.rotation);
				leg2.rigidbody2D.AddForce(Vector2.up * 5000);
				leg2.rigidbody2D.AddForce(Vector2.right * 3000);
				leg2.rigidbody2D.AddTorque(700);

				cap = (GameObject)Instantiate(Capsule, new Vector3(Movement.DeathSpot.x, Movement.DeathSpot.y+5,Movement.DeathSpot.z), transform.rotation);
				cap.rigidbody2D.AddForce(Vector2.up * 2000);
				cap.rigidbody2D.AddForce(Vector2.right * 3000);
				cap.rigidbody2D.AddTorque(-1000);
			}
		}

	}
	void OnGUI() {
		GUI.skin.font = f;
		GUI.Label(new Rect(10, 10, 20, 40), " " + Application.loadedLevelName, Fuelstyle);
		if (Movement.died) {
			if(Input.GetMouseButtonDown(0)){
				Application.LoadLevel(Application.loadedLevel);
			}
			if (Time.time % 2 < 1) {
				GUI.Label(new Rect((Screen.width /2)-50, (Screen.height/2)- 100, 100, 40), "YOU CRASHED", SurvivalFont);
				GUI.Label(new Rect((Screen.width/2)- 250, (Screen.height/2)+20, 100, 40), "     TAP SCREEN TO TRY AGAIN", Menu);

			}
		}
	}
}