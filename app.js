// button
var transButton = document.querySelector("#translate-button");
transButton.addEventListener("click", buttonClickHandler)
// take input
var translateInput = document.querySelector("#translate-input");

// output
var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/minion.json"

function buttonClickHandler(event)
{
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
}

function constructURL(inputText) {
    var translatedURL = encodeURI(inputText);
    return url+"?text="+translatedURL;
}
