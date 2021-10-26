function reset() {
  document.getElementById("two").style.display = "block";
  document.getElementById("three").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("profile1").src =
    "https://dotrex.co/theme-preview/cards/img/profile.jpg";
}
function myfun1() {
  document.getElementById("three").style.display = "block";
  document.getElementById("five").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("boss").style.display = "none";
  // document.getElementById("profile1").style.display="none";
  document.getElementById("profile1").src =
    "https://dotrex.co/theme-preview/cards/img/profile2.jpg";
}
function myfun3() {
  document.getElementById("four").style.display = "block";
  document.getElementById("three").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("boss").style.display = "none";
}

function myfun4() {
  document.getElementById("five").style.display = "block";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("boss").style.display = "none";
}

function myfun5() {
  document.getElementById("boss").style.display = "block";
  document.getElementById("five").style.display = "none";
  document.getElementById("four").style.display = "none";
}

// Add active class to the current button (highlight it)
var header = document.getElementById("one");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
