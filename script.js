function myFunction() {
    document.getElementById("demo").innerHTML = "Yieee tara date";
    var remove = document.getElementById("remove");

    if (remove.style.display !== "block") {
        remove.style.display = "none"
    }
}

function closeTab() {
    window.close() ;
}