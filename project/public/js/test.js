// Sudarykite programą, kuri iš Jūsų gimimo datos (metai, mėnuo, diena tai atskiri
//     kintamieji) paskutinių skaitmenų gautu jų sumą ir ją parodykite developer tools
//     konsolėje.
let year = 1984;
let month = 7;
let day = 10;
let date = (year % 10) + (month % 10) + (day % 10);
console.log(date);
// Duotas kintamasis r = 15. Sukurti algoritmus kurie skaičiuotų apskritimo ilgį ir
// plotą.
let r = 15;
let l = 2 * Math.PI * r;
let s = Math.PI * r * r;
console.log(`Apskritimo ilgis = ${l} ir plotas = ${s}`);



// 1. Duoti du sveikųjų skaičių intervalai [a; b] ir [c; d], kur a ≤ c. Sudarykite programą, kuri
// nustatytų, ar egzistuoja šių intervalų sankirta ir, jeigu sankirta egzistuoja, tai raskite jos
// rėžius [x; y].
let a = 1;
let b = 7;
let c = 2;
let d = 4;
let str;
let xa;
let ya;
if (a < c) {
    x = c;
    if (b < d) {
        y = b;
    } 
    else {
        y = d;
    }
    str = (`Sankirta yra [${xa}; ${ya}]`)
}
else {
    str = 'Sankirtos nėra.'
}
console.log(str)




// Išveskite visus šiuos duomenis sakinio pavidalu, pvz:
let answ = `Mes turim sveikųjų skaičių intervalus [${a}; ${b}] ir [${c}; ${d}]. Ju sankirta yra [${xa}; ${y}].`
console.log(answ)


// 3. Išveskite visų kintamųjų apibūdinimus su tipais (naudoti typeof), pvz:
let z = null;   //null-object
typeof z;
let y;          //undefined
typeof y;
let x = true;   //boolean
typeof x;
let w = 7;      //number
typeof w;
let v = 'string';   //string
typeof v;
let u = Symbol('key');  //symbol
typeof u;
let t = BigInt('123456789012345678901234567890');   //bigint
typeof t;



// 4. Sukurkite studento objektą, naudokite tuos pačius duomenis (vardas, pavarde, ...).
let student = {
    name: "Jonas",
    lastname: "Jonaitis",
    age: 20,
    level: 2,
    branch: "IT",
    results: [8, 7, 9]
}
console.log(student)



// 5. Sukurkite Objektų masyvą pagal katik sukurto Studento objekto struktura.
let students = [{
    name: "Jonas",
    lastname: "Jonaitis",
    age: 20,
    level: 2,
    branch: "IT",
    results: [8, 7, 9]
},
{
    name: "Petras",
    lastname: "Petraitis",
    age: 19,
    level: 1,
    branch: "IT",
    results: [8, 7, 9]
},
{
    name: "Valdas",
    lastname: "Jonaitis",
    age: 20,
    level: 2,
    branch: "IT",
    results: [8, 7, 9]
},
{
    name: "Jolanta",
    lastname: "Jonaityte",
    age: 20,
    level: 2,
    branch: "IT",
    results: [8, 7, 9]
},
{
    name: "Jonas",
    lastname: "Vasiliauskas",
    age: 20,
    level: 2,
    branch: "IT",
    results: [8, 7, 9]
},
{
    name: "Andrius",
    lastname: "Jonaitis",
    age: 20,
    level: 2,
    branch: "IT",
    results: [8, 7, 9]
},
]
console.log(students)



// 6. Išveskite penkto objekto duomenis (vienas bendras console.log()).
console.log(students[4])




// 7. Išveskite tokį patį informacinį sakinį iš objekto duomenų kaip prieš tai išvedėte iš paprastų
// kintamųjų ("Tomas Tomauskas mokosi KTU, 4 kurse, jo pažymiai: [7, 4, 5].").
// Išbandykite tiek dot notation, tiek bracket notation traukiant duomenis iš masyvo.
let answer = `${students[4]['name']} ${students[4]['lastname']} ${students[4].age} metu, mokosi ${students[4].level} kurse, ${students[4].branch} fakultete, su pazymiai: ${students[4].results}`
console.log(answer)


// 8. Išveskite visus studento pažymius, esančius objekte. Naudojant for ciklą.
let sum = 0;
for (let i = 0; i < students.length; i++) {
    for (let j=0; j < students[i].results.length; j++){
        sum += students[i].results[j]
    }
}
console.log(sum)



// 9. Pakelkite tris pasirinktus pažymius per vieną skaičių. Tačiau atkreipkite dėmesį ar keliamas
// pažymys gali būti pakeltas (jei dar ne max), jei jis jau ir taip yra 10, tuomet palikite tokį koks yra.
let len = students.length;
if (students[len-1].results.length < 3) {
    let len2 = students[len-1].results.length
    while (len2 < 3) {

    }
}
else {

}




// 10. Suskaičiuokite ir išveskite trijų pasirinktų pažymių sumą.
// 11. Suskaičiuokite ir išveskite dviejų pasirinktų pažymių sandaugą.
// 12. Patikrinkite ar kursas yra numeral tipo.
// 13. Patikrinkite ar studentas mokosi ketvirtame kurse ir ar ši reikšmė yra kaip numeral (===).
// 14. Patikrinkite visus studentus ar jie mokosi ketvirtame kurse. Jeigu studentas mokosi
// ketvirtame kurse, išveskite tekstą "studentas <Vardas Pavardė> yra abiturientas", kitu atveju
// "Studentui <Vardas Pavardė> dar toli iki mokslų baigimo".
// 15. Sukurkite funkciją vardu "suma", kuri priima du skaičius kaip argumentus ir grąžintų jų
// sumą.
// 16. Naudodami šią funkciją, parašykite kodą, kuris atspausdina visų skaičių nuo 1 iki 100
// sumą.
// 17. Sukurti funkcija/metoda kuris sudetu lyginius arba nelyginius pateikto masyvo elementus.
// let A = [1,3,6,5,7,2,2,4,4,8];
// sudeti(A, ‘even’); // even|odd





let a = 3;
let b = 1;
let c = 5;
let ans;
if (a < b) {
    if (a < c) {
        ans = a;
    }
    else if (a > c){
        ans = c;
    }
    else {
        ans = 'Nera atsakymo';
    }
}
else if (a > b) {
    if (b < c) {
        ans = b;
    }
    else if (b > c){
        ans = c;
    }
    else {
        ans = 'Nera atsakymo';
    }
}
else {
    if (a > c){
        ans = c;
    }
    else {
        ans = 'Nera atsakymo';
    }
}
document.getElementsByTagName('div').innerHTML = ans;