function calculateTotal() {
  let basePrice = 20;
  let feature = document.getElementById('feature').checked;

  if (feature) {
    let total = basePrice + 5;
    document.getElementById('totalPrice').textContent = total;
  }
  else {
    document.getElementById('totalPrice').textContent = basePrice;
  }
}