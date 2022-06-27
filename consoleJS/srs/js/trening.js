'use strict'; 

//тренеровка

// function calculateVolumeAndArea(cubeEdge) {
//     const volume = cubeEdge * cubeEdge * cubeEdge;
    
//     const square = cubeEdge * cubeEdge * 6;

//     if (cubeEdge != null && cubeEdge != '' && cubeEdge % 1 == 0 && cubeEdge > 0) {
//         return console.log(`Объем куба: ${volume}, площадь всей поверхности: ${square}`);
//     } else {
//         return console.log(`При вычислении произошла ошибка`);
//     }
// }

// calculateVolumeAndArea(-5);

// function getCoupeNumber(seatNumber) {
    
//     if (seatNumber == '' || seatNumber < 0  || seatNumber % 1 != 0){
//        return 'Ошибка. Проверьте правильность введенного номера места';
//     }

//     if (seatNumber == 0 || seatNumber > 36) {
//         return 'Таких мест в вагоне не существует';
//     } 
    
//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
// }

// console.log(getCoupeNumber(0));


// function getTimeFromtime(time) {
//     if (typeof(time) == 'string' || time % 1 != 0 || time <0) {
//         return 'Ошибка, проверьте данные';
//     }
//     const hour = Math.floor(time / 60);
//     const minutes = time % 60;
    
//     if (hour == 0 || hour >= 5) {
//         return "`Это ${hour} часов и ${minutes} минут`";
//     } else if (hour == 1) {
//         return "`Это ${hour} час и ${minutes} минут`";
//     } else {
//         return "`Это ${hour} часа и ${minutes} минут`";
//     }
// }

// console.log(typeof(getTimeFromtime(324)));

// function findMaxNumber(first, second, third, fourth) {
//     const arr = [first, second, third, fourth];
//     if (typeof(first) != 'number' ||typeof(second) != 'number' || typeof(third) != 'number' || typeof(fourth) != 'number' || arr.length != 4 ) {
//         return 0;
//     } else {
//         return Math.max(first, second, third, fourth);
//     } 
// }

// console.log(findMaxNumber(68,56,36658,36874));


// function fib(n) {
//     let a = '';
    
//     for (let i = 0; i < n; i++) {
//         if (n == 0) {
//             a = i;
//         } else if (i == 2) {
//             a = '0 1' ;
//         } else if ( i < 3) {

//         }
//         console.log(a);
//     }
//     return a;
// }

// console.log(fib(2));

// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     }
// };

// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key] === 'object')) {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


// const arr = [2, 3, 5, 9, 12, 19];

// console.log(arr.sort(compareNun));

// function compareNun ( a, b) {
//     return a - b;
// }


// // const obj = {
// //     a: 5,
// //     b: 1,
// // };

// function copy (mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 2,
//         y: 6,
//     }
// };

// const obj = {
//     d:41,
//     w: 55,
// };

// const newObj = Object.assign({}, obj);


// const oldArray = [];
// const newArray = oldArray.slice();

// const a = [1, 2, 3];
// const b = [10, 20, 30];
// const c = [...a, ...b, 100, 200, 300];
// console.log(c);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 6, 9];
// log(...num);

// const array = ['a', 'b'];
// const newArray = [...array];

// const obj = {
//     a: 1,
//     b: 2,
// };

// // const newObj = {...obj};

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;

//         let str = `Мне ${age} и я владею языками:`;

//         languages.forEach (function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     },
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// // function showExperience(plan) {
// //     const {exp} = plan.skills;
// //     return exp;
// // }
// // console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//         let answer = '';
//         const {programmingLangs} = plan.skills;

//         for (let key in programmingLangs) {
//             answer +=  `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         } 
//         return answer;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
//     arr.forEach(function(item){
//         str += `${item} `;
//     });
//     return str;
// }
// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(function(item){
//         console.log(item.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';
// const a = 'this';

// function reverse(str) {
//     if(typeof(str) !== 'string') {
//         return 'Ошибка!'; 
//     } else {
//         const arr = str.split('');
//         const revArr = arr.reverse();
//         const revStr = revArr.join('');

//         return revStr;
//     }  
// }
// console.log(reverse(a));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(item){
//         if (item !== missingCurr) {
//             str += `${item}\n`;
//         }      
//     });
//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], additionalCurrencies));

const soldier = {
    health: 400,
    armor: 100,
    seyHello: function () {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);
// const jonh = {
//     health: 100,
// };

// Object.setPrototypeOf(jonh, soldier);

jonh.seyHello();
