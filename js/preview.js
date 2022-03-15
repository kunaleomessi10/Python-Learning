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
            <img src="${data.path}" width="50%">
            <h1>${data.label}</h1>
            <h4>€160.00</h4>
             <button type="button" id="button" onclick="addToCart('${data.id}')">Add to Cart</button>
            <h3>Product Details</h3>
            <p>${data.description}</p>
        </div>
    </div>
</div>

<div class="smallcontainer">
    <div class="row">
        <div class="col-4">
            <a href="/html/Bolt-Strength-Dumbbells.html"><img src="/images/Bolt-Strength-Dumbbells.png"> </a>
            <a href="/html/Bolt-Strength-Dumbbells.html"><h4>Bolt Strength Dumbells</h4></a>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>$180.00</p>
        </div>
        <div class="col-4">
            <a href="Olympic-EZ-Curl-bar.html"><img src="/images/Olympic-EZ-Curl-bar.jpeg"> </a>
            <a href="Olympic-EZ-Curl-bar.html"><h4>Olympic EZ Curl bar</h4></a>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>$90.00</p>
        </div>
        <div class="col-4">
            <a href="150kg-Bumper-Plate-Set-&-7ft-Bar.html"><img src="/images/150kg-Bumper-Plate-Set-&-7ft-Bar.jpeg">
            </a>
            <a href="150kg-Bumper-Plate-Set-&-7ft-Bar.html"><h4>150kg sBumper Plate Set</h4></a>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>$70.00</p>
        </div>
        <div class="col-4">
            <a href="Fleck-Bumper-Plates.html"><img src="/images/Fleck-Bumper-Plates.png"> </a>
            <a href="Fleck-Bumper-Plates.html"><h4>Fleck Bumber PLates</h4></a>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>$60.00</p>
        </div>
        <div class="col-4">
            <a href="Bolt-strength-home-use-adjustable-bench.html"><img
                    src="/images/Bolt-strength-home-use-adjustable-bench.jpeg"> </a>
            <a href="Bolt-strength-home-use-adjustable-bench.html"><h4>Bolt Strength home use adjustable bench</h4></a>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>$180.00</p>
        </div>
        <div class="col-4">
            <a href="Bolt-Strength-Ez-Curl-Barbell.html"><img src="/images/Bolt-Strength-Ez-Curl-Barbell.jpeg"></a>
            <a href="Bolt-Strength-Ez-Curl-Barbell.html"><h4>Bolt Strength Ez Curl Barbell</h4></a>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>$90.00</p>
        </div>
        <div class="col-4">
            <a href="Puls8-Adjustable-Dumbbells.html"><img src="/images/Puls8-Adjustable-Dumbbells.png"> </a>
            <a href="Puls8-Adjustable-Dumbbells.html"><h4>Puls8 Adjustable Dumbbells</h4></a>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p>$70.00</p>
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

}