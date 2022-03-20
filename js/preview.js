$(document).ready(() => {
    let path = sessionStorage.getItem("path")
    composePreviewHtml(path)
});

function composePreviewHtml(id) {
    $.ajax({
        url: "../assets/json/" + id + ".json",
        dataType: "json",
        success: function (data) {
            $('.details').append(`
<div class="preview-container">
  <!-- Left Column Image -->
  <div class="left-column">
    <img src="${data.path}">
  </div>
  
  <!-- Right Column -->
  <div class="right-column">
 
    <!-- Product Description -->
    <div class="product-description">
      <h1>${data.label}</h1>ˆ
      <p>${data.description}</p>
    </div>
 
    <!-- Product Pricing -->
    <div class="product-price">
      <span>${data.price}</span>
      <div onclick="addToCart('${data.id}')" class="btn-reserve">Reserve</div>
    </div>
  </div>
  
</div>

`)
        }
    });
}

function addToCart(id) {
    let cart = [];
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push({'id': id});
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("This item has been reserved")
}