var database = firebase.database();
var user = firebase.auth().currentUser;

function writeData(uID, bookName, bookWriter, shelfIndex) {

    return database.ref('/bookcases/' + uID /* 'uid' */ + '/shelves/' + shelfIndex /* 's1' */ + '/books/bookNum').once('value').then(function (snapshot) {
        var bookNum = snapshot.val();
        if (bookNum == null) {
            bookNum = 0;
        }

        database.ref('bookcases/' + uID + '/shelves/' + shelfIndex + '/books').update({
            [bookNum]: {
                name: bookName,
                writer: bookWriter
            },
            bookNum: bookNum + 1
        });
    });


}

function addBook() {
    var uid = user.uid;
    var bName = document.getElementById('bName');
    var bWriter = document.getElementById('bWriter');
    var shIndex = document.getElementById('shIndex');


}