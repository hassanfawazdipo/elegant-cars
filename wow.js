function icon(){
    var icon = document.getElementById("nav");
    icon.classList.toggle("active");
}

let cartItems = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
  const item = {
    name: productName,
    price: productPrice,
  };

  cartItems.push(item);
  cartTotal += productPrice;

  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  // Clear previous items
  cartItemsElement.innerHTML = '';

  // Update cart items
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
  });

  // Update cart total
  cartTotalElement.textContent = cartTotal.toFixed(2);
}