const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("ul");

// Função para abrir/fechar o menu
function toggleMenu() {
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");
}

// Adiciona um evento de clique ao ícone do menu para abrir/fechar o menu
menuIcon.addEventListener('click', toggleMenu);

// Adiciona um evento de clique aos itens de navegação para fechar o menu após a seleção
const itensDeNavegacao = document.querySelectorAll("ul li a");
itensDeNavegacao.forEach(item => {
    item.addEventListener('click', () => {
        // Fecha o menu após a seleção
        toggleMenu();
    });
});
 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("box");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 slides[slideIndex-1].style.display = "block";
}


document.querySelector(".prev").addEventListener("click", function() {
    plusSlides(-1);
   });
   
   document.querySelector(".next").addEventListener("click", function() {
    plusSlides(1);
   });



   class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        event.preventDefault();
  
        // Verifica se todos os campos estão preenchidos
        const fields = this.form.querySelectorAll("[name]");
        for (const field of fields) {
          if (!field.value) {
            alert("Por favor, preencha todos os campos do formulário.");
            return; // Impede o envio se algum campo estiver vazio
          }
        }
  
        this.onSubmission(event);
  
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
  
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }

    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();



  // Função para rolar para o topo da página
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores mais antigos
  document.documentElement.scrollTop = 0; // Para navegadores modernos
}

// Adicionar um ouvinte de evento para mostrar/ocultar o botão com base no scroll
window.addEventListener('scroll', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});


 