const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const form = document.getElementById("signupForm")


const emailMessage = document.createElement("p")
emailInput.insertAdjacentElement("afterend", emailMessage)

const passwordMessage = document.createElement("p")
passwordInput.insertAdjacentElement("afterend", passwordMessage)

emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value
    if(emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
        emailMessage.style.color = "green"
        emailMessage.textContent = "Email looks good!"
    }
    else 
    {
        emailMessage.style.color = "red"
        emailMessage.textContent = "Make sure email is more than 3 characters and contains '@' and '.'"
    }
})

passwordInput.addEventListener("input", () => {
    const passwordValue = passwordInput.value
    if(passwordValue.length > 8)
    {
        passwordMessage.style.color = "green"
        passwordMessage.textContent = "Password looks good!";
    }
    else
    {
        passwordMessage.style.color = "red"
        passwordMessage.textContent = "Password must be more than 8 characters."
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value

    if(emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
        const confirmation = confirm("Are you sure want to submit")

        if (confirmation){
            alert("Successful Signup!")


            emailInput.value = ""
            passwordInput.value = ""
            emailMessage.textContent = ""
            passwordMessage.textContent = ""
        }
        else{
            alert("Signup failed. Please fix the errors and try again.")
        }
    }
})