export default function decorate(block) {
  block.classList.add('imageinfo-s-block');
  const rows = Array.from(block.children);
  rows.forEach((row, rowIndex) => {
    const columns = Array.from(row.children);
    columns.forEach((col, colIndex) => {
        if (rowIndex === 0) {
            col.classList.add('imageinfo-s-title');
            const idText = col.textContent.trim().toLowerCase().split(/\s+/)[0].replace(/[^\w-]/g, '');
            if (idText && !block.id) {
                block.id = idText;
            }
        } else if (rowIndex === 1) {
            if (colIndex === 0) {
                col.classList.add('imageinfo-s-img');
                const img = col.querySelector('picture');
                if (img) {
                        img.classList.add("imagePicture");
                    }
                } else if (colIndex === 1) {
                    col.classList.add('imageinfo-s-text');
                    if (!col.innerHTML.trim()) {
                        col.style.display = 'none';
                    } else {
                        // Move text below the image
                        const imageCol = row.children[0];
                        imageCol.appendChild(col);
                    }
                }
            } else if (rowIndex === 2) {
                col.classList.add('imageinfo-s-button');
                const button = col.querySelector('button');
                if (button) {
                    col.appendChild(button);
                }
            }
        });
    });
}
