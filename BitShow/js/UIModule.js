const UIModule = (() => {
    const displayShowsForMainPage = (tvShows) => {
        tvShows.forEach((el) => {
            let mainPageContainer = $('.mainPageContainer');
            let div = $('<div>');
            div.attr('class', 'col-sm-4');
            div.css('border', '2px solid black');
            let img = $('<img>');
            img.attr('src', el.image.medium);
            img.css({
                'width': '100%',
                'display': 'block',
            });
            let p = $('<p>');
            p.text(el.name);
            p.css({
                'text-align': 'center',
                'margin-top': '20px'
            });
            div.append(img);
            div.append(p);
            mainPageContainer.append(div);
        });
    }

    var divImg = document.querySelector('div.col-sm-8');
    var pSum = document.querySelector('p#summary');
    var main = document.querySelector('.mainPageContainer')

    const createDivImgInSP = (src) => {
        let divImg = $('.img');
        let div1 = $('<div>');
        div1.attr('class','col-sm-8');
        let img1 = $('<img>');
        img1.attr('src', src);
        let p = $('<p>')
        p.text('asdaasdasdda');
        img1.attr('width','100%')
        div1.append(p);
        div1.append(img1);
        divImg.append(div1);
        console.log('ok')

    }

    return {
        displayShowsForMainPage,
        createDivImgInSP,
    }
})();