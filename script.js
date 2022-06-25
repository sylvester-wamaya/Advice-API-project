
document.addEventListener("DOMContentLoaded", init)
function init(){    
fetch("https://api.adviceslip.com/advice")
    .then((res) => {
        return res.json()})
    .then((data) =>{
        document.querySelector("p").innerText.value = data.slip.advice
    })
    document.querySelector("button").addEventListener("click", randomAdvice)

    function randomAdvice(){
        fetch("https://api.adviceslip.com/advice")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data.slip.advice)
            document.querySelector("p").innerText = data.slip.advice
        })
    }

    document.querySelector("form").addEventListener("submit", (e) =>{
        e.preventDefault()
        adviceId = document.getElementById("advice-id")
        fetch(`https://api.adviceslip.com/advice/${adviceId.value}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=> {
            console.log(data.slip.advice)
            document.querySelector("p").innerText = data.slip.advice
        })
    })
}
