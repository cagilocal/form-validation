let form = document.querySelector('form');
 let fname = document.getElementById('full-name');
 let email = document.getElementById('email');
 let message = document.getElementById('message');
 let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let btn = document.getElementById('btn');


const dataCollector = {
    fullName: null,
    email: null,
    message: null
};

const errors = {};



function validateForm(ev) {

    console.clear();

    let dataCollector = {};
    let errorCollector = [];

    if (fullname.value !== "") {
        dataCollector.fullName = fullname.value;
        delete errorCollector.fn;
    } else {
        errorCollector.fn = "Full Name is missing";
    }

    if (email.value !== "") {
        if (pattern.test(email.value)) {
            dataCollector.email = email.value;
            delete errorCollector.em;
        } else {
            errorCollector.em = "Email is invalid";
        }
    } else {
        errorCollector.em = "Email is missing";
    }

    if (message.value !== "") {
        dataCollector.message = message.value;
        delete errorCollector.msg;
    } else {
        errorCollector.msg = "Message is missing";
    }


    if (Object.keys(dataCollector).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errorCollector)
    }

}

form.addEventListener("submit", validateForm);
