( window.p15r = window.p15r || []).push({
  processingId: 'ContentSquare',
  action: 'register',
  callback: function (pid, paramObj, cfg) {
    window._uxa = window._uxa || [];
    try {
      if (typeof digitalData !== 'undefined') {
        if (typeof digitalData.pages !== 'undefined') {
          for (var i = 0; i < digitalData.pages.length; i++) {
            if (typeof digitalData.pages[i].page !== 'undefined') {
              if (typeof digitalData.pages[i].page.pageInfo !== 'undefined') {
                window._uxa.push(['setCustomVariable', 1, 'pageName', digitalData.pages[i].page.pageInfo.pageName, 3]);
              }
              if (typeof digitalData.pages[i].page.category !== 'undefined') {
                window._uxa.push(['setCustomVariable', 2, 'primaryCategory', digitalData.pages[i].page.category.primaryCategory, 3]);
                window._uxa.push(['setCustomVariable', 3, 'primaryPurpose', digitalData.pages[i].page.category.primaryPurpose, 3]);
              }
            }
          }
        }
      }
    } catch (e) {
      processingWrapper.error(e);
    }
    if (window.adobeDataLayer) {
      let pageName = adobeDataLayer.getState("page.pageInfo.pageName");
      pageName && window._uxa.push(['setCustomVariable', 1, 'pageName', pageName, 3]);
      let primaryCategory = adobeDataLayer.getState("page.category.primaryCategory");
      primaryCategory && window._uxa.push(['setCustomVariable', 2, 'primaryCategory', primaryCategory, 3]);
      let primaryPurpose = adobeDataLayer.getState("page.category.primaryPurpose");
      primaryPurpose && window._uxa.push(['setCustomVariable', 3, 'primaryPurpose', primaryPurpose, 3]);
    }
    if (typeof CS_CONF === 'undefined') {
      window._uxa.push(['setPath', window.location.pathname + window.location.hash.replace('#', '?__')]);
      var mt = document.createElement('script');
      mt.type = 'text/javascript';
      mt.async = true;
      mt.src = '//t.contentsquare.net/uxa/' + cfg['accountId'] + '.js';
      document.getElementsByTagName('head')[0].appendChild(mt);
    } else {
      window._uxa.push(['trackPageview', window.location.pathname + window.location.hash.replace('#', '?__')]);
    }
  },
  extra: {
    disable: function () {
      processingWrapper.log("disabling ContentSquare");
      (window._uxa = window._uxa || []).push(['optout']);
    },
  },
  isCentral: true
})
