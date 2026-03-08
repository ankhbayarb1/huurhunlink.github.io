const roses = document.querySelectorAll(".rose");

setTimeout(() => {

for(let i = 0; i < roses.length; i++){

setTimeout(()=>{
roses[i].classList.add("show");
}, i * 500);

}

}, 1000);
