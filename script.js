var Cimg = document.getElementById("currentimg");
var imgChoices = document.getElementById("imgchoices");


for (var i = 1; i <= 18; i++) {
    var thumb = document.createElement("img");
    thumb.src = "img/" + i + ".jpg";
    thumb.alt = "Choice Image " + i;
    thumb.classList.add("thumb");
    imgChoices.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            Cimg.src = this.src;
        }
    )
}