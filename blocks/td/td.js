export default function decorate(block) {
    block.classList.add('table-block');
  
    const rows = Array.from(block.children);
  
    rows.forEach((row, rowIndex) => {
      row.classList.add('table-row');
      const columns = Array.from(row.children);
      columns.forEach((col, colIndex) => {
        col.classList.add('table-cell');
        if (rowIndex === 0) {
          col.classList.add('table-header');
        }
      });
    });
  }
  
