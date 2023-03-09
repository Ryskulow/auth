import { localAnchor } from "./link";

const login = {
    async render() {
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

        loginButton.addEventListener("click", () => {
            const logPass = [];
            if (loginInput.value && passwordInput.value !== '') {
                logPass.push(loginInput.value);
                logPass.push(passwordInput.value);
                console.log(logPass)
            }
        })

        const noAccountButton = localAnchor("/register");
        noAccountButton.id = ('button_no_account');
        noAccountButton.textContent = 'Нет аккаунта? Регистрация';
        signIn.appendChild(noAccountButton);
        return [signIn];
    },
};

export default login;
