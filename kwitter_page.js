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
    room_name=localStorage.getItem("room_name");


function send() {
      msg=document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
      
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
