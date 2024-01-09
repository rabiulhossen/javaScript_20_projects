// const buttons = document.getElementsByClassName("button")

// const bg = document.querySelector("body")


// buttons.forEach(function (button) {
//      button.addEvenListener('click', function (e) {
//           if (e.target.id) {
//                bg.style.backgroundColor = e.target.id
//           }
//      })
// })

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id){
            body.style.backgroundColor = e.target.id;
        }
    });
});