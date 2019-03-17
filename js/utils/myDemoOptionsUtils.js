var object = document.getElementById('object');

object.addEventListener("change", onChange);

function onChange(evt) {
  alert(evt.target.value)
}