export default function decorate(block) {
    block.classList.add('imagebanner-block');
  
    const rows = Array.from(block.children);
  
    rows.forEach((row, rowIndex) => {
      const cols = Array.from(row.children);
  
      if (rowIndex === 0) {
        // First row: Title and Subtitle
        cols[0].classList.add('imagebanner-title');
        if (cols[1]) cols[1].classList.add('imagebanner-subtitle');
        row.style.display = 'none'; // Hide original row
      } else if (rowIndex === 1) {
        // Second row: Image and optional text/button
        cols[0].classList.add('imagebanner-image');
        const img = cols[0].querySelector('img');
        if (img) img.classList.add('imagebanner-img');
  
        if (cols[1]) {
          cols[1].classList.add('imagebanner-text');
          const link = cols[1].querySelector('a');
          if (link) link.classList.add('imagebanner-button');
        }
      }
    });
  
    // Wrap title and subtitle in a container for centering
    const title = block.querySelector('.imagebanner-title');
    const subtitle = block.querySelector('.imagebanner-subtitle');
    const overlay = document.createElement('div');
    overlay.className = 'imagebanner-overlay';
  
    if (title) overlay.appendChild(title);
    if (subtitle) overlay.appendChild(subtitle);
  
    block.appendChild(overlay);
  }
  