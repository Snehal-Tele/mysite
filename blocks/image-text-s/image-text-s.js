export default function decorate(block) {
    block.classList.add('image-text-block');
  
    const row = document.createElement('div');
    row.classList.add('image-text-row');
  
    const [content, image] = block.children[0].children;
  
    content.classList.add('image-text-content');
    image.classList.add('image-text-image');
  
    const picture = image.querySelector('picture');
    if (picture) picture.classList.add('image-text-picture');
  
    // Extract first paragraph as heading
    const firstParagraph = content.querySelector('p');
    if (firstParagraph) {
      const heading = document.createElement('h2');
      heading.className = 'image-text-heading';
      heading.textContent = firstParagraph.textContent;
      content.insertBefore(heading, firstParagraph);
      firstParagraph.remove();
    }
  
    // Append image first, then content (image on left, content on right)
    row.appendChild(image);
    row.appendChild(content);
  
    // Clear and append the new row
    block.innerHTML = '';
    block.appendChild(row);
  }
  