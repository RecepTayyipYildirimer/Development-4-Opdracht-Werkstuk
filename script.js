"use strict";

fetch("/data.json").then(function(resp) {
    return resp.json();
})
.then(function(data) {
    
    getElements(data.items);
});

function getElements(items){

    
    for (let i of items) {
        let category = i.category;
        let genre = i["genre-v2"];
        let thumbnail = i.thumbnail.url;
        let name = i.name;
        // let recorded = i.recorded-at;
        let videolength = i.video - length;

        $(".events").append(`<section class="my_cards ${category} ${genre}" style="background-image: url('${thumbnail}');">
        <h2>${category}</h2>
        <article><h1>${name}</h1>
        <h1>${genre}</h1>
        </article></section>`)
    }
}
