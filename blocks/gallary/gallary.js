export default function decorate(block) {
    block.classList.add('image-carousel-block');
  
    const images = Array.from(block.querySelectorAll('picture')).map(pic => {
      const img = pic.querySelector('img');
      return img ? img.cloneNode(true) : null;
    }).filter(Boolean);
  
    const track = document.createElement('div');
    track.className = 'image-carousel-track';
  
    images.forEach((img, index) => {
      if (index === 1) img.classList.add('active'); // Default center
      track.appendChild(img);
    });
  
    block.innerHTML = '';
    block.appendChild(track);
  
    function updateActive(index) {
      const all = track.querySelectorAll('img');
      all.forEach(img => img.classList.remove('active'));
      const activeImg = all[index];
      activeImg.classList.add('active');
  
      // Center the active image
      const blockRect = block.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const activeRect = activeImg.getBoundingClientRect();
  
      const offset = (blockRect.width / 2) - (activeRect.left + activeRect.width / 2 - trackRect.left);
      track.style.transform = `translateX(${offset}px)`;
    }
  
    track.querySelectorAll('img').forEach((img, i) => {
      img.addEventListener('click', () => updateActive(i));
    });
  
    // Initial centering
    updateActive(1);
  }
  