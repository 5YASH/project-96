const firebaseConfig = {
    apiKey: "AIzaSyB902gLXmgsYeT8fErlYaP0XqobPp2FGJY",
    authDomain: "kwitter-389c6.firebaseapp.com",
    databaseURL: "https://kwitter-389c6-default-rtdb.firebaseio.com",
    projectId: "kwitter-389c6",
    storageBucket: "kwitter-389c6.appspot.com",
    messagingSenderId: "213296795999",
    appId: "1:213296795999:web:9d130db09b54e97c5066ea"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
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
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}