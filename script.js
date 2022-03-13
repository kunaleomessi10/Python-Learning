$(document).ready(() => {
    getEquipments()
});

function getEquipments() {
    $.ajax({
        url: "assets/json/equipments.json",
        dataType: "json",
        success: function(data) {
            data.forEach((gymItem) => {
                $('.gym-row').append(` <div class="col-3">
       <a href=${gymItem.page}><img src=${gymItem.path}> </a>
       <a  onClick="loadPreviewPage(gymItem.id); return false;" href=${gymItem.page}  class="mylink" >
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

function loadPreviewPage(id) {
    console.log("******** " + id)
    window.location = "./html/preview_item.html?id=" + id

}