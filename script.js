//Attach event listeners for validation
document.getElementById('bankingForm').addEventListener('input', validateForm);
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', validateFieldOnBlur);
});

//Validate the entire form on every input event
function validateForm() {
    let isValid = true;

    //First Name Validation
    const firstName = document.getElementById('firstName').value.trim();
    const firstNameError = document.getElementById('firstNameError');
    if (!firstName) {
        isValid = false;
    } else {
        firstNameError.classList.add('hidden');
    }

    //Last Name Validation
    const lastName = document.getElementById('lastName').value.trim();
    const lastNameError = document.getElementById('lastNameError');
    if (!lastName) {
        isValid = false;
    } else {
        lastNameError.classList.add('hidden');
    }

    //Routing Number Validation
    const routingNumber = document.getElementById('routingNumber').value.trim();
    const routingNumberError = document.getElementById('routingNumberError');
    if (!/^\d{9}$/.test(routingNumber)) {
        isValid = false;
    } else {
        routingNumberError.classList.add('hidden');
    }

    //Confirm Routing Number Validation
    const confirmRoutingNumber = document.getElementById('confirmRoutingNumber').value.trim();
    const confirmRoutingNumberError = document.getElementById('confirmRoutingNumberError');
    if (routingNumber !== confirmRoutingNumber) {
        isValid = false;
    } else {
        confirmRoutingNumberError.classList.add('hidden');
    }

    //Account Number Validation
    const accountNumber = document.getElementById('accountNumber').value.trim();
    const accountError = document.getElementById('accountError');
    if (!/^\d+$/.test(accountNumber)) {
        isValid = false;
    } else {
        accountError.classList.add('hidden');
    }

    //Confirm Account Number Validation
    const confirmAccountNumber = document.getElementById('confirmAccountNumber').value.trim();
    const confirmAccountNumberError = document.getElementById('confirmAccountNumberError');
    if (accountNumber !== confirmAccountNumber) {
        isValid = false;
    } else {
        confirmAccountNumberError.classList.add('hidden');
    }

    //Enable or disable the submit button based on form validity
    document.getElementById('submitButton').disabled = !isValid;
}

//Validate Individual Fields on blur
function validateFieldOnBlur(event) {
    const field = event.target;
    const errorElement = document.getElementById(field.id + 'Error');
    const value = field.value.trim();

    if (field.id === 'routingNumber' && !/^\d{9}$/.test(value)) {
        errorElement.textContent = "Routing number must be 9 digits.";
        errorElement.classList.remove('hidden');
    } else if (field.id === 'confirmRoutingNumber' && value !== document.getElementById('routingNumber').value.trim()) {
        errorElement.textContent = "Routing numbers must match.";
        errorElement.classList.remove('hidden');
    } else if (field.id === 'accountNumber' && !/^\d+$/.test(value)) {
        errorElement.textContent = "Account number must contain only numbers.";
        errorElement.classList.remove('hidden');
    } else if (field.id === 'confirmAccountNumber' && value !== document.getElementById('accountNumber').value.trim()) {
        errorElement.textContent = "Account numbers must match.";
        errorElement.classList.remove('hidden');
    } else if (!value) {
        errorElement.textContent = `${field.placeholder} is required.`;
        errorElement.classList.remove('hidden');
    } else {
        errorElement.classList.add('hidden');
    }
}

//Toggle Visibility for routing and account numbers
document.getElementById('toggleRoutingVisibility').addEventListener('click', () => toggleVisibility('routingNumber'));
document.getElementById('toggleAccountVisibility').addEventListener('click', () => toggleVisibility('accountNumber'));

function toggleVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === 'password' ? 'text' : 'password';
}