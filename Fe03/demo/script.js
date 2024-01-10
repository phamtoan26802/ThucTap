let container = document.querySelector('.container');
let partner = document.getElementById('myPartner');
let amountToMove = 0;

function movePartner() {
  amountToMove -= 1;
  partner.style.transform = 'translateX(' + amountToMove + 'px)';
  
  // Nếu muốn lặp lại chuyển động
  if (amountToMove <= -partner.scrollWidth) {
    amountToMove = partner.clientWidth;
  }

  requestAnimationFrame(movePartner);
}

movePartner();