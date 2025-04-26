function openModal(name, toppings, price, imgSrc) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalToppings').innerText = toppings;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('foodModal').style.display = 'flex';
}
  
  function closeModal() {
    document.getElementById('foodModal').style.display = 'none';
}
  
  // Close when clicking outside the modal-content
window.onclick = function(event) {
    var modal = document.getElementById('foodModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
  