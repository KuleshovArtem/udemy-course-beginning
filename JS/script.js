'use strict';


const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start: function () {
        
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for(let i=1; i<=2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');   
            const b = +prompt('На сколько оцените его?', '');
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalMovieDB.movies[a] = b;
                console.log('успех');
            }else {
                console.log('ошибка');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count<10){
            alert('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
            alert('Вы классический зритель');
        }else if (personalMovieDB.count>=30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB); 
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat=false;
        } else{
            personalMovieDB.privat=true;
            }
    },
    writeYourGenres: function () {

        for ( let i=0; i<1; i++) {
            let a = prompt ('введите ваши любимые жанры через запятую');

            if(a !=null && a != '') {
                personalMovieDB.genres = a.split(', ');
            }else {
                i--;
            }
        }
        // for(let i=0; i<=2; i++) {
        //     let a = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        
    
        //     if(a != null && a != ''){
        //         personalMovieDB.genres[i] = a;
        //     }else {
        //         i--;
        //     }
        // }
    },
};

const {writeYourGenres} = personalMovieDB;

writeYourGenres();

// genres.forEach(function(item,index) {
//     console.log(`Любимый жанр #${index+1} - это ${item} `);
// });

personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр #${i+1} - это ${item} `);
});





























