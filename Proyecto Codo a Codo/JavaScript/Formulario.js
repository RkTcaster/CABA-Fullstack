let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let
  nombre = id("nombre"),
  apellido = id("apellido"),
  email = id("email"),
  mensaje = id("mensaje")
  form = id("form"),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(nombre, 0, "Pone tu nombre capo");
  engine(apellido, 1, "El apellido también titan")
  engine(email, 2, "Si no pones un mail, no me puedo contactar");
  engine(mensaje, 3, "No vas a mandar ningún mensaje?");

});

let engine = (id, serial, message) => {

  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }

  else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
}
