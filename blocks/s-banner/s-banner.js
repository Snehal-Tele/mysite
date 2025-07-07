export default function decorate(block) {
  block.classList.add('s-banner-block');

  const rows = [...block.children];
  const imageRow = rows[0];
  const textRow = rows[1];

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('s-banner-image');

  const carousel = document.createElement('div');
  carousel.classList.add('s-banner-carousel');

  const images = [...imageRow.children].map(col => col.querySelector('picture')).filter(Boolean);
  images.forEach((pic, index) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    if (index === 0) slide.classList.add('active');
    slide.appendChild(pic.cloneNode(true));
    carousel.appendChild(slide);
  });

  imageWrapper.appendChild(carousel);

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('s-banner-text');

  const textCol = textRow?.children?.[0];
  if (textCol) {
    const lines = textCol.textContent.trim().split('\n').map(line => line.trim()).filter(Boolean);

    if (lines[0]) {
      const title = document.createElement('h2');
      title.className = 's-banner-title';
      title.textContent = lines[0];
      textWrapper.appendChild(title);
    }

    if (lines[1]) {
      const description = document.createElement('p');
      description.className = 's-banner-description';
      description.textContent = lines[1];
      textWrapper.appendChild(description);
    }
  }

  block.innerHTML = '';
  block.appendChild(textWrapper);
  block.appendChild(imageWrapper);

  // Carousel rotation logic
  let currentIndex = 0;
  const slides = carousel.querySelectorAll('.carousel-slide');

  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 5000);
}
