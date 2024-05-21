  AOS.init();

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


document.addEventListener('DOMContentLoaded', function() {
  const viewer = document.getElementById('viewer');
  const viewerImg = document.getElementById('viewer-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const images = document.querySelectorAll('.grid-item');
  let currentIndex = 0;

  function showImage(index) {
      viewerImg.src = images[index].src;
  }
  images.forEach((item, index) => {
      item.addEventListener('click', () => {
          currentIndex = index;
          viewer.style.display = 'flex';
          showImage(currentIndex);
      });
  });
  closeBtn.addEventListener('click', () => {
      viewer.style.display = 'none';
  });
  viewer.addEventListener('click', (e) => {
      if (e.target === viewer) {
          viewer.style.display = 'none';
      }
  });
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
  });
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  });
});