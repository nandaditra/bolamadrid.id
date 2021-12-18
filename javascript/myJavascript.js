/*Bagian scrool menu */

document.getElementById("navbol").addEventListener("click", function() {
    document.documentElement.style.scrollBehavior = "smooth";
});
/*Bagian pada slideshow*/
var myidx = 0;
slideshow();

function slideshow() {
    var i;
    var a = document.getElementsByClassName("myslide");
    for(i=0;i < a.length;i++){
    a[i].style.display = "none";
    }
    myidx++;
    if (myidx > a.length) {myidx = 1}
    a[myidx-1].style.display = "block";
    setTimeout(slideshow, 3000);
}

/*
Bagian pada sosial media
*/

function bigImg(x) {
    x.style.width = "72.5%";
}

function normalImg(x) {
    x.style.width = "70%";
}

/*
Bagian pada sosial media follow us
*/

function bigFol(a) {
    a.style.width = "95%";
}

function normalFol(a) {
    a.style.width = "90%";
}
