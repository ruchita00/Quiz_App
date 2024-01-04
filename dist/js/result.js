let name = sessionStorage.getItem("name");
let score = sessionStorage.getItem("points");
let timer = sessionStorage.getItem("timer");

document.getElementById("user_score").innerHTML = score;
document.getElementById("user").innerHTML = name;
document.getElementById("user_time").innerHTML = timer;

let icn = document.getElementById("icon");
let greeting = document.getElementById("greet");

let img1 = "Good Job";
let img2 = "Excellent Job";
let img3 = "Poor Job";

if (score >= 50 && score <= 80) {
  icn.innerHTML = img1;
} else if (score > 80) {
  icn.innerHTML = img2;
} else {
  icn.innerHTML = img3;
}
