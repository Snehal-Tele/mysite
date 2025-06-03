export default function decorate(block) {
    block.classList.add('image-carousel-block');
  
    const images = Array.from(block.querySelectorAll('picture')).map(pic => {
      const img = pic.querySelector('img');
      return img ? img.cloneNode(true) : null;
    }).filter(Boolean);
  
    const track = document.createElement('div');
    track.className = 'image-carousel-track';
  
    images.forEach((img, index) => {
      if (index === 1) img.classList.add('active'); // Set second image as default center
      track.appendChild(img);
    });
  
    block.innerHTML = '';
    block.appendChild(track);
  
    function updateActive(index) {
      const all = track.querySelectorAll('img');
      all.forEach(img => img.classList.remove('active'));
      all[index].classList.add('active');
  
      const offset = index * -120 + 120; // Adjust scroll offset
      track.style.transform = `translateX(${offset}px)`;
    }
  
    track.querySelectorAll('img').forEach((img, i) => {
      img.addEventListener('click', () => updateActive(i));
    });
  }
  