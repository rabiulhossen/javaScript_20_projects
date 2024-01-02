const textarea = document.getElementById("textarea");
const count = document.getElementById("count");

const countingCharacters = () =>{

     const textLength = textarea.value.length;
     console.log(textLength);

     count.innerText = `${textLength}`
     
}