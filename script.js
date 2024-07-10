document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
  
    submitButton.addEventListener('click', () => {
      submitButton.textContent = 'Loading...';
      submitButton.classList.add('btn-loading');
      submitButton.disabled = true;
  
      setTimeout(() => {
        submitButton.textContent = 'Submit';
        submitButton.classList.remove('btn-loading');
        submitButton.disabled = false;
      }, 2000);
    });
  
    const inputField = document.querySelector('.input-field');
  
    inputField.addEventListener('focus', () => {
      inputField.classList.add('input-field-focus');
    });
  
    inputField.addEventListener('blur', () => {
      inputField.classList.remove('input-field-focus');
    });
  
    inputField.addEventListener('input', () => {
      inputField.classList.add('input-field-typing');
    });
  });
  