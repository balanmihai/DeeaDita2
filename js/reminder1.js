var myArray = [
  "Breathe",
  "Inhale",
  "Awerness",
  "Enjoy"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

//document.body.innerHTML = randomItem;

document.getElementById("reminder1").innerHTML = randomItem;