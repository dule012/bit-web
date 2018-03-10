const dataModule = (function () {
    class Show {
        constructor(name, image, id, seasons, casts, details) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasons = [];
            this.casts = [];
            this.details = details;
        }
    }

    class TVShow {
        constructor(name, url, id) {
            this.name = name;
            this.url = url;
            this.id = id;
        }
    }

    const createTVShow = (name, url, id) => {
        return new TVShow(name, url, id);
    }

    const adaptShowList = (showList) => {
        return showList.map((show) => {
            return createTVShow(show.name, show.image.medium, show.id);
        })
    }

    class Season {
        constructor(startDate, endDate) {
            this.startDate = new Date(startDate);
            this.endDate = new Date(endDate);
        }
    }

    class Cast {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
    }

    return {
        createTVShow,
        adaptShowList
    }
})();