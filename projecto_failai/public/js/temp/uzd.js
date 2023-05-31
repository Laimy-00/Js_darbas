function toRndmNumber(to) {
    let finalNumber = Math.floor(Math.random() * (to + 1));
    console.log(finalNumber)
}


function toRndmNumber(to) {
    let finalNumber = Math.ceil(Math.random() * to) - 1;
    console.log(finalNumber)
}

let  i  =  0;
while (i<5) {
    console.log(i*4);
    i++;
}