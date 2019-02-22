
document.getElementById("display-menu").addEventListener('click', function() {
  var elemento = document.getElementById("div-menu");
  if (elemento.style.display === 'none'){
    elemento.style.display = "block";
  }else{
    elemento.style.display="none";
  }
});
