const mainModule = ((data, ui) => {
    const request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET"
    });

    request.done((response) => {
        const tvShows = response.slice(0, 50);
        const tvShowObjects = data.adaptShowList(tvShows);
        // console.log(tvShowObjects);
        
        ui.displayShowsForMainPage(tvShowObjects);
    });
})(dataModule, UIModule);