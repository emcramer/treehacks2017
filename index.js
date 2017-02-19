//index.js

var natural = require('natural');

// NLP with JS

var api_url = "https://api.diffbot.com/v3/article";
var api_token = "27a6981b4d8208468d629e9bc14f5f46";
var theUrl = api_url + "?token=" + api_token + "&url=";

var post_url = "https://treehacks-2017.appspot.com";

// add event listener for yes button
var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");

noButton.addEventListener("click", function closeWindow(){
	//close the pop-up
	window.close();
});

yesButton.addEventListener("click", function loadDoc() {
theUrl += page_url; //create the url for the api request
//p perform a get request on the current page url
  console.log('in event handler');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      obj = JSON.parse(this.responseText);
      console.log(obj);
      var text = obj.objects[0].text;
      console.log(text);

      //remove the buttons
      document.getElementById("yes").remove();
      document.getElementById("no").remove();
      document.getElementById("question").remove();

      //send article text to server
      xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var results = document.createElement("DIV");
			document.body.appendChild(results);
			var results_header = document.createElement("H1");
			results.appendChild("H1");
			results_header.textContent = "Results";
			results_header.style.fontFamily = "sans-serif";
			var img_div = document.createElement("DIV");
			results.appendChild(img_div);
			var result_img = document.createElement("IMG");

		    //document.getElementById("results").innerHTML = this.responseText;
		    img_div.append();
		    console.log(this.responseText);

		    /* Display the Data Here 
				Left <----------|---------------> Right
		    */

		  }
		};
		xhttp.open("POST", post_url, true);
		xhttp.send(text);

      console.log("Success!");

    }
  };
  xhttp.open("GET", theUrl, true);
  xhttp.send();
});
