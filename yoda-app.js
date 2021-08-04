var txtInput=document.querySelector("#input");
var txtOutput=document.querySelector("#output");
var btnTranslate=document.querySelector("#button")

var serverURL="https://api.funtranslations.com/translate/yoda.json"; //this is server url

function getTranslationURL(text){
    return serverURL + "?text=" + text;  //getting translational url
}

function errorHandler(error){        //handling error
    console.log("error occured",error);
    alert("something went wrong with server! Please try again after sometime.");
}

btnTranslate.addEventListener("click",()=>{
    var message = txtInput.value;

    fetch(getTranslationURL(message))
    .then(response => response.json())
    .then(json => {
          var translatedText=json.contents.translated;
          txtOutput.innerText=translatedText; })
    .catch(errorHandler)
})