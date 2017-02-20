// NLP with JS

var api_url = "https://api.diffbot.com/v3/article";
var api_token = "27a6981b4d8208468d629e9bc14f5f46";
var theUrl = api_url + "?token=" + api_token + "&url=";
var post_url = "https://treehacks-2017.appspot.com";
// bayes classifier for NLP
var classifier;
$.get("classifier.json", function(json) {
    classifier = json;
    console.log(json); // this will show the info it in firebug console
})

// add event listener for yes button
var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");

function textToFeatures(observation) {
    var features = [];

    if(typeof observation === 'string')
	observation = tokenizeAndStem(observation);

    for(var feature in this.features) {
        if(observation.indexOf(feature) > -1)
            features.push(1);
        else
            features.push(0);
    }

    return features;
}

noButton.addEventListener("click", function closeWindow(){
	//close the pop-up
	window.close();
});

function tokenizeAndStem(text) {
        var stemmedTokens = [];
        var lowercaseText = text.toLowerCase();
        var tokens = lowercaseText.split();
        return stemmedTokens;
    };

yesButton.addEventListener("click", function loadDoc() {
theUrl += page_url; //create the url for the api request
//p perform a get request on the current page url
  console.log('in event handler');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      obj = JSON.parse(this.responseText);
      console.log(obj);
      var article_text = obj.objects[0].text;
      console.log(article_text);

      //remove the buttons
      document.getElementById("yes").remove();
      document.getElementById("no").remove();
      document.getElementById("question").remove();

      /* Deprecated: for server side communication w/python analytics
      //send article text to server
       xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    //document.getElementById("results").innerHTML = this.responseText;
		    img_div.append();
		    console.log(this.responseText);

		    // Display the Data Here 
			//	Left <----------|---------------> Right
		    //

		  }
		};
		xhttp.open("POST", post_url, true);
		xhttp.send(text);
		*/

		/* Do NLP via ngrams */

		function analyze(){
			var liberal_key_terms =  ["social forces", "social responsibility", 
			"free expression", "human rights", "equal rights", "concern", "care", 
			"help", "health", "safety", "nutrition", 'basic human dignity', "oppression", 
			"diversity", 'deprivation', "alienation", "big corporations", 
			"corporate welfare", "ecology", "ecosystem", "biodiversity", "pollution"];

			var conservative_key_terms = ["character", "virtue", "discipline", "tough it out", "get tough", 
			"tough love", "strong", "self-reliance", "individual responsibility", "backbone", "standards", 
			"authority", "heritage", "competition", "earn", "hard work", "enterprise", "property rights", 
			"reward", "freedom", "intrusion", "interference", "meddling", "punishment", "human nature", 
			'traditional', "common sense", "dependency", "self-indulgent", "elite", "quotas", 
			"breakdown", "corrupt", "decay", "rot", "degenerate", "deviant", "lifestyle", "fear"];

			var liberal_count = 0;
			for(i = 0; i < liberal_key_terms.length; i++){
				liberal_count += (article_text.match(/liberal_key_terms[i]/g) || []).length;
			}
			console.log("liberal count: " + liberal_count);

			var conservative_count = 0;
			for(i = 0; i < conservative_key_terms.length; i++){
				conservative_count += (article_text.match(/conservative_key_terms[i]/g) || []).length;
			}
			console.log("conservative count: " + conservative_count);

			var NGrams = natural.NGrams;
			var five_grams = NGrams.ngrams(article_text, 5);
			console.log(five_grams);

			var values = textToFeatures(article_text);
			console.log(values);

		}

		$.get({
			url: 'meter.html',
			success: function(html) {
				console.log(html);
				$('#wrapper').html(html);
				analyze(); //delay analysis to let the html load
				var distance = 50; //in pixels -> dummy, needs to be calculated
				$('.circle').animate({ "left": '+=' + distance }, "slow" );
				var percentage; // <-- needs to be calculated
				if(distance > 0){
					$('.banner-body').append("<p>This is about " + percentage + " right of center.</p>")
				}else{
					$('.banner-body').append("<p>This is about " + percentage + " left of center.</p>")
				}
				
			}
		});


      console.log("Success!");

    }
  };
  xhttp.open("GET", theUrl, true);
  xhttp.send();
});


