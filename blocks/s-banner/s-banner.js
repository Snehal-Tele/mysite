export default function decorate(block) {
    block.classList.add('s-banner-block');
  
    const rows = Array.from(block.children);
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('s-banner-content');
  
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('s-banner-image');
  
    rows.forEach((row, rowIndex) => {
      const columns = Array.from(row.children);
      columns.forEach((col, colIndex) => {
        if (rowIndex === 0) {
          if (colIndex === 0) {
            col.classList.add('s-banner-title');
            contentWrapper.appendChild(col);
          } else if (colIndex === 1) {
            col.classList.add('s-banner-subtitle');
            contentWrapper.appendChild(col);
  
            const firstWord = col.textContent.trim().split(/\s+/)[0].toLowerCase().replace(/[^\w-]/g, '');
            if (firstWord) {
              block.id = firstWord;
            }
          }
        } else if (rowIndex === 1) {
          const pic = col.querySelector('picture');
          if (pic) {
            pic.classList.add('s-banner-image');
            imageWrapper.appendChild(pic);
          }
        }
      });
    });
  
    block.innerHTML = '';
    block.appendChild(contentWrapper);
    block.appendChild(imageWrapper);
  }
  
