const firebaseConfig = {
    apiKey: "AIzaSyCujhRMX1QANTpEIq_I36qmZzmIZcfvKL8",
    authDomain: "let-s-chat-46f24.firebaseapp.com",
    databaseURL: "https://let-s-chat-46f24-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-46f24",
    storageBucket: "let-s-chat-46f24.appspot.com",
    messagingSenderId: "550576748149",
    appId: "1:550576748149:web:9e11b8ef317df4849c2a3c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
