//-	Name (Should be more than 5 characters long)
//-	Email address (Must be a valid email address)
//- Website address (Must be a valid website address)
//-	Message content (Should be more than 25 characters long)

const form = document.querySelector("form");

const comment = document.getElementById("comment");
const commentError = document.querySelector("#comment + div.error");

const fullName = document.getElementById("fullname");
const fullNameError = document.querySelector("#fullname + div.error");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + div.error");

const website = document.getElementById("website");
const websiteError = document.querySelector("#website + div.error");

const showSuccessMessage = document.querySelector(".success");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(comment.value, 26) === true) {
    commentError.style.display = "none";
  } else {
    commentError.style.display = "block";
  }

  if (checkLength(fullName.value, 6) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateWebsite(website.value) === true) {
    websiteError.style.display = "none";
  } else {
    websiteError.style.display = "block";
  }

  if (checkLength(fullName.value, 6) && validateEmail(email.value) && checkLength(comment.value, 26) && validateWebsite(website.value) === true) {
    showSuccessMessage.style.display = "block";
    form.style.display = "none";
  } else {
    console.log("something is not working...");
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateWebsite(website) {
  const regEx = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  const patternMatches = regEx.test(website);
  return patternMatches;
}
