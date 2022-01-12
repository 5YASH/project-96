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
  var user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom(){
    room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"

   });
   localStorage.setItem("room_Name",room_name);
   window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
 //End code
 });});}
 getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}