function toggleAddBook() {
    var addBS = document.getElementById("addBookSection");
    var seeBS = document.getElementById("seeBooksSection");

    if (addBS.style.display == 'flex') {
        addBS.style.display = 'none';
    } else {
        addBS.style.display = 'flex';
        seeBS.style.display = 'none';
    }
}

function toggleSeeBooks() {
    var addBS = document.getElementById("addBookSection");
    var seeBS = document.getElementById("seeBooksSection");

    if (seeBS.style.display == 'flex') {
        seeBS.style.display = 'none';
    } else {
        seeBS.style.display = 'flex';
        addBS.style.display = 'none';
    }
}