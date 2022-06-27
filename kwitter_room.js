var firebaseConfig = {
      apiKey: "AIzaSyAqkP84_o_tmlXEuQgs5AXRgFHCSSR8RDs",
      authDomain: "kwitter-aaa78.firebaseapp.com",
      databaseURL: "https://kwitter-aaa78-default-rtdb.firebaseio.com",
      projectId: "kwitter-aaa78",
      storageBucket: "kwitter-aaa78.appspot.com",
      messagingSenderId: "551684041628",
      appId: "1:551684041628:web:41e7990165206e0e8b7659"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+ Room_names);
      row="<div class='room_name'id="+Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
      
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}