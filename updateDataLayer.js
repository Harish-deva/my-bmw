window.adobeDataLayer = window.adobeDataLayer || [];

//push page load event
let trackingObj = Object.assign(dynamicTrackingObj);
adobeDataLayer.push(trackingObj);

// register form
function registerForm() {
    let registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();

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
                    "userSalutation": "userSalutation",
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

            //location.href = 'registration-success.html'
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

            //location.href = 'home.html'
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
