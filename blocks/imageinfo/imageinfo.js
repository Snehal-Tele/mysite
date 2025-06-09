export default function decorate(block) {
    block.classList.add('imageinfo-block');
   
    const rows = Array.from(block.children);
   
    rows.forEach((row, rowIndex) => {
      const cols = Array.from(row.children);
      if (rowIndex === 0) {
        cols[0].classList.add('imageinfo-title');
      } else if (rowIndex === 1) {
        cols[0].classList.add('imageinfo-image');
        cols[1].classList.add('imageinfo-text');
   
        const img = cols[0].querySelector('img');
        if (img) img.classList.add('imageinfo-img');
   
        const link = cols[1].querySelector('a');
        if (link) link.classList.add('imageinfo-button');
      }
    });
  }