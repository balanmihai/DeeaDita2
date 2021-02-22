var myArray = [
  "Sustain",
  "Exhale",
  "Listen",
  "Bend"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

//document.body.innerHTML = randomItem;

document.getElementById("reminder2").innerHTML = randomItem;