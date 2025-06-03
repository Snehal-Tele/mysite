export default function decorate(block) {
    block.classList.add('lower-nav');
   
    const rows = Array.from(block.children);
   
    rows.forEach(row => {
      const col = row.querySelector('div');
      if (!col) return;
   
      const button = document.createElement('button');
      button.className = 'lower-nav-button';
      button.textContent = col.textContent.trim();
   
      // Optional: Add link functionality based on text
      const anchor = button.textContent.toLowerCase().replace(/\s+/g, '');
      button.onclick = () => {
        const section = document.getElementById(anchor);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      };
   
      block.appendChild(button);
    });
   
    // Remove original table structure
    rows.forEach(row => row.remove());
  }
