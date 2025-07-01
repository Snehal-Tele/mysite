export default function decorate(block) {
    block.classList.add('s-banner-block');
  
    const rows = [...block.children];
    const imageRow = rows[0];
    const textRow = rows[1];
  
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('s-banner-image');
  
    const textWrapper = document.createElement('div');
    textWrapper.classList.add('s-banner-text');
  
    // Extract image from first row
    const imageCol = imageRow.querySelector('picture');
    if (imageCol) {
      imageWrapper.appendChild(imageCol);
    }
  
    // Extract text content from second row (single cell with two lines)
    const textCol = textRow?.children?.[0];
    if (textCol) {
      const lines = textCol.textContent.trim().split('\n').map(line => line.trim()).filter(Boolean);
  
      if (lines[0]) {
        const title = document.createElement('h2');
        title.className = 's-banner-title';
        title.textContent = lines[0];
        textWrapper.appendChild(title);
      }
  
      if (lines[1]) {
        const description = document.createElement('p');
        description.className = 's-banner-description';
        description.textContent = lines[1];
        textWrapper.appendChild(description);
      }
    }
  
    // Clear original content and append new layout
    block.innerHTML = '';
    block.appendChild(textWrapper);
    block.appendChild(imageWrapper);
  }
  