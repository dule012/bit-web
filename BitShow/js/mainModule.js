const mainModule = ((data, ui) => {
    var slicedArr;
    const init = () => {
        $(function () {
            const request = $.get("http://api.tvmaze.com/shows")

            request.done((response) => {
                const tvShows = response.slice(0, 50);
                slicedArr = tvShows;

                const ShowObjects = data.adaptShowList(slicedArr);
                // console.log(ShowObjects)

                const tvShowInstance = data.tvShowClass(response);
                ui.displayShowsForMainPage(tvShows);
            });
        });

        $(document).on('click', (event) => {
            let divShows = $('div.col-sm-4');
            for (var j = 0; j < divShows.length; j++) {
                if (event.target == divShows[j].firstElementChild || event.target == divShows[j].lastElementChild) {
                    console.log(j);
                    open('showPage.html');
                }
            }
        })

    }


    const initShowPage = (data, ui) => {
        // $(function() {
        //     //AJAX for Casts and Seasons
        // });
        var ShowObjects1 = data.adaptShowList(slicedArr);//nece da stampa
        console.log(a)

    };

    return {
        init,
        initShowPage
    }
})(dataModule, UIModule);