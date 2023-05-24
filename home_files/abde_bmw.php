var url_list = [
	"www.bmw.de/de/neuwagensuche.html",
	"www.bmw.de/de/topics/neuwagen/neuwagen-onlinekauf.html",
	"www.bmw.de/de/stocklocator.html"
];
	
var url_found = false;
var currentUrl = window.location.host;
if(window.location.pathname != ""){
	currentUrl = currentUrl + window.location.pathname;
}

currentUrl = currentUrl.toLowerCase();
for(i in url_list){
	url_to_check = url_list[i].toLowerCase();
	if(currentUrl.indexOf(url_to_check) !== -1) {
		url_found = true;
		break;
	}
}
if(url_found == true) {
	
					var psyma_desktop = document.createElement("script");
					psyma_desktop.type = "text/javascript";
					psyma_desktop.src = "//scripts.psyma.com/layer.php?xmlPath=abosde/abosde02_bmw";
					document.body.appendChild(psyma_desktop);}
else {
	
					var psyma_desktop = document.createElement("script");
					psyma_desktop.type = "text/javascript";
					psyma_desktop.src = "//scripts.psyma.com/layer.php?xmlPath=adhoc/adhoc_11230085_desktop";
					document.body.appendChild(psyma_desktop);}