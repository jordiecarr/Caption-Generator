const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button");
// random quote function
function randomQuote(){
    //fetch api and pars
    fetch("https://api.kanye.rest/").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.quote;
    });
}
quoteBtn.addEventListener("click", randomQuote);