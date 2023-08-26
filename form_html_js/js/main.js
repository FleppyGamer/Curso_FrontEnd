let varB = document.getElementById('field-B');
let varA = document.getElementById('field-A');
const choice = document.getElementById('form-numbers');
let errorMessage = document.getElementById('error-message');
let successMessage = document.getElementById('success-message');
const subAns = document.getElementById('submit-ans');

choice.addEventListener('keyup', function(e) {
    let bIsBigger = false;


    fieldA = varA.value;
    fieldB = varB.value;

    function comparator(x, y){
        const comparate = y>x;
        return comparate; 
    }

    bIsBigger = comparator(fieldA, fieldB);

    
    if (bIsBigger) {
        console.log('Hooray! B is bigger than A.');
        successMessage.style.display = 'flex';
        errorMessage.style.display = 'none';
        subAns.style.display = 'block';
    } else {
        console.log('Oh no! Make B bigger!');
        successMessage.style.display = 'none';
        errorMessage.style.display = 'flex';
        subAns.style.display = 'none';
    }
})
