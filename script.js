window.onload = () => {
  let currentIndex = 1;
  const slider = document.getElementById('slider');

  let slides = slider.children;

  if (slides.length === 0) return;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  slides = slider.children;

  setTimeout(() => {
    slider.style.transform = `translateX(-800px)`;
  }, 50);

  function moveSlide(direction) {
      if (isMoving) return; // 🚫 bloqueia spam de clique
      isMoving = true;

    currentIndex += direction;

    slider.style.transition = "0.6s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * 800}px)`;
  }

  window.moveSlide = moveSlide;

  slider.addEventListener('transitionend', () => {
    if (currentIndex === slides.length - 1) {
      slider.style.transition = "none";
      currentIndex = 1;
      slider.style.transform = `translateX(-${currentIndex * 800}px)`;
    }

    if (currentIndex === 0) {
      slider.style.transition = "none";
      currentIndex = slides.length - 2;
      slider.style.transform = `translateX(-${currentIndex * 800}px)`;
    }
      isMoving = false; // ✅ libera novamente
  });

  setInterval(() => {
    moveSlide(1);
  }, 5000);
};

console.log(slides.length);