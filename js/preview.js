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
            <img src="${data.path}" width="10%">
            <h1>${data.label}</h1>
            <h4>${data.price}</h4>
            <div class="btn" onclick="addToCart('${data.id}')">RESERVE</div>
            <h3>Product Details</h3>
            <p>${data.description}</p>
        </div>
    </div>
</div>

<!------footer------>
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col-1">
                <img src="/images/abb.png" width="125px">
                <p>Benifits & Pleasure of gym equipments available to many.</p>
            </div>
            <div class="footer-col-2">
                <h3>Follow Us</h3>
                <li>Facebook</li>
                <li>Instagram</li>
            </div>
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