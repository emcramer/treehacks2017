// NLP with JS

var curr_url = window.location.href;
var api_url = "https://api.diffbot.com/v3/article?";
var api_token = "27a6981b4d8208468d629e9bc14f5f46";
var theUrl = api_url + api_token + "&url=" + curr_url;

//p perform a get request on the current page url
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("status").innerHTML =
      this.responseText;
      console.log("Success!")
    }
  };
  xhttp.open("GET", theUrl, true);
  xhttp.send();
}
