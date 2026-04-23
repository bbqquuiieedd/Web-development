function changeStyle() {
  let body = document.getElementById('body');
  let background = document.getElementById('background').value;
  let color = document.getElementById('color').value;

  body.style.background = background;
  body.style.color = color;
};