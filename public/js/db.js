var database = firebase.database();



function writeData(uID, bookName, bookWriter, shelfIndex) {

    var shelfRef = database.ref('/bookcases/' + uID /* 'uid' */ + '/shelves');
    var shelfNum = shelfRef.on('value', function (snapshot) {
        shelves = snapshot.val();
        console.log(shelves['shelfNum']);

        shelves.forEach(element => {
            console.log(element);
        });


    });

    return database.ref('/bookcases/' + uID /* 'uid' */ + '/shelves/' + shelfIndex /* 's1' */ + '/bookNum').once('value').then(function (snapshot) {
        var bookNum = snapshot.val();
        if (bookNum == null) {
            bookNum = 0;
        }

        database.ref('bookcases/' + uID + '/shelves/' + shelfIndex).update({
            [bookNum]: {
                name: bookName,
                writer: bookWriter
            },
            bookNum: bookNum + 1
        });



        /*         database.ref('bookcases/' + uID + '/shelves').update({
                    shelfNum: shelfNum + 1
                }); */
    });

}

function readBooks(uI) {

    return database.ref('/bookcases/' + uID /* 'uid' */ + '/shelves/').once('value').then(function (snapshot) {
        var shelves = snapshot.val();
        shelfArrLen = shelves.length - 1;

        for (var i = 1; i <= shelfArrLen; i++) {
            console.log(shelves[i]);
            booksList = shelves[i].books
            console.log(shelfArrLen);
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