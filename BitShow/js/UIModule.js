const UIModule = (function () {
    const displayShowsForMainPage = (tvShows) => {
        // console.log(tvShows);

        // const [firstShow] = tvShows;
        // for (var i = 0; i < 50; i++) {
        //     document.querySelector(".mainPageContainer").innerHTML += createDiv
        // }
        // document.querySelector(".mainPageContainer").innerHTML = createDiv(firstShow)

    

    // const createDiv = (show) => {
    //     return `
    //         <div class="col-sm-3">
    //             <img src="${show.url}" alt="">
    //             <p>${show.name}</p>
    //         </div>
    //     `
    // }
    tvShows.forEach((el) => {
        let mainPageContainer = $('.mainPageContainer');
        let a = $('<a>');
        a.attr('href', 'showPage.html');
        let div = $('<div>');
        div.attr('class', 'col-sm-4')
        div.css('border', '2px solid black');
        let img = $('<img>');
        img.attr('src',el.image.medium);
        img.css({
            'width': '100%',
            'display': 'block'
        });
        let p = $('<p>');
        p.text(el.name);
        p.css({
            'text-align': 'center',
            'margin-top': '20px'
        });
        div.append(img);
        div.append(p);
        a.append(div);
        mainPageContainer.append(a);
    });
}
    return {
        displayShowsForMainPage
    }
})();