// Validación de formulario Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        
        if (form.checkValidity() === false) {
            return;
        }

        var nameInput = document.getElementById('exampleInputName');
        var nameValue = nameInput.value;
        var regex = /^[A-Za-z]+$/;
        if (!regex.test(nameValue)) {
            nameInput.classList.add('is-invalid');
            document.getElementById('nameValidationFeedback').style.display = 'block';
        } else {
            successMessage.style.display = 'block';
            setTimeout(function() {
                successMessage.style.display = 'none';
                form.reset();
                form.classList.remove('was-validated'); // Restablecer estado de validación
                nameInput.classList.remove('is-invalid'); // Restablecer estado de validación para el campo de nombre
            }, 2000);
        }
    }, false);
});