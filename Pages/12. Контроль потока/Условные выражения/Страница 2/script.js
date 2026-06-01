function check() {
  let ram = Number(prompt());
  let element = document.getElementById('result');
  
  if (ram > 16) {
    element.textContent = 'Starting the game...';
  } else {
    element.textContent = 'PC upgrade needed';
  }
}