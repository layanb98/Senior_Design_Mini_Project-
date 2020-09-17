import {db_getUserEntry} from './Components/DatabaseManager';
import * as firebase from 'firebase';

function retrieveData() {

ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      // ...
    });
  });
}

  
    // Import Admin SDK
    var admin = require("firebase-admin");
    
    // Get a database reference to our posts
    var db = admin.database();
    var ref = db.ref("server/saving-data/fireblog/posts");
    
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}


// var database = firebase.database();