//Fonction qui permet de changer l'image.
function imageOver(image){
  document.getElementById(image.id).src = 'images/' + image.id + '_2.jpg';
}
// Fonction qui permet de retourner sur l'image initiale.
function imageOut(image){
  document.getElementById(image.id).src = 'images/' + image.id + '.jpg';
}
