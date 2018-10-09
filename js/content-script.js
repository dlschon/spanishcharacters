var clickedEl = null;



document.addEventListener("mousedown", function(event){
	//right click
    if(event.button == 2) 
	{ 
        clickedEl = event.target;
    }
}, true);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    sendResponse({value: clickedEl.value});
	
	$(clickedEl).sendkeys(request) ;
	
	//clickedEl.value = clickedEl.value + request;
	/*var val = clickedEl.value, endIndex;
	endIndex = clickedEl.selectionEnd;
    clickedEl.value = val.slice(0, clickedEl.selectionStart) + request + val.slice(endIndex);
    clickedEl.selectionStart = clickedEl.selectionEnd = endIndex + request.length;*/
});