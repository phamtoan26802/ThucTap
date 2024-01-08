let navbar = document.getElementById('myNavbar');
let amountToMove = 0;

function moveNavbar() {
  amountToMove -= 1;
  navbar.style.transform = 'translateX(' + amountToMove + 'px)';
  
  // Nếu muốn lặp lại chuyển động
  if (amountToMove <= -navbar.scrollWidth) {
    amountToMove = navbar.clientWidth;
  }

  requestAnimationFrame(moveNavbar);
}

moveNavbar();