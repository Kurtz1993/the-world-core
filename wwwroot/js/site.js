var ele = document.getElementById('username');
ele.innerText = "Luis Hernandez";

var main = document.getElementById('main');
main.onmouseenter = function () {
  main.style.backgroundColor = "#888";
};

main.onmouseleave = function () {
  main.style.backgroundColor = "";
};