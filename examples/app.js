const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList);
// btns[0].style.backgroundColor = 'red';

// btns[0].classList.add('red');
// btns[0].classList.remove('red');

wrapper.append(document.createElement('button'));

// btns.forEach(btn => {
//     btn.addEventListener('click', event => {
//         if (event.target.classList.contains('red')){
//             event.target.classList.remove('red');
//         }else{
//             event.target.classList.add('red');
//         }
//     });
// });

wrapper.onclick = event => {
    // console.dir(event.target);
    const target = event.target;
    if (target.tagName === 'BUTTON'){
        target.onclick = event => {
            if (event.target.classList.contains('red')) event.target.classList.remove('red');
            else event.target.classList.add('red');
        }
    }
}