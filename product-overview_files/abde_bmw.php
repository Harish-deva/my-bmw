
// Sonderprüfung nach cookie, zur Vermeidung von Mehrfachabrufen, MV
var psyma_participation_string=document.cookie.split("psyma_participation=");
var	psyma_participation = 	(psyma_participation_string.length>1)?unescape(psyma_participation_string[1].split(";")[0]):"";
if(psyma_participation != 1 && psyma_participation != 2){
		
	var url_list_os = [
		"www.bmw.de/de/neuwagensuche.html",
		"www.bmw.de/de/topics/neuwagen/neuwagen-onlinekauf.html"
	];

	var url_list_mr_verbrenner = [
		"www.bmw.de/de/neufahrzeuge/bmw-i/i5/bmw-i5-ueberblick.html",
		"www.bmw.de/de/neufahrzeuge/5er/limousine/bmw-5er-limousine-ueberblick.html"
	];

	var url_list_mr_phev = [
		"www.bmw.de/de/neufahrzeuge/5er/limousine/bmw-5er-limousine-phev-ueberblick.html"
	];


	var url_found_os = false;
	var url_found_mr_verbrenner = false;
	var url_found_mr_phev = false;


	var currentUrl = window.location.host;
	if(window.location.pathname != ""){
		currentUrl = currentUrl + window.location.pathname;
	}

	currentUrl = currentUrl.toLowerCase();

	for(i in url_list_os){
		url_to_check = url_list_os[i].toLowerCase();
		if(currentUrl.indexOf(url_to_check) !== -1) {
			url_found_os = true;
			break;
		}
	}
	for(i in url_list_mr_verbrenner){
		url_to_check = url_list_mr_verbrenner[i].toLowerCase();
		if(currentUrl.indexOf(url_to_check) !== -1) {
			url_found_mr_verbrenner = true;
			break;
		}
	}
	for(i in url_list_mr_phev){
		url_to_check = url_list_mr_phev[i].toLowerCase();
		if(currentUrl.indexOf(url_to_check) !== -1) {
			url_found_mr_phev = true;
			break;
		}
	}

	if(url_found_os == true) {
		
						var psyma_desktop = document.createElement("script");
						psyma_desktop.type = "text/javascript";
						psyma_desktop.src = "//scripts.psyma.com/layer.php?xmlPath=abosde/abosde02_bmw";
						document.body.appendChild(psyma_desktop);	}

	else if(url_found_mr_verbrenner == true){
		
						var psyma_desktop = document.createElement("script");
						psyma_desktop.type = "text/javascript";
						psyma_desktop.src = "//scripts.psyma.com/layer.php?xmlPath=adhoc/adhoc_11230085_verbrenner_desktop";
						document.body.appendChild(psyma_desktop);	}

	else if(url_found_mr_phev == true){
		
						var psyma_desktop = document.createElement("script");
						psyma_desktop.type = "text/javascript";
						psyma_desktop.src = "//scripts.psyma.com/layer.php?xmlPath=adhoc/adhoc_11230085_phev_desktop";
						document.body.appendChild(psyma_desktop);	}
// Ende der Sonderprüfung nach Cookie
}