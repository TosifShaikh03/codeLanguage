// Reverse timer of 5 seconds
let timerValue = 5;
let timerDiv = document.createElement('div');
timerDiv.id = 'reverse-timer';
timerDiv.style.position = 'fixed';
timerDiv.style.top = '10px';
timerDiv.style.right = '10px';
timerDiv.style.background = '#222';
timerDiv.style.color = '#fff';
timerDiv.style.padding = '10px 20px';
timerDiv.style.fontSize = '1.5em';
timerDiv.style.borderRadius = '8px';
timerDiv.style.zIndex = '1000';
timerDiv.textContent = timerValue;
document.body.appendChild(timerDiv);

let timerInterval = setInterval(function() {
  timerValue--;
  timerDiv.textContent = timerValue;
  if (timerValue <= 0) {
    clearInterval(timerInterval);
    timerDiv.textContent = '0';
  }
}, 1000);

// Call click() on #click when Enter key is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var btn = document.getElementById("click");
    if (btn) btn.click();
  }
});
// Reload the page every 2 second
setInterval(function() {
  location.reload();
}, 5000);

document.addEventListener("keypress", function (event) {
  if (event.key === "enter") {
    document.getElementById("click").innerHTML = `'submitted '`;
  }
});
//code language no-alpha
document.addEventListener("keypress", function (event) {
  if (event.key === "_") {
    document.getElementById("disCode").innerHTML += `' '`;
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key === "1") {
    document.getElementById("disCode").innerHTML += `'a'`;
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key === "2") {
    document.getElementById("disCode").innerHTML += `'b'`;
  }
});
document.addEventListener("keypress", function (event) {
  if (event.key === "3") {
    document.getElementById("disCode").innerHTML += `'c'`;
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key === "4") {
    document.getElementById("disCode").innerHTML += `'d'`;
  }
});
document.addEventListener("keypress", function (event) {
  if (event.key === "5") {
    document.getElementById("disCode").innerHTML += `'e'`;
  }
});
document.addEventListener("keypress", function (event) {
  if (event.key === "6") {
    document.getElementById("disCode").innerHTML += `'f'`;
  }
});
document.addEventListener("keypress", function (event) {
  if (event.key === "7") {
    document.getElementById("disCode").innerHTML += `'g'`;
  }
});
document.addEventListener("keypress", function (event) {
  if (event.key === "8") {
    document.getElementById("disCode").innerHTML += `'h'`;
  }
});
document.addEventListener("keypress", function (event) {
  if (event.key === "9") {
    document.getElementById("disCode").innerHTML += `'i'`;
  }
});

click.addEventListener("click", () => {
  if (decoInp2.value === "10") {
    document.getElementById("disCode").innerHTML = `'j'`;
  }

  if (decoInp2.value === "11") {
    document.getElementById("disCode").innerHTML = `'k'`;
  }
  if (decoInp2.value === "12") {
    document.getElementById("disCode").innerHTML = `'l'`;
  }
  if (decoInp2.value === "13") {
    document.getElementById("disCode").innerHTML = `'m'`;
  }
  if (decoInp2.value === "14") {
    document.getElementById("disCode").innerHTML = `'n'`;
  }
  if (decoInp2.value === "15") {
    document.getElementById("disCode").innerHTML = `'o'`;
  }
  if (decoInp2.value === "16") {
    document.getElementById("disCode").innerHTML = `'p'`;
  }
  if (decoInp2.value === "17") {
    document.getElementById("disCode").innerHTML = `'q'`;
  }
  if (decoInp2.value === "18") {
    document.getElementById("disCode").innerHTML = `'r'`;
  }
  if (decoInp2.value === "19") {
    document.getElementById("disCode").innerHTML = `'s'`;
  }
  if (decoInp2.value === "20") {
    document.getElementById("disCode").innerHTML = `'t'`;
  }
  if (decoInp2.value === "21") {
    document.getElementById("disCode").innerHTML = `'u'`;
  }
  if (decoInp2.value === "22") {
    document.getElementById("disCode").innerHTML = `'v'`;
  }
  if (decoInp2.value === "23") {
    document.getElementById("disCode").innerHTML = `'w'`;
  }
  if (decoInp2.value === "24") {
    document.getElementById("disCode").innerHTML = `'x'`;
  }
  if (decoInp2.value == "26") {
    document.getElementById("disCode").innerHTML = `'z'`;
  }
  if (decoInp2.value == "25") {
    document.getElementById("disCode").innerHTML = `'y'`;
  }
});
