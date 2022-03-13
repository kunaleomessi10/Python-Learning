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
<div class="smallcontainer">
    <div class="row">
        <div class="col-2">
            <img src="/images/Dumbbell-set.jpeg" width="50%">
            <h1>${data.title}</h1>
            <h4>€160.00</h4>
             <button type="button" id="button" onclick="addToCart('${data.id}')">Add to Cart</button>
            <h3>Product Details</h3>
            <p>${data.description}</p>
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

}