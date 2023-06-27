window.adobeDataLayer = window.adobeDataLayer || [];

//push page load event
let trackingObj = Object.assign(dynamicTrackingObj);
adobeDataLayer.push(trackingObj);

console.log('Page load, ready to be fired:', '\n', JSON.stringify(adobeDataLayer, null, 2))


//get userObj from localStorage if exisitng and prefill form input, otherwise set userObj and save to localStorage
function getStoredUserObj() {

    let salutation = document.getElementById("salutation");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let zipCode = document.getElementById("zipCode");
    let city = document.getElementById("city");
    let street = document.getElementById("street");
    let telephone = document.getElementById("telephone");
    let ckeckboxes = document.querySelectorAll('input[name="check"]').length

    let series = document.getElementById("serie");
    let model = document.getElementById("model");
    let planedPurchase = document.getElementById("planedPurchase");
    let testdriveDate = document.getElementById("testdriveDate");

    let user = null
    storedUser = localStorage.getItem('user')
    if (storedUser) {
        //prefill form
        user = JSON.parse(storedUser);

        const { userSalutation, userFirstName, userLastName, userEmail, userChannelPreferences, userZipCode, userCity, userStreet, userTelephone, userSeries, userModel, userPlanedPurchase, userTestdriveDate } = user
        !salutation ? null : salutation.value = !userSalutation ? salutation.value : userSalutation
        !firstName ? null : firstName.value = !userFirstName ? firstName.value : userFirstName
        !lastName ? null : lastName.value = !userLastName ? lastName.value : userLastName;
        !email ? null : email.value = !userEmail ? email.value : userEmail;
        !zipCode ? null : zipCode.value = !userZipCode ? zipCode.value : userZipCode;
        !city ? null : city.value = !userCity ? city.value : userCity;
        !street ? null : street.value = !userStreet ? street.value : userStreet;
        !telephone ? null : telephone.value = !userTelephone ? telephone.value : userTelephone;
        !(ckeckboxes > 0) ? null : setCheckedboxsIds(userChannelPreferences)
        !series ? null : series.value = !userSeries ? series.value : userSeries;
        !model ? null : model.value = !userModel ? model.value : userModel;
        !testdriveDate ? null : testdriveDate.value = !userTestdriveDate ? testdriveDate.value : userTestdriveDate;
        !planedPurchase ? null : planedPurchase.value = !userPlanedPurchase ? planedPurchase.value : userPlanedPurchase;

    }
    //return user
}

//get user Info from form inut fields and return userObj
function getFormUserObj() {

    let salutation = document.getElementById("salutation");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let zipCode = document.getElementById("zipCode");
    let city = document.getElementById("city");
    let street = document.getElementById("street");
    let telephone = document.getElementById("telephone");

    let series = document.getElementById("serie");
    let model = document.getElementById("model");
    let planedPurchase = document.getElementById("planedPurchase");
    let testdriveDate = document.getElementById("testdriveDate");

    user = {
        "userSalutation": !salutation ? null : salutation?.value,
        "userGender": !salutation ? null : salutation?.value !== 0 ? salutation?.value === 'Mr' ? 'male' : 'female' : '',
        "userFirstName": !firstName ? null : firstName?.value,
        "userLastName": !lastName ? null : lastName?.value,
        "userEmail": !email ? null : email?.value,
        "userZipCode": zipCode === undefined ? null : zipCode?.value,
        "userCity": !city ? null : city?.value,
        "userStreet": !street ? null : street?.value,
        "userTelephone": !telephone ? null : telephone?.value,
        "userChannelPreferences": getCheckedboxsIds(),
        "userSeries": !series ? null : series.value === '' ? "BMW X5" : series?.value,
        "userModel": !model ? null : model.value === '' ? "BMW X5 xDrive40d" : model?.value,
        "userTestdriveDate": !testdriveDate ? null : testdriveDate.value,
        "userPlanedPurchase": !planedPurchase ? null : planedPurchase.value,
    }
    return user
}

function updateStoredUserObj(user) {
    localStorage.setItem('user', JSON.stringify(user));
}


// register form
function registerForm() {
    //
    let registrationForm = document.getElementById("registration-form");

    //prefill fields with storedUser if value exist
    getStoredUserObj()
    customSelect();

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        //get value from form fields
        user = getFormUserObj()
        const { userSalutation, userGender, userFirstName, userLastName, userEmail, userChannelPreferences } = user

        if (userFirstName == "" || userLastName == "" || ValidateEmail(userEmail) === false) {
            alert("Please enter: Firstname, Lastname and valid email");
        } else {
            trackRegisterObj = {
                "event": "registrationComplete",
                "eventInfo": {
                    "id": generateUUID(),
                    "formName": "registration",
                    "userSalutation": userSalutation,
                    "userGender": userGender,
                    "userFirstName": userFirstName,
                    "userLastName": userLastName,
                    "userEmail": userEmail,
                    "userChannelPreferences": userChannelPreferences
                }
            }
            adobeDataLayer.push(Object.assign(trackRegisterObj));

            //update storedUser with new values
            updateStoredUserObj(user)


            console.log('adobeDataLayer updated (registration-form, RuleName: registrationComplete). Ready to be fired!', '\n', JSON.stringify(adobeDataLayer, null, 2))

            firstName.value = "";
            lastName.value = "";
            email.value = "";

            setTimeout(() => {
                redirectHash('registration-success')
            }, "2000");
        }
    });
}

// register form
function loginForm() {
    let loginForm = document.getElementById("login-form");

    //prefill fields with storedUser if value exist
    getStoredUserObj()

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        //get value from form fields
        user = getFormUserObj()
        const { userEmail } = user


        if (ValidateEmail(userEmail) === false) {
            alert("Please enter: valid email");
        } else {

            trackLoginObj = {
                "event": "loginComplete",
                "eventInfo": {
                    "id": generateUUID(),
                    "userEmail": userEmail,
                    "formName": "login"
                },
            }

            adobeDataLayer.push(Object.assign(trackLoginObj));

            console.log('adobeDataLayer updated (login-form, RuleName: loginComplete). Ready to be fired!', '\n', JSON.stringify(adobeDataLayer, null, 2))

            email.value = "";

            setTimeout(() => {
                redirectHash('home')
            }, "2000");

        }
    });
}

// request Offer form
function requestOfferForm() {
    let requestOfferForm = document.getElementById("request-offer-form");

    //prefill fields with storedUser if value exist
    getStoredUserObj()
    customSelect();

    requestOfferForm.addEventListener("submit", (e) => {

        e.preventDefault();

        //get value from form fields
        user = getFormUserObj()
        const { userSalutation, userFirstName, userLastName, userEmail, userChannelPreferences, userZipCode, userCity, userStreet, userTelephone, userSeries, userModel, userPlanedPurchase } = user


        if (userFirstName == "" || userLastName == "" || ValidateEmail(userEmail) === false) {
            alert("Please enter: Firstname, Lastname and valid email");
        } else {

            trackOfferObj = {
                "event": "requestOfferComplete",
                "eventInfo": {
                    "id": generateUUID(),
                    "formName": "request-offer",
                    "userSeries": userSeries,
                    "userModel": userModel,
                    "userSalutation": userSalutation,
                    "userFirstName": userFirstName,
                    "userLastName": userLastName,
                    "userZipCode": userZipCode,
                    "userCity": userCity,
                    "userStreet": userStreet,
                    "userTelephone": userTelephone,
                    "userEmail": userEmail,
                    "userPlanedPurchase": userPlanedPurchase,
                    "userChannelPreferences": userChannelPreferences
                }
            }

            adobeDataLayer.push(Object.assign(trackOfferObj));

            //update storedUser with new values
            updateStoredUserObj(user)

            console.log('adobeDataLayer updated (request-offer-form, RuleName: requestOfferComplete). Ready to be fired!', '\n', JSON.stringify(adobeDataLayer, null, 2))

            salutation.value = "";
            firstName.value = "";
            lastName.value = "";
            zipCode.value = "";
            city.value = "";
            street.value = "";
            telephone.value = "";
            email.value = "";
            planedPurchase = "";

            setTimeout(() => {
                redirectHash('angebot-anfordern-success')
            }, "2000");
        }
    });
}

// request testdrive form
function requestTestdriveForm() {
    let requestTestdriveForm = document.getElementById("request-testdrive-form");

    //prefill fields with storedUser if value exist
    getStoredUserObj()
    customSelect();

    requestTestdriveForm.addEventListener("submit", (e) => {
        e.preventDefault();

        //get value from form fields
        user = getFormUserObj()
        const { userSalutation, userFirstName, userLastName, userEmail, userChannelPreferences, userZipCode, userCity, userStreet, userTelephone, userSeries, userModel, userPlanedPurchase, userTestdriveDate } = user


        if (userFirstName == "" || userLastName == "" || ValidateEmail(userEmail) === false || userTestdriveDate == "") {
            alert("Please enter: Firstname, Lastname and valid email and testdrive date");
        } else {

            trackTestdriveObj = {
                "event": "requestTestdriveComplete",
                "eventInfo": {
                    "id": generateUUID(),
                    "formName": "request-offer",
                    "userSeries": userSeries,
                    "userModel": userModel,
                    "userTestdriveDate": userTestdriveDate,
                    "userSalutation": userSalutation,
                    "userFirstName": userFirstName,
                    "userLastName": userLastName,
                    "userZipCode": userZipCode,
                    "userCity": userCity,
                    "userStreet": userStreet,
                    "userTelephone": userTelephone,
                    "userEmail": userEmail,
                    "userPlanedPurchase": userPlanedPurchase,
                    "userChannelPreferences": userChannelPreferences
                }
            }

            adobeDataLayer.push(Object.assign(trackTestdriveObj));

            //update storedUser with new values
            updateStoredUserObj(user)

            console.log('adobeDataLayer updated (request-testdrive-form, RuleName: requestTestdriveComplete). Ready to be fired!', '\n', JSON.stringify(adobeDataLayer, null, 2))


            testdriveDate.value = "";
            firstName.value = "";
            lastName.value = "";
            zipCode.value = "";
            city.value = "";
            street.value = "";
            telephone.value = "";
            email.value = "";
            planedPurchase = "";

            setTimeout(() => {
                redirectHash('test-drive-confirmation-page')
            }, "2000");
        }
    });
}


//utilities
//redirect with url hash
//takes default redirect as string (without html)
function redirectHash(r) {
    const url = window.location.hash
    const redirect = !url ? r + '.html' : url.split('/')[1] + '.html#/' + url.split('/')[2]
    location.href = redirect
}
//get checked checkboxes
function getCheckedboxsIds() {
    const checked = document.querySelectorAll('input[name="check"]:checked')
    selected = Array.from(checked).map(x => x.id)
    return selected
}
//set checked checkboxes
function setCheckedboxsIds(channel) {
    channel.map((c) => {
        document.getElementById(c).checked = true
    })
}

function customSelect(id) {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
}

//generate uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function ValidateEmail(mail) {
    const test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (test.test(mail)) {

        return (true)
    } else {
        return (false)
    }
}

