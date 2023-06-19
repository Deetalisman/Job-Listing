//-----------serach filter--------------//
const bigList = document.querySelectorAll(".list");
const smallList = document.querySelectorAll("ul li");

const arr = [...smallList];
console.log(arr);
const input = document.querySelector("#searchbox");

input.addEventListener("keyup", function(e){
    inputVal = input.value.toLowerCase();
    smallList.forEach(function(list){
        const right = list.textContent.toLowerCase();
        console.log(right);
        if(right.indexOf(inputVal) !== -1){
            list.style.display = "block";
        }else{
            list.style.display = "none";
        }
    })
})

//--------clear----------//
const clear = document.querySelector(".clear")
clear.addEventListener("click",function(e){
     const input = document.querySelector("#searchbox");
    input.value = "";
    smallList.forEach(function(list){
        list.style.display = "block";
    })
})
