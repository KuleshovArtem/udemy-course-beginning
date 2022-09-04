// function pow (x, n) {
//     let result = 1;
//      for (let i = 0; i < n; i ++) {
//         result *= x;
//      }

//      return result;
// }

// function pow (x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow (x, n - 1);
//     }
// }

// console.log(pow(2, 4));

// let student = {
//     js: [{
//         name: 'John',
//         progress: 100,
//     }, {
//         name: 'Ivan',
//         progress: 60,
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20,
//         }, {
//             name: 'Ann',
//             progress: 18,
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10,
//         }],

//         semi: {
//             student: [{
//                 name: 'Test',
//                 progress: 100,
//             }]
//         },
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
            
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// // console.log(getTotalProgressByIteration(student));

// function getTotalProgressByRecusrsion(data) {
  
//         if (Array.isArray(data)) {
//             let total = 0;
            
//             for (let i = 0; i < data.length; i++) {
//                 total += data[i].progress;
//             }

//             return [total, data.length];
//         } else {
//             let total = [0, 0];

//             for(let subData of Object.values(data)) {
//                 const subDataArr = getTotalProgressByRecusrsion(subData);
//                 total[0] += subDataArr[0];
//                 total[1] += subDataArr[1];

//             }
//             return total;
//         }
// }

// const result = getTotalProgressByRecusrsion(student);
// console.log(result[0] / result[1]);


// //                                  функция которая высчитывет факториал

// function factorial(number) {
//     if(typeof(number) !== 'number' || number%1 !== 0) { 

//         return 'дробное или не число';
//     } else if(number <= 0) {

//         return 1;
//     }

//     if (number === 1) {

//         return number;
//     } else {
//         number *= factorial(number -1);

//         return number;
//     }
    
// }

// const resultFactorial= factorial(5);
// console.log(resultFactorial);




// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// function showThis(a, b){
//     console.log(this);
//     function sum () {
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout () {
//             console.log(this);    
//         }
//         shout();
//     }
// };
// obj.sum();

// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
// const ivan = new User('Ivan', 28);



// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

const btn = document.querySelectorAll('button');

btn.forEach(function(item) {
    item.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
    });
});

// btn.addEventListener('click', (e) => {
//     // console.log(this);
//     e.target.style.backgroundColor = 'red';
// });

const obj = {
    num:5 ,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        }
        say();
    }
};
obj.sayNumber();

const double = a => a * 2;

console.log(double(7));

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea () {
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps () {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25,10,'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());