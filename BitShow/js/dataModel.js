var request1 = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET"
});

request1.done(function (response1) {
    console.log(response1);
    console.log(response1[0]);
});
var request2 = $.ajax({
    url: "",
    method: "GET"
});

const shows = (function(){
    class show {
        constructor(name,image,id,seasons,casts,details){   
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasons = [];
            this.casts = [];
            this.details =details;
        }
    }
})();
const TV_Show = (function(){
    class tvShow {
        constructor(){
            this.shows = [];
        }
    }
});
const SeasonsName = (function(){
    class season {
        constructor(startDate,endDate){
            this.startDate = new Date(startDate);
            this.endDate = new Date(endDate);
        }
    }
});

const CastsName = (function(){
    class casts {
        constructor(name,surname){
            this.name = name;
            this.surname = surname;
        }
    }
});

/*
class Show{
    constructor(name,imageUrl,genres =[]){
        this.name = name;
        this.imageUrl = imageUrl;
        this.genres = genres;
    }
    getName(){
        return name;
    }
}

class Genre {
    constructor(name){
        this.name =name;
    }
}
const req = $.get(url);

let tvShows = [];

req.done(function(data){

    alert(JSON.stringify(data[0]));

    for() ili data.forEach(element => {
         const show = new Show(element.name,element.image.medium)
         tvShow.push(show)
    });
    console.log(tvShows)//pun niz stampa
});
console.log(tvShows)//prazan niz stampa







*/