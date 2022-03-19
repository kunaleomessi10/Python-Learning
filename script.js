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
                $('.gym-row').append(`       
       <div class="card  col-md-3" onclick="loadPreviewPage('${gymItem.page}','${gymItem.id}')">
            <div class="d-flex sale ">
                <div class="btn" onclick="loadPreviewPage('${gymItem.page}','${gymItem.id}')">Preview</div>
            </div>
            <img class='mx-auto img-thumbnail' src="${gymItem.path}"/>
            <div class="card-body text-center mx-auto">
                <h5 class="card-title">${gymItem.label}</h5>
                <p class="card-text">${gymItem.label}</p>
            </div>
        </div>`)
            })
        }
    });
}

function loadPreviewPage(page, id) {
    sessionStorage.setItem("path", id)
    window.location = page
}