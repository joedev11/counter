const color = document.querySelector('.container');
const button = document.querySelector('.btn');
const value = document.querySelector('.value');

const colorRandomizer = button.addEventListener("click", function(){
    // console.log(chosenColor);
    let num = Math.floor(Math.random() * 5);
    let colorChoices = ["red", "blue", "yellow", "green","orange"];
    let chosenColor = colorChoices[num];

    color.style.backgroundColor = chosenColor;
    value.innerHTML = chosenColor;

})


