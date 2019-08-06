"use strict";
//recogemos el radio para poder saber cual está seleccionado
const colorCheck = document.querySelectorAll(".form__item");

//recogemos los distintos radios segun su Id para que se ejecute la funcion cuando les hagamos clik a cada uno de ellos
const colorCheck1 = document.getElementById("design1");
const colorCheck2 = document.getElementById("design2");
const colorCheck3 = document.getElementById("design3");
const colorCheck4 = document.getElementById("design4");
const colorCheck5 = document.getElementById("design5");
const colorCheck6 = document.getElementById("design6");

//Creamos las constantes color1-6 y colorsData que contiene las 6 paletas design1-6
const color1 = document.querySelector(".js-color1");
const color2 = document.querySelector(".js-color2");
const color3 = document.querySelector(".js-color3");
const color4 = document.querySelector(".js-color4");
const color5 = document.querySelector(".js-color5");
const color6 = document.querySelector(".js-color6");

// const colors = ["color1", "color2", "color3", "color4", "color5", "color6"];
const colorsData = document.querySelector(".js-colorsData");

//recogemos del html los elementos que queremos cambiar de color (nombre, profession, linea)
const nameCheck = document.querySelector(".viewer__image-name");
const professionCheck = document.querySelector(".viewer__image-profession");
const lineCheck = document.querySelector(".viewer__image-line");

//recogemos todo los elementos con clase '.viewer__icon-style' (son los iconos de las redes sociales que tb hay que cambiar de color) => se crea un array con los distintos div (porque todos los iconos tiene la misma clase)
const iconsCheck = document.querySelectorAll(".viewer__icon-style");

let resultado = ""; //variable para almacenar si los radios están checkeados

function changeColor() {
  // Recorremos todos los valores del radio button para encontrar el seleccionado y lo almacenamos en la variable 'resultado'
  for (let i = 0; i < colorCheck.length; i++) {
    if (colorCheck[i].checked) resultado = colorCheck[i].value;

    //borramos todas las clases
    nameCheck.classList.remove(
      "viewer__image-name",
      "viewer__image-name-color2",
      "viewer__image-name-color3",
      "viewer__image-name-color4",
      "viewer__image-name-color5",
      "viewer__image-name-color6"
    );
    professionCheck.classList.remove(
      "viewer__image-profession",
      "viewer__image-profession-color2",
      "viewer__image-profession-color3",
      "viewer__image-profession-color4",
      "viewer__image-profession-color5",
      "viewer__image-profession-color6"
    );
    lineCheck.classList.remove(
      "viewer__image-line",
      "viewer__image-line-color2",
      "viewer__image-line-color3",
      "viewer__image-line-color4",
      "viewer__image-line-color5",
      "viewer__image-line-color6"
    );
    //Recorremos todos los divs de los iconos y a cada uno le quitamos las clases
    for (let a = 0; a < iconsCheck.length; a++) {
      iconsCheck[a].classList.remove(
        "viewer__icon-style",
        "viewer__icon-style-color2",
        "viewer__icon-style-color3",
        "viewer__icon-style-color4",
        "viewer__icon-style-color5",
        "viewer__icon-style-color6"
      );
    }
    //segun el resultado del check radio, añadimos las clases correspondientes al color elegido
    if (resultado === "color1") {
      nameCheck.classList.add("viewer__image-name");
      professionCheck.classList.add("viewer__image-profession");
      lineCheck.classList.add("viewer__image-line");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style");
      }
    } else if (resultado === "color2") {
      nameCheck.classList.add("viewer__image-name-color2");
      professionCheck.classList.add("viewer__image-profession-color2");
      lineCheck.classList.add("viewer__image-line-color2");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color2");
      }
    } else if (resultado === "color3") {
      nameCheck.classList.add("viewer__image-name-color3");
      professionCheck.classList.add("viewer__image-profession-color3");
      lineCheck.classList.add("viewer__image-line-color3");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color3");
      }
    } else if (resultado === "color4") {
      nameCheck.classList.add("viewer__image-name-color4");
      professionCheck.classList.add("viewer__image-profession-color4");
      lineCheck.classList.add("viewer__image-line-color4");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color4");
      }
    } else if (resultado === "color5") {
      nameCheck.classList.add("viewer__image-name-color5");
      professionCheck.classList.add("viewer__image-profession-color5");
      lineCheck.classList.add("viewer__image-line-color5");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color5");
      }
    } else if (resultado === "color6") {
      nameCheck.classList.add("viewer__image-name-color6");
      professionCheck.classList.add("viewer__image-profession-color6");
      lineCheck.classList.add("viewer__image-line-color6");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color6");
      }
    }
  }
}

//Creamos las funciones para almacenar y recuperar los datos de la paleta seleccionada.
const handleColorData = () => {
  const colorData = {
    palette1: color1.checked,
    palette2: color2.checked,
    palette3: color3.checked,
    palette4: color4.checked,
    palette5: color5.checked,
    palette6: color6.checked
  };

  localStorage.setItem("userColorData", JSON.stringify(colorData));
};

const getColorsFromLocalStorage = () => {
  const getColorData = JSON.parse(localStorage.getItem("userColorData"));
  if (color1.checked === true) {
    getColorData.color1;
  }
  if (color2.checked === true) {
    getColorData.color2;
  }
  if (color3.checked === true) {
    getColorData.color3;
  }
  if (color4.checked === true) {
    getColorData.color4;
  }
  if (color5.checked === true) {
    getColorData.color5;
  }
  if (color6.checked === true) {
    getColorData.color6;
  }
  // color2.checked = getColorData.color2;
  // color3.checked = getColorData.color3;
  // color4.checked = getColorData.color4;
  // color5.checked = getColorData.color5;
  // color6.checked = getColorData.color6;
};
//eventos para cada radio, escuchamos el click y ejecutamos la funcion 'changeColor'
colorCheck1.addEventListener("click", changeColor);
colorCheck2.addEventListener("click", changeColor);
colorCheck3.addEventListener("click", changeColor);
colorCheck4.addEventListener("click", changeColor);
colorCheck5.addEventListener("click", changeColor);
colorCheck6.addEventListener("click", changeColor);
colorsData.addEventListener("click", handleColorData);
getColorsFromLocalStorage();
