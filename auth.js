document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementById("email");
    const changeColorButton = document.getElementById("btn");
    const message = document.getElementById("err");
  
    changeColorButton.addEventListener("click", function () {
      if (email.value.trim() !== "") {
        email.classList.add("red-border");
        message.classList.remove("err-hid");
      } else {
        email.classList.remove("red-border");
        message.classList.add("err-hid");
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementById("e-mail");
    const changeColorButton = document.getElementById("btnn");
    const message = document.getElementById("errr");
  
    changeColorButton.addEventListener("click", function () {
      if (email.value.trim() !== "") {
        email.classList.add("red-border");
        message.classList.remove("errr-hid");
      } else {
        email.classList.remove("red-border");
        message.classList.add("errr-hid");
      }
    });
  });



