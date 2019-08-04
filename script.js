var myNav = document.getElementById("mynav");
var btn = myNav.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
  var curr = document.getElementsByClassName("active");
  curr[0].className = curr[0].className.replace(" active", "");
  this.className += " active";
  });
}


