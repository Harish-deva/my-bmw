window.adobeDataLayer = window.adobeDataLayer || [];

//push page load event
let trackingObj = Object.assign(dynamicTrackingObj);
adobeDataLayer.push(trackingObj);

// register form
function registerForm() {
    let registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let salutation = document.getElementById("salutation");
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let email = document.getElementById("email");

        if (firstName.value == "" || lastName.value == "" || email.value == "") {
            alert("Please enter: Firstname, Lastname and email");
        } else {

            trackRegisterObj = {
                "event": "registrationComplete",
                "eventInfo": {
                    "id": generateUUID(),
                    "formName": "registration",
                    "userSalutation": salutation.value,
                    "userFirstName": firstName.value,
                    "userLastName": lastName.value,
                    "userEmail": email.value,
                    "userChannelPreferences": getCheckedboxsIds()
                }
            }

            adobeDataLayer.push(trackRegisterObj);

            console.log(adobeDataLayer)

            firstName.value = "";
            lastName.value = "";
            email.value = "";

            location.href = 'registration-success.html'
        }
    });
}

// register form
function loginForm() {
    let loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = document.getElementById("email");

        if (email.value == "") {
            alert("Please enter: email");
        } else {

            trackLoginObj = {
                "event": "loginComplete",
                "eventInfo": {
                    "id": generateUUID(),
                    "userEmail": email.value,
                    "formName": "login"
                },
            }

            adobeDataLayer.push(trackLoginObj);

            console.log(adobeDataLayer)

            email.value = "";

            location.href = 'home.html'
        }
    });
}

// request Offer form
function requestOfferForm() {
    let requestOfferForm = document.getElementById("request-offer-form");

    requestOfferForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let zipCode = document.getElementById("zipCode");
        let city = document.getElementById("city");
        let street = document.getElementById("street");
        let email = document.getElementById("email");
        let telephone = document.getElementById("telephone");
        let planedPurchase = document.getElementById("planedPurchase");

        if (firstName.value == "" || lastName.value == "" || email.value == "") {
            alert("Please enter: Firstname, Lastname and email");
        } else {

            trackRegisterObj = {
                "event": "requestOfferComplete",
                "eventInfo": {
                    "id": generateUUID(),
                    "formName": "request-offer",
                    "userSeries": "BMW X5",
                    "userModel": "BMW X5 xDrive40d",
                    "userFirstName": firstName.value,
                    "userLastName": lastName.value,
                    "userZipCode": zipCode.value,
                    "userCity": city.value,
                    "userStreet": street.value,
                    "userTelephone": telephone.value,
                    "userEmail": email.value,
                    "userPlanedPurchase": planedPurchase.value,
                    "userChannelPreferences": getCheckedboxsIds()
                }
            }

            adobeDataLayer.push(trackRegisterObj);

            console.log(adobeDataLayer)

            firstName.value = "";
            lastName.value = "";
            zipCode.value = "";
            city.value = "";
            street.value = "";
            telephone.value = "";
            email.value = "";
            planedPurchase = "";

            location.href = 'angebot-anfordern-success.html'
        }
    });
}


//utilities
//get checked checkboxes
function getCheckedboxsIds() {
    const checked = document.querySelectorAll('input[name="check"]:checked')
    selected = Array.from(checked).map(x => x.id)
    return selected
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

console.log(adobeDataLayer)
