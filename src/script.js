document.addEventListener("DOMContentLoaded", function () {
  const saveNameBtn = document.getElementById("saveName");
if (saveNameBtn) {
  saveNameBtn.addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    if (nameInput) {
      const name = nameInput.value;
      localStorage.setItem("userName", name);
      window.location.href = "home.html"; // страница, куда переходим
      console.log(name);
    }
  });
}

// Отображение имени на другой странице
const nameSpan = document.getElementById("nameVal");
if (nameSpan) {
  const savedValue = localStorage.getItem("userName");
  nameSpan.textContent = savedValue ? savedValue : "Гость";
}

  const runGameBtn = document.getElementById("runGame");
  if (runGameBtn) {
    runGameBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "fight.html";
    });
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

