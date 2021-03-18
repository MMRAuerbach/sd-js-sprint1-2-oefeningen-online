console.log("main.js file loaded");

// prompt('Irritant he zo een popup ;-) Bij alle opdrachten geldt, bedenk eerst de oplossing en schrijf deze in stapjes op (steno) ga daarna pas aan het werk!!', 'Ja meneer dat doe ik!')

const switchButton = document.querySelector('.button-switch'); //element met de button of het geeft null terug. 

if (switchButton) {
    switchButton.addEventListener('click', function() {
        const theBody = document.querySelector('.the_body');
        const theButtons = document.querySelectorAll('.button_light');

        theBody.classList.toggle('the_body_dark');

        for (let i = 0; i < theButtons.length; i++) {
            const changeButton = theButtons[i];
            changeButton.classList.toggle('button_dark');
        }
    })
}

