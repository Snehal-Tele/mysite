export default function decorate(block) {
    block.classList.add('accordion-block');
  
    const tables = block.querySelectorAll('table');
    if (tables.length < 2) return;
  
    const questionRows = [...tables[0].querySelectorAll('tbody tr')];
    const answerRows = [...tables[1].querySelectorAll('tbody tr')];
  
    const accordionContainer = document.createElement('div');
    accordionContainer.className = 'accordion-container';
  
    questionRows.forEach((qRow, index) => {
      const questionCell = qRow.querySelector('td');
      const answerCell = answerRows[index]?.querySelector('td');
  
      if (!questionCell || !answerCell) return;
  
      const item = document.createElement('div');
      item.className = 'accordion-item';
  
      const header = document.createElement('div');
      header.className = 'accordion-header';
      header.innerHTML = `
        <span class="accordion-question">${questionCell.innerHTML}</span>
        <span class="accordion-toggle">+</span>
      `;
  
      const content = document.createElement('div');
      content.className = 'accordion-content';
      content.innerHTML = answerCell.innerHTML;
  
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
  
        // Close all items
        document.querySelectorAll('.accordion-item').forEach(el => {
          el.classList.remove('open');
          el.querySelector('.accordion-toggle').textContent = '+';
        });
  
        // Open clicked item
        if (!isOpen) {
          item.classList.add('open');
          header.querySelector('.accordion-toggle').textContent = '−';
        }
      });
  
      item.appendChild(header);
      item.appendChild(content);
      accordionContainer.appendChild(item);
    });
  
    block.innerHTML = '';
    block.appendChild(accordionContainer);
  }
  