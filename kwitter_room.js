var firebaseConfig = {
      apiKey: "AIzaSyBx-fy3mW-xLESke6QZQxK8PFkLKCe5_wE",
      authDomain: "test-54c3d.firebaseapp.com",
      databaseURL: "https://test-54c3d-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "test-54c3d",
      storageBucket: "test-54c3d.appspot.com",
      messagingSenderId: "947172404985",
      appId: "1:947172404985:web:1306a1ea4278ab9521fc28",
      measurementId: "G-EYECNSKMPD"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name "
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{ 
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}