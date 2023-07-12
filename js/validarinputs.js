export function validarInputs(input) {
  const tipoDeInput = input.dataset.tipo;
  const button = document.getElementById("submit");
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("form__contact__input--invalid");
    input.parentElement.querySelector(".input__message--error").innerHTML = "";
    button.removeAttribute("disabled");
  } else {
    input.parentElement.classList.add("form__contact__input--invalid");
    input.parentElement.querySelector(".input__message--error").innerHTML = mostrarMensajeDeError(
      tipoDeInput,
      input
    );
    button.setAttribute("disabled", "");
  }
}

const tipoDeErrores = ["valueMissing", "patternMismatch", "typeMismatch", "customError"];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo Nombre no puede estar vacío",
    patternMismatch: "El Nombre debe contener un máximo de 50 caracteres",
  },

  email: {
    valueMissing: "El campo E-mail no puede estar vacío",
    typeMismatch: "El E-mail no es válido",
  },

  asunto: {
    valueMissing: "El campo Asunto no puede estar vacío",
    patternMismatch: "El Asunto debe contener un máximo de 50 caracteres",
  },
};

const validadores = {
  input: (input) => validarInput(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";

  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarInput(input) {
  const inputUsuario = input.value;
  let mensaje = "";
  if (inputUsuario !== "") {
  }
  input.setCustomValidity(mensaje);
}
