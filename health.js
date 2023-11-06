function validateEmail() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const emailValidationMessage = document.getElementById('email-validation-message');

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailPattern.test(email)) {
    emailValidationMessage.textContent = 'E-mail válido. Obrigado por assinar nossa newsletter!';
    emailInput.value = '';
  } else {
    emailValidationMessage.textContent = 'Por favor, insira um e-mail válido.';
  }
}

document.getElementById("cadastrarEmail").addEventListener("click", validateEmail);