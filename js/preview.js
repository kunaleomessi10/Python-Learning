
$(document).ready(()=>{
getEquipments()
});

function loadPreviewPage(id){
    console.log("******** " + id)
        window.location = "./html/preview_item.html?id="+ id

}