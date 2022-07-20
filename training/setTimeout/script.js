// btn.addEventListener('click', () => {
//     // const timeId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });


// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('hello');
//     i++;
// }

// let id = setTimeout ( function log () {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);

                           // Анимация на setInterval

// const btn = document.querySelector('.btn');

// function myAnimation () {
//     const box = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 4);
//     function frame () {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             box.style.left = pos + 'px';
//             box.style.top = pos + 'px';
//         }
//     }
// }
 
// btn.addEventListener('click', myAnimation);

                            // работа с объектом дата 

const now = new Date();
// console.log(now);
// console.log(now.getFullYear());  
// console.log(now.getMonth());   
// console.log(now.getDate());            

// console.log(now.getTime());

// console.log(now.setHours(23));
// console.log(now);

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}
let end = new Date();

const result = end - start;

console.log(`операция заняла ${result} милисекунд`);