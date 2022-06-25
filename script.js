
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
        document.getElementById("advice-id").value = ""
    }

    document.querySelector("form").addEventListener("submit", (e) =>{
        e.preventDefault()
        adviceId = document.getElementById("advice-id")
        fetch(`https://api.adviceslip.com/advice/${adviceId.value}`)
        .then((res)=>{
            return res.json()
        }).catch(error =>{
            throw(error)
        })
        .then((data)=> {
            console.log(data.slip.advice)
            document.querySelector("p").innerText = data.slip.advice
        })
        .catch(error=>{
            document.querySelector("p").innerHTML = `<span> Error:Enter a number between 1 and 224</span>`
            console.log(error)
        })
    })
}
