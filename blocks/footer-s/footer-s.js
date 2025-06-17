export default function decorate(block) {
    block.classList.add('custom-footer');
   
    const rows = Array.from(block.children);
   
    rows.forEach((row, rowIndex) => {
      const cols = Array.from(row.children);
      cols.forEach((col) => {
        col.classList.add(`footer-row-${rowIndex}`);
      });
    });
   
    // Handle link in the last row (book now)
    const lastRow = rows[rows.length - 1];
    const lastCol = lastRow?.querySelector('td');
    if (lastCol?.textContent.includes('Book Now')) {
      const link = document.createElement('a');
  link.href = "https://www.wix.com/demone2/wedding-planner/services";
      link.textContent = "Book Now";
      link.classList.add('footer-book-now');
      lastCol.textContent = '';
      lastCol.appendChild(link);
    }
  }
