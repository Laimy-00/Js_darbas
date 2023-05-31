window.onload = () => {
    const darbai = document.getElementsByClassName('darbas');
    const favDialog = document.getElementById('favDialog');
    const closeBtn = favDialog.querySelector('dialog > [title="Close"]');

    // Dialogo uždaryui mygtuko "Close" įvykio registravimas
    closeBtn.addEventListener('click', closeModal);

    // Modalo uždarymas kai paspaudžiama už jo ribų.
    favDialog.addEventListener("click", e => {
        const dialogDimensions = favDialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            favDialog.close()
        }
    })

    // Su kiekvienu galerijos darbo elementu sukamas ciklas ir jam regisruojamas įvykio klausytojas
    for( let darbas of darbai) {
        darbas.addEventListener('click', loadImageAndShowDModal);
    }

    function loadImageAndShowDModal(event) {
        // Čia nusprendžiame iš kur imsime padidintą foto variantą

        // Iš Evento išraukiame elementą ant kurio katik paspaudėme
        // let element = event.target;
        // let imagePath = element.getAttribute('src');

        // Ar tiesiog nurodome foto adresą kaip konstantą
        let imagePath = 'https://picsum.photos/400/600';

        let image = favDialog.querySelector('img');

        image.src = imagePath; // Pakeičiame paveikslelio kelia į naują

        favDialog.showModal(); // Dialogo parodymas
    }

    function closeModal(event) {
        event.preventDefault(); // Nes mes nenorime išsiūsti duomenų su galima forma
        favDialog.close(); // Dialogo uždarymas.
    }
    let elements = document.querySelectorAll('.sachmatai > div');  
    for(let item of elements) {
        item.addEventListener('click', function(e){
            for (let elem of elements) {
                if (elem !== e.target) {
                    elem.classList.remove('zoomed');
                }
            }

            e.target.classList.toggle('zoomed');
        })
    }

}



async function fetchData() {
    try {
        const response = await fetch('/portfolio.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
}


fetchData().then(data => {
    let elements = document.querySelectorAll('.darbas');
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = '<img src="' + data[i].img + '" alt="' + data[i].title + '"><span>' + data[i].title + '</span>';
        elements[i].setAttribute('coding-lang', data[i].categories);
    }
  });



const myForm = document.querySelector('form');
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let choices = Array.from(e.target.elements['choices[]'])
        .filter(checkbox => checkbox.checked) 
        .map(checkbox => checkbox.value); 

    if (choices.length > 0) {
        const works = document.querySelectorAll('.darbas');
        for (let i = 0; i < works.length; i++) {
            const codingLangs = works[i].getAttribute('coding-lang').split(' ');
            if (choices.some(value => codingLangs.includes(value)))  {    
                works[i].style.display = 'block';
            } else {
                works[i].style.display = 'none';
            }
        }
    }
    else {
        const works = document.querySelectorAll('.darbas');
        for (let i = 0; i < works.length; i++) {
            works[i].style.display = 'block';
        }
    }
});


