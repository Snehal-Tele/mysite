export default function decorate(block) {
    block.classList.add('lower-nav');
  
    const rows = Array.from(block.children);
  
    rows.forEach(row => {
      const col = row.querySelector('div');
      if (!col) return;
  
      const link = col.querySelector('a');
      const button = document.createElement('button');
      button.className = 'lower-nav-button';
  
      if (link) {
        button.textContent = link.textContent.trim();
        button.onclick = () => {
          const href = link.getAttribute('href');
          if (href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = href;
          }
        };
      } else {
        button.textContent = col.textContent.trim();
      }
  
      block.appendChild(button);
    });
  
    // Remove original table structure
    rows.forEach(row => row.remove());
  }
  