const slides = [
    { icon: 'fa-google', text: 'Entre com sua conta Google', color: '#DB4437' },
    { icon: 'fa-instagram', text: 'Siga-nos no Instagram', color: '#E1306C' },
    { icon: 'fa-envelope', text: 'Use seu e-mail corporativo', color: '#1a50db' }
];

let currentSlide = 0;
const slideIcon = document.getElementById('slide-icon');
const slideText = document.getElementById('slide-text');

function moverSlideshow() {
    if (slideIcon && slideText) {
        currentSlide = (currentSlide + 1) % slides.length;
        const data = slides[currentSlide];
        slideIcon.className = `fab ${data.icon}`;
        slideIcon.style.color = data.color;
        slideText.innerText = data.text;
    }
}

if (slideIcon) {
    setInterval(moverSlideshow, 3000);
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === "admin@jovi.com" && password === "12345678") {
            alert("Login realizado com sucesso!");
            window.location.href = "dashboard.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
}

const togglePassword = document.getElementById('togglePassword');
if (togglePassword) {
    togglePassword.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
}


const cadastroForm = document.getElementById('cadastroForm');
if (cadastroForm) {
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        alert("Cadastro realizado com sucesso! Bem-vindo.");
        window.location.href = "dashboard.html";
    });
}
