let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')

// console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const operator = e.currentTarget.classList;
        if(operator.contains('decrease')) {
            count--;
        } else if (operator.contains('reset')) {
            count = 0;
        } else {
            count++;
        }
        value.textContent = count;

        if(count < 0){
            value.style.color = "red";
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "black";
        }
    })


})

// let count = 0;

// const decrease = document.querySelector('.decrease').addEventListener('click',function(){
//     count--;
// });

// const increase = document.querySelector('.increase').addEventListener('click',function(){
//     count++;
// })