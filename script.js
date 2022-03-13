$(document).ready(() => {
    getEquipments()
});

function getEquipments() {
    $.ajax({
        url: "assets/json/equipments.json",
        dataType: "json",
        success: function (data) {
            data.forEach((gymItem) => {
                $('.gym-row').append(` <div class="col-3">
       <a href=${gymItem.page}><img src=${gymItem.path}> </a>
       <button type="button" id="button" onclick="loadPreviewPage('${gymItem.page}','${gymItem.id}')" > Preview ${gymItem.title} </button>
       <h4>${gymItem.title}</h4></a>
       <div class="rating">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
       </div>
       <p>$70.00</p>
   </div>`)
            })

        }
    });
}

function loadPreviewPage(page, id) {
    sessionStorage.setItem("path",id)
    window.location = page
}