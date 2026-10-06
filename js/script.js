```javascript
// Manchester City News

function showNews() {

    alert("Full Manchester City news coming soon!");

}
```
console.log("Our Football Club website loaded successfully.");


/* ---------- Login form (#loginForm, #email, #password, #loginMessage) ---------- */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        loginMessage.textContent = (email === "" || password === "")
            ? "Please enter your email and password."
            : "Login details received.";
    });
}



