

function load(){

    /** EPAAS */
    var el = document.createElement('script');
    document.head.append(el);
    el.onload = function(script){
        ((window['epaas'] && window['epaas'].api) || window).addEventListener('consentcontroller.api.showPolicyPageClicked', ()=>{
            const event = new CustomEvent("POLICY_CLICK");
            window.dispatchEvent(event); 
        });
    };
    el.src = 'https://www.bmw.com/etc/clientlibs/wcmp/consentcontroller.fallback/epaas.js';


    /** TRACY */
    var el = document.createElement('script');
    document.head.append(el);
    el.onload = function(script){
        // tracy.epaasFree(true);
        // tracy.setDebug(true);
        // tracy.libDebug(true);
        

        /** SPIKE */
        var el = document.createElement('script');
        document.head.append(el);
        el.onload = function(script){
            // window['onepageConsentlessTracking'] = onepageConsentlessTracking;
        };
        el.src = 'libs/consentlesstracking-onepage.min.js';

    
    };
    el.src = 'libs/tracyLib.js';

   

}

load();