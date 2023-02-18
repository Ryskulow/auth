function createLoginForm() {
    const signIn = document.createElement('div');
    signIn.classList.add('sign_in');

    const loginTextName = document.createElement('h2');
    loginTextName.classList.add('login_text_name');
    loginTextName.textContent = 'Log In';
    signIn.appendChild(loginTextName);

    const loginInput = document.createElement('input');
    loginInput.classList.add('login');
    loginInput.placeholder = 'Username';
    loginInput.type = 'text';
    signIn.appendChild(loginInput);

    const passwordInput = document.createElement('input');
    passwordInput.classList.add('password');
    passwordInput.placeholder = 'Password';
    passwordInput.type = 'password';
    signIn.appendChild(passwordInput);

    const loginButton = document.createElement('button');
    loginButton.classList.add('button_login');
    loginButton.type = 'submit';
    loginButton.textContent = 'Войти';
    signIn.appendChild(loginButton);

    const noAccountButton = document.createElement('button');
    noAccountButton.id = ('button_no_account');
    noAccountButton.type = 'submit';
    noAccountButton.textContent = 'Нет аккаунта? Регистрация';
    signIn.appendChild(noAccountButton);
    document.body.appendChild(signIn);
    noAccountButton.addEventListener("click", () => {
        signIn.remove();
        SignUpForm()
    })
}

function SignUpForm() {
    const signUp = document.createElement('div');
    signUp.classList.add('sign_up');

    const registerText = document.createElement('h2');
    registerText.classList.add('register_text_name');
    registerText.textContent = 'Sign up';
    signUp.appendChild(registerText);

    const email = document.createElement('input');
    email.classList.add('email');
    email.placeholder = 'Email';
    email.type = 'text';
    email.pattern = "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(\\.[a-zA-Z]+)+";
    signUp.appendChild(email);

    email.addEventListener('input', function () {
        if (email.validity.patternMismatch || email.value === '') {
            email.style.borderBottom = '2px solid red';
        } else {
            email.style.borderBottom = '2px solid green';
        }
    });

    const registerLoginInput = document.createElement('input');
    registerLoginInput.classList.add('register_login');
    registerLoginInput.placeholder = 'Username';
    registerLoginInput.type = 'text';
    registerLoginInput.pattern = "^[a-zA-Z][a-zA-Z0-9_-]{2,14}$";
    signUp.appendChild(registerLoginInput);

    registerLoginInput.addEventListener('input', function () {
        if (registerLoginInput.validity.patternMismatch || registerLoginInput.value === '') {
            registerLoginInput.style.borderBottom = '2px solid red';
        } else {
            registerLoginInput.style.borderBottom = '2px solid green';
        }
    });

    const name = document.createElement('input');
    name.classList.add('name');
    name.placeholder = 'First name';
    name.type = 'text';
    name.pattern = "^[a-zA-Zа-яА-Я]+(-[a-zA-Zа-яА-Я]+)*$"
    signUp.appendChild(name);

    name.addEventListener('input', function () {
        if (name.validity.patternMismatch || name.value === '') {
            name.style.borderBottom = '2px solid red';
        } else {
            name.style.borderBottom = '2px solid green';
        }
    });

    const lastName = document.createElement('input');
    lastName.classList.add('lastName');
    lastName.placeholder = 'Last name';
    lastName.type = 'text';
    lastName.pattern = "^[a-zA-Zа-яА-Я]+(-[a-zA-Zа-яА-Я]+)*$"
    signUp.appendChild(lastName);

    lastName.addEventListener('input', function () {
        if (lastName.validity.patternMismatch || lastName.value === '') {
            lastName.style.borderBottom = '2px solid red';
        } else {
            lastName.style.borderBottom = '2px solid green';
        }
    });

    const phone = document.createElement('input');
    phone.classList.add('phone');
    phone.placeholder = 'Phone';
    phone.type = 'text';
    phone.pattern = '^\\+?\\d{8,15}$'
    signUp.appendChild(phone);

    phone.addEventListener('input', function () {
        if (phone.validity.patternMismatch || lastName.value === '') {
            phone.style.borderBottom = '2px solid red';
        } else {
            phone.style.borderBottom = '2px solid green';
        }
    });

    const registerPassword = document.createElement('input');
    registerPassword.classList.add('registerPassword');
    registerPassword.placeholder = 'Password';
    registerPassword.type = 'password';
    registerPassword.pattern = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\\]{};':\"\\\\|,.<>/?])[ -~]{8,30}"
    signUp.appendChild(registerPassword);

    registerPassword.addEventListener('input', function () {
        if (registerPassword.validity.patternMismatch || registerPassword.value === '') {
            registerPassword.style.borderBottom = '2px solid red';
        } else {
            registerPassword.style.borderBottom = '2px solid green';
        }
    });


    const repeatPassword = document.createElement('input');
    repeatPassword.classList.add('repeatPassword');
    repeatPassword.placeholder = 'Confirm password';
    repeatPassword.type = 'password';
    signUp.appendChild(repeatPassword);

    repeatPassword.addEventListener('input', function () {
        if (repeatPassword.value !== registerPassword.value || repeatPassword.value === '') {
            repeatPassword.style.borderBottom = '2px solid red';
        } else {
            repeatPassword.style.borderBottom = '2px solid green';
        }
    });

    const signUpButton = document.createElement('button');
    signUpButton.classList.add('button_login');
    signUpButton.type = 'submit';
    signUpButton.textContent = 'Sign Up';
    signUp.appendChild(signUpButton);

    signUpButton.addEventListener('click', function () {
        const inputList = [email, name, registerLoginInput, lastName, phone, registerPassword, repeatPassword];


        const validInputs = inputList.filter((input) => !input.validity.patternMismatch && input.value !== '');
        if (validInputs.length === inputList.length) {
            const inputData = validInputs.map((input) => input.value);
            console.log(inputData);
        }
    });

    const haveAnAccount = document.createElement('button');
    haveAnAccount.id = ('haveAnAccount');
    haveAnAccount.type = 'submit';
    haveAnAccount.textContent = 'Есть аккаунт, войти';
    signUp.appendChild(haveAnAccount);
    document.body.appendChild(signUp);

    haveAnAccount.addEventListener("click", () => {
        signUp.remove();
        createLoginForm()
    });

}


createLoginForm();
