let closeButton = document.querySelector(".form_close");
let regSignup = document.querySelector(".signup_form");
let seePassword = document.querySelectorAll(".pw_hide");
let restoreLogin = document.querySelector(".buttonLogin");
let loginform = document.querySelector("#form_container");
let logform = document.getElementById("signin");
let regform = document.getElementById("signup");
let Registerationform = document.getElementById("regFormInput");
let LoginformDamn = document.getElementById("loginFormInput");
// console.log(regform);

closeButton.onclick = function () {
  loginform.hidden = true;
};

restoreLogin.onclick = function () {
  loginform.hidden = false;
};

regform.onclick = function () {
  LoginformDamn.hidden = true;
  Registerationform.hidden = false;
};

logform.onclick = function () {
  LoginformDamn.hidden = false;
  Registerationform.hidden = true;
};

seePassword.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("bi-file-lock2-fill", "bi-eye-slash");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("bi-eye-slash", "bi-eye-slash");
    }
  });
});



//   const form1 = document.querySelector(".form1");
const regFunc = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordConfirm = e.target.passwordConfirm.value;

    if(password === passwordConfirm){
      localStorage.setItem(`${email}`,JSON.stringify({email,password,passwordConfirm}));
      alert("Registered Successfully");
      window.location.href = "http://127.0.0.1:5501/movie.html" //the url of the homepage
    }else{
      alert("Please Check passwords");
    }


   
}

const logfunc = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    let user = localStorage.getItem(`${email}`);
    if (user) {
        user = JSON.parse(user);
        if (user.password == password) {
            localStorage.setItem("auth", "true");
            window.location.href = "http://127.0.0.1:5501/movie.html" //the url of the homepage
        } else {
            alert("Invalid Credentials")
        }
    } else {
        alert("Sign Up")
    }
}


