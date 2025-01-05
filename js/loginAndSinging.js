// Show the modal
function showModal() {
    $('#authModal').modal('show');
    document.getElementById("s").style.zIndex = 90;
   
  
}

// Toggle to Login form
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("createAccountForm").style.display = "none";
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("createAccountTab").classList.remove("active");
}

// Toggle to Create Account form
function showCreateAccount() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("createAccountForm").style.display = "block";
    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("createAccountTab").classList.add("active");
}

// Mock authentication process
function authenticate() {
    $('#authModal').modal('hide'); // Hide the modal
    document.getElementById("loginSignUpButton").classList.add("d-none"); // Hide the login/sign-up button
    document.getElementById("accountIcon").classList.remove("d-none"); // Show the account icon
}
