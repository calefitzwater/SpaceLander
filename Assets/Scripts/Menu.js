var menuOptions : String[] = new String[5];
var menuStyleMoon : GUIStyle;
var menuStyleExit : GUIStyle;
var infoMenu : GUIStyle;
var moon : GameObject;
var mars : GameObject;
var venus : GameObject;
var earth : GameObject;


var selectedIndex = 0;

function Start(){

}
 
// Function to scroll through possible menu items array, looping back to start/end depending on direction of movement.
function Update(){
    if(Input.GetKeyDown(KeyCode.DownArrow)){
        selectedIndex = menuSelection(menuOptions, selectedIndex, "down");
    }
 
    if (Input.GetKeyDown(KeyCode.UpArrow)) {
        selectedIndex = menuSelection(menuOptions, selectedIndex, "up");
    }
}
 
function OnGUI ()
{
 
    //SELECTED
    if(selectedIndex == 0){
  		GUI.Button(Rect(30,50,50,30), "MOON <", menuStyleMoon);
  		
  		GUI.Label(Rect( 1300, 300, 50,30), "GRAVITY: 1", infoMenu);
  		GUI.Label(Rect( 1300, 350, 50,30), "TERRAIN: SMOOTH", infoMenu);
  		GUI.Label(Rect( 1300, 400, 50,30), "FUEL: 700", infoMenu);
  		
  		mars.SetActive(false);
   		moon.SetActive(true);
   		venus.SetActive(false);
   		earth.SetActive(false);
  	}
  	
    if(selectedIndex == 1){
   		GUI.Button(Rect(30,200,50,30), "MARS <", menuStyleMoon);
   		GUI.Label(Rect( 1300, 300, 50,30), "GRAVITY: 1.5", infoMenu);
  		GUI.Label(Rect( 1300, 350, 50,30), "TERRAIN: ROUGH", infoMenu);
  		GUI.Label(Rect( 1300, 400, 50,30), "FUEL: 800", infoMenu);
   		mars.SetActive(true);
   		moon.SetActive(false);
   		venus.SetActive(false);
   		earth.SetActive(false);
   	}
   	
   	if(selectedIndex == 2){
   		GUI.Button(Rect(30,350,50,30), "VENUS <", menuStyleMoon);
   		GUI.Label(Rect( 1300, 300, 50,30), "GRAVITY: 3", infoMenu);
  		GUI.Label(Rect( 1300, 350, 50,30), "TERRAIN: MEDIUM", infoMenu);
  		GUI.Label(Rect( 1300, 400, 50,30), "FUEL: 550", infoMenu);
   		mars.SetActive(false);
   		moon.SetActive(false);
   		venus.SetActive(true);
   		earth.SetActive(false);
   	}
   	
   	if(selectedIndex == 3){
   		GUI.Button(Rect(30,500,50,30), "EARTH <", menuStyleMoon);
   		GUI.Label(Rect( 1300, 300, 50,30), "GRAVITY: 2", infoMenu);
  		GUI.Label(Rect( 1300, 350, 50,30), "TERRAIN: SMOOTH", infoMenu);
  		GUI.Label(Rect( 1300, 400, 50,30), "FUEL: 650", infoMenu);
   		mars.SetActive(false);
   		moon.SetActive(false);
   		venus.SetActive(false);
   		earth.SetActive(true);
   	} 	
   	
   	
   	if(selectedIndex == 4){
   		GUI.Button(Rect(30,650,50,30), "EXIT <", menuStyleExit);
   		mars.SetActive(false);
   		moon.SetActive(false);
   		venus.SetActive(false);
   		earth.SetActive(false);
   	}
  	
  	
  	
  	
  	//NOT SELECTED
  	 if(selectedIndex != 0){
  		GUI.Button(Rect(30,50,50,30), "MOON", menuStyleMoon);
  	}
  	 if(selectedIndex != 1){
  		GUI.Button(Rect(30,200,50,30), "MARS", menuStyleMoon);
  	}
  	 if(selectedIndex != 2){
  		GUI.Button(Rect(30,350,50,30), "VENUS", menuStyleMoon);
  	}
  	 if(selectedIndex != 3){
  		GUI.Button(Rect(30,500,50,30), "EARTH", menuStyleMoon);
  	}
  	 if(selectedIndex != 4){
  		GUI.Button(Rect(30,650,50,30), "EXIT", menuStyleExit);
  	}
  	
  	
  	//ENTER
  	if (Event.current.Equals(Event.KeyboardEvent("return")) && selectedIndex == 0){
            Application.LoadLevel("MOON");
    }    
  	if (Event.current.Equals(Event.KeyboardEvent("return")) && selectedIndex == 1){
            Application.LoadLevel("MARS");
    }
  	if (Event.current.Equals(Event.KeyboardEvent("return")) && selectedIndex == 2){
            Application.LoadLevel("VENUS");
    }
  	if (Event.current.Equals(Event.KeyboardEvent("return")) && selectedIndex == 3){
            Application.LoadLevel("EARTH");
    }
  	if (Event.current.Equals(Event.KeyboardEvent("return")) && selectedIndex == 4){
            Application.Quit();
 	}
 	

}



function menuSelection (menuItems : String[], selectedItem : int, direction) {
    if (direction == "up") {
        if (selectedItem == 0) {
            selectedItem = menuItems.length;
        } else {
            selectedItem -= 1;
        }
    }
  
    if (direction == "down") {
        if (selectedItem == menuItems.length) {
            selectedItem = 0;
        } else {
            selectedItem += 1;
        }
    }
   
    return selectedItem;
}
 