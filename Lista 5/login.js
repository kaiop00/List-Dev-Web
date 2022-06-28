(function () {

    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          
          form.classList.add('was-validated')
        }, false)
      })
  })()



  document.querySelector(".formulario").addEventListener("change", () => {
    if(document.querySelector('.formulario').classList.contains("was-validated") && document.querySelector(".inputPassword").value.length > 5){
        $('.btn').prop("disabled",false);
    }else {
        $('.btn').prop("disabled",true);
    }
  })





