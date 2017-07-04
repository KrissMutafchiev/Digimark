var ck_name = /^[A-Za-z]{3,100}$/;
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var ck_message = /[0-9a-zA-Z]{10,1000}/;
var whitespaces = /^\s*$/;


function validate(form){
    var name = document.querySelector('#form-name').value;
    var email = document.querySelector('#email-form').value;
    var reason = document.querySelector('#reason').value;
    var messageText = document.querySelector('#message-text').value;
    var errors = [];

    if (!ck_name.test(name)) {
        errors[errors.length] = "You valid Name .";
    }
    if (!ck_email.test(email)) {
        errors[errors.length] = "You must enter a valid emailaddress.";
    }
    if (!ck_message.test(messageText)) {
        errors[errors.length] = "Characters are less than 10";
    }
    if (whitespaces.test(messageText)) {
        errors[errors.length] = " You have only white spaces";
    }
    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }else{
        alert('Success submit form');
    }
    return true;
}
function reportErrors(errors){
    var msg = "Please Enter Valide Data...\n";
    for (var i = 0; i<errors.length; i++) {
        var numError = i + 1;
        msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
}