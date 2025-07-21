export default function decorate(block) {
  block.classList.add('list-columns-block');

  const rows = Array.from(block.children);

  rows.forEach((row, rowIndex) => {
    const columns = Array.from(row.children);
    columns.forEach((col, colIndex) => {
      col.classList.add('list-column');
    });
  });
}
