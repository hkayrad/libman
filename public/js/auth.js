firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        document.getElementById('user_div').style.display = 'block';
        document.getElementById('login_div').style.display = 'none';

        var user = firebase.auth().currentUser;
        var uid = user.uid
        var username, email;


        if (user != null) {
            email = user.email;

            if (user.displayName == null) {
                username = email.split('@')[0];
            }
            document.getElementById('user_para').innerHTML = 'Logged in as ' + username;
        }

    } else {
        // No user is signed in.

        document.getElementById('user_div').style.display = 'none';
        document.getElementById('login_div').style.display = 'block';
    }
});

function login() {

    var userEmail = document.getElementById('email_field').value;
    var userPass = document.getElementById('password_field').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert('Error: ' + errorMessage)
    });
}

function logout() {
    firebase.auth().signOut().then(function () {

    }).catch(function (error) {

    });
}