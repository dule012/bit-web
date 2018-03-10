const mainModule = ((data, ui) => {
    const request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET"
    });

    request.done((response) => {
        const tvShows = response.slice(0, 50);
        const ShowObjects = data.adaptShowList(tvShows);
        // console.log(ShowObjects);
        const tvShow1 = data.tvShowClass(response);
        // console.log(tvShow1);
        ui.displayShowsForMainPage(tvShows);
    });
})(dataModule, UIModule);