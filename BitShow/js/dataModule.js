const dataModule = (function () {
    class Show {
        constructor(name, image, id, summary) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasons = [];
            this.casts = [];
            this.summary = summary;
        }
    }

    class TVShow {
        constructor(showArr) {
            this.showArr = showArr;
        }
    }

    const createShow = (name, image, id, summary) => {
        return new Show(name, image, id, summary);
    }

    const adaptShowList = (showList) => {
        return showList.map((show) => {
            return createShow(show.name, show.image.medium, show.id, show.summary);
        })
    }
    const tvShowClass = (showArr) => {
        return new TVShow(showArr);
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
        createShow,
        adaptShowList,
        tvShowClass
    }
})();