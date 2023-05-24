window.processingWrapper.register("AdformRetargeting", function (pid, paramObj, cfg) {
    var adfCfg = {
      pm: cfg["accountId"]
    };
    cfg.src = cfg.src || 'https://track.adform.net/serving/scripts/trackpoint/async/'
    if (cfg.hasOwnProperty("divider")) { adfCfg["divider"] = cfg["divider"];}
    if (cfg.hasOwnProperty("pagename")) { adfCfg["pagename"] = cfg["pagename"];}
    if (cfg.hasOwnProperty("order")) { adfCfg["order"] = cfg["order"];}
    // adform code:
    window._adftrack = Array.isArray(window._adftrack) ? window._adftrack : (window._adftrack ? [window._adftrack] : []);
    window._adftrack.push(adfCfg);
    (function () { var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.id ='adFormRem';s.src = cfg.src; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); })();
    // end adform code
}, {}, true)
