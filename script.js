"use strict";

// function a() {
//     // do something
//     setTimeout( function() 
//     {
//         console.log('a')
//     }, 500);
// }

// function b() {
//     console.log('b');
// }

// a();
// b();

// function c(lang, cb) {
//     console.log(`Я учу ${lang}!`);
//     cb();
// }

// c('JS', function() {console.log('Done!')});

// Learn 20

const options = {
    name: 'test a',
    width: 1024,
    height: 1024,
    colors: {
        borderColor: 'black',
        bgColor: 'red'
    },
    makeTest: function() {
        console.log('TesT');
    }
};

enumObject(options);

console.log(options.name);
console.log('Delete name field!!!!');
delete options.name;
console.log(options);

function enumObject(obj) {
    console.log(`Массивное кол-во полей объекта: ${Object.keys(obj).length}`)
    let counter = 0;
    for (let key in obj) {
        if (typeof(obj[key]) === 'object') {
            console.log('>>> ВНИМАНИЕ!!! Вложенный объект.');
            enumObject(obj[key]);
            console.log('<<< ВНИМАНИЕ!!! Окончание вложенного объекта.');
        } else {
            console.log(`Свойство ${key} имеет значение ${obj[key]}.`);
        }
        counter++;
    };
    console.log(`Сощитанное кол-во полей объекта: ${counter}`);
};

enumObject(options);

console.log('options.makeTest()');
options.makeTest();

const {borderColor, bgColor} = options.colors;
console.log(borderColor);
