// Кнопка тест-драйва
function showAlert() {
   alert("Вы записались на тест-драйв BMW!");
}

// Кнопка смены темы
const themeBtn = document.getElementById('themeToggle');

themeBtn.onclick = function () {

   document.body.classList.toggle('dark-theme');

   if (document.body.classList.contains('dark-theme')) {
       themeBtn.innerText = "Светлая тема";
   } else {
       themeBtn.innerText = "Тёмная тема";
   }
};

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

   anchor.addEventListener('click', function (e) {

       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });

   });

});
