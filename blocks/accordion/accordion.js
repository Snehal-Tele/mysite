export default function decorate(block) {
    block.classList.add('accordion-block');
  
    const [questionTable, answerTable] = block.children;
  
    const questions = [...questionTable.querySelectorAll('tr')];
    const answers = [...answerTable.querySelectorAll('tr')];
  
    const accordionContainer = document.createElement('div');
    accordionContainer.className = 'accordion-container';
  
    questions.forEach((questionRow, index) => {
      const questionText = questionRow.textContent.trim();
      const answerRow = answers[index];
      const answerText = answerRow ? answerRow.textContent.trim() : '';
  
      const item = document.createElement('div');
      item.className = 'accordion-item';
  
      const header = document.createElement('div');
      header.className = 'accordion-header';
      header.innerHTML = `
        <span class="accordion-question">${questionText}</span>
        <span class="accordion-toggle">+</span>
      `;
  
      const content = document.createElement('div');
      content.className = 'accordion-content';
      content.textContent = answerText;
  
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.accordion-item').forEach(el => {
          el.classList.remove('open');
          el.querySelector('.accordion-toggle').textContent = '+';
        });
  
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
  
