const prev = document.getElementById('arsenal__arrow-left'),
      next = document.getElementById('arsenal__arrow-right'),
      slides = document.querySelectorAll('.slider-item'),
      slidesWrapper = document.querySelectorAll('.arsenal__slide-list');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('slider-item--active');
    }
    slides[n].classList.add('slider-item--active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        activeSlide(index);
        prepareCurrentSlide(index);
    }
}
  
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
