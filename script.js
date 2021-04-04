"use strict";

function a() {
    // do something
    setTimeout( function() 
    {
        console.log('a')
    }, 500);
}

function b() {
    console.log('b');
}

a();
b();

function c(lang, cb) {
    console.log(`Я учу ${lang}!`);
    cb();
}

c('JS', function() {console.log('Done!')});

