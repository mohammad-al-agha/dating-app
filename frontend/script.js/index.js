const loginPage = document.getElementById("login");
const signUpPage = document.getElementById("signup");
const changeToLogin = document.getElementById("changeToLogin");
const changeToSignUp = document.getElementById("changeToSignUp");
const submit = document.getElementById("submit");
const submitSignUp = document.getElementById("submitSignUp");

const email = document.getElementById("email");
const password = document.getElementById("password");
const state = document.getElementById("state");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value == "" && password.value == "") {
    state.innerHTML = "Please Enter All The Required Fields";
  } else {
    const body = new FormData();
    body.append("email", email.value);
    body.append("password", password.value);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/login",
      data: body,
    }).then((res) => {
      const user = res.data.user;
      const approved = res.data.status;
      token = res.data.authorisation;
      if (approved == "success") {
        localStorage.setItem("User Now", JSON.stringify(user));
        localStorage.setItem("User token", JSON.stringify(token));
        window.location.href = "./feed.html";
      }
    });
    state.innerHTML = "";
  }
});

changeToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  document.title = "Login";
  loginPage.classList.remove("hide");
  signUpPage.classList.add("hide");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const state = document.getElementById("state");
  state.innerHTML = "";

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "" || password.value == "") {
      state.innerHTML = "Please Enter All The Required Fields!!!";
    } else {
      const body = new FormData();
      body.append("email", email.value);
      body.append("password", password.value);
      axios({
        method: "POST",
        url: "http://localhost:8000/api/login",
        data: body,
      }).then((res) => {
        const user = res.data.user;
        const approved = res.data.status;
        token = res.data.authorisation;
        if (approved == "success") {
          localStorage.setItem("User Now", JSON.stringify(user));
          localStorage.setItem("User token", JSON.stringify(token));
          window.location.href = "./feed.html";
        }
      });
      state.innerHTML = "";
    }
  });
});

changeToSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  document.title = "Sign Up";
  signUpPage.classList.remove("hide");
  loginPage.classList.add("hide");

  const user_name = document.getElementById("user_name");
  const age = document.getElementById("age");
  const email = document.getElementById("emailSignUp");
  const password = document.getElementById("passwordSignUp");
  const location = document.getElementById("location");
  const radio = document.querySelectorAll('input[name="gender"]');
  const stateSignUp = document.getElementById("stateSignUp");
  stateSignUp.innerHTML = "";

  submitSignUp.addEventListener("click", () => {
    let selected;
    radio.forEach((radioButton) => {
      if (radioButton.checked) {
        selected = radioButton.value;
      }
    });
    if (
      user_name.value == "" ||
      age.value == "" ||
      email.value == "" ||
      password.value == "" ||
      location.value == "" ||
      selected == null
    ) {
      stateSignUp.innerHTML = "Please Enter All The Required Fields!!!";
    } else {
      const body = new FormData();
      body.append("name", user_name.value);
      body.append("email", email.value);
      body.append("password", password.value);
      body.append("age", age.value);
      body.append("gender", selected);
      body.append("location", location.value);
      axios({
        method: "POST",
        url: "http://localhost:8000/api/register",
        data: body,
      }).then((res) => {
        const user = res.data.user;
        const approved = res.data.status;
        token = res.data.authorisation;
        if (approved == "success") {
          localStorage.setItem("User Now", JSON.stringify(user));
          localStorage.setItem("User token", JSON.stringify(token));
          window.location.href = "./feed.html";
        }
      });
      stateSignUp.innerHTML = "";
    }
  });
});
