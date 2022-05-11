var pole_filmi=[];
let nazov_filmu= document.getElementById("nazov_filmu")
let rok_vydania= document.getElementById("rok_vydania")
let herec= document.getElementById("herec")

function prazdne_pole()
{nazov_filmu.value=""
rok_vydania.value=""
herec.value=""}


function vlozenie(event)
{event.preventDefault();
    let movie ={nazov_filmu:nazov_filmu.value,rok_vydania:rok_vydania.value,herec:herec.value}
pole_filmi.push(movie); // treba vytvoriť object movie 
prazdne_pole();
vypis_zoznam()}

function Odstránit_posledny ()
{event.preventDefault();
pole_filmi.pop();
prazdne_pole();
vypis_zoznam()}

function vycisti (event)
{event.preventDefault();
pole_filmi=[];
prazdne_pole();
vypis_zoznam()}

function vypis_zoznam()
{JSON.stringify(pole_filmi)
console.log("******* Aktuálny zoznam filmov *******"+JSON.stringify(pole_filmi))}