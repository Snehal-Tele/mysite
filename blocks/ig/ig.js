export default function decorate(block) {
    block.classList.add('imagegrid');
   
    [...block.children].forEach((row) => {
      const [imgcell, textcell] = row.children;
   
      const img = imgcell.querySelector('img');
      const h3 = textcell.querySelector('h3');
      const p = textcell.querySelector('p');
   
      const container = document.createElement('div');
      container.className = 'image-container';
   
      if (img) {
  container.style.backgroundImage = `url('${img.src}')`;
      }
   
      const textOverlay = document.createElement('div');
      textOverlay.className = 'text-overlay';
   
      if (h3) textOverlay.appendChild(h3);
      if (p) textOverlay.appendChild(p);
   
      container.appendChild(textOverlay);
      block.appendChild(container);
   
      row.remove(); // Remove original row
    });
  }