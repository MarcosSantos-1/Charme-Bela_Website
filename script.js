  AOS.init();
  
/*
  function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

function closeMenu() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu";
}

// Adiciona um event listener a todos os itens de menu para fechar o menu ao clicar
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', closeMenu);
});

*/
  const menu = document.querySelector('.menu');
  const NavMenu = document.querySelector('.nav-menu');
  
  menu.addEventListener('click',() =>{
      menu.classList.toggle('ativo');
      NavMenu.classList.toggle('ativo');
  })

  function closeMenu() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu";

}
// Adiciona um event listener a todos os itens de menu para fechar o menu ao clicar
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', closeMenu);
});
  
function sended(){
  alert("E-mail enviado com sucesso!")
}