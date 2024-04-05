window.addEventListener("load", (event) => {
  // Obtener todos los inputs checkbox
  const checkboxes = document.querySelectorAll('.header .submenu-toggle');
  
  // Agregar un event listener a cada checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      // Si el checkbox actual está marcado, desmarcar los demás
      if (event.target.checked) {
        checkboxes.forEach((otherCheckbox) => {
          if (checkbox.name === otherCheckbox.name ){
            otherCheckbox.checked = false;
          }
        });
        event.target.checked = true;
      }
    });
  });
});