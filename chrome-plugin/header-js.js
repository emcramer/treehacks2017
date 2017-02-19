var page_url;

chrome.tabs.query({'lastFocusedWindow':true, 'active':true}, function(tabs){
	 page_url = (tabs[0].url);
});