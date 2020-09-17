import * as firebase from 'firebase';


function db_init(DB_CONFIG){
    firebase.initializeApp(DB_CONFIG);
}

function db_writeUserData(userId, firstName, lastName, email) {
    var time = new Date().toString();
    var createdOn;
    firebase.database().ref('users/' + userId + '/creation_time').once("value", function(snapshot){
        createdOn = snapshot.val();
    }).then(function(){
        if(createdOn){
            firebase.database().ref('users/' + userId).update({
                first_name: firstName,
                last_name: lastName,
                display_name: firstName + " " + lastName,
                email: email, 
            });

        }
        else{
            firebase.database().ref('users/' + userId).update({
                first_name: firstName,
                last_name: lastName,
                email: email,
                creation_time: time,
                display_name: firstName + " " + lastName,

            }); 
        }

    });
}
function db_getUserEntry(userId, entry){
    var result;
    return firebase.database().ref('users/' + userId + '/' + entry).once("value", function(snapshot){
        result = snapshot.val();   
    }).then(function(){
        return result;
    });
}

function db_getUserData(userId) {
    var result;
    return firebase.database().ref('users/' + userId).once("value", function(snapshot){
        result = snapshot.val();
        result.uid = userId;
    }).then(function(){
        return result;
    });
}
function db_addUserEntry(userId, name ,value){
    firebase.database().ref('users/' + userId).update({
        [name]: value
    });
}
function db_createUserWithEmailAndPassword(email, password, firstName, lastName){
    //console.log("we create the user");
    const auth = firebase.auth();
    return auth.createUserWithEmailAndPassword(email, password)
    .then(function(user){
        //console.log(user.user.uid);
        //console.log(user.user.email);
        db_writeUserData(user.user.uid, firstName, lastName, user.user.email);
        //console.log("2");
        return {};
    }).catch(function(err){
        console.log(err.message);
        //console.log("3");
        return {error: err};
    });
    
}



function db_signInWithEmailAndPassword(email, password){
    const auth = firebase.auth();
    return auth.signInWithEmailAndPassword(email, password).catch(function(err){
        return {error: err};
    });
}



function db_Logout(){
    const auth = firebase.auth();
    auth.signOut().catch(function(err){
        //TODO catch error
    });    
}
function db_signInWithGoogle(){
    //console.log("first thing");
    var provider = new firebase.auth.GoogleAuthProvider();
    
    //firebase.auth().signInWithRedirect(provider);
    //console.log("1");
    return firebase.auth().signInWithPopup(provider).then(function(result) {
        //console.log("2");
        var user = result.user;
        console.log(user.uid);
        if(!user) {
        //console.log("2.5");
        return { error: "Null Error"};
        }   //TODO no error needed
        //console.log("3");
        var fname = user.displayName.split(" ", 1)[0];
        var lname = user.displayName.substring(fname.length+1);
        var email = user.email;
        var token = result.credential.accessToken;

        db_writeUserData(user.uid, fname, lname, email);
        //console.log("4");
        db_addUserEntry(user.uid, "Googletoken", token);
        //console.log("5");
        return{};
        //get the existing account if possible
        //var previousAccount;
        // return db_getUserData(user.user.uid).then(function (db_user){
        //     previousAccount = db_user;
        //     db_writeUserData(user.user.uid, fname, lname, email);
        //     db_addUserEntry(user.user.uid, "Googletoken", token);
        //     //db_addUserEntry(user.user.uid, "profile_picture", user.photoURL);
        //     return{};
        // });
        //console.log("should be redirected to the page now ");
    }).catch(function(error) {
    return {error: error.message};
    });

}

export {db_createUserWithEmailAndPassword, db_signInWithEmailAndPassword, db_init,
        db_Logout, db_getUserData, db_getUserEntry, db_addUserEntry, db_signInWithGoogle}