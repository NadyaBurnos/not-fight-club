document.addEventListener("DOMContentLoaded", function () {

// Отображение имени на другой странице
const nameSpan = document.getElementById("nameVal");
if (nameSpan) {
  const savedValue = localStorage.getItem("userName");
  nameSpan.textContent = savedValue ? savedValue : "Гость";
}

const modal = document.getElementById("modal");
  const openBtn = document.querySelector(".pencil");
  const closeBtn = document.querySelector(".closeButton");
  const buttons = document.querySelectorAll(".buttonChange");
  const imgPerson = document.getElementById("imgPerson");

  // Открыть модалку
  if (openBtn) {
    openBtn.addEventListener("click", function () {
      modal.style.display = "block";
      console.log('hello');
    });
  }


  // Закрыть модалку по крестику
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Закрыть модалку по клику вне содержимого
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };


  buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-src");
    imgPerson.src = src;
    modal.style.display = "none";
  });
});
});