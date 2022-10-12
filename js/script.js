//verifica collegamento
console.log("ciao")

//creazione array delle foto
const imageArray=["04.jpg","01.jpg","02.jpg","03.jpg","05.jpg"];
const box=document.getElementById("image-box");

//console.log(btnUp);
//console.log(btnDown);
//console.log(box);

/*prova inziale
box.innerHTML+=`  <div class="box-img">
<img src="img/04.jpg" alt="background photo">
</div>`
*/


//creazione dei div contenenti le immagini a cui di default do display none con la classe hidden
let result="";
for(let image of imageArray){
    result+=`<div class="box-img hidden">
    <img src="img/${image}" alt="background photo">
    </div>`
}
box.innerHTML+=result;
//creazione dell'HTML collection con classe="box-img"
const boxList=document.getElementsByClassName("box-img");
console.log(boxList);//debug
//assegno al primo elemento dell'array la classe active che successivamente, a seconda del click sulle freccie spostero ad altri elementi della classe
//indice che mi da la posizione nell'HTML Collection boxList
let index=0;
boxList[index].classList.add("active");



//evento sulla freccia che mi manda in avanti

    
    /*devo mostrare immagine successiva a quella corrente in posizione slider
boxList[index].classList.remove("active");
    if(index < boxList.length-1){
                
index++;
boxList[index].classList.add("active");
*/    

const btnUp=document.getElementById("up-row");
const btnDown=document.getElementById("down-row");
//funzionamento tasto in avanti
btnUp.addEventListener("click",function(){
if(index<boxList.length-1){
boxList[index].classList.remove("active");
index++;
boxList[index].classList.add("active");



}    



})            
//funzionamento tasto indietro
btnDown.addEventListener("click",function(){
    if(index>0){
        boxList[index].classList.remove("active");
        index--;
        boxList[index].classList.add("active");
    
    }




})






