let viewCount = 0;
let display = document.getElementById("Fs");
let title = document.getElementById("title");

if (localStorage.getItem("viewCount")) {
   viewCount = parseInt(localStorage.getItem("viewCount"));
}
window.onload = function() {
   viewCount++;
   display.innerHTML = "You have visited this website " + viewCount + " times";
   title.innerHTML = "You have visited this website " + viewCount + " times";
   localStorage.setItem("viewCount", viewCount);
};
