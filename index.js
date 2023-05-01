let button = document.querySelector ('.button-plus');
let counterText = document.querySelector ('.counter');
let counter = 0;

button.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

button = document.querySelector ('.button-minus');
counterText = document.querySelector ('.counter');
counter = 0;

button.addEventListener('click', function(){
    counter = counter - 1;

    counterText.innerText = counter;
})

button = document.querySelector ('.button-reset');
counterText = document.querySelector ('.counter');
counter = 0;

button.addEventListener('click', function(){
    counter = 0;

    counterText.innerText = counter;
})

