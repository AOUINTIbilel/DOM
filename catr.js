let btnPlus = document.getElementsByClassName('fa-sharp fa-regular fa-plus')

for(let i of btnPlus) {
    i.addEventListener("click" ,function(){
i.previousElementSibling.innerHTML++
sum()
})
}

let btnMoins = document.getElementsByClassName('fa fa-minus-circle')

for(let j of btnMoins) {
    j.addEventListener("click" ,function(){
        if(j.nextElementSibling.innerHTML > 0 ){
        j.nextElementSibling.innerHTML--
        sum()
    }
    })
} 


function sum(){
    let qte = document.querySelectorAll(".qte")
    let prix = document.querySelectorAll(".prix")
   let sum =0 ;
   for (let n=0 ;n<qte.length;n++){
    sum +=qte[n].innerHTML * prix[n].innerHTML
   }
document.getElementById("totale").innerHTML = "totale d'achat est DT: " +sum
}

let btnsup =document.getElementsByClassName('fa-solid fa-circle-xmark')
for (let sup of btnsup){
    sup.addEventListener("click",function(){
sup.parentNode.remove();
        sum()
    })
}



let btnLike =document.getElementsByClassName('fa-heart')
for (let Like of btnLike){
    Like.addEventListener("click",function(){
    Like.classList.toggle('like_color')
    })
}

let p = document.getElementById("achat")
p.addEventListener("click",function(){
    alert('achat effectée avec succés')
    console.log(p)

})