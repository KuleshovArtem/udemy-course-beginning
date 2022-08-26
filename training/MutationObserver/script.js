'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecord => {
    console.log(MutationRecord);
});

observer.observe(box, {
    childList: true
})
