function deviner() {
  let num = parseFloat(document.getElementById("a").value);
  let text = document.getElementById("content");
  try {
    if (isNaN(num)) throw new Error("Veuillez entrer un nbr valide");
    else if (num >= 1 && num <= 20) text.textContent = "Gagné!";
    else throw new Error("Le nombre doit etre compris entre 1 et 20");
  } catch (e) {
    text.textContent = e.message;
    console.log(e);
  }
}

// let dev = Math.floor(Math.random() * 20) + 1;
