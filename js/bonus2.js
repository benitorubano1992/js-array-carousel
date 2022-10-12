const sideBox=document.getElementById("second-box");
console.log(sideBox)
const imageArray=["04.jpg","01.jpg","02.jpg","03.jpg","05.jpg"];

const mainBox=document.getElementById("main-content");

let result="";
let result2=""
for(let i=0;i<imageArray.length;i++){

    result+=`<div class="item trasparent ">
    <img src="img/${imageArray[i]} " > 
 </div>`
    result2+=`<div class="box hidden ">
    <img src="img/${imageArray[i]} " > 
 </div>`
}

sideBox.innerHTML+=result;
mainBox.innerHTML=result2;
const boxList=document.getElementsByClassName("box");
const itemList=document.getElementsByClassName("item");
console.log()
let slider=0;

itemList[slider].classList.add("active");
console.log(itemList[slider])
boxList[slider].classList.add("attivo");

const btnUp=document.getElementById("btn-up");
const btnDown=document.getElementById("btn-down");
console.log(btnDown);
btnUp.addEventListener("click",function(){
if(slider<=itemList.length-1){
    if(slider< itemList.length-1){
        itemList[slider].classList.remove("active");
        boxList[slider].classList.remove("attivo")
        slider++;
        itemList[slider].classList.add("active");
        boxList[slider].classList.add("attivo")
    }
    else {
        boxList[itemList.length-1].classList.remove("attivo");
        itemList[itemList.length-1].classList.remove("active");
        slider=0;
        boxList[slider].classList.add("attivo"); 
        itemList[slider].classList.add("active");       
        
        }
}

})


btnDown.addEventListener("click",function(){
    if(slider>=0){
        if(slider>0){
            itemList[slider].classList.remove("active");
            boxList[slider].classList.remove("attivo")
            slider--;
            itemList[slider].classList.add("active");
            boxList[slider].classList.add("attivo")
        }
        else {
            itemList[slider].classList.remove("active");
            boxList[slider].classList.remove("attivo")
            slider=itemList.length-1;
             itemList[slider].classList.add("active");       
             boxList[slider].classList.add("attivo")
            }
    }
})




