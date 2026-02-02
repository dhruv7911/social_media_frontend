

const EMAIL_REGEX = /^[A-Za-z0-9+_.-]+@(.+)$/;
const PASSWORD_REGEX = /^.{8,}$/;
const USERNAME_REGEX = /^.{4,}$/;

function isEmpty(value) {
    return value === null || value == undefined || value.trim() == "";
}

function isEmailValid(value) {
    return value != null && EMAIL_REGEX.test(value);
}

function isValidUsername(value) {
    return value != null && USERNAME_REGEX.test(value);
}

function isValidPassword(value) {
    return value != null && PASSWORD_REGEX.test(value);
}
function passwordMatches(value1,value2){
    return value1!=null && value1 === value2;
}
export function validate(object) {
    const error = {};
    
    if (isEmpty(object.Username)) {
        error.Username = "Username required";
    } else if (!isValidUsername(object.Username)) {
        error.Username = "Username must be at least 4 characters";
    }
    
    if (isEmpty(object.Password)) {
        error.Password = "Password required";  // Fixed: was error.Username
    } else if (!isValidPassword(object.Password)) {  // Fixed: added function call
        error.Password = "Password must be at least 8 characters";
    }
    
    if (isEmpty(object["Confirm Password"])) {
        error["Confirm Password"] = "Confirm Password required";
    } else if (!passwordMatches(object.Password, object["Confirm Password"])) {
        error["Confirm Password"] = "Passwords do not match";  // Fixed: removed array, fixed grammar
    }
    
    if (isEmpty(object.Email)) {
        error.Email = "Email required";
    } else if (!isEmailValid(object.Email)) {  // Added missing validation
        error.Email = "Invalid email format";
    }
    
    return {
        isValid: Object.keys(error).length == 0,
        error
    };
}