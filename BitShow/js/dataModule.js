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
        constructor(name, image, id, details) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasons = [];
            this.casts = [];
            this.details = details;
        }
    }

    const createTVShow = (name, image, id, details) => {
        return new TVShow(name, image, id, details);
    }

    const adaptShowList = (showList) => {
        return showList.map((show) => {
            return createTVShow(show.name, show.image.medium, show.id, show.details);
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