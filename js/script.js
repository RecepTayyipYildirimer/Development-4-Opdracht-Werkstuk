"use strict";

fetch("../json/data.json").then(function(resp) {
    return resp.json();
})
.then(function(data) {
    
    getElements(data.items);
});

function getElements(items){

    
    for(let i of items){
        console.log(i);
        
        $(".events").append(`<section style="background-image: url('${i.thumbnail.url}');"><h2>${i.category}</h2><article><h1>${i.name}</h1></article></section>`)
        
        /**item.append(`<div class="tagline"> ${i._id} </div>`)
        let cardImage = `<div style=' background-image: url("${i.thumbnail.url}")' class='video-card-image-wrapper'>  </div>`;

        let item = `<div class="video-card" id=' ${i._id}'> ${cardImage}  </div>`;
        $(".items").append(item);**/
    }
}