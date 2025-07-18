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
  




  // export default function decorate(block) {
  //   const container = block.closest('.tab-two-table-container');
  //   const allBlocks = container.querySelectorAll('.tab-two-table.block');
   
  //   if (allBlocks.length !== 2) return;
   
  //   const [firstTable, secondTable] = allBlocks;
   
  //   if (block !== firstTable) return;
   
  //   const tabContainer = document.createElement('div');
  //   tabContainer.id = 'tab-two-table-buttons';
  //   tabContainer.className = 'tab-two-table-buttons';
   
  //   const contentContainer = document.createElement('div');
  //   contentContainer.id = 'tab-two-table-content';
  //   contentContainer.className = 'tab-two-table-content';
   
  //   firstTable.replaceWith(tabContainer);
  //   secondTable.replaceWith(contentContainer);
   
  //   const buttonRows = [...firstTable.children];
  //   const contentRows = [...secondTable.children];
   
  //   buttonRows.forEach((row, index) => {
  //     const title = row.querySelector('p');
  //     const content = contentRows[index];
  //     if (!title || !content) return;
   
  //     [...content.children].forEach(col => {
  //       const hasImage = col.querySelector('img, picture');
  //       col.classList.add(hasImage ? 'eds-image' : 'eds-content');
  //     });
   
  //     content.classList.add('eds-layout');
     
  //     const btn = document.createElement('button');
  //     btn.className = 'tab-two-button';
  //     btn.textContent = title.textContent.trim();
  //     btn.tabContent = content;
   
  //     tabContainer.appendChild(btn);
  //   });
   
  //   tabContainer.addEventListener('click', (e) => {
  //     if (!e.target.matches('.tab-two-button')) return;
   
  //     const content = e.target.tabContent;
  //     contentContainer.innerHTML = '';
  //     contentContainer.appendChild(content);
     
   
  //     tabContainer.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  //     e.target.classList.add('active');
  //   });
   
  //   // Show first content by default
  //   const firstButton = tabContainer.querySelector('.tab-two-button');
  //   if (firstButton) {
  //     firstButton.classList.add('active');
  //     contentContainer.appendChild(firstButton.tabContent);
  //   }
   
   
   
  // }
   
   