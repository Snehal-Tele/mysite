export default function decorate(block) {
  block.classList.add('eds-testimonials-block');

  const rows = Array.from(block.querySelectorAll('tr'));

  rows.forEach((row) => {
    const columns = Array.from(row.querySelectorAll('td'));
    if (columns.length === 2) {
      const imageCol = columns[0];
      const textCol = columns[1];

      const img = imageCol.querySelector('img');
      const lines = textCol.innerText.trim().split('\n');

      if (img && lines.length >= 3) {
        const card = document.createElement('div');
        card.classList.add('eds-testimonial-card');

        img.classList.add('eds-img');

        card.innerHTML = `
          <img src="${img.src}" alt="${img.alt}" class="eds-img">
          <p class="eds-message">"${lines[0]}"</p>
          <p class="eds-name">${lines[1]}</p>
          <p class="eds-role">${lines[2]}</p>
        `;

        block.appendChild(card);
      }
    }
  });

  // Remove original table
  block.querySelector('table')?.remove();
}
