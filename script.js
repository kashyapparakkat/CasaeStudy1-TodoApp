let email = document.getElementById("exampleInputEmail1")
let pn = document.getElementById("phoneNumber")
let password = document.getElementById("exampleInputPassword1")
let confirmPassword = document.getElementById("exampleInputConfirmPassword1")
let error = document.getElementById("error")
let errorEmail = document.getElementById("errorEmail")
let errorPassword = document.getElementById("errorPassword")
let errorPhoneNumber = document.getElementById("errorPhoneNumber")
let errorConfirmPassword = document.getElementById("errorConfirmPassword")


// let password = document.getElementById("password")

function  validateEmail() {
    let regexp = /^([a-zA-Z0-9\.\-]+)@([A-za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        errorEmail.innerHTML = "Email is valid"
        errorEmail.style.color = "green"
        return true;
    } else {
        errorEmail.innerHTML = "Email is invalid"
        errorEmail.style.color = "red"
        return false;
    }
}

function validateLogin() {
    var a = false
    console.log("Inside validateLogin function")
    var promise = new Promise(function (resolve, reject) {
        if ((email.value == "admin") && (password.value == "12345")) {
            console.log("Inside if loop in validateLogin function")
            resolve("true")
            a = true
        } else {
            console.log("Inside else loop in validateLogin function")
            reject("false")
            a = false
        }
    })

    promise.then(function (s){
        console.log("Inside promise resolve")
        a = true
    }).catch(function (e){
        console.log("Inside promise reject")
        a = false
    })

    console.log("validateLogin ===", a)
    return a
    /*let regexp = /^([a-zA-Z0-9\.\-]+)@([A-za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        errorEmail.innerHTML = "Email is valid"
        errorEmail.style.color = "green"
        return true;
    } else {
        errorEmail.innerHTML = "Email is invalid"
        errorEmail.style.color = "red"
        return false;
    }*/
}

function  validatePhoneNumber() {
    let regexpn= /^\d{10}$/;
    let regexpnHyphen = /(^\d{3})[-](\d{3})[-](\d{4})$/
    let regexpnDot = /(^\d{3})[.](\d{3})[.](\d{4})$/
    let regexpnSpace = /(^\d{3})[\s](\d{3})[\s](\d{4})$/
    if(regexpn.test(pn.value) || regexpnHyphen.test(pn.value) || regexpnDot.test(pn.value) || regexpnSpace.test(pn.value)) {
        var pnNew = pn.value.replace(/[^0-9]/g, '');
        if (pnNew.length == 10) {
            errorPhoneNumber.innerHTML = "Phone number is valid"
            errorPhoneNumber.style.color = "green"
            return true;
        } else {
            errorPhoneNumber.innerHTML = "Phone number is invalid"
            errorPhoneNumber.style.color = "red"
            return false;
        }
    }
    else {
        errorPhoneNumber.innerHTML = "Phone number is invalid"
        errorPhoneNumber.style.color = "red"
        return false;
    }
}

function  validatePassword() {
    var ctr = 0;
    var str = password.value
    if(str.match(/[a-z]/g)) {
        ctr++
    }
    if(str.match(
        /[A-Z]/g)) {
        ctr++
    }
    if (str.match(
        /[0-9]/g)) {
        ctr++
    }
    if(str.length >= 8){
        ctr++
    }

    switch (ctr) {
        case 0:
            strength = "Password is invalid";
            color = "red";
            break;
        case 1:
            strength = "Poor";
            color = "red";
            break;
        case 2:
            strength = "Medium";
            color = "orange";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    errorPassword.innerHTML = strength;
    errorPassword.style.color = color;

    if(ctr == 4) {
        return true;
    } else {
        return false;
    }
}

function validateConfirmPassword() {
    if(password.value == confirmPassword.value) {
        errorConfirmPassword.innerHTML = "Password is matching"
        errorConfirmPassword.style.color = "green"
        return true;
    } else {
        errorConfirmPassword.innerHTML = "Password is not matching"
        errorConfirmPassword.style.color = "red"
        return false;
    }

}

function validateAll(){
    if(validateEmail() && validatePhoneNumber() && validatePassword() && validateConfirmPassword()) {
        error.innerHTML = "Valid"
        error.style.color = "green"
        return true;
    } else {
        error.innerHTML = "Invalid enteries"
        error.style.color = "red"
        return false;
    }
}


/*function validateEmail(){
    if(validateEmail()) {
        error.innerHTML = "Valid"
        error.style.color = "green"
        return true;
    } else {
        error.innerHTML = "Invalid enteries"
        error.style.color = "red"
        return false;
    }
}*/
