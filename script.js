const knapp = document.getElementById("knapp");
const meddelande = document.getElementById("meddelande");

knapp.addEventListener("click", () => {
  meddelande.textContent = "Du har klickat på knappen!";
});