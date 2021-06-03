let fields = [...document.getElementsByClassName("field")];
let inputs = document.getElementsByClassName("input");

fields.forEach((element) => {
  /* Adding icons at the right of the field , doing it here to
    flesh out my JS skills*/
  {
    let icon = element.appendChild(document.createElement("img"));
    icon.classList.add("hide");
    icon.classList.add("icon");
    icon.setAttribute("src", "./images/icon-error.svg");
    icon.style.position = "absolute";
    icon.style.right = "1.1rem";
    icon.style.top = "25%";
    icon.style.transition = "opacity 0.5s ease-in";
  }
  /* Error text and button both have class hidden*/
  {
    let errorText = element.appendChild(document.createElement("p"));
    errorText.classList.add("hide");
    errorText.classList.add("error");
    errorText.textContent = "lorem ipsun";
    errorText.style.color = "var(--PrimaryRed)";
    errorText.style.position = "absolute";
    errorText.style.bottom = "-1rem";
    errorText.style.right = "0";
    errorText.style.fontSize = "0.7rem";
    errorText.style.transition = "opacity 0.5s ease-in";
  }
});
for (let i = 0; i < inputs.length; i++) {
  let error = document.getElementsByClassName("error");
  let icon = document.getElementsByClassName("icon");
  // Adding each remove event individually
  inputs[i].addEventListener("focus", () => {
    error[i].classList.add("hide");
    error[i].classList.remove("show");
    icon[i].classList.add("hide");
    icon[i].classList.remove("show");
  });
  if (inputs[i].id == "email") {
    inputs[i].addEventListener("invalid", (e) => {
      e.preventDefault();
      error[i].textContent = e.target.validationMessage;
      error[i].classList.add("show");
      error[i].classList.remove("hide");
      icon[i].classList.add("show");
      icon[i].classList.remove("hide");
    });
    continue;
  }
  inputs[i].addEventListener("invalid", (e) => {
    e.preventDefault();
    error[i].textContent = e.target.placeholder + " cannot be empty";
    error[i].classList.add("show");
    error[i].classList.remove("hide");
    icon[i].classList.add("show");
    icon[i].classList.remove("hide");
  });
}
