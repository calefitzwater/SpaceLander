using UnityEngine;
using System.Collections;

public class Movement : MonoBehaviour {

	public bool collision;
	static public bool Landed;
	 public int Fuel;
	public static int FUEL;
	public Font f;
	public GUIStyle SurvivalFont;
	public static bool died;
	public int StartSpeed;
	public int thrusterPower;
	public GUIStyle Fuelstyle;
	public GUIStyle Menu;
	static public Vector3 DeathSpot;
	int HEIGHT;

	// Use this for initialization
	void Start () {

		died = false;
		Landed = false;
		collision = false;
		rigidbody2D.AddForce (Vector3.right * StartSpeed);
	}

	// Update is called once per frame
	void Update () {
		var Y = Input.mousePosition.y;

		FUEL = Fuel;

		if (Input.anyKey && Fuel > 0 && Y <= Screen.height/4) {
			rigidbody2D.AddForce(transform.up * -thrusterPower);
			Fuel = Fuel - 1;
		} 
		if (Fuel < 0) {
			Fuel = 0;
		}
		HEIGHT = (int)transform.position.y + 150;
		isLanded ();

	}

	IEnumerator OnCollisionEnter2D(Collision2D other){
		collision = true;
		yield return new WaitForSeconds (.05f);
		if (!Landed){
			died = true;
			DeathSpot = transform.position;
			Destroy (gameObject);
		}
	}
	void OnCollisionExit2D(Collision2D other){
		collision = false;
	}

	void isLanded(){
		if(transform.eulerAngles.z > 174 && transform.eulerAngles.z < 186 && rigidbody2D.velocity.x < 3.5  && rigidbody2D.velocity.x > -3.5 && rigidbody2D.velocity.y < 3.5  && rigidbody2D.velocity.y > -3.5 && collision){
			Landed = true;

		}


	}

	void OnGUI() {
		GUI.skin.font = f; 
		GUI.Label (new Rect (Screen.width - 140, 30, 140, 150), "HEIGHT", Fuelstyle);
		GUI.Label (new Rect (Screen.width - 140, 60, 140, 150), "" + HEIGHT, Fuelstyle);
		GUI.Label (new Rect (Screen.width - 120, 155, 100, 40), "FUEL", Fuelstyle);
		if (Fuel > 0) {
						GUI.Label (new Rect (Screen.width - 120, 190, 100, 40), "" + Fuel, Fuelstyle);
				}
		if (Fuel <= 0) {
			if(Time.time % 2 <1){
					GUI.Label (new Rect (Screen.width - 120, 190, 100, 40), "-OUT-", Fuelstyle);
			}
		}
		if (Landed) {
			if (Time.time % 2 < 1) {
				GUI.Label(new Rect((Screen.width /2)-50, (Screen.height/2)- 100, 100, 40), "YOU SURVIVED", SurvivalFont);
				GUI.Label(new Rect((Screen.width/2)- 160, (Screen.height/2), 100, 100), "TAP SCREEN TO CONTINUE", Menu);
			}
			if(Input.anyKey){
				Application.LoadLevel("MENU");
			}
		}
	}
	}