const firebaseConfig = {
      apiKey: "AIzaSyAp9L3fRwTFUtxzTEac_E7PYVb8rmMO4L4",
      authDomain: "activity-35511.firebaseapp.com",
      databaseURL: "https://activity-35511-default-rtdb.firebaseio.com",
      projectId: "activity-35511",
      storageBucket: "activity-35511.appspot.com",
      messagingSenderId: "5605442125",
      appId: "1:5605442125:web:5092c9320d12528a8a9204"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function Send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
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
