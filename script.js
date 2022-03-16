$(document).ready(() => {
    getEquipment()
});

function prepareSearch(data) {
    $(function () {
        $("#searchWord").autocomplete({
            source: data,
            select: function (event, ui) {
                sessionStorage.setItem("path", ui.item.id)
                window.location = ui.item.page;
            }
        });
    });
}

function getEquipment() {
    $.ajax({
        url: "assets/json/equipment.json",
        dataType: "json",
        success: function (data) {
            prepareSearch(data);
            data.forEach((gymItem) => {
                prepareSearch(data);
                $('.gym-row').append(` <div class="col-3">
       <a href=${gymItem.page}><img src=${gymItem.path}> </a>
       <button type="button" id="button" onclick="loadPreviewPage('${gymItem.page}','${gymItem.id}')" > Preview </button>
       <h4>${gymItem.label}</h4></a>
       <div class="rating">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
       </div>
       <p>$70.00</p></div>`)
            })
        }
    });
}

function loadPreviewPage(page, id) {
    sessionStorage.setItem("path", id)
    window.location = page
}