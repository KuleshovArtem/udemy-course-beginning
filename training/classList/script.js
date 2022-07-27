const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[1].classList.add('red'));

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
    // if(!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    //     } else {
    //         btns[1].classList.remove('red');
    //     }
});

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);