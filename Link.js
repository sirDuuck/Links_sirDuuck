document.addEventListener('DOMContentLoaded', function () {
    const emailElement = document.getElementById('email');

    emailElement.addEventListener('click', function () {
        const email = emailElement.textContent;

        // Cria um elemento de texto temporário
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);

        // Seleciona o texto no campo de entrada temporária
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

        // Copia o texto para a área de transferência
        document.execCommand('copy');

        // Remove o campo de entrada temporária
        document.body.removeChild(tempInput);

        // Exibe uma mensagem de sucesso (opcional)
        alert('Endereço de e-mail copiado para a área de transferência: ' + email);
    });
});