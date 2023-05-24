const addEmailButton = document.createElement('div');
const removeEmailButton  = document.createElement('div');
const currentEmail = document.querySelector('#email');
let emailCount = 0;

addEmailButton.textContent = 'Add new email';
addEmailButton.classList.add('supbtn','btn__primary1');
currentEmail.parentNode.insertBefore(addEmailButton, currentEmail.nextSibling);

removeEmailButton.textContent = 'Remove last email';
removeEmailButton.classList.add('supbtn2', 'btn__primary1');
removeEmailButton.style.visibility = 'hidden';
addEmailButton.parentNode.insertBefore(removeEmailButton, addEmailButton.nextSibling);

addEmailButton.addEventListener('click', function (e) {
    e.preventDefault();
    emailCount++;
    if (removeEmailButton.style.visibility === 'hidden') {
        removeEmailButton.style.visibility = 'visible';
    }
    createNewEmail(emailCount);    
})

removeEmailButton.addEventListener('click', function (e) {
    const atrForEmail = '#email' + emailCount;
    const atrForLabel = `label[for="email${emailCount}"]`;
    const emailToRemove = document.querySelector(atrForEmail);
    const labelToRemove = document.querySelector(atrForLabel);
    emailToRemove.remove();
    labelToRemove.remove();
    emailCount--;
    if (emailCount === 0)  {
        removeEmailButton.style.visibility = 'hidden';
    }
    else if (emailCount === 3) {
        addEmailButton.style.visibility = 'visible';
    }
})


const myForm = document.querySelector('form');
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let vardas = e.target.elements.vardas.value;
    let pavarde = e.target.elements.pavarde.value;
    let email = e.target.elements.email.value;
    let emails = [];
    for (let i = 1; i < 5; i++) {
        let fieldName = 'email' + i;
        if (e.target.elements[fieldName]) {
            emails[i - 1] = e.target.elements[fieldName].value;
        }
        else {
            break;
        }
    }
    let kursas = e.target.elements.kursas.value;
    let komentaras = e.target.elements.komentaras.value;
    const field = document.querySelector('#textToChange');
    let newText = `${vardas} ${pavarde} ${email} `;

    for (let i = 0; i < 4; i++) {
        if (emails[i]) {
            newText += emails[i] + ' ';
        }
        else{
            break;
        }

    }
    newText += `${kursas} ${komentaras}`;
    field.textContent = newText;
})

function createNewEmail(id) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    label.textContent = 'Additional email '+  id;
    label.setAttribute('for', 'email' + id);
    input.setAttribute('type', 'email');
    input.setAttribute('name', 'email' + id);
    input.setAttribute('id', 'email'+  id);
    input.classList.add('form__input');
    if (id > 1)  {
        atr  =  '#email' + (id  - 1);
        const currentEmail = document.querySelector(atr);
        currentEmail.parentNode.insertBefore(label, currentEmail.nextSibling);
        label.parentNode.insertBefore(input, label.nextSibling);
    } else {
        const currentEmail = document.querySelector('#email');
        currentEmail.parentNode.insertBefore(label, currentEmail.nextSibling);
        label.parentNode.insertBefore(input, label.nextSibling);
        
    }
    if (id ===  4)  {
        addEmailButton.style.visibility = 'hidden';
    }
}