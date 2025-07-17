let count = 1;

function increase() {
  count++;
  document.getElementById("Data").innerHTML = count;
}

function decrease() {
  if (count >= 1) {
    count--;
    document.getElementById("Data").innerHTML = count;
  }
}
