window.addEventListener('load', function() {

    (function animateTitle() {

        const mainTitle = document.getElementById('main-title');
        const titleLetters = mainTitle.textContent.split('');
        mainTitle.textContent = '';

        let count = 1;

        titleLetters.forEach(letter => {

            setTimeout(function() {

                showTitle(mainTitle, letter);

            }, count*50);

            count++;
        });
    })();
});

function showTitle(mainTitle, letter) {

    const span = document.createElement('span');
    span.setAttribute('class', 'h1-letters');
    span.textContent = letter;

    if (letter === ' ') {

        //span.style.width = '20px';
        span.classList.add('title-white-space');  
    }
    mainTitle.appendChild(span);
}