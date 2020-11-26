function toggleMenu() {
  let menu = document.getElementById('header-menu');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}