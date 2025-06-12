export default function decorate(block) {
    block.classList.add('image-text-block');
   
    const rows = Array.from(block.children);
   
    rows.forEach((row, rowIndex) => {
      const cols = Array.from(row.children);
   
      if (rowIndex === 0) {
        cols[0].classList.add('image-text-title');
      } else if (rowIndex === 1) {
        cols[0].classList.add('image-text-content');
        cols[1].classList.add('image-text-image');
   
        const img = cols[1].querySelector('picture');
        if (img) img.classList.add('image-text-picture');
      }
    });
  }
