export function validarTextareas(textarea) {
  const tipoDeTextArea = textarea.dataset.tipo;
  const button = document.getElementById("submit");
  if (validador[tipoDeTextArea]) {
    validador[tipoDeTextArea](textarea);
  }

  if (textarea.validity.valid) {
    textarea.parentElement.classList.remove("form__contact__textarea--invalid");
    textarea.parentElement.querySelector(".textarea__message--error").innerHTML = "";
    button.removeAttribute("disabled");
  } else {
    textarea.parentElement.classList.add("form__contact__textarea--invalid");
    textarea.parentElement.querySelector(".textarea__message--error").innerHTML =
      mostrarMensajeDeError(tipoDeTextArea, textarea);
    button.setAttribute("disabled", "");
  }
}

const tipoDeErrores = ["valueMissing", "customError"];

const mensajesDeError = {
  message: {
    valueMissing: "El campo Mensaje no puede estar vacío",
    customError: "El Mensaje debe contener un máximo 300 caracteres",
  },
};

const validador = {
  message: (textarea) => validarTextArea(textarea),
};

function mostrarMensajeDeError(tipoDeTextArea, textarea) {
  let mensaje = "";

  tipoDeErrores.forEach((error) => {
    if (textarea.validity[error]) {
      mensaje = mensajesDeError[tipoDeTextArea][error];
    }
  });

  return mensaje;
}

function validarTextArea(textarea) {
  const message = textarea.value;
  let maxLength = "300";
  let mensaje = "";
  if (!message) {
  } else if (message.length > maxLength) {
    mensaje = "mensaje";
  }

  textarea.setCustomValidity(mensaje);
}
