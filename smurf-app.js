var txtInput=document.querySelector("#inp-text1");
var txtOutput=document.querySelector("#out-text1");
var btnTranslate=document.querySelector("#btn1")

var serverURL="https://api.funtranslations.com/translate/smurf.json"; //this is server url

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