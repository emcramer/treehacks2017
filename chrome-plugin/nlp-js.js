// NLP with JS

var api_url = "https://api.diffbot.com/v3/article";
var api_token = "27a6981b4d8208468d629e9bc14f5f46";
var theUrl = api_url + "?token=" + api_token + "&url=";

// add event listener for yes button
var yesButton = document.getElementById("yes");
console.log('ths is typpe: ' + typeof(yesButton));
console.log('this is content: ' + yesButton.textContent);

yesButton.addEventListener("click", function loadDoc() {

theUrl += page_url;

//p perform a get request on the current page url
  console.log('in event handler');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      obj = JSON.parse(this.responseText);
      console.log(obj);
      var text = obj.objects[0].text;
      console.log(text);

      document.getElementById("status").innerText = text;
      console.log("Success!");
    }
  };
  xhttp.open("GET", theUrl, true);
  xhttp.send();
});


