
//Upphämtning

let checkbox = document.getElementById('divStyle');

let textfields = document.querySelectorAll('.textfield');

let button = document.getElementsByTagName('button')[0];

let div = document.querySelector('#myDiv');


// Input och skapa egen eventHandler

function handleInputEvent(e) {
    console.log('Event triggered by:', e.target);

    if (e.target.name === 'content') {
        div.innerHTML = e.target.value;
    }
}
checkbox.addEventListener('change', function() {
    const color = document.getElementById('color').value;
    div.style.backgroundColor = color;
});

// Eventlisterners


textfields.forEach(field => field.addEventListener('input', handleInputEvent));


button.addEventListener('click', function() {
    div.remove();
});




