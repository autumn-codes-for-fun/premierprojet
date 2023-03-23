// creer un fonction qui reconnait une adresse mail et renvoie message d'erreur si faut.
//const btn= document.getElementById('id');
//function btnclick (bouton){
  //document.body.style.backgroundColor= "blue";
//}
//btn.onclick=btnclick(btn);
function validateForm() {
  const nomPrenom = document.getElementById("nom et prénom").value.trim();
  const email = document.getElementById("votre adresse mail").value.trim();
  const objet = document.getElementById("objet").value.trim();
  const message = document.getElementById("text").value.trim();


  // Vérifier si tous les champs sont remplis
  if (nomPrenom === "" || email === "" || objet === "" || message === "") {
    alert("Veuillez remplir tous les champs du formulaire.");
    return false;
  }
  // Vérifier le format de l'adresse e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Veuillez saisir une adresse e-mail valide.");
    return false;
  }
  // Autres validations du formulaire (si nécessaire)
  // ...

  // Le formulaire est valide, autoriser l'envoi
  return true;
}

//console.log ("hello");
