const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("c_password");

const submitBtn = document.getElementById("submit-btn");

const specialCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "`"];

submitBtn.addEventListener("click", () => {
    const nameValue = Name.value;
    let hasSpecialChar = false;
    for(let i = 0; i < specialCharacter.length; i++) {
        if (nameValue.includes(specialCharacter[i])) {
            hasSpecialChar = true;
            break;
        }
    }
    if(hasSpecialChar) {
        window.alert("name should not contain special characters");
    }

    if((password.value).length < 8) {
        window.alert("password should be greater than 8 characters");
    }

    if(password.value !== confirmPassword.value){
        window.alert("password doesn't match, please re enter the password correctly");
    }

})


