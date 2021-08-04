var txtInput=document.querySelector("#input-text");
var txtOutput=document.querySelector("#output-text");
var btnTranslate=document.querySelector("#donald-button")

var serverURL="https://api.funtranslations.com/translate/dolan.json"; //this is server url

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