let isPopupOpen = false;
let inscriptions = [];
const btn = window.document.getElementById("submitInscription");
const close = window.document.querySelector(".close-button");

function createInscription() {
  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  inscriptions.push({ name, email });
  alert(`Inscrição realizada, obrigado por participar ${name}`);
  console.log(inscriptions);
}

function togglePopup() {
  const popupElement = window.document.getElementById("popup");
  if (!popupElement) {
    return;
  }

  if (isPopupOpen) {
    popupElement.style.display = "none";
    isPopupOpen = false;
  } else {
    popupElement.style.display = "flex";
    isPopupOpen = true;
  }
}

close.addEventListener("click", togglePopup);

btn.addEventListener("click", createInscription);

window.document
  .getElementById("popup-button")
  .addEventListener("click", togglePopup);
