var database = firebase.database();

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

function readBooks(uID) {
    return database.ref('/bookcases/' + uID /* 'uid' */ + '/shelves/').once('value').then(function (snapshot) {
        var shelves = snapshot.val();
        shelfArrLen = shelves.length - 1;

        for (var i = 1; i <= shelfArrLen; i++) {
            console.log(shelves[i]);
            booksList = shelves[i].books
        }
    });
}

function addBook() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var bName = document.getElementById('bName').value;
    var bWriter = document.getElementById('bWriter').value;
    var shIndex = document.getElementById('shIndex').value;

    writeData(uid, bName, bWriter, shIndex);
}

function seeBooks() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    readBooks(uid);
}