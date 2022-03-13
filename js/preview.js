$(document).ready(() => {
    var path = sessionStorage.getItem("path")
    if (path === 'one') {
        console.log("******" + path)
        composePreviewHtml(path)
    } else if (path === "two") {

    }
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
    item = {}
    // item[id] = { "id" : id, "quantity" : }
    localStorage.cart = item

}