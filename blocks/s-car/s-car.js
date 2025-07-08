export default function decorate(block) {
    block.classList.add('image-carousel-block');
  
    const rows = Array.from(block.children);
    const items = rows.map(row => {
      const cols = row.children;
      if (cols.length < 2) return null;
  
      const img = cols[0].querySelector('img');
      const text = cols[1].querySelector('p')?.textContent || '';
  
      if (!img) return null;
  
      const wrapper = document.createElement('div');
      wrapper.className = 'carousel-item';
  
      const clonedImg = img.cloneNode(true);
      const caption = document.createElement('div');
      caption.className = 'carousel-caption';
      caption.textContent = text;
  
      wrapper.appendChild(clonedImg);
      wrapper.appendChild(caption);
      return wrapper;
    }).filter(Boolean);
  
    const track = document.createElement('div');
    track.className = 'image-carousel-track';
  
    items.forEach(item => track.appendChild(item));
  
    block.innerHTML = '';
    block.appendChild(track);
  
    let currentIndex = 0;
    const allItems = track.querySelectorAll('.carousel-item');
  
    function updateActive(index) {
      allItems.forEach(item => item.classList.remove('active'));
      const activeItem = allItems[index];
      activeItem.classList.add('active');
  
      const blockRect = block.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const activeRect = activeItem.getBoundingClientRect();
  
      const offset = (blockRect.width / 2) - (activeRect.left + activeRect.width / 2 - trackRect.left);
      track.style.transform = `translateX(${offset}px)`;
    }
  
    function rotateCarousel(direction) {
      currentIndex = (currentIndex + direction + allItems.length) % allItems.length;
      updateActive(currentIndex);
    }
  
    allItems.forEach((item, i) => {
      item.addEventListener('click', () => {
        currentIndex = i;
        updateActive(currentIndex);
      });
    });
  
    setInterval(() => rotateCarousel(1), 5000);
  
    updateActive(currentIndex);
  }
  