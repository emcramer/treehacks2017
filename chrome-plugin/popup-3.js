// popup.js
// Sending and receiving data in JSON format using POST mothod
var analysis_url = "http://127.0.0.1:5000/";
$(function() {
    $('button').click(function() {
        $.ajax({
            url: analysis_url,
            data: window.location.href,
            type: 'POST',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

