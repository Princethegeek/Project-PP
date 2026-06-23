function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach(function (product) {
    const productName = product.getAttribute("data-name");

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

const cartButtons = document.querySelectorAll(".product-info button");

cartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Product added to cart. Backend will be connected with PHP later.");
  });
});