var txtInput=document.querySelector("#inp-text");
var txtOutput=document.querySelector("#out-text");
var btnTranslate=document.querySelector("#btn")

var serverURL="https://api.funtranslations.com/translate/ferb-latin.json"; //this is server url

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