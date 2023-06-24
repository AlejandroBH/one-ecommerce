"use strict";

const forms = document.querySelectorAll(".needs-validation");

export const validateForms = () => {
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          form.setAttribute('valid','');
        }
        event.preventDefault();
        form.classList.add("was-validated");
      },
      false
    );
  });
};
