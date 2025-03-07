let images = ['1.jpg', '2.jpg', '3.jpg'],
    slider = document.querySelector('#header__slider'),
    img = slider.querySelector('img'),
    i = 1;
    
    img.src = '../img/' + images[0];
    window.setInterval(function (){
      img.src = '../img/' + images[i];
      i++;
      if (i == images.length){
        i = 0;
      }
    }, 1700);
