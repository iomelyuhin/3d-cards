document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
  
  const items = document.querySelectorAll('.item'); //собираем items

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    
    item.addEventListener('mousemove', startRotate)
    
    item.addEventListener('mouseleave', stopRotate)
  }
      
  function startRotate(e) { 
    let card = this.querySelector('.card-item');
    let halfWidth = card.offsetWidth/2; //получаем половину ширины карточки
    let halfHeight = card.offsetHeight/2; //получаем половину высоты карточки
    card.style.transform = 'rotateY('+ -(e.offsetX-halfWidth)/10 +'deg) rotateX('+ -(e.offsetY-halfHeight)/10 + 'deg)'; // ловим курсор и назначаем повороты
  }
  
  function stopRotate(e) { // останавливаем анимацию
    let card = this.querySelector('.card-item');
    card.style.transform = 'rotate(0)';
  }

});