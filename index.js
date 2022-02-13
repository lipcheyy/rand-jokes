console.log("jyjy")
const btn=document.querySelector(".btn")
const jokes=document.querySelector('.jokes')
body=document.querySelector('.body')
const colors=["#4287f5",'#6c3d8a','#81ad63','#0f1c45','#912323','#b02153']
let counter=0;
img=document.querySelector(".img")
async function jokeGenerator(){
     const jokeUrl= fetch('https://api.icndb.com/jokes/random')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            console.log(data.value.joke);
            jokes.innerHTML = data.value.joke;
        })
        img.classList.toggle("shake-img")
    counter+=1;
    body.style.backgroundColor=colors[counter]
    if(counter>=5){
        counter=0;
    }
}
btn.addEventListener("click", jokeGenerator);
window.addEventListener('load',jokeGenerator);