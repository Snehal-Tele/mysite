export default function decorate(block) {
    block.classList.add('image-text-block');
  
    const table = block.querySelector('table');
    if (!table) return;
  
    const rows = table.rows;
  
    if (rows.length >= 1) rows[0].cells[0].classList.add('image-text-title');
    if (rows.length >= 2) {
      rows[1].cells[0].classList.add('image-text-content');
      rows[1].cells[1].classList.add('image-text-image');
  
      const picture = rows[1].cells[1].querySelector('picture');
      if (picture) picture.classList.add('image-text-picture');
    }
    if (rows.length >= 3) rows[2].cells[0].classList.add('image-text-link');
  }
  