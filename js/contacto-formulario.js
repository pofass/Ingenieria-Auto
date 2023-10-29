// Validación de formulario Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');

        var nameInput = document.getElementById('exampleInputName');
        var nameValue = nameInput.value;
        var regex = /^[A-Za-z\s]+$/;

        if (!regex.test(nameValue)) {
            nameInput.classList.add('is-invalid');
            document.getElementById('nameValidationFeedback').style.display = 'block';
            return; // Detener el flujo si el nombre no es válido
        }

        if (form.checkValidity()) {
            const nombre = form.elements.exampleInputName.value;
            const correo = form.elements.exampleInputEmail.value;
            const mensaje = form.elements.exampleTextarea.value;
            const telefono = '123667789123';
            const mensajeWhatsapp = `Nombre: ${nombre}\nCorreo electrónico: ${correo}\nMensaje: ${mensaje}`;
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeWhatsapp)}`;
            window.open(url, '_blank');

            successMessage.style.display = 'block';
            setTimeout(function() {
                successMessage.style.display = 'none';
                form.reset();
                form.classList.remove('was-validated'); // Restablecer estado de validación
                nameInput.classList.remove('is-invalid'); // Restablecer estado de validación para el campo de nombre
            }, 3000);
        }
    }, false);
});
