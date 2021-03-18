const signupFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector("#username-input-signup");
    const emailAddressEl = document.querySelector("#email-input-login");
    const passwordEl = document.querySelector("#password-input-signup");
    fetch("/api/user", {
        method: "post",
        body: JSON.stringify({
            username: usernameEl.value,
            email: emailAddressEl.value,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(function () {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err));
};

document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);