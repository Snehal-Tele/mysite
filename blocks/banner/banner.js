export default function decorate(block) {
    block.classList.add('s-banner-block');
  
    const rows = Array.from(block.children);
  
    rows.forEach((row, rowIndex) => {
      const columns = Array.from(row.children);
      columns.forEach((col, colIndex) => {
        if (rowIndex === 0) {
          if (colIndex === 0) {
            col.classList.add('s-banner-title');
          } else if (colIndex === 1) {
            col.classList.add('s-banner-subtitle');
  
            // Set block ID based on the first word of this cell
            const firstWord = col.textContent.trim().split(/\s+/)[0].toLowerCase().replace(/[^\w-]/g, '');
            if (firstWord) {
              block.id = firstWord;
            }
          }
        } else if (rowIndex === 1) {
          col.classList.add('s-banner-image');
          const pic = col.querySelector('picture');
          if (pic) {
            pic.classList.add('s-banner-image');
          }
        }
      });
    });
  }
  

  