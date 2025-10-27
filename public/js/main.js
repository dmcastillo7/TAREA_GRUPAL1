//Dayra Mosquera 
// Esta línea espera a que todo el documento HTML se cargue
document.addEventListener("DOMContentLoaded", function() {

  // 1. INICIALIZAR POPOVERS
  // Busca todos los elementos que tengan data-bs-toggle="popover" y los activa.
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });


  // 2. INICIALIZAR TOASTS (para el ejemplo de demostración)
  // Buscamos el botón que debe mostrar el Toast
  var toastTrigger = document.getElementById('liveToastBtn');
  var toastLiveExample = document.getElementById('liveToast');
  
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      // Creamos una instancia del toast y la mostramos
      var toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
    });
  }

});