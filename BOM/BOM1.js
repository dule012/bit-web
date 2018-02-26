function heloo() {
    var message = 'Hellooou-eksterni';
    console.log(message);
}
heloo();

function check() {
    console.log('Platform of this computer is ' + navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.userAgent);
}

check();



function isOnline(n) {
    if (n === true) {
        console.log('We are online');
    }else {
        console.log('We are offline');
    }
}

isOnline(navigator.onLine);

function screen1() {
    console.log('Total: ' + 'Width:' + screen.availWidth + ' ' + 'Height:' + screen.availHeight);
    console.log('Current: Width:' + screen.width + ' ' + 'Height:' +screen.height);
}
screen1();

function url1() {
    console.log(location.href);
    console.log(location.host);
    console.log(location.hostname);
    console.log(location.port);
    console.log(location.protocol);
    console.log(location.search);
}

url1();

/*function redirection() {
    location.href = 'https://www.google.rs/?gws_rd=cr&dcr=0&ei=QjOUWr7jJYjkUpO7r5gK';
}
redirection();*/

function storage1() {
    localStorage.setItem('key1','view1');
    localStorage.setItem('key2','view2');
    localStorage.setItem('key3','view3');
}
storage1();

function storagePrint1(n) {
    console.log(localStorage.getItem(n));
}
storagePrint1('key1');

function storagePrint2() {
    console.log(localStorage.length);
}
storagePrint2();

function without() {
    console.log(localStorage.getItem('key4'));
}

without();