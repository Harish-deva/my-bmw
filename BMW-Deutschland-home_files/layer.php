if (typeof(psymaLayer) == 'undefined') {
// class for managing psyma cookies
var psymaCookieManager = {
	"psyma_show":1,
	"init":function(show){
		if(show == 1) {
			psyma_cookie_id = "psyma_participation";
			psyma_participation = this.get_psyma_cookie(psyma_cookie_id);
			psyma_cookie_exp = this.psyma_get_expiration_date("30");
			psyma_cookie_domain = "";
			psyma_cookie_path = "/";
			psyma_cookie_secure = "";
			this.psyma_show = 1;
		}
		else {
			psyma_cookie_id = "psyma_participation";
			psyma_participation = this.get_psyma_cookie(psyma_cookie_id);
			psyma_cookie_exp = this.psyma_get_expiration_date("30");
			psyma_cookie_domain = "";
			psyma_cookie_path = "/";
			psyma_cookie_secure = "";
			this.psyma_show = 0;
		}
		if(psyma_participation != 1 && psyma_participation != 2)
		{
			this.set_psyma_cookie(psyma_cookie_id, 1, psyma_cookie_path, psyma_cookie_domain, psyma_cookie_secure, psyma_cookie_exp);
		}
		else {
			this.psyma_show = 0;
		}
		if(this.psyma_show) {
		    		}

	},
	// write specific cookie
	"switch_cookie" :function(type){
		if(type == "accept") {
			psyma_cookie_id = "psyma_participation";
			psyma_cookie_exp = this.psyma_get_expiration_date("30");
		}	
		else if(type == "deny") {
			psyma_cookie_id = "psyma_participation";
			psyma_cookie_exp = this.psyma_get_expiration_date("30");
		}	
		else if(type == "close") {
			psyma_cookie_id = "psyma_participation";
			psyma_cookie_exp = this.psyma_get_expiration_date("30");
		}	
		else if(type == "delay") {
			psyma_cookie_id = "psyma_participation";
			psyma_cookie_exp = this.psyma_get_expiration_date("30");
		}	
		this.set_psyma_cookie(psyma_cookie_id, 2, "/", "", "", psyma_cookie_exp);
	},
	// get expiration date
	"psyma_get_expiration_date":function(psyma_day_offset){
		if(psyma_day_offset == "None" || psyma_day_offset == "none")
			return -1;
		if(psyma_day_offset == "Session" || psyma_day_offset == "session")
			return 0;
		var psyma_milli_offset = psyma_day_offset * 1000 * 60 * 60 * 24;
		var psyma_now = new Date();
		psyma_participation_exp = new Date(psyma_now.valueOf() + psyma_milli_offset);
		return psyma_participation_exp;
	},
		
	// get cookie
	"get_psyma_cookie":function(a)
	{
		var c=document.cookie.split(a+"=");
		return (c.length>1)?unescape(c[1].split(";")[0]):"";
	},

	// set cookie
	"set_psyma_cookie":function(name, value, path, domain, secure, expires)
	{
		if(expires != -1)
		{
			document.cookie =
			name + "="
			+ escape(value)
			+ ((path) ? "; path=" + path : "")
			+ ((expires) ? "; expires=" + expires.toGMTString() : "")
			+ ((domain) ? "; domain=" + domain : "")
			+ "; same-site=Strict"
			+ ((secure) ? "; secure" : "");
		}
	},
	// delete the cookie
	"remove_psyma_cookie":function(cookie_id)
	{
	    if(!cookie_id || cookie_id == ""){
	        	        cookie_id = "psyma_participation";
	    }
	    expiration = this.psyma_get_expiration_date(-1);
    	this.set_psyma_cookie(cookie_id, '', "/", "", "", expiration);
    }

}        // don`t show layer but set cookie
        psymaCookieManager.init(0);
        <!--//--><![CDATA[//><!--
        // Psyma Research+Consulting
        // a) Layer currently deactivated
        // b) You are not included in the sample
        //--><!]]>
    }
