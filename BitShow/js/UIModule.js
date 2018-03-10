const UIModule = (function () {
    const displayShowsForMainPage = (tvShows) => {
        console.log(tvShows);

        const [firstShow] = tvShows;
        for(var i = 0; i<50; i++){
            document.querySelector(".mainPageContainer").innerHTML +=createDiv
        }
        document.querySelector(".mainPageContainer").innerHTML = createDiv(firstShow) 

    }

    const createDiv = (show) => {
        return `
            <div class="col-sm-3">
                <img src="${show.url}" alt="">
                <p>${show.name}</p>
            </div>
        `
    }

    return {
        displayShowsForMainPage
    }
})();